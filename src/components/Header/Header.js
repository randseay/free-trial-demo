import mark from "./mark.svg";

function Header() {
  return (
    <div className="flex pt-6 justify-between">
      <img src={mark} alt="logo" />
      <p>Menu</p>
    </div>
  );
}

export default Header;
