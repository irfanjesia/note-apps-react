import React from 'react';

export default function ButtonArchive({id, onArchive, archived}) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchive (id)}
    >
      <p>{archived ? 'Mark as Active' : 'Archive'}</p>
    </button>
  );
}
