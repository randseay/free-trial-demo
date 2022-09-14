import Header from "components/Header";
import HiringBadge from "components/HiringBadge";
import SignupForm from "components/SignupForm";

import illustration from "./illustration.svg";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between sm:flex-row">
        <div className="flex flex-col p-5 sm:mt-32 sm:p-8">
          <HiringBadge />

          <div className="mt-4 mb-10 max-w-sm sm:mt-6 sm:mb-12 sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="mb-3 flex flex-col text-4xl font-extrabold leading-10 tracking-tight sm:mb-5 sm:text-5xl lg:text-6xl xl:text-7xl">
              <h1 className="text-white">A better way to</h1>
              <h1 className="text-indigo-400">ship web apps</h1>
            </div>

            <p className="text-base font-normal leading-6 text-gray-300 sm:text-lg lg:text-xl xl:text-2xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>

          <div className="sm:max-w-lg lg:max-w-xl">
            <SignupForm />
          </div>
        </div>

        <div
          className="max-h-80 w-full flex-1 bg-cover bg-[position:0%_-15%] bg-no-repeat bg-origin-content px-3 sm:-ml-14 sm:max-h-160 md:-ml-7 xl:bg-contain xl:bg-[position:15%_0%]"
          style={{ backgroundImage: `url(${illustration})` }}
        />
      </div>
    </div>
  );
}

export default App;
