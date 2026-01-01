import { featured_projects } from "../constants";
import Button from "../components/Button";
import { ArrowLeft, Github, ExternalLink, Lightbulb, AlertCircle} from 'lucide-react'
import { headingStyles } from "../constants/typography";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const FeatureCard = ({ feature, index }: { feature: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate placeholder images for features
  const featureImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
  ];

  // Extract title (everything before semicolon) and description
let title = feature;
let description = "";

if (feature.includes(":")) {
  const parts = feature.split(":");
  title = parts[0].trim();
  description = parts.slice(1).join(":").trim();
}


  return (
    <div
      className={`relative flex-shrink-0 w-72 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
        isHovered ? "w-96" : "w-72"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <img
          src={featureImages[index % featureImages.length]}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const projectdet = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = featured_projects.find((p) => p.slug === slug);

    const getEmbedUrl = (url: string) => {
        if (!url) return '';
        // Extracts the video ID from standard or short YouTube links
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;
        
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className={headingStyles.H1 + " mb-4 "}>Project Not Found</h1>
                    <Button>
                        <Link to="/#projects">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Homepage
                        </Link>
                    </Button>
                </div>
                
            </div>
            
        );
     } 

     return (
        
        <div className="min-h-screen bg-white text-black">

            {/*sticky action button*/}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                title="View source code"
                >
                    <Github className="w-6 h-6" />
                </a>
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-[#BE99F9] text-[#BE99F9]-foreground flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                        title="View Live Demo"
                    >
                        <ExternalLink className="w-6 h-6" />
                    </a>
                )}
            </div>
            
            {/* Hero section*/}
            <section className="pt-24 pb-16 md:pt-32 ">
                <div className="contianer mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/*left side - overview*/}
                        <div className="space-y-6 text-left">
                            
                            <h1 className={headingStyles.H1 + " mb-4 "}>{project.title}</h1>

                            <p className={headingStyles.H4b + " mb-6 "}>{project.fullDescription}</p>
                           

                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-[#BE99F9]/20 backdrop-blur-sm text-[#BE99F9] rounded-full font-medium">
                                    {tech}
                                </span>
                            ))}
                            </div>
                        </div>

                        {/* Right side*/}

                        <div className="relative">
                            {project.demo_video ? (
                                <div className="aspect-video rounded-2xl overflow-hidden bg-muted shadow-2xl">
                                    <iframe
                                        src={getEmbedUrl(project.demo_video)}
                                        title="Project demo video"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                
                                        className="w-full h-full"
                                    />
                                    </div>
                                ) : (
                                    <div className="aspect-video rounded-2xl overflow-hidden bg-muted shadow-2xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    </div>
                                )}
                                </div>
                            </div>
                            </div>
                        </section>

                        {/*problem solved*/}
                        <section className="py-16 md:py-24 bg-muted/30">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <AlertCircle className="w-6 h-6 text-[#BE99F9]" />
                                    <h2 className={headingStyles.H2b}>Problem Solved</h2>
                                </div>
                                  {project.problem_solved?.trim() ? (
                                    <p className={`${headingStyles.H4b} mb-6`}>{project.problem_solved}</p>
                                
                            ) : (
                                <p className="m-8 text-sm italic text-gray-500">
                                No problem statement inserted yet.
                                </p>
                            )}
                                
                            </div>
                        </div>
                        </section>

                        {/*features*/}
                        <section className="py-16 md:py-24">
                            <div className="container mx-auto px-6">
                            <h2 className={headingStyles.H2b + " mb-4"}>Key Features</h2>
                            </div>

                            {project.features?.length > 0 ? (
                                <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-track-muted scrollbar-thumb-primary">
                                <div className="flex gap-6 px-6 min-w-max">
                                    {project.features.map((feature, index) => (
                                    <FeatureCard key={index} feature={feature} index={index} />
                                    ))}
                                </div>
                                </div>
                            ) : (
                                <p className="m-8 text-sm italic text-gray-500">
                                No features inserted yet.
                                </p>
                            )}

                            
                        </section>
                            

                        {/* Lessons Learned*/}
                        <section className="py-16 md:py-24 bg-muted/30">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl mx-auto">
                                <div className="flex items-center gap-3 mb-6">
                                    <Lightbulb className="w-8 h-8 text-[#BE99F9]" />
                                    <h2 className={headingStyles.H2b}> Lessons Learned</h2>
                                </div>

                                {project.lessons?.trim() ? (
                                    <p className={`${headingStyles.H4b} mb-6`}>
                                {project.lessons}
                                </p>
                            ) : (
                                <p className="m-8 text-sm italic text-gray-500">
                                No lessons yet.
                                </p>
                            )}
                                </div>
                                </div>
                        </section>          
        </div>

     )

}

export default projectdet;