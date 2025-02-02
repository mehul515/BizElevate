"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
    return (
        <div>
            <div className="relative py-24">

                <div aria-hidden="true"
                    className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                </div>

                <div className="mx-auto px-6 md:px-12 xl:px-6">
                    <div className="relative">

                        <div className="flex items-center justify-center -space-x-5">
                            <Image height={500} width={500} src={"/cta/image3.png"} alt="member photo" className="h-14 w-14 rounded-full object-cover" />
                            <Image height={500} width={500} src={"/cta/image2.png"} alt="member photo" className="h-20 w-20 rounded-full object-cover" />
                            <Image height={500} width={500} src={"/cta/image1.png"} alt="member photo" className="z-10 h-28 w-28 rounded-full object-cover" />
                            <Image height={500} width={500} src={"/cta/image4.png"} alt="member photo" className="relative h-20 w-20 rounded-full object-cover" />
                            <Image height={500} width={500} src={"/cta/image5.png"} alt="member photo" className="h-14 w-14 rounded-full object-cover" />
                        </div>

                        <div className="mt-6 m-auto space-y-6">
                            <motion.h2
                                className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-5 py-3"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Ready to take your business to the next level?
                            </motion.h2>

                            <p className="text-xl font-medium text-white mb-12 max-w-[700px] mx-auto text-center">
                                Join thousands of businesses that trust us to scale their operations. Get started today and experience the difference.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href={"/signup"}>
                                    <Button
                                        size="lg"
                                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-[6px]"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                                <Button
                                    size="lg"
                                    className="text-pink-500 bg-gradient-to-r from-transparent to-transparent hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mb-2 rounded-[6px] border border-pink-500 hover:border-transparent"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
