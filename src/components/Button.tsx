
import type {ReactNode }  from "react";
type ButtonVariant = "primary" | "secondary" | "third";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
}


const Button = ({children, variant = "primary"}: ButtonProps) => {

    const baseStyle = "py-1.5 px-3 text-sm rounded-full font-sm cursor-pointer transition duration-200";

    const variants: Record<ButtonVariant, string> = {
        primary: "bg-black text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-600 hover:scale-[1.02] transition-all duration-300 ease-in-out whitespace-nowrap",
        secondary: "border border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white transition-all duration-300 whitespace-nowrap",
        third:
        "bg-[#BE99F9] text-white border border-[#BE99F9] hover:bg-[#914DFF] hover:border-neutral-600 hover:scale-[1.02] transition-all duration-300 ease-in-out whitespace-nowrap",
    };
  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
        {children}
    </button>
  );
};

export default Button
