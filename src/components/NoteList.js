import React from 'react';
import Note from './Note';

export default function NoteList({notes, onDelete, onArchive}) {
  if (notes.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <p>You haven't added a note yet</p>
      </div>
    );
  } else {
    return (
      <div className="notes-list">
        {notes.map (note => (
          <Note
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            archive={note.archived}
            {...note}
          />
        ))}
      </div>
    );
  }
}
