import { useState } from "react";
import "./App.scss";
import Welcome from "./main/allComponents/welcome/Welcome";
import Main from "./main/Main";

function App() {
  const [tim, settim] = useState(true);
  setTimeout(() => {
    settim(false);
  }, 2500);

  return <div className="App">{tim ? <Welcome/> : <Main />}</div>;
  // return <Welcome/>
}

export default App;
