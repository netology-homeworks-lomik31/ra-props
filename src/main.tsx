import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"
import Films from "./films/Films";
import Chat from "./chat/Chat";
import Navigator from "./Navigator";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigator />} />
                <Route path="/films" element={<Films />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
