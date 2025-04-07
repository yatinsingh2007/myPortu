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
                    <form>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <input
                            type="text"
                            placeholder="Name"
                            className="p-3 w-72 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                            />
                            <div className="flex flex-col items-center justify-center gap-3 text-left">
                                <label className="text-gray-500 text-sm mt-1 mb-2">
                                Email
                                </label>
                                <input
                                type="email"
                                placeholder="Email"
                                className="p-3 w-72 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                />
                            </div>
                            <legend className="text-gray-500 text-sm mt-1 mb-2">
                            Your message will be sent to my email.
                            </legend>
                            <textarea
                            placeholder="Your message..."
                            className="p-3 w-72 h-32 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                            ></textarea>
                            <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 px-6 rounded-md hover:bg-blue-600 transition-all duration-300"
                            >
                            Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.main>
        
        <div>
        </div>
    </>
  )
}

export default Contact
