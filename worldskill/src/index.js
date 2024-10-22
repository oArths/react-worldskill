import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import Dog from "./pages/dog";
import Cat from "./pages/cat";
import OneDog from "./pages/oneDog";
import OneCat from "./pages/oneCat";
const root = ReactDOM.createRoot(document.getElementById("root"));

function RenderPage() {
    const path = window.location.pathname;
    const clear = path.split("/");

    switch (clear[1]) {
        case "":
            return <Home />;

        case "Dogs":
            return <Dog />;
        case "oneDogs":
            return <OneDog />;
        case "oneCats":
            return <OneCat />;

        case "Cats":
            return <Cat />;
        case "OneCats":
            return <Cat />;

        default:
            return <Home />;

    }
}
root.render(
<React.StrictMode>
    {RenderPage()}
    </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
