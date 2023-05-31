import { motion } from 'framer-motion';

export default function Header () {
    return(
        <div
        className="border-bottom border-2 border-gray-100 p-3"
        >
            <div className="mx-auto max-w-6xl">
            <div
            className="flex justify-between"
            >
                <motion.h1
                initial={{opacity: 0, translateX: -50}}
                animate={{opacity: 1, translateX: 0}}
                transition={{duration: 1.5}}
                className="text-2xl"
                >Clint Oka</motion.h1>
                <div className="space-x-5">
                <motion.button
                    initial={{opacity: 0, translateX: 50}}
                    animate={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.5}}
                    className="bg-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md"
                    >LinkedIn</motion.button>
                    <motion.button
                    initial={{opacity: 0, translateX: 50}}
                    animate={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.5, delay: .25}}
                    className="bg-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md"
                    >Git Hub</motion.button>
                </div>
            </div>
            </div>
           
        </div>
    )
}