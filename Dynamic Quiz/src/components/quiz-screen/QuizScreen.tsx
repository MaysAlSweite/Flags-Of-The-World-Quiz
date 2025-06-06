import classes from './quiz_screen.module.css'
import useQuizScreen from '../custom-hooks/quizScreen.hook';


const QuizScreen = () => {
    const {
        questionId,
        question,
        handleSubmit,
        handleChange,
        answer
    } = useQuizScreen();
    return (

        <div key={questionId} className={classes.quizScreen}>
            <div className={classes.img} ><img src={question.imgLink} alt="" /></div>
            <ul className={classes.choices} id='choices' key={questionId}>
                {question.choices.map((choice, index) => {
                    return (
                        <li className={classes.listItem} key={index}>
                            <label key={index} htmlFor={index + 'choice'} id='ch' className={classes.choice}>
                                <input
                                    value={choice}
                                    onChange={handleChange} type="radio" name='choice' id={index + 'choice'} />{choice} </label>
                        </li>
                    )
                })}
            </ul>

            <button className={classes.submit} onClick={() => {
                handleSubmit(answer);

            }}>Submit</button>

        </div>
    )

}

export default QuizScreen
