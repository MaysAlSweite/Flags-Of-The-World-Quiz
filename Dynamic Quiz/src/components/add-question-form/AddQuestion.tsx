import classes from './add_question.module.css'
import { useNavigate } from 'react-router-dom';
import useAddQuestion from '../custom-hooks/addQuestion.hook';

const AddQuestionForm = () => {
    const navigate = useNavigate();
    const handleSubmit = useAddQuestion();
    return (
        <form onSubmit={handleSubmit} className={classes.addQuestionForm}>
            <div className="title"><h1>Add New Question</h1></div>
            <div className={classes.form}>
                <label htmlFor="flagImg" className={classes.label}>Enter The Flag Img Link</label>
                <input type="input" id="flagImg" name="question" className={classes.input} required />
            </div>
            <div className={classes.form}>
                <label htmlFor="correctChoice" className={classes.label}>Enter The Correct Choice</label>
                <input type="text" id="correctChoice" name="correctChoice" className={classes.input} required />
            </div>
            <div className={classes.choices}>
                <label htmlFor="choices" className={classes.label}>Enter 4 Choices <small>comma seperated </small></label>
                <input type="text" id="choices" name="choices" className={classes.input} required />

            </div>
            <button type="submit" className={classes.submitButton}>Add Question</button>
            <button type="submit" className={classes.start} onClick={() => { navigate('/start') }}>Start Quiz </button>
        </form>
    )
}

export default AddQuestionForm
