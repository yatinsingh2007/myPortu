import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
const Home = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center pt-72">
        <DotLottieReact
          src="https://lottie.host/75353f69-e2e5-4de9-ade3-6cc6e701228b/xDzf00cBIp.lottie"
          loop
          autoplay
          className="w-64"
        />
        </div>
      ) : (
        <motion.main initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:"easeOut"}}>
          <main className=" text-white h-screen px-3">
            <div className="flex flex-col justify-center items-center gap-36 pt-32 lg:gap-48">
              <div className="flex gap-10">
                <div className="font-mono py-15 px-24 md:px-16 md:text-lg pl-16 pr-0">
                  <div className="pb-10 text-4xl font-bold">
                      <h1 className="font-mono" style={{fontSize : '3rem',lineHeight:'70px'}}>Hey !,I am Yatin Singh</h1>
                  </div>
                  <div className="pb-12 text-xl pt-8">
                    <h3>Aspiring Web Developer</h3>
                  </div>
                  <div>
                      <p fontSize = {{fontSize : '2rem'}}>
                        Passionate about web development, I have solved 100+ questions on LeetCode and
                        hold a 725+ rating on Codeforces, constantly refining my problem-solving skills.
                      </p>
                  </div>
                </div>
                <div>
                <DotLottieReact src="https://lottie.host/7738cf09-a7b9-4bf6-bbe7-962cffe2e1cc/PQ2riw0yMH.lottie" loop autoplay className="pr-8 w-96"/>

                </div>
              </div>
              <div className="flex gap-32">
                <div className="pb-10"><a href="https://www.linkedin.com/in/yatin-singh-b37817323/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0392 19.0433H16.0775V14.4025C16.0775 13.2958 16.055 11.8717 14.5342 11.8717C12.99 11.8717 12.7542 13.0758 12.7542 14.3208V19.0433H9.7925V9.5H12.6375V10.8008H12.6758C13.0733 10.0508 14.04 9.25917 15.4842 9.25917C18.485 9.25917 19.04 11.2342 19.04 13.805V19.0433H19.0392ZM6.4475 8.19417C5.49417 8.19417 4.72833 7.4225 4.72833 6.47333C4.72833 5.525 5.495 4.75417 6.4475 4.75417C7.3975 4.75417 8.1675 5.525 8.1675 6.47333C8.1675 7.4225 7.39667 8.19417 6.4475 8.19417ZM7.9325 19.0433H4.9625V9.5H7.9325V19.0433ZM20.5208 2H3.47583C2.66 2 2 2.645 2 3.44083V20.5592C2 21.3558 2.66 22 3.47583 22H20.5183C21.3333 22 22 21.3558 22 20.5592V3.44083C22 2.645 21.3333 2 20.5183 2H20.5208Z" fill="currentColor"></path></svg></a></div>
                    <div><a href="https://github.com/yatinsingh2007"><svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3946_13541)"><path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31277 4.95851 9.15444 4.84519 10 4.844C10.85 4.848 11.705 4.959 12.504 5.181C14.413 3.885 15.251 4.154 15.251 4.154C15.797 5.533 15.453 6.552 15.351 6.805C15.991 7.505 16.379 8.4 16.379 9.493C16.379 13.341 14.04 14.188 11.813 14.436C12.172 14.745 12.491 15.356 12.491 16.291C12.491 17.629 12.479 18.71 12.479 19.038C12.479 19.306 12.659 19.618 13.167 19.52C15.1583 18.8521 16.8893 17.5753 18.1155 15.87C19.3416 14.1648 20.0009 12.1173 20 10.017C20 4.484 15.522 0 10 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_3946_13541"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg></a></div>
                    <div><a href="https://codeforces.com/profile/yatinsingh2007"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.86133" y="8.43945" width="4.73035" height="9.46094" rx="1" fill="currentColor"></rect><rect x="9.05859" y="4.58984" width="4.73035" height="13.311" rx="1" fill="currentColor"></rect><rect x="15.2559" y="9.75977" width="4.73035" height="8.14062" rx="1" fill="currentColor"></rect></svg></a></div>
                    <div><a href="https://leetcode.com/u/yatinsingh2007/"><svg width="24" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3946_13658)"><path d="M18.7503 11.9625C18.7503 11.3442 18.2803 10.8408 17.7003 10.8408H9.31367C8.73367 10.8408 8.26367 11.3442 8.26367 11.9625C8.26367 12.5808 8.73284 13.0842 9.31367 13.0842H17.7003C18.2803 13.085 18.7503 12.5817 18.7503 11.9625Z" fill="currentColor"></path><path d="M3.31898 15.1567L6.91315 18.7908C7.72398 19.6067 8.84482 20.0008 10.0823 20.0008C11.3198 20.0008 12.4407 19.5742 13.2532 18.7558L15.4098 16.5583C15.8348 16.13 15.8198 15.4208 15.3773 14.975C14.9348 14.5292 14.2315 14.5142 13.8073 14.9425L11.5773 17.115C11.1923 17.5042 10.659 17.6667 10.0698 17.6667C9.48065 17.6667 8.94815 17.5042 8.56148 17.115L4.97982 13.4792C4.59398 13.09 4.39982 12.5208 4.39982 11.9267C4.39982 11.3325 4.59398 10.7958 4.97982 10.4067L8.55065 6.75666C8.93648 6.36749 9.48065 6.21916 10.069 6.21916C10.6573 6.21916 11.1907 6.38166 11.5765 6.77083L13.8065 8.94249C14.2315 9.37166 14.9348 9.35666 15.3773 8.91083C15.8198 8.46416 15.8348 7.75499 15.4098 7.32666L13.2532 5.12999C12.7123 4.59166 12.0273 4.19999 11.2598 4.02166L11.2315 4.01582L13.2707 1.92999C13.6973 1.50166 13.6823 0.791658 13.2398 0.345824C12.7973 -0.100009 12.0932 -0.114176 11.6673 0.314158L3.31898 8.73083C2.50815 9.54916 2.08398 10.6783 2.08398 11.9267C2.08398 13.175 2.50815 14.34 3.31898 15.1567Z" fill="currentColor"></path><path d="M6.07447 17.9418L3.31898 15.1557C2.50815 14.339 2.08398 13.174 2.08398 11.9257C2.08398 10.6774 2.50815 9.54818 3.31898 8.72985L11.6673 0.313181C12.0932 -0.115152 12.7973 -0.100986 13.2398 0.344848C13.6823 0.790681 13.6973 1.50068 13.2707 1.92901L11.2315 4.01485L8.55065 6.75568L4.97982 10.4057C4.59398 10.7949 4.39982 11.3315 4.39982 11.9257C4.39982 12.5198 4.59398 13.089 4.97982 13.4782L7.74887 16.2891C8.19973 16.7468 8.20001 17.4815 7.74951 17.9395C7.28948 18.4072 6.53578 18.4083 6.07447 17.9418Z" fill="currentColor"></path></g><defs><clipPath id="clip0_3946_13658"><rect width="20" height="20" fill="white" transform="translate(0.416992)"></rect></clipPath></defs></svg></a></div>
                </div>
            </div>
          </main>
        </motion.main>
      )}
    </div>
  );
};

export default Home;