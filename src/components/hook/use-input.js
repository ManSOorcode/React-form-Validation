import { useState } from "react";

const useInput = (condition) => {
  const [enterInputState, setEnterInputstate] = useState("");
  const [enterInputBlurState, setEnterInputBlurstate] = useState(false);

  const enterInputIsValid = condition(enterInputState);
  const inputIsInvalid = !enterInputIsValid && enterInputBlurState;

  const inValidInputClasses = inputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const enterInputHandler = (e) => {
    setEnterInputstate(e.target.value);
  };

  const enterInputBlurHandler = () => {
    setEnterInputBlurstate(true);
  };

  const changeSetOfBlurHandler = () => {
    setEnterInputBlurstate(true);
  };

  const resetState = () => {
    setEnterInputstate("");
    setEnterInputBlurstate(false);
  };

  return {
    valid: enterInputState,
    isValid: enterInputIsValid,
    inValid: inputIsInvalid,
    inValidClasses: inValidInputClasses,
    enterInputHandler,
    enterInputBlurHandler,
    changeSetOfBlurHandler,
    resetState,
  };
};

export default useInput;
