import { motion } from 'framer-motion';

export default function Hero() {
    return(
        <div>
            <div
            className="h-[74vh] flex flex-col items-end justify-end"
            >
                
                
                <motion.div
                initial={{ opacity: 0, translateX: -200}}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ duration: 1.5, type: "spring", ease: "easeInOut", delay: 1}}
                className="bg-yellow-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-16 md:px-32 h-12 md:h-24 flex items-center"
                ><p>Tailwindcss</p></motion.div>
                <motion.div
                initial={{ opacity: 0, translateX: -200}}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ duration: 1.5, type: "spring", delay: .75}}
                className="bg-green-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-32 md:px-64 h-12 md:h-28 flex items-center"
                ><p>Nextjs</p></motion.div>
                <motion.div
                initial={{ opacity: 0, translateX: -200}}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ duration: 1.5, type: "spring", delay: .5}}
                className="bg-teal-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-28 md:px-48 h-28 md:h-56 flex items-center"
                ><p>React</p></motion.div>
                <motion.div
                initial={{ opacity: 0, translateX: -200}}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ duration: 1.5, type: "spring", delay: .25}}
                className="bg-blue-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-24 md:px-60 h-16 md:h-36 flex items-center"
                ><p>Nodejs | Express</p></motion.div>
                <motion.div
                initial={{ opacity: 0, translateX: -200}}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ duration: 1.5, type: "spring"}}
                className="m-1 shadow-2xl hover:scale-105 transition-all bg-purple-400 text-white rounded-md md:text-3xl px-28 md:px-64 h-20 md:h-48 flex items-center"
                ><p>Firebase | Solidity</p></motion.div>
            </div>
        </div>
    )
}