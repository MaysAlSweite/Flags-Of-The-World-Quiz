import classes from './resultsScreen.module.css';
import useResults from '../custom-hooks/results.hook';

const ResultsScreen = () => {
  const {
    state,
    handlePlayAgain
  }=useResults()
  return (
    <div className={classes.block}>
      <h3 className={classes.score}>End Of Quiz </h3>
      <h3 className={classes.score}>Your Final Score Is : {state.score}/12</h3>
      <h3 className={classes.note}>{state.score < 6 ? "Not Your First Time Failing A Quiz, Huh ? 😉" : "GG! Winner winner 🎉"}</h3>
      <button className={classes.playAgain} onClick={() => { handlePlayAgain() }}>Play Again</button>
    </div>
  )
}

export default ResultsScreen
