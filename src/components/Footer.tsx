
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { headingStyles } from '../constants/typography';
import logo from '../assets/Star 4.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contactme" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/kosisochukwu-nebolisa-ba8559254/", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/kosivivian", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:nebolisako@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-black  relative left-[calc(-50vw+50%)] w-screen py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-left">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
             
                <div className="flex items-center text-left ">
                        <img className="h-10 w-10 mr-2"src={logo} alt="logo" />
                        <span className={headingStyles.H3b}>Kosi Nebolisa</span>
                </div>
                      
            </a>
            <p className={headingStyles.H4b + " animate-slide-in-right mb-8"}>
              Machine Learning Engineer passionate about building intelligent solutions
              that transform businesses and improve lives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className={headingStyles.H3b + " mb-6"}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={ headingStyles.H4b + " hover:opacity-100 hover:text-[#BE99F9] transition-all duration-200"}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="text-left">
            <h4 className={headingStyles.H3b + " mb-6"}>Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-muted/30 flex items-center justify-center hover:bg-[#BE99F9] hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-muted opacity-70 text-sm">
              Let's build something amazing together.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-muted/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted opacity-60 text-sm">
              © {currentYear} Kosi Nebolisa. All rights reserved.
            </p>
            <p className="text-muted opacity-60 text-sm">
              Built with <span className="text-accent">♥</span> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer