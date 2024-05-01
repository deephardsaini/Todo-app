import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState(""); // Fix: Use square brackets for destructuring

    console.log(input);

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]); // Fix: Correct the function name to setTaskList
    };

    return (
        <>
            <form className="flex flex-row items-center gap-3">
                <input
                    className="border rounded-lg py-1.5 px-2.5 text-lg"
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    className="bg-violet-400 text-white py-1.5 px-3.5 rounded-lg font-semibold hover:opacity-70"
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </form>
        </>
    );
};

export default Input;
