
import { headingStyles } from '../constants/typography'
import { stats } from '../constants'
import CountUp from '../constants/ui'
import aboutme from '../assets/kosi-aboutme.jpg'

const Aboutsection = () => {


  return (
    <>
        <section id="about" className= "py-20 lg:py-32 pt-10 lg:pt-15 flex flex-col ">
            <div className="container mx-auto px-6">
                <div className='text-center'>
            <span className={headingStyles.H2b } >About Me</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left hand side - text */}
            <div className="order-2 lg:order-1">
    

                <h1 className=" text-[24px] md:text-[28px] lg:text-[36px] text-black leading-[-0.9]  mt-6 mb-4 animate-slide-in-left" style={{ animationDelay: '0.1s'}}>Transforming Ideas into <br /> <span className='text-[#BE99F9] '>Intelligent Solutions</span></h1>

                <p className={headingStyles.H4b + " mt-6 animate-slide-in-left"} style={{ animationDelay: '0.2s' }}>
                    I'm a passionate AI Engineer with expertise in leveraging AI to solve real-world needs. From data analysis to model deployment to full-stack systems, I help businesses leverage the power of artificial intelligence to solve complex problems and drive innovation. My approach combines technical excellence with a deep understanding of business needs.
                </p>

                {/*Stats*/}
                <div className="mt-6 grid md:grid-cols-4 lg:grid-cols-2 gap-4">
                {stats.map((stat, index) => ( <div key={index} className="border items-center rounded-lg bg-[#D9D9D9] p-5 flex flex-col lg:items-start animate-slide-in-left" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                        <span className={headingStyles.H2b + " hover:text-[#C4FF4D] duration-300 opacity-0 animate-fade-in"}>
                            <CountUp end={Number(stat.value)} />+
                        </span>
                        <p className={headingStyles.H4b + "lg:ml-4"}>{stat.label}</p>
                    </div>
                ))}
                </div>
                


        
            </div>

            {/* right hand side - image */ }
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative animate-slide-in-right">
                    <img className="relative w-80 h-96 md:w-96 md:h-[500px] mt-8 rounded-3xl shadow-2xl" src={aboutme} alt="about me image" >
                    </img>
                </div>
            </div>


            </div>
            </div>
        </section>
    </>
  )
}

export default Aboutsection