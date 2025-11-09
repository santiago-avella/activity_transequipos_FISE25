
import { HashRouter, Routes, Route } from "react-router-dom"
import { Index } from "./layouts"
import { Game } from "./layouts/game"


function App(){
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Index/>}></Route>
                <Route path="/game" element={<Game/>}></Route>
            </Routes>
        </HashRouter>
    )
}


export default App