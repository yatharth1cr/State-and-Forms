function ComponentOne() {
  return (
    <form method="submit">
      <label>Text Input</label>
      <input id="text" type="text" name="text" />
      <label>Date Input</label>
      <input id="date" type="date" name="date" />
      <label>File Input</label>
      <input id="file" type="file" name="file" /> <label>Read Only Input</label>
      <input
        id="readOnly"
        type="text"
        name="readOnly"
        value="This is read only attribute"
        readOnly
      />
      <label>Disabled Input</label>
      <input id="disabledInp" type="text" name="disabledInp" disabled />
      <label>Textarea</label>
      <textarea id="textarea" name="textarea" />
      <label>Textarea Disabled</label>
      <textarea id="disabledTextArea" name="disabledTextArea" disabled />
    </form>
  );
}

export default ComponentOne;
