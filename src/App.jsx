import React from "react";
import "./index.css";
import { MainRouter } from "./routers/MainRouter";
import { ContextProvider } from "./hooks/Context";

function App() {
    return (
        <>
            <ContextProvider>
                <MainRouter />
            </ContextProvider>
        </>
    );
}

export default App;
