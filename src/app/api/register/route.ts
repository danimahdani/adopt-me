import prisma from "@/libs/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: passwordHash,
        },
    });

    return Response.json({
        status: 200,
        message: "Register Successfuly",
        data: user,
    });
}
