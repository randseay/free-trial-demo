import Button from "components/Button";

function SignupForm() {
  return (
    <form className="flex flex-col">
      <label htmlFor="email">
        <input className="w-full" id="email" name="email" />
      </label>

      <Button>Start free trial</Button>

      <p className="mt-3 text-sm font-normal leading-5">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our{" "}
        <a href="#" className="font-medium">
          terms or service
        </a>
        .
      </p>
    </form>
  );
}

export default SignupForm;
