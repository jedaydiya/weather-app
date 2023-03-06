import "./App.css";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";

function App() {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();
  return (
    <>
      <main className="flex justify-center items-center h-[100vh] w-full">
        {forecast ? (
          "we have a forecast"
        ) : (
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )}
      </main>
    </>
  );
}

export default App;
