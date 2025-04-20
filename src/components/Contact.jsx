import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {motion} from "framer-motion";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <>
        <motion.main initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:"easeOut"}}>
            <div className="mt-32 flex flex-col justify-start lg:text-xl md:gap-64">
                <div className="lg:ml-96 md:">
                    <div className="flex justify-start items-center">
                        <h1 className="text-white font-mono text-4xl text-center p-10">Contact Me</h1>
                        <DotLottieReact src="https://lottie.host/faded867-64d2-4d4f-adfe-5b10476714fb/9A2nTN6BzD.lottie" loop autoplay className="w-52"/>
                    </div>
                    <div>
                        <p className="text-white font-mono text-left p-4">Discuss a Project or just want to say Hi! My inbox is open for all.</p>
                        <p className="text-white font-mono text-left p-6 text-2xl md:text-left">yatin4591@gmail.com</p>
                        <div className="flex items-center justify-center p-4">
                        <div className="flex justify-start w-screen">
                            <div><a href="https://www.instagram.com/yatinsingh2007" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-3xl">
                            <FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </motion.main>
        
        <div>
        </div>
    </>
  )
}

export default Contact
