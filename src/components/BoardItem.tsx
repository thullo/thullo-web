import React from "react";
import { useNavigate } from "react-router-dom";

interface Board {
  img: string;
  boardName: string;
  collaborators: string[];
}

const BoardItem = ({ img, boardName, collaborators }: Board) => {
  const navigate = useNavigate();

  return (
    <div className="bg-color-white p-3 rounded-lg ">
      <img
        src={img}
        alt="board-img"
        className="rounded-lg cursor-pointer w-full h-[9rem]"
        onClick={() => {
          navigate(`/user/board/${boardName}`);
        }}
      />
      <p
        className="font-medium text-base my-3 cursor-pointer"
        onClick={() => {
          navigate(`/user/board/${boardName}`);
        }}
      >
        {boardName}
      </p>
      <div className="flex items-center">
        {collaborators.slice(0, 3).map((src, i) => {
          return (
            <img
              src={src}
              alt="collab-img"
              key={i}
              className={`w-11 h-11 mr-1 sm:w-9 sm:h-9 first:ml-0 -ml-3 relative rounded-full ${
                i === 0 ? "z-20" : i === 1 ? "z-10" : "z-0"
              }`}
            />
          );
        })}
        {collaborators.slice(3).length > 0 && (
          <p className="ml-1">
            + {collaborators.slice(3).length}{" "}
            {collaborators.slice(3).length === 1 ? "person" : "people"}
          </p>
        )}
      </div>
    </div>
  );
};

export default BoardItem;
