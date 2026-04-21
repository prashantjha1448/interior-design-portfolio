import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Work from "../pages/Work"
import Auth from "../Auth/Auth"

const Router = () => {
  return (
    <Routes>

      {/* Auth (no layout) */}
      <Route path="/auth" element={<Auth />} />

      {/* Layout Wrapper */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />    
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
      </Route>

    </Routes>
  )
}

export default Router