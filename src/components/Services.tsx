import { headingStyles } from '../constants/typography'
import { my_services } from '../constants'

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative left-[calc(-50vw+50%)] w-screen">
        <div className="container mx-auto px-6 mb-12">
            <div className="text-center">
                <span className={headingStyles.H2b } >Services</span>
                <h2 className='text-[24px] md:text-[28px] lg:text-[36px] text-black leading-[-0.9]  mt-6 mb-4 animate-slide-in-left'>What I<span className='text-[#BE99F9] '> Offer</span></h2>
                <p className={headingStyles.H4b + " mt-6 animate-slide-in-left"} style={{ animationDelay: '0.2s' }}> Comprehensive AI and development services tailored to your business needs</p>
            </div>
        </div>

        {/*horizontal scroll container*/}
        <div className="horizontal-scroll overflow-x-auto pb-8">
            <div className="flex gap-6 px-6 min-w-max">
                {my_services.map((service, index) => (
                    <div
                    key={index}
                    className="bg-white w-80 md:w-96 flex-shrink-0 border border-border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#BE99F9] group-hover:text-primary-foreground transition-all duration-300">
                        {service.icon}
                        </div>
                        <div className={headingStyles.H2 + "mb-4 group-hover:text-[#BE99F9] transition-colors duration-300 "}>{service.title}</div>
                        <p className={headingStyles.H4b }>{service.description}</p>
                    </div>
                ))}
                

            </div>
        </div>
        <div className="container mx-auto px-6 mt-8">
        <p className="text-center text-muted-foreground text-sm">
          ← Scroll horizontally to explore all services →
        </p>
        </div>
    </section>
  )
}

export default Services