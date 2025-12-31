import { Link } from "react-router-dom"
import { useRef, useEffect} from 'react'
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { headingStyles } from '../constants/typography';
import { featured_projects } from '../constants/index';
import Button from './Button';


const card_height = 380;
const card_visible_offset = 50;


const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>(new Array(featured_projects.length).fill(null));

    useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardTop = card.getBoundingClientRect().top;
        //const windowHeight = window.innerHeight;
        const stickyTop = 96 + index * card_visible_offset; 

        // When card reaches its sticky position
        if (cardTop <= stickyTop) {
          card.style.position = "sticky";
          card.style.top = `${stickyTop}px`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="projects" className=" py-20 lg:py-32 bg-black relative left-[calc(-50vw+50%)] w-screen">
    <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
    <span className={headingStyles.H2b} >Portfolio</span>
    <h2 className='text-[24px] md:text-[28px] lg:text-[36px] text-white leading-[-0.9]  mt-6 mb-4 animate-slide-in-left'>Featured <span className='text-[#BE99F9] '>Projects</span></h2>
    <p className={headingStyles.H4b + " mt-6 animate-slide-in-left"} style={{ animationDelay: '0.2s' }}> A showcase of my work in machine learning, AI development and full-stack applications</p>
        </div>
    
    {/* Project Cards */}
    <div ref={sectionRef} className="relative max-w-4xl mx-auto">
          {featured_projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {cardsRef.current[index] = el;}}
              className="sticky mb-[-20px] last:mb-0"
              style={{
                top: `${96 + index * card_visible_offset}px`,
                zIndex: index + 1,
              }}
            >
              <div 
                className="bg-white text-card-foreground rounded-2xl overflow-hidden shadow-2xl border transition-transform duration-300"
                style={{
                  transform: `scale(${1 - index * 0.02})`,
                  transformOrigin: "top center",
                }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="h-48 md:h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className={headingStyles.H2 + " font-bold mb-3"}>{project.title}</h3>
                    <p className={headingStyles.H4b + "  mb-4"}>{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-space px-3 py-1 rounded-full text-xs md:text-sm font-medium text-black  tracking-wide  lg:text-sm  bg-[#BE99F9]  "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="secondary"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center">
                          <Github className="w-4 h-4 mr-2 text-sm" />
                          Code
                          </span>
                        </a>
                      </Button>
                      {project.liveLink && (
                        <Button
                          variant="third"
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                            </span>
                          </a>
                        </Button>
                      )}
                      <button className=" text-[#BE99F9] hover:text-[#BE99F9] hover:bg-[#BE99F9]/10 rounded-full hover:bg-accent hover:text-accent-foreground py-1.5 px-3 text-sm">
                        <Link to={`/project/${project.slug }`}>
                        <span className="flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                            </span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for scroll room */}
          <div style={{ height: `${card_height}px` }} />
        </div>

    </div>
        
    </section>
  )
}

export default Projects