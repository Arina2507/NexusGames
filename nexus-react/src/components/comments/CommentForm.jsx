import React, { useState, useEffect } from 'react';

const CommentForm = ({
  submitLabel,
  handleSubmit,
  initialText = '',
  hasCancelButton,
  handleCancel,
}) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit(text);
  };

  return (
    <form onSubmit={handleSubmitForm} className="comment-form">
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={handleChange}
        rows="3"
        placeholder="Write a comment..."
        required
      />
      <button type="submit" className="comment-form-button">
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button type="button" className="comment-form-cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;