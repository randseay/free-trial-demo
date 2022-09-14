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

        <div>
          <h1>
            A better way to <span>ship web apps</span>
          </h1>

          <p>
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

          <p>
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our <a>terms or service</a>.
          </p>
        </div>

        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
}

export default App;
