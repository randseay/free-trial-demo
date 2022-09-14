function Button({ children, ...props }) {
  return (
    <button
      className="w-full rounded-md bg-indigo-500 px-4 py-3 text-base font-medium leading-6 shadow"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
