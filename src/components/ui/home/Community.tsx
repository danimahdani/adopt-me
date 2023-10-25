import React from "react";
import Image from "next/image";

const Community = () => {
    return (
        <section className="">
            <div className="md:grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-16">
                    <span className="uppercase text-blue-gray text-lg tracking-wider">
                        our mission for pet
                    </span>
                    <h2 className="leading-tight text-4xl text-dark">
                        Let{"'"}s Choose and Adopt your{" "}
                        <br className="hidden sm:block" />
                        New Lovely Pet
                    </h2>
                </div>
                <div className=" col-span-12 lg:col-span-6 mt-5 lg:mt-28">
                    <p className="text-secondary text-base">
                        You need to see some pets in Adoptme. We have the friend
                        <br className="hidden lg:block" />
                        that{"'"}s you need to have. We also have the equipment
                        you need to take <br className="hidden lg:block" />
                        care of it.
                    </p>
                </div>
            </div>
            <div className="md:grid grid-cols-12 sm:gap-x-5 xl:gap-x-0 sm:mt-10 xl:mt-20 sm:items-center xl:items-start">
                <div className="sm:col-span-6 lg:col-span-6 col-span-12">
                    <figure className="xl:w-[572px] xl:h-[440px] relative">
                        <Image
                            src={`/image-2.png`}
                            width={572}
                            height={440}
                            layout="responsive"
                            alt=""
                            className="object-contain"
                        />
                    </figure>
                </div>
                <div className="sm:col-span-6 lg:col-span-6 col-span-12">
                    <h5 className="uppercase text-blue-gray tracking-wider text-lg mb-1">
                        adoptme community
                    </h5>
                    <h2 className="text-dark leading-tight text-2xl xl:text-4xl mb-6">
                        Connect with adoptme <br className="hidden lg:block" />
                        across the country
                    </h2>
                    <p className="leading-tight text-secondary text-md mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        It
                        <br className="hidden lg:block" /> ac purus eget. Sit
                        dolor est proin vestibulum, duis. im{" "}
                        <br className="hidden lg:block" />
                        dolor sit amet, consec
                    </p>
                    <div className="flex gap-x-3 xl:gap-x-8 ">
                        {[1, 2, 3].map((e) => (
                            <div key={e} className="text-center w-32 ">
                                <h2 className="text-primary text-2xl xl:text-4xl mb-3">
                                    150+
                                </h2>
                                <p className="text-secondary">
                                    proin vestibulum, duis. im dol.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <h5 className="uppercase text-blue-gray text-lg">
                    adoption pet
                </h5>
                <h2 className="text-dark text-3xl mb-5">
                    Adopt the pet that has
                    <br className="hidden sm:block" /> waited too long
                </h2>
                <p className="text-secondary text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. It
                    <br className="hidden sm:block" />
                    ac purus eget. Sit dolor est proin vestibulum, duis. im
                    <br className="hidden sm:block" />
                    dolor sit amet, consectetur adipisci.
                </p>
            </div>
        </section>
    );
};

export default Community;
