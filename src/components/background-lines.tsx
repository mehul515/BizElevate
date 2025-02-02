import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";
import { Globe } from "./ui/globe";
import Link from "next/link";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <Globe className="hidden md:block my-16" />
            <div className="relative z-10 text-center py-24">
                <h1 className="text-4xl sm:text-6xl p-2 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
                    Welcome to the Future of Innovation
                </h1>
                <div className="w-full max-w-2xl mx-auto mb-10">
                    <TextGenerateEffect words="Discover the power of innovation and creativity with our cutting-edge solutions." />
                </div>
                <div className="flex space-x-4 justify-center">
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
        </BackgroundLines>
    );
}
