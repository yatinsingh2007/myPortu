import {motion} from 'framer-motion'
import { useState , useEffect} from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Skills = () => {
    const [loader,setLoader] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false)
        },2350)
        return () => clearInterval(timer)
    },[])
  return (
    <div>
        {loader ?  <div className="flex justify-center items-center pt-64">
        <DotLottieReact src="https://lottie.host/75353f69-e2e5-4de9-ade3-6cc6e701228b/xDzf00cBIp.lottie"
          loop
          autoplay
          className="w-64"
        />
        </div> :  <motion.main initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:'easeOut'}}>
            <div className="text-center flex flex-col justify-center items-center text-lg sm:ml-0 sm:text-xl">
            <div className="text-white font-mono text-3xl pb-20 pt-20">Techincal Skills</div>
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:mt-28">
                <motion.div initial = {{y : -100 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition = {{duration : 2 , ease : 'easeOut'}}>
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML" className="h-10"/>
                        <p className="text-white font-mono">HTML</p>
                    </div>
                </motion.div>
                <motion.div initial = {{y : 100 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition = {{duration : 2 , ease : 'easeOut'}}>
                    <div>
                        <img src="https://img.icons8.com/fluent/512/css3.png" alt="CSS" className="h-10"/>
                        <p className="text-white font-mono">CSS</p>
                    </div>
                </motion.div>
                <motion.div initial = {{y : -100 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition = {{duration : 2 , ease : 'easeOut'}}>
                <div>
                    <div className="flex justify-center items-center">
                        <img src="https://img.icons8.com/?size=100&id=RwtOBojoLS2N&format=png&color=000000" alt="JavaScript" className="h-10"/>
                    </div>
                    <p className="text-white font-mono">JavaScript</p>
                </div>
                </motion.div>
                <motion.div initial = {{y : 100 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition = {{duration : 2 , ease : 'easeOut'}}>
                <div className='flex flex-col justify-center'>
                    <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" className="h-10"/>
                    <p className="text-white font-mono">Python</p>
                </div>
                </motion.div>
                <motion.div initial = {{y : -100 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition = {{duration : 2 , ease : 'easeOut'}}>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=t5K2CR8feVdX&format=png&color=000000" alt="React" className="h-10"/>
                    <p className="text-white font-mono">React</p>
                </div>
                </motion.div>
                <motion.div initial = {{y : 100 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition = {{duration : 2 , ease : 'easeOut'}}>
                <div>
                    <img src='https://img.icons8.com/?size=100&id=8verEw3iUvx0&format=png&color=000000' alt='git' className='h-10'/>
                    <p className="text-white font-mono">Git</p>
                </div>
                </motion.div>
                <motion.div initial = {{y : -100 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition = {{duration : 2 , ease : 'easeOut'}}>
                <div className='flex flex-col justify-center'>
                    <img src='https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000' alt='git' className='h-10'/>
                    <p className="text-white font-mono">Tailwind</p>
                </div>
                </motion.div>
            </div>
        </div>
    </motion.main>}
    </div>
  );
}

export default Skills