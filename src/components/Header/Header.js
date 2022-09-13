import mark from "./mark.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="flex pt-6 justify-between">
      <img src={mark} alt="logo" />

      <Bars3Icon className="gray-400" />
    </div>
  );
}

export default Header;