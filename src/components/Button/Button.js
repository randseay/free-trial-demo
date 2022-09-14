function Button({ children, type, ...props }) {
  return (
    <button
      className="w-full whitespace-nowrap rounded-md bg-indigo-500 px-4 py-3 text-base font-medium leading-6 text-white shadow hover:bg-indigo-600"
      type={type || "button"}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
