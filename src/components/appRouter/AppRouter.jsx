import {Routes, Route } from 'react-router-dom'
import { Home } from "../../pages/home/Home";
import { Blog } from "../../pages/blog/Blog";
import { About } from "../../pages/about/About";
import { Contact } from "../../pages/contact/Contact";

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/home' index element={<Home />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}