import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import mark from "../mark.svg";
import Button from "components/Button";

function MenuItem({ children, url }) {
  return (
    <li className="text-base font-normal text-gray-700 hover:underline">
      <a href={url}>{children}</a>
    </li>
  );
}

export function MobileMenu({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 sm:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed flex max-w-full p-2">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen">
                  <div className="flex flex-col overflow-y-scroll rounded-lg bg-white p-6 shadow-md">
                    <div className="flex items-center justify-between">
                      <img src={mark} alt="logo" />

                      <button
                        type="button"
                        className="rounded-md text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>

                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="flex flex-col">
                      <nav className="flex list-none flex-col gap-y-4 py-8">
                        <MenuItem url="#">Product</MenuItem>
                        <MenuItem url="#">Features</MenuItem>
                        <MenuItem url="#">Marketplace</MenuItem>
                        <MenuItem url="#">Company</MenuItem>
                      </nav>

                      <Button>Start free trial</Button>

                      <p className="pt-6 text-center text-gray-500">
                        Existing customer?{" "}
                        <a
                          href="#"
                          className="font-bold text-gray-900 hover:underline"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileMenu;
