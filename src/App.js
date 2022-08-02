import { useState } from "react";
import Pop from "./pop";
import "./styles.css";

export default function App() {
  const [OptionProps, setOptionProps] = useState({
    isbillShow: false
  });

  return (
    <div className="App">
      <Pop OptionProps={OptionProps} setOptionProps={setOptionProps} />
    </div>
  );
}
