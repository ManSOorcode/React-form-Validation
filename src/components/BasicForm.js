import { useState } from "react";

const BasicForm = (props) => {
  const [enterNameState, setEnterNamestate] = useState("");
  const [enterLastNameState, setEnterLastNamestate] = useState("");
  const [enterEmailState, setEnterEmailstate] = useState("");

  const [enterNameBlurState, setEnterNameBlurstate] = useState(false);
  const [enterLastNameBlurState, setEnterLastNameBlurstate] = useState(false);
  const [enterEmailBlurState, setEnterEmailBlurstate] = useState(false);

  const enterNameIsValid = enterNameState.trim() !== "";
  const nameInputIsInvalid = !enterNameIsValid && enterNameBlurState;

  const enterLastNameIsValid = enterLastNameState.trim() !== "";
  const lastNameInputIsInvalid =
    !enterLastNameIsValid && enterLastNameBlurState;

  const enterEmailIsValid = enterEmailState.trim().includes("@");
  const emailInputIsInvalid = !enterEmailIsValid && enterEmailBlurState;

  const inValidNameClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const inValidLastNameClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const inValidEmailClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const enterNameHandler = (e) => {
    setEnterNamestate(e.target.value);
  };

  const enterNameBlurHandler = () => {
    setEnterNameBlurstate(true);
  };

  const enterLastNameHandler = (e) => {
    setEnterLastNamestate(e.target.value);
  };

  const enterLastNameBlurHandler = () => {
    setEnterLastNameBlurstate(true);
  };

  const enterEmailHandler = (e) => {
    setEnterEmailstate(e.target.value);
  };

  const enterEmailBlurHandler = () => {
    setEnterEmailBlurstate(true);
  };

  let formIsValid = false;

  if (enterNameState && enterEmailState && enterLastNameState) {
    formIsValid = true;
  }

  const onValueSubmitHandler = (e) => {
    e.preventDefault();

    setEnterNameBlurstate(true);
    setEnterEmailBlurstate(true);
    setEnterLastNameBlurstate(true);

    if (!enterEmailIsValid) {
      return;
    }

    setEnterNamestate("");
    setEnterLastNamestate("");
    setEnterEmailstate("");

    setEnterNameBlurstate(false);
    setEnterLastNameBlurstate(false);

    setEnterEmailBlurstate(false);
  };

  return (
    <form onSubmit={onValueSubmitHandler}>
      <div className="control-group">
        <div className={inValidNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name "
            value={enterNameState}
            onChange={enterNameHandler}
            onBlur={enterNameBlurHandler}
          />
        </div>
        {nameInputIsInvalid && (
          <p className="error-text">Input Field must not be empty 'name'</p>
        )}
        <div className={inValidLastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enterLastNameState}
            onChange={enterLastNameHandler}
            onBlur={enterLastNameBlurHandler}
          />
        </div>
        {lastNameInputIsInvalid && (
          <p className="error-text">Input Field must not be empty 'last'</p>
        )}
      </div>
      <div className={inValidEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enterEmailState}
          onChange={enterEmailHandler}
          onBlur={enterEmailBlurHandler}
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">Input Field must contain '@'</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
