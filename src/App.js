import Button from "components/Button";
import Header from "components/Header";
import HiringBadge from "components/HiringBadge";

import illustration from "./illustration.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="flex flex-col p-5">
        <HiringBadge />

        <div className="mt-4">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight">
            A better way to{" "}
            <span className="text-indigo-400">ship web apps</span>
          </h1>

          <p className="text-base font-normal leading-6">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>

          <form>
            <label htmlFor="email">
              <input id="email" name="email" />
            </label>

            <Button>Start free trial</Button>
          </form>

          <p className="text-sm font-normal leading-5">
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our{" "}
            <a href="#" className="font-medium">
              terms or service
            </a>
            .
          </p>
        </div>

        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
}

export default App;
