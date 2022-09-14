import chevron from "./chevron.svg";

function Badge({ children }) {
  return (
    <div className="flex content-center items-center rounded-badge bg-indigo-500 px-3 py-1 text-xs font-medium uppercase">
      {children}
    </div>
  );
}

function HiringBadge() {
  return (
    <div className="flex">
      <a
        href="#"
        className="flex-0 flex cursor-pointer items-center gap-x-4 rounded-badgeWrap bg-black p-1"
      >
        <Badge>We're Hiring</Badge>

        <p className="text-sm">Visit our careers page</p>

        <img className="pr-4" src={chevron} alt="chevron right" />
      </a>
    </div>
  );
}

export default HiringBadge;
