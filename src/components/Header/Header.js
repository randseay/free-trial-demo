import { useState } from "react";

import MobileMenu from "components/Header/MobileMenu";

import mark from "./mark.svg";
import menu from "./menu.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between px-5 pt-6">
        <img src={mark} alt="logo" />

        <button className="cursor-pointer" onClick={() => setOpen(true)}>
          <img src={menu} alt="menu icon" />
        </button>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
