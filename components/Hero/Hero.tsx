export default function Hero() {
    return(
        <div>
            <div
            className="h-[74vh] flex flex-col items-end justify-end"
            >
                
                
                <div
                className="bg-yellow-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-16 md:px-32 h-12 md:h-24 flex items-center"
                ><p>Tailwindcss</p></div>
                <div
                className="bg-green-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-32 md:px-64 h-12 md:h-28 flex items-center"
                ><p>Nextjs</p></div>
                <div
                className="bg-teal-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-28 md:px-48 h-28 md:h-56 flex items-center"
                ><p>React</p></div>
                <div
                className="bg-blue-400 hover:scale-105 transition-all shadow-2xl text-white m-1 md:text-3xl rounded-md px-24 md:px-60 h-16 md:h-36 flex items-center"
                ><p>Nodejs | Express</p></div>
                <div
                className="m-1 shadow-2xl hover:scale-105 transition-all bg-purple-400 text-white rounded-md md:text-3xl px-28 md:px-64 h-20 md:h-48 flex items-center"
                ><p>Firebase | Solidity</p></div>
            </div>
        </div>
    )
}