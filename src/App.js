import { useState } from "react";
import MyComponent from "./MyComponent";

import "./App.css";

export default function App() {
  const [isRender, setIsRender] = useState(false);

  const onBtnClick = () => setIsRender(!isRender);

  const text = isRender ? "Unmount component" : "Render component";

  return (
    <div className="App">
      <button className="is-render-btn" onClick={onBtnClick}>
        {text}
      </button>
      {isRender && <MyComponent />}
    </div>
  );
}
