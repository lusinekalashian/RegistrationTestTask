import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Register from "./components/Register";

const App = () => {
    return (
        <div>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Register />} />
                </Routes>
            </div>

        </div>
    );
};

export default App;