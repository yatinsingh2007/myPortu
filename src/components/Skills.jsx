import {motion} from 'framer-motion'
const Skills = () => {
  return (
    <motion.main initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:'easeOut'}}>
        <div className="text-center bg-black h-screen">
        <div className="text-white font-mono text-3xl pb-20 pt-20">Techincal Skills</div>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:mt-28">
            <div>
                <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML" className="h-10"/>
                <p className="text-white font-mono">HTML</p>
            </div>
            <div>
                <img src="https://img.icons8.com/fluent/512/css3.png" alt="CSS" className="h-10"/>
                <p className="text-white font-mono">CSS</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <img src="https://img.icons8.com/?size=100&id=RwtOBojoLS2N&format=png&color=000000" alt="JavaScript" className="h-10"/>
                </div>
                <p className="text-white font-mono">JavaScript</p>
            </div>
            <div>
                <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" className="h-10"/>
                <p className="text-white font-mono">Python</p>
            </div>
            <div>
                <img src="https://img.icons8.com/?size=100&id=t5K2CR8feVdX&format=png&color=000000" alt="React" className="h-10"/>
                <p className="text-white font-mono">React</p>
            </div>
            <div>
                <img src='https://img.icons8.com/?size=100&id=8verEw3iUvx0&format=png&color=000000' alt='git' className='h-10'/>
                <p className="text-white font-mono">Git</p>
            </div>
        </div>
        </div>
    </motion.main>
  );
}

export default Skills