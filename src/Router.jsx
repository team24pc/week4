import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageOne } from "./pages/Page1";
import { PageTwo } from "./pages/Page2";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { MovieDetail } from "./pages/MovieDetail";

export const Router = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/1' element={<PageOne/>}/>
                <Route path='/2' element={<PageTwo/>}/>
                <Route path='/detail/:id' element={<MovieDetail/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}