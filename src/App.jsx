import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Class1 } from "./pages/Class1/Class1"
import { Header } from "./layouts/Header/Header"
import { Footer } from "./layouts/Footer/Footer"

export const App = () => {

  return (
    <>
      <Header/>
    <Routes> 
      <Route path="/" element={<Home />}/>
      <Route path="/Class1" element ={< Class1 />} />
    </Routes>
    <Footer/>
    
    </>    
  )

}
