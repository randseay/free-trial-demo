import { useCallback, useState } from "react";

import Button from "components/Button";

function SignupForm() {
  const [email, setEmail] = useState("");

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email);
    },
    [email]
  );

  return (
    <form className="flex flex-col gap-y-3" onSubmit={submit}>
      <label htmlFor="email">
        <input
          className="w-full rounded-md px-4 py-3 text-base font-normal leading-6 text-gray-500"
          placeholder="Enter your email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <Button type="submit">Start free trial</Button>

      <p className="text-sm font-normal leading-5 text-gray-300">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our{" "}
        <a href="#" className="font-medium text-white hover:underline">
          terms or service
        </a>
        .
      </p>
    </form>
  );
}

export default SignupForm;
