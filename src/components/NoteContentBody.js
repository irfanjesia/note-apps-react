import React from 'react';

export default function NoteContentBody({body}) {
  return (
    <div>
      <p className="note-item__body">{body}</p>
    </div>
  );
}
