import React, { useState } from "react";
import JournalList from "./JournalList";

export default function App() {
    const [entries, setEntries] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const addEntry = () => {
        if (!title.trim() || !content.trim()) return;
        const newEntry = {
            id: Date.now(),
            title,
            content,
            date: new Date().toLocaleDateString(),
        };
        setEntries([newEntry, ...entries]);
        setTitle("");
        setContent("");
    };

    const deleteEntry = (id) => {
        setEntries(entries.filter((entry) => entry.id !== id));
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-6 flex items-center gap-2">
                🌸 my journal 🌸
            </h1>

            {/* Input area */}
            <div className="w-full max-w-lg flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Title me!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Fill me with thoughts, ideas, dreams or even delusions :)"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="10"
                />

                <div className="flex justify-end">
                    <button onClick={addEntry}>Save</button>
                </div>

                {/* Journal entries */}
                <JournalList entries={entries} deleteEntry={deleteEntry} />
            </div>
        </div>
    );
}
