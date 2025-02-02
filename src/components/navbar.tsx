"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export function Navigation() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030313] bg-opacity-50 backdrop-blur-[4px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={"/"} className="text-white font-bold text-xl">
              <Image src={"/logo.png"} height={500} width={500} alt="" className="h-10 w-40"/>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href={"/signup"}>
              <Button
                size="lg"
                className="text-pink-500 bg-gradient-to-r from-transparent to-transparent hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-4 py-1 text-center rounded-[6px] border border-pink-500 hover:border-transparent"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

