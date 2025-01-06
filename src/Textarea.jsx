import { useState } from "react";
import Warning from "./Warning";

const Textarea = () => {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const numOfCharacters = text.length;
  console.log(numOfCharacters);

  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarning("No script tags allowed!");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarning("No @ allowed!");
    }
    setText(newText);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        className="textarea"
        placeholder="put your text here"
      />
      <Warning warning={warning} />
    </>
  );
};

export default Textarea;
