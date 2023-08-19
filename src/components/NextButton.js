function NextButton({ dispatch, answer, index, length }) {
  if (answer===null) return null;
  return (
    <>
      {index + 1 !== length ? (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </>
  );
}

export default NextButton;
