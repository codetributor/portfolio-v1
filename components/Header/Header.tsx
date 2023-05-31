export default function Header () {
    return(
        <div
        className="border-bottom border-2 border-gray-100 p-3"
        >
            <div className="mx-auto max-w-6xl">
            <div
            className="flex justify-between"
            >
                <h1
                className="text-2xl"
                >Clint Oka</h1>
                <div className="space-x-5">
                <button
                    className="bg-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md"
                    >LinkedIn</button>
                    <button
                    className="bg-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md"
                    >Git Hub</button>
                </div>
            </div>
            </div>
           
        </div>
    )
}