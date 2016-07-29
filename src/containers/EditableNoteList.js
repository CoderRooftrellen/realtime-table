import { subscribe } from 'horizon-react';
import { connect } from 'react-redux'

import {addNote, editNote, saveNotes,refreshNotes } from '../actions'
import NoteList from '../components/notes/NoteList'

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNotesChange: (noteId, colKey, value) =>{
      dispatch(editNote(noteId, colKey, value));
    },
    onLastLineFocus: () => {
      dispatch(addNote());
    },
    onRefreshData: (notes) => {
      dispatch(refreshNotes(notes));
    }
  }
}

const EditableNoteList = connect(
    // mapDataToProps,
    mapStateToProps,
    mapDispatchToProps
)(NoteList)

export default EditableNoteList

// TODO Not sure how to save the refresh notes to redux store.
// NOTES, use the horizon origin api directly instead of horizon-react.

// //simple subscription to the collection "notes"
// const mapDataToProps = {
// notes: (hz, props) => hz('notes')
// };
//
// const EditableNoteList = subscribe({
// mapDataToProps,
// mapStateToProps,
// mapDispatchToProps
// })(NoteList)
