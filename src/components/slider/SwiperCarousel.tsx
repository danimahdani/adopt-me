"use client";
import React, { useRef, Fragment, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type SwiperCore from "swiper";
import { Listbox, Transition } from "@headlessui/react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { AiOutlineUnorderedList } from "react-icons/ai";

const people = [
    { name: "Filter", disabled: true },
    { name: "Wade Cooper", disabled: false },
    { name: "Arlene Mccoy", disabled: false },
    { name: "Devon Webb", disabled: false },
    { name: "Tom Cook", disabled: false },
    { name: "Tanya Fox", disabled: false },
    { name: "Hellen Schmidt", disabled: false },
];

const SwiperCarousel = () => {
    const [selected, setSelected] = useState(people[0]);
    const swiperRef = useRef<SwiperCore>();

    return (
        <>
            <div className="my-11 w-full  flex items-center gap-x-6">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="mt-1 md:ml-auto">
                        <Listbox.Button className="w-44 relative cursor-default rounded-md bg-white border border-secondary/20 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">
                                {selected.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <AiOutlineUnorderedList />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-amber-100 text-amber-900"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        hidden={person.disabled}
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
                <div className="flex items-center gap-x-20 md:gap-x-10">
                    <button
                        className=""
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <SlArrowLeft />
                    </button>
                    <button
                        className=""
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <SlArrowRight />
                    </button>
                </div>
            </div>

            <Swiper
                className="mySwiper"
                pagination={true}
                spaceBetween={20}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((e) => (
                    <SwiperSlide key={e}>
                        <div className="mb-14 w-40 xl:w-72 p-2 hover:shadow-md bg-white group transition-all duration-500">
                            <div className="relative h-[200px] xl:h-[333px] w-full ">
                                <Image
                                    src="/swiper-example.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                                <div className="absolute z-10 h-full w-full flex flex-col justify-center items-center group-hover:bg-gradient-to-b from-transparent to-white ">
                                    <div className="">
                                        <button className="bg-primary text-white rounded-md px-10 py-2 outline-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            Adopt
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute mb-3 z-10 bottom-0 w-full text-center">
                                    <span className=" text-white group-hover:text-dark sm:text-sm lg:text-xl transition-all duration-500">
                                        180 Days Waiting
                                    </span>
                                </div>
                            </div>
                            <div className="text-center my-4">
                                <h1 className="text-base">Bruno</h1>
                                <span className="">1.2 Years Old</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperCarousel;
