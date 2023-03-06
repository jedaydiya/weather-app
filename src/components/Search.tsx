import { ChangeEvent } from "react";
import { optionType } from "../types";
import { MagnifyingGlass } from "@phosphor-icons/react";
type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

function Search({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) {
  return (
    <>
      <main className="flex justify-center items-center h-[100vh] w-full">
        <section className="items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] w-full md:max-w-[500px] p-4 flex flex-col text-center  bg-white bg-opacity-20">
          <h1 className="text-4xl font-thin">
            Weather <span className="font-black">Report</span>
          </h1>

          <div className="relative flex mt-10 md:mt-4">
            <div className="flex mt-5">
              <input
                value={term}
                type="text"
                className="px-2 py-1 border-2 border-white rounded-1-md"
                placeholder="Search City"
                onChange={onInputChange}
              />

              <ul className="absolute w-full bg-white rounded-br-md top-16">
                {options.map((option: optionType, index: number) => (
                  <li key={option.name + "-" + index}>
                    <button
                      className="w-full px-2 py-1 text-sm text-left text-black cursor-pointer hover:bg-zinc-700 hover:text-white"
                      onClick={() => onOptionSelect(option)}
                    >
                      {option.name}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                className="px-2 py-2 border-2 cursor-pointer rounded-r-md border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-1"
                onClick={onSubmit}
              >
                <MagnifyingGlass size={24} weight="bold" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Search;
