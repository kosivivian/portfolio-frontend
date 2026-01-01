import Button from "./Button";
import { headingStyles } from '../constants/typography'
import dp from '../assets/dp2.svg'
import icon from '../assets/icon.svg'

const Herosection = () => {
    const skills = ["Frontend Development", "Data Analysis", "MLOps", "Data Science"];

  return (
    <>
    <section id="home" className="relative pt-15 pb-10 lg:pt-20 flex flex-col items-center text-center px-4">

        <div className="relative z-10 px-4 ">
      
        {/*greeting*/}
        <span className={headingStyles.H2} >Hello</span>

        {/*Name*/}
        <h1 className=" text-[40px] lg:text-[64px] text-black leading-[0.8] mt-4 mb-0">I'm <span className='text-[#BE99F9] '>Kosi Nebolisa</span></h1>
        <h2 className="text-[40px] lg:text-[64px] text-black leading-[0.8] mt-0">Artificial Intelligence Engineer</h2>
        </div>

        {/*Image*/}
        <div className="relative -mt-20 lg:-mt-25 w-full max-w-lg px-4">
        <img className="relative z-20 w-full h-auto object-cover"src={dp} alt="profile picture" />

        {/*Buttons*/}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-3 px-10 py-2 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl z-30">
        <Button variant="third" ><a href="#projects">Portfolio</a></Button>
        <Button variant="secondary"><a href="#contactme">Let's Work!</a></Button>
        </div>
        </div>

        {/*Skills Marquee*/}
        <div className="w-screen z-40 bg-[#C4FF4D] py-4 mt-0 overflow-hidden whitespace-nowrap border-y border-black">
            <div className="flex w-max skills-scroll">
            <div className="flex items-center space-x-12">
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center space-x-12">
                <span className=" font-space text-xl lg:text-2xl font-medium tracking-normal leading-tight text-black whitespace-nowrap uppercase" >{skill}</span>
                <span> <img src={icon} alt="icon"/></span>
            </div>
        
                ))}
           
            </div>

        
        </div>
        </div>
          
          </section>
    </>
  )
}

export default Herosection