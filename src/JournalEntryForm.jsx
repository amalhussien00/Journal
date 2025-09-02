import React, { useState } from "react";

const JournalEntryForm = ({ addEntry }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return;

        const newEntry = {
            id: Date.now(),
            title,
            content,
            date: new Date().toLocaleString(),
        };

        addEntry(newEntry);
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-xl shadow-md">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-3 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <textarea
                placeholder="Write your thoughts..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 mb-3 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                rows="4"
            />
            <button
                type="submit"
                className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition"
            >
                Add Entry
            </button>
        </form>
    );
};

export default JournalEntryForm;
