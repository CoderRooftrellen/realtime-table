import React, { PropTypes } from 'react'
import Note from './Note';
import { Button } from 'antd';

const NoteList = ({horizon, notes, onNotesChange, onLastLineFocus}) => {
  const collection = horizon('notes');
  const saveNotes = (notes) => {
    notes.pop(); //pop the empty line
    collection.store(notes);
    //collection.upsert(notes);
  }
  
  let notesjsx = notes.map((note, i) => {
    if (i < notes.length-1)
      return <Note {...note} key={note.id} onNoteChange={(colKey, value) => onNotesChange(note.id, colKey, value)} />
    else 
      return <Note {...note} key={note.id} onNoteChange={(colKey, value) => onNotesChange(note.id, colKey, value)} lastLine="true" onLastLineFocus={onLastLineFocus}/>
  });

  return (
      <div>
        {notesjsx}
        <div>
        <Button type="primary" size="large" onClick={() => saveNotes(notes)} >
          Save
        </Button>
        </div>
      </div> );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      player: PropTypes.arrayOf(PropTypes.string),
      club: PropTypes.arrayOf(PropTypes.string),
      gender: PropTypes.string
    }).isRequired).isRequired,
    onNotesChange: PropTypes.func.isRequired,
    onLastLineFocus: PropTypes.func.isRequired,
  }

export default NoteList