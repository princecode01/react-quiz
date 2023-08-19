function Question({ curQuestion, answer, dispatch }) {
  const { question, options, correctOption } = curQuestion;
  const hasAnswered = answer !== null;
  return (
    <div>
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
            }`}
            disabled={hasAnswered}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
