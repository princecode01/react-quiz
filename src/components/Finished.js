function Finished({ points, maxPoints, highScore,dispatch }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage < 100 && percentage >= 80) emoji = "🎉";
  if (percentage < 80 && percentage >= 50) emoji = "🙂";
  if (percentage < 50 && percentage >= 0) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong> ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'restart'})}>Restart</button>
    </>
  );
}

export default Finished;
