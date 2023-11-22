// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//Import css
import { GlobalStyle } from './components/global-style/global-style'

//Import router cho  toàn bộ dự án (kết nối router với react)
import {RouterProvider} from "react-router-dom"
import { router } from './route/route'

//REACT SLICK
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <GlobalStyle>
        <RouterProvider router = {router}></RouterProvider>
      </GlobalStyle>
    </>
  )
}

export default App
