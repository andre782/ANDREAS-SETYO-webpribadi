import Heeader from './component/header/Heeader'
import Home from "./component/home/Home"
import './App.css'
import About from './component/about/About'
import Skill from "./component/Skill/Skill"
import Service from "./component/service/Service"
import Quaalification from './component/qualification/Quaalification'
import Work from "./component/work/Work"
import Contact from './component/contact/Contact'
import Footer from "./component/footer/Footer"

function App() {
 

  return (
    <>
     <Heeader/>

     <main className='main'>

        <Home/>
        <About/>
        <Skill/>
        <Service/>
        <Quaalification/>
        <Work/>
        <Contact/>
        <Footer/>
        
     </main>
    </>
  )
}

export default App