import Navbar from "@/components/navbar/navbar";
import Community from "@/components/ui/home/Community";
import Hero from "@/components/ui/home/Hero";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import SponsorPet from "@/components/ui/home/SponsorPet";
import Forum from "@/components/ui/home/Forum";

export default function Home() {
    return (
        <main className="">
            <section className="hero-background">
                <div className="lg:max-w-7xl mx-auto px-10 lg:px-0">
                    <Navbar />
                    <div className="py-20">
                        <Hero />
                    </div>
                </div>
            </section>
            <div className="lg:max-w-7xl mx-auto px-10 lg:px-0">
                <Community />
                <SwiperCarousel />
                <SponsorPet />
            </div>
            <div className="hero-background relative">
                <div className="lg:max-w-7xl mx-auto px-10 lg:px-0 pt-20 pb-32">
                    <div className="flex justify-center items-center flex-col text-center mb-10 md:mb-16">
                        <h5 className="text-blue-gray tracking-wider uppercase text-lg">
                            Forum answer and question
                        </h5>
                        <h1 className="text-dark text-4xl leading-snug mb-7">
                            Adopt the pet that has
                            <br className="hidden sm:block" /> waited too long
                        </h1>
                        <p className="text-secondary max-w-[593px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. It ac purus eget. Sim dolor sit amet,
                            consectetur adipisci.
                        </p>
                    </div>
                    <Forum />
                </div>
                <div className=" absolute left-0 right-0 bottom-0 border-t border-[#C6CFDC]">
                    <div className="lg:max-w-7xl mx-auto ">
                        <div className="flex justify-center md:justify-between md:px-10  py-5 flex-wrap items-center">
                            <h5 className="text-black tracking-wider md:text-sm xl:text-lg">
                                Copyright 2023. Adoptme. All right reserved
                            </h5>
                            <h5 className="text-black tracking-wider md:text-sm xl:text-lg">
                                (62)812-345-678 | adoptme@email.com
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

