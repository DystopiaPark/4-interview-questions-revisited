import React from "react";
import { HiTrash } from "react-icons/hi";

const TrashCan = ({ el, handleDelete }) => {
  return (
    <span>
      <HiTrash
        onClick={() => {
          if (
            window.confirm("Are you sure you want to delete this question?")
          ) {
            handleDelete(el.id);
          }
        }}
      />
    </span>
  );
};

export default TrashCan;
