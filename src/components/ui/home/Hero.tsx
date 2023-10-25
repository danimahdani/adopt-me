import React from "react";
import Button from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 ">
                <div className="flex flex-col gap-y-14 justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-primary">
                        Let’s Choose and{" "}
                        <Image
                            src="./pet-logo.svg"
                            alt="Pet Logo"
                            width={40}
                            height={40}
                            className="inline-block"
                        />
                        <br />
                        Adopt your new Pet{" "}
                    </h1>
                    <p className="text-xl text-secondary leading-normal">
                        Adopt a pet, give them the best treatment,{" "}
                        <br className="hidden lg:block" /> and you will feel
                        really happy of friendship{" "}
                        <br className="hidden lg:block" />
                        with your pet.
                    </p>
                    <div className="flex gap-x-4">
                        <Button
                            title="Adopt me"
                            href="#"
                            className="bg-primary text-white px-4 py-2 lg:px-9 rounded-md lg:py-3 text-base lg:text-xl outline-none"
                        />
                        <Button
                            title="Donate for Food"
                            href="#"
                            className="text-primary px-4 py-2 lg:px-9 rounded-sm lg:py-3 text-base lg:text-xl outline-none"
                        />
                    </div>
                    <div className="">
                        <h6 className="">SUPPORTED BY:</h6>
                        <div className="flex gap-x-7">
                            {[1, 2, 3, 4].map((e) => (
                                <figure
                                    key={e}
                                    className="w-[60px] h-[60px] shrink-0 relative"
                                >
                                    <Image
                                        src={`/logo-${e}.png`}
                                        fill
                                        objectFit="fill"
                                        alt=""
                                    />
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex">
                {/* <figure className="w-full h-[250px] md:h-[500px] lg:h-full relative"> */}
                <figure className="shrink-0 w-full h-full relative">
                    <Image
                        src="/hero-image.png"
                        fill
                        objectFit="fill"
                        alt="hero-image"
                    />
                </figure>
            </div>
        </div>
    );
};

export default Hero;
