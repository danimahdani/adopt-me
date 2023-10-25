"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

const data1 = [
    "How to adopt a pet?",
    "How long does the process take to adopt?",
    "How much should i spend to adopt?",
    "Where is my nearest adoption place?",
];

const data2 = [
    "Does adopt me also sell my dog ​​needs?",
    "Was I given an official adoption letter when I adopted?",
    "What are the requirements for adopting a pet?",
    "What kind of care should I give my pet?",
];

const Forum = () => {
    return (
        <div className="md:grid grid-cols-12 gap-x-10">
            <div className=" md:col-span-12 lg:col-span-6 w-full lg:pt-16">
                <div className="mx-auto w-full rounded-sm bg-white">
                    {data1.map((e) => (
                        <Disclosure
                            key={e}
                            as="div"
                            className=" border-blue-gray-2 p-2 lg:p-5 border-x border-t lg:last:border-b"
                        >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-primary  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                                        <div className="flex gap-x-2 items-center text-lg">
                                            <TbPointFilled />
                                            <span>{e}</span>
                                        </div>
                                        <MdKeyboardArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform text-secondary/50"
                                                    : ""
                                            } h-5 w-5 text-primary transition-all`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        className="overflow-hidden"
                                        enter="transition transition-[max-height] duration-200 ease-in"
                                        enterFrom="transform max-h-0"
                                        enterTo="transform max-h-screen"
                                        leave="transition transition-[max-height] duration-400 ease-out"
                                        leaveFrom="transform max-h-screen"
                                        leaveTo="transform max-h-0"
                                    >
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Odit,
                                            laudantium sapiente itaque aperiam
                                            impedit iusto alias illum tempora,
                                            minima quis quae debitis dicta
                                            labore vitae.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
            <div className=" md:col-span-12 lg:col-span-6 w-full lg:pt-16">
                <div className="mx-auto w-full rounded-sm bg-white">
                    {data2.map((e) => (
                        <Disclosure
                            key={e}
                            as="div"
                            className=" border-blue-gray-2 p-2 lg:p-5 border-x border-t last:border-b"
                        >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-primary  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                                        <div className="flex gap-x-2 items-center text-lg">
                                            <TbPointFilled />
                                            <span>{e}</span>
                                        </div>
                                        <MdKeyboardArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform text-secondary/50"
                                                    : ""
                                            } h-5 w-5 text-primary transition-all`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        className="overflow-hidden"
                                        enter="transition transition-[max-height] duration-200 ease-in"
                                        enterFrom="transform max-h-0"
                                        enterTo="transform max-h-screen"
                                        leave="transition transition-[max-height] duration-400 ease-out"
                                        leaveFrom="transform max-h-screen"
                                        leaveTo="transform max-h-0"
                                    >
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Magnam
                                            vel eius eum nulla consequatur dicta
                                            quasi porro error, veritatis dolores
                                            est placeat dolorem expedita
                                            suscipit impedit earum harum saepe
                                            itaque ab. Culpa mollitia officia
                                            earum.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Forum;
