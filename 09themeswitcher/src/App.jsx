import React, { useEffect, useState } from "react";
import "./index.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/Themebtn";
import Card from "./Components/Card";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const lightmode = () => setThemeMode("light");
  const darkmode = () => setThemeMode("dark");

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ ThemeMode, darkmode, lightmode }}>
      <h1 className="bg-pink-600 p-4 text-3xl text-white">
        yousaf
      </h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;