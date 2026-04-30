import { useState } from "react";

function PollForm({ addOption }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = text.trim();
        if (!value || !addOption) return;

        addOption(value);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your poll option"
                className="w-full rounded border border-gray-300 px-3 py-2 text-black"
            />
            <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Add Option
            </button>
        </form>
    );
}

export default PollForm;