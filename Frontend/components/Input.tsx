import React, { useState, useRef, useEffect } from "react";
import { Input } from "@nextui-org/react";

function InputWithCursor(props) {
  const [value, setValue] = useState(props.value || "");
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  const handleFocus = () => {
    if (props.onFocus) {
      props.onFocus();
    }
  };

  const handleBlur = () => {
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && props.onEnter) {
      props.onEnter();
    }
  };

  const handleCursorPosition = () => {
    const input = inputRef.current;
    if (input) {
      const { selectionStart, selectionEnd } = input;
      input.setSelectionRange(selectionStart, selectionEnd);
    }
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      inputRef={inputRef}
      onClick={handleCursorPosition}
    />
  );
}

export default InputWithCursor;
