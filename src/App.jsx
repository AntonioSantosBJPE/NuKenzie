import { useState } from "react";
import { Home } from "./components/Home";
import { WelcomePage } from "./components/WelcomePage";

export function App() {
  const [started, setStarted] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {started ? (
        <Home
          started={started}
          setStarted={setStarted}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      ) : (
        <WelcomePage started={started} setStarted={setStarted} />
      )}
    </div>
  );
}
