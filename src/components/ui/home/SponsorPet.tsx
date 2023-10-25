import Image from "next/image";

const SponsorPet = () => {
    return (
        <div className="md:grid grid-cols-12 gap-x-14 items-center mb-28">
            <div className=" md:col-span-6 lg:col-span-5">
                <div className="relative h-[234px] md:h-[346px] ">
                    <Image
                        src="/sponsor-pet.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="md:col-span-6 lg:col-span-7">
                <div className="">
                    <h6 className="uppercase text-secondary tracking-wider">
                        Stories with pet
                    </h6>
                    <h1 className="text-2xl lg:text-4xl text-dark leading-snug">
                        Sponsoring your pet
                        <br className="hidden lg:block" /> before adopt
                    </h1>
                    <p className="text-secondary my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        It ac purus eget. Sit dolor est proin vestibulum, duis.
                        im dolor sit amet, consectetur adipisc. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Cumque
                        magni atque consequatur similique blanditiis odio.
                    </p>
                </div>
                <button className="bg-primary px-10 py-3 rounded-md text-white text-md">
                    Sponsor now
                </button>
            </div>
        </div>
    );
};

export default SponsorPet;
