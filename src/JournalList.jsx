import React from "react";

export default function JournalList({ entries, deleteEntry }) {
    if (!entries.length)
        return <p className="text-left mt-6">No journal entries yet</p>;

    return (
        <div className="mt-6 flex flex-col gap-4">
            {entries.map((entry) => (
                <div
                    key={entry.id}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md"
                >
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold">{entry.title}</h3>
                        <button
                            onClick={() => deleteEntry(entry.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                        >
                            Delete
                        </button>
                    </div>
                    <small className="text-gray-500">{entry.date}</small>
                    <p className="mt-2">{entry.content}</p>
                </div>
            ))}
        </div>
    );
}
