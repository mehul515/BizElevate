import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  return (
    <>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Logo and Social Icons */}
            <div className="col-span-1 md:mx-auto">
              <Image src={"/logo.png"} height={500} width={500} alt="" className="mb-4 h-10 w-40" />
              <p className="mb-4 text-base">
                Empowering developers and businesses with cutting-edge solutions for the digital age.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <GithubIcon className="h-5 w-5 text-white" />
                </Button>
                <Button variant="ghost" size="icon">
                  <TwitterIcon className="h-5 w-5 text-white" />
                </Button>
                <Button variant="ghost" size="icon">
                  <LinkedinIcon className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:mt-4 md:mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="sm:mt-4 md:mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-base">123 Tech Street</p>
              <p className="text-base">San Francisco, CA 94107</p>
              <p className="text-base">Email: info@yourcompany.com</p>
              <p className="text-base">Phone: (123) 456-7890</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
