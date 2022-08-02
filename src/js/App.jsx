import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./component/Menu.jsx"
import About from "./views/About.jsx"
import Contact from "./views/Contact.jsx"

//components
import Home from "./views/Home.jsx"

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
                </Routes>
            
            </BrowserRouter>
        </>


    );
}

export default App;