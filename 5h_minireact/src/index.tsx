import React from "react";
// import ReactDOM from "react-dom";
 
// コンポーネント読み込み
// import App from "./components/App";
 
// ReactDOM.render(<App />, document.getElementById("root"));
import { createRoot } from 'react-dom/client';

// コンポーネント読み込み
import App from "./components/App";
 
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
