import React from 'react';
import FieldSearch from './FieldSearch';

export default function NoteHeader({onSearch}) {
  return (
    <div className="note-app__header">
      <h1>Note Apps</h1>
      <FieldSearch onSearch={onSearch} />
    </div>
  );
}
