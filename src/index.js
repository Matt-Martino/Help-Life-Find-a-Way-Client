import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { HelpLife } from "./HelpLife"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <HelpLife />
    </BrowserRouter>
)
