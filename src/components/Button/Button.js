import classNames from "classnames";

function Button({ children, type, secondary, ...props }) {
  return (
    <button
      className={classNames(
        "w-full whitespace-nowrap rounded-md px-4 py-3 text-base font-medium leading-6 text-white shadow",
        secondary
          ? "bg-gray-600 hover:bg-gray-500"
          : "bg-indigo-500 hover:bg-indigo-600"
      )}
      type={type || "button"}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
