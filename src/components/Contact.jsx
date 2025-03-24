import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <>
        <motion.main initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:"easeOut"}}>
            <div className="mt-32 flex flex-col gap-36 md:flex-row md:gap-24">
                <div className="ml-10">
                    <div className="flex justify-start items-center">
                        <h1 className="text-white font-mono text-4xl text-center p-10">Contact Me</h1>
                        <DotLottieReact src="https://lottie.host/faded867-64d2-4d4f-adfe-5b10476714fb/9A2nTN6BzD.lottie" loop autoplay className="w-52"/>
                    </div>
                    <div>
                        <p className="text-white font-mono text-center p-8">Discuss a Project or just want to say Hi! My inbox is open for all.</p>
                        <p className="text-white font-mono text-center p-6 md:text-left">+91-7995934899</p>
                        <p className="text-white font-mono text-center p-6 text-2xl md:text-left">yatin4591@gmail.com</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <DotLottieReact src="https://lottie.host/0e7433d7-9d3a-4bd3-ad0a-184aae0bbb7f/9rniCeSyR0.lottie" loop autoplay className="w-72"/>
                </div>
            </div>
        </motion.main>
        
        <div>
        </div>
    </>
  )
}

export default Contact
