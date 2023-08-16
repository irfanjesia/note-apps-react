import React from 'react';

export default function FieldSearch({onSearch}) {
  return (
    <div>
      <form className="note-search">
        <input
          type="text"
          placeholder="Search..."
          onChange={event => onSearch (event.target.value)}
        />
      </form>
    </div>
  );
}
