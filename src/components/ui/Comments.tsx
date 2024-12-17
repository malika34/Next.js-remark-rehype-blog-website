"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Mock account names
const accountNames = ["Ali", "Sarah", "JohnDoe", "TechMaster", "Coder123"];

// Utility function to generate a random color for avatars
const getRandomColor = () => {
  const colors = ["#FFB6C1", "#FFAB76", "#77DD77", "#AEC6CF", "#FFD700"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Comments: React.FC = () => {
  // State to hold user comments and account names
  const [comments, setComments] = useState<{ name: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState<string>("");

  // Function to add a new comment
  const addComment = () => {
    if (input.trim()) {
      const randomName =
        accountNames[Math.floor(Math.random() * accountNames.length)];
      setComments([...comments, { name: randomName, text: input }]);
      setInput("");
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-black rounded-md shadow-md max-w-3xl mt-5 mx-auto">
      <h3 className="text-[1.5rem] font-bold text-gray-700 dark:text-white mb-5">
        💬 Comments Section
      </h3>
      <div className="flex items-center gap-3 mb-4">
        {/* Input box for user to type a comment */}
        <input
          type="text"
          placeholder="Write your thoughts..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        {/* Submit Button */}
        <Button
          onClick={addComment}
          className="bg-black dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Submit
        </Button>
      </div>

      {/* Display the list of comments */}
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 bg-white dark:bg-stone-900 shadow-sm rounded-lg"
          >
            {/* Avatar */}
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg"
              style={{ backgroundColor: getRandomColor() }}
            >
              {comment.name.charAt(0)}
            </div>
            {/* Comment Content */}
            <div>
              <p className="text-black dark:text-white font-semibold">
                {comment.name}
              </p>
              <p className="text-gray-700 dark:text-white">{comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
