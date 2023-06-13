"use client";
import { monumentExtended } from "@/shared/fontLoader";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
import Logo from 'public/Navbar/SUPERARE.png'

const navigation = [
  { name: "Roadmap", href: "#" },
  { name: "Team", href: "#" },
  { name: "About", href: "#" },
  { name: "Wallet", href: "#" },
];
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="boxNav fixed top-0 z-30 w-full bg-dark py-3">
      <nav
        className="flex items-center justify-between mx-auto w-11/12"
        aria-label="Global"
      >

        <div className="hidden lg:flex lg:gap-x-7">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-normal leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="">
          <a href="#" className="-m-1.5 p-1.5 ">
            <Image
              className="lg:h-5 lg:w-40 w-auto xl:w-52 xl:h-7"
              src={Logo}
              alt="Logo"

            />
            {/* <div
              className={`${monumentExtended.className} text-4xl font-extrabold text-brightPink`}
            >
              SUPERARE
            </div> */}
          </a>
        </div>

        <div className="hidden lg:flex ">
          <button
            className={`${monumentExtended.className} rounded-2xl bg-brightPink px-6 py-2 text-white hover:bg-white hover:text-brightPink`}
          >
            Buy
          </button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2 text-gray-700   bg-brightPink"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brightPink px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between order-2">

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-dark" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
