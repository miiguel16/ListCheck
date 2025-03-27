

export const Main = () => {
    return (

        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
                <h1 className="text-xl font-bold text-center">To-Do List</h1>
                <input type="text"
                placeholder="Tarea" 
                className="w-full p-2 border rounded mt-4"
                />
                <textarea
                    type="text"
                    placeholder="Description"
                    className="w-full p-2 border rounded mt-4"
                />
                <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">
                    Add Task
                </button>
                <div className="flex justify-center gap-2 mt-4 space-x-24">
                    <button className="border p-2 rounded">All</button>
                    <button className="border p-2 rounded">Pending</button>
                    <button className="border p-2 rounded">Completed</button>
                </div>
                {/* <ul className="mt-4">
                    <li className="flex items-center gap-2 border p-2 rounded mt-2">
                        <input type="checkbox" />
                        <span>Barrer</span>
                    </li>
                </ul> */}
            </div>

        </div>
    );
}