import { useState } from "react";

import Button from "components/Button";
import MobileMenu from "components/Header/MobileMenu";

import mark from "./mark.svg";
import menu from "./menu.svg";

function NavItem({ children, url }) {
  return (
    <li className="whitespace-nowrap text-base font-medium hover:underline">
      <a href={url}>{children}</a>
    </li>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between px-5 pt-6">
        <div className="flex items-center">
          <img src={mark} alt="logo" />

          <nav className="ml-10 hidden list-none justify-between gap-x-8 sm:flex">
            <NavItem url="#">Product</NavItem>
            <NavItem url="#">Features</NavItem>
            <NavItem url="#">Marketplace</NavItem>
            <NavItem url="#">Company</NavItem>
          </nav>
        </div>

        <nav className="hidden list-none items-center gap-x-8 sm:flex">
          <NavItem url="#">Log in</NavItem>

          <Button secondary>Start free trial</Button>
        </nav>

        <button
          className="cursor-pointer sm:hidden"
          onClick={() => setOpen(true)}
        >
          <img src={menu} alt="menu icon" />
        </button>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
