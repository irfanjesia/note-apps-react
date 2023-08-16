import React from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchive';

export default function ButtonAction({id, onDelete, onArchive, archived}) {
  return (
    <div className="note-item__action">
      <ButtonDelete id={id} onDelete={onDelete} />
      <ButtonArchive id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
}
