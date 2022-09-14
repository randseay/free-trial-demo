import Header from "components/Header";
import HiringBadge from "components/HiringBadge";
import SignupForm from "components/SignupForm";

import illustration from "./illustration.svg";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="flex flex-col p-5">
        <HiringBadge />

        <div className="mt-4">
          <h1 className="mb-3 text-4xl font-extrabold leading-10 tracking-tight">
            A better way to{" "}
            <span className="text-indigo-400">ship web apps</span>
          </h1>

          <p className="mb-10 text-base font-normal leading-6">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>

          <SignupForm />
        </div>

        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
}

export default App;
