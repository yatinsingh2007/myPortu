import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
const Navbar = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {!loader && 
      <motion.main initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:"easeOut"}}>
        <header>
        <nav className="bg-black flex justify-center font-mono px-5 py-5 text-white opacity-70 items-center" style={{fontSize : '1.5rem'}}>
          <div className="flex gap-20 md:gap-10">
            <div className="p-2 hover:bg-white rounded-md hover:text-black"><Link to="/home" className="group-hover:text-black px-2">Home</Link></div>
            <div className="p-2 hover:bg-white rounded-md hover:text-black"><Link to="/skills" className="group-hover:text-black px-2">Skills</Link></div>
            <div className="p-2 hover:bg-white rounded-md hover:text-black"><Link to="/" className="group-hover:text-black px-2">Projects</Link></div>
            <div className="p-2 hover:bg-white rounded-md hover:text-black"><Link to="/contact" className="group-hover:text-black px-2">Contact</Link></div>
          </div>
        </nav>
      </header>
      </motion.main>}
    </div>
  );
}

export default Navbar;