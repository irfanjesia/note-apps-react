import React from 'react';
import NoteContentHeader from './NoteContentHeader';
import NoteContentBody from './NoteContentBody';

export default function NoteContent({title, body, createdAt}) {
  return (
    <div className="note-item__content">
      <NoteContentHeader title={title} createdAt={createdAt} />
      <NoteContentBody body={body} />
    </div>
  );
}
