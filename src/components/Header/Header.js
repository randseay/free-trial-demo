import mark from "./mark.svg";
import menu from "./menu.svg";

function Header() {
  return (
    <div className="flex justify-between px-5 pt-6">
      <img src={mark} alt="logo" />

      <img src={menu} alt="menu icon" />
    </div>
  );
}

export default Header;
