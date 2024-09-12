import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Hello React!");
  const [fontSize, setFontSize] = useState(24);

  return (
    <>
      <Header onTextChange={setText} onFontSizeChange={setFontSize} />
      <Card text={text} fontSize={fontSize} />
    </>
  );
}

export default App;
