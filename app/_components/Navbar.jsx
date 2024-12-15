import { motion } from "framer-motion";
import { Video, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <Video className="h-8 w-8 text-rose-500" /> */}
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <span className="ml-2 text-white font-bold text-xl">
              VideoCraft
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {["Features", "Benefits", "How It Works", "Pricing", "About"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
              <Link href={"/dashboard"} className="bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors">
                Get Started
              </Link >
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["Features", "Benefits", "How It Works", "Pricing", "About"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            )
          )}
          <button className="w-full mt-2 bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
