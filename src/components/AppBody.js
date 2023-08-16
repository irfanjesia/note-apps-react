import React from 'react';
import FieldCreate from './FieldCreate';
import NoteList from './NoteList';

export default function NoteBody({addNote, notes, onDelete, onArchive}) {
  return (
    <div className="note-app__body">
      <h2 className="text-center">Add New Note</h2>
      <FieldCreate addNote={addNote} />
      <h2>Active Note</h2>
      <NoteList
        notes={notes.filter (note => note.archived === false)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Archived Note</h2>
      <NoteList
        notes={notes.filter (note => note.archived === true)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}
