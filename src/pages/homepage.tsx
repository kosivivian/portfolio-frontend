
import Herosection from '../components/Herosection'
import Aboutsection from '../components/Aboutsection'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contactme from '../components/Contactme';


const homepage = () => {
  return (
    <main className="min-h-screen w-full">
    <Herosection />
    <Aboutsection />
    <Projects />
    <Services />
    <Contactme />


    </main>
  )
}

export default homepage;
