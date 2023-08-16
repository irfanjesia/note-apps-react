import React from 'react';
import NoteContent from './NoteContent';
import ButtonAction from './ButtonAction';

export default function Note({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className="note-item">
      <NoteContent title={title} body={body} createdAt={createdAt} />
      <ButtonAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}
