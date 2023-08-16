import React from 'react';

export default function ButtonDelete({id, onDelete}) {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete (id)}>
      <p>Delete</p>
    </button>
  );
}
