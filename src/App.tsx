import { useState, ChangeEvent } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [term, setTerm] = useState<string>("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  return (
    <>
      <main className="flex justify-center items-center h-[100vh] w-full">
        <section className="items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] w-full md:max-w-[500px] p-4 flex flex-col text-center  bg-white bg-opacity-20">
          <h1 className="text-4xl font-thin">
            Weather <span className="font-black">Report</span>
          </h1>

          <div className="flex mt-5">
            <input
              value={term}
              type="text"
              className="px-2 py-1 border-2 border-white rounded-1-md"
              onChange={onInputChange}
            />

            <button className="px-2 py-2 border-2 cursor-pointer rounded-r-md border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-1">
              Search
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
