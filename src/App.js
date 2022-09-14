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
          <div className="mb-3 flex flex-col text-4xl font-extrabold leading-10 tracking-tight">
            <h1 className="text-white">A better way to</h1>
            <h1 className="text-indigo-400">ship web apps</h1>
          </div>

          <p className="mb-10 text-base font-normal leading-6 text-gray-300">
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
