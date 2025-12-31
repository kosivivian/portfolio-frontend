import {Menu, X} from "lucide-react";
import { useState, useEffect } from "react";
import logo from '../assets/Star 4.svg';
import { Link, useLocation } from "react-router-dom";
import { headingStyles } from "../constants/typography";
import { navItems } from '../constants';
import Button from "./Button";

const Navbar = () => {

    {/*handle navigation*/}
    const { pathname } = useLocation();
    const isHome = pathname === "/";


    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    //need a function to toggle mobile drawer
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);

    };
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // helper: decides whether to scroll or route
  const renderNavLink = (item: { label: string; href: string }) => {
    return isHome ? (
      <a
        href={item.href}
        className={headingStyles.H4 + " hover:text-[#BE99F9] transition-all"}
      >
        {item.label}
      </a>
    ) : (
      <Link
        to={`/${item.href}`}
        className={headingStyles.H4 + " hover:text-[#BE99F9] transition-all"}
      >
        {item.label}
      </Link>
    );
  };

    return (
        <nav className={`sticky top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 ${ isScrolled ? "bg-white/70 glass py-2 shadow-lg" : "py-4"} `}>
            <div className="container px-6 mx-auto relative text-base  ">
                
                <div className="flex justify-between items-center">
                
                    {/*BRAND AREA: Logo + Name*/}
                    <Link to="/" className="flex items-center shrink-0">
                        <img className="h-10 w-10 mr-2"src={logo} alt="logo" />
                        <span className={headingStyles.H3}>Kosi Nebolisa</span>
                        </Link>
                
                    {/*NAV ITEMS*/}
                    <div className="hidden lg:flex items-center space-x-12">
                    <ul className="flex space-x-8">
                        {navItems.map((item, index) =>  ( 
                        <li key={index}>{renderNavLink(item)}</li>
                            ))}
                    </ul>
            {isHome ? (<Button variant="secondary"> <a href="#contactme" className="font-space">Get in touch</a> </Button>) : (<Button variant="secondary"> <Link to="/#contactme">Get in touch</Link> </Button>)}
        </div>

        {/*MOBILE NAVBAR ICON */}
        <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu /> }   </button>
        </div>
        </div>
        
        {mobileDrawerOpen && (<div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>{navItems.map((item, index) => (
                <li key={index} className="py-4">{renderNavLink(item)}
                </li>))}
            </ul>
            <div className="flex space-x-6">
                {isHome ? (<Button variant="secondary">
                    <a href="#contactme">Get in touch</a></Button>) : (<Button variant="secondary">
                    <Link to="/#contactme">Get in touch</Link></Button>)}
</div>
        </div>
        )}
        </div>
        </nav>

    )

};

export default Navbar;

