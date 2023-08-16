import React from 'react';

export default class NoteInput extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      body: '',
      maxLength: 50,
      characterValidation: 50,
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind (this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind (this);
    this.onSubmitHandler = this.onSubmitHandler.bind (this);
  }
  onTitleChangeHandler (event) {
    this.setState (previousState => {
      while (event.target.value.length <= this.state.maxLength) {
        return {
          ...previousState,
          title: event.target.value,
          characterValidation: this.state.maxLength - event.target.value.length,
        };
      }
    });
  }
  onBodyChangeHandler (event) {
    this.setState (previousState => {
      return {
        ...previousState,
        body: event.target.value,
      };
    });
  }
  onSubmitHandler (event) {
    event.preventDefault ();
    this.props.addNote (this.state);
    this.setState (() => {
      return {
        title: '',
        body: '',
        maxLength: 50,
        characterValidation: 50,
      };
    });
  }
  render () {
    return (
      <div>
        <form className="note-input" onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Remaining Character (title): {this.state.characterValidation}
          </p>
          <input
            type="text"
            className="note-input__title"
            onChange={this.onTitleChangeHandler}
            placeholder="Note Title"
            value={this.state.title}
            required
          />
          <textarea
            className="note-input__body"
            onChange={this.onBodyChangeHandler}
            placeholder="Note Description"
            value={this.state.body}
            required
          />
          <button type="submit" className="note-input__button">
            <p>Add Note</p>
          </button>
        </form>
      </div>
    );
  }
}
