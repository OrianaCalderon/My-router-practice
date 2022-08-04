import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


//components
import Home from "./views/Home.jsx"
import DetallesPersonajes from "./component/DetallesPersonajes.jsx"
import Menu from "./component/Menu.jsx"
import About from "./views/About.jsx"
import Contact from "./views/Contact.jsx"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    {/*aqui van las rutas*/}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/character/:character_id" element={<DetallesPersonajes/>} />
                </Routes>
            </BrowserRouter>
        </>


    );
}

export default App;