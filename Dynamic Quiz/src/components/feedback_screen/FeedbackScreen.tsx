import classes from './feedback_screen.module.css'
import { useNavigate } from 'react-router-dom';
import useFeedback from '../custom-hooks/feedback.hook';


const FeedbackScreen = () => {
  const navigate = useNavigate();
  const { state ,answer,length} = useFeedback();  
  return (
    <div className={classes.block}>
      <h3 className={`${classes.result} ${classes[String(state.correct)]}`}>Your Answer Is {String(state.correct).toUpperCase()}</h3>
      {state.correct ? <h3 className={`${classes.result} ${classes.true}`}> Keep Up The Good Work!💥 </h3> : <h3 className={`${classes.result} ${classes.true}`}>The Correct Answer is {answer}</h3>}
      <h3 className={classes.score}>Your Score Is : {state.score}/12</h3>
      <button className={classes.nextBtn} onClick={() => state.index == length ? navigate('/results') : navigate(`/q/:${state.index}`)}>{state.index == length ? 'End Quiz' : 'Next Question'}</button>
    </div>
  )
}

export default FeedbackScreen
