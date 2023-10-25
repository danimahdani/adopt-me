import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";
import { User } from "next-auth";

declare module "next-auth" {
    export interface User {
        id: number;
        email: string;
        name: string;
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (
                    !user ||
                    !(await compare(credentials.password, user.password))
                ) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                };
            },
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            // console.log("JWT Callback", { token, user });
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                };
            }
            return token;
        },
        session: ({ session, token }) => {
            // console.log("Session Callback", { session, token });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                },
            };
        },
    },
};
