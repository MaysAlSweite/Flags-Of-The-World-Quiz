import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { reducerContext } from '../../App';
import { questionsData, EActionTypes } from '../reducers/types';

const useQuizScreen = () => {

    const navigate = useNavigate();
    const [answer, setAnswer] = React.useState<string>("no-answer");
    const { state, dispatch } = useContext(reducerContext);

    let params = useParams()
    const cleanIndex = (params.index || "").replace(":", "");
    const questionId = parseInt(cleanIndex || "0", 10);
    const question = questionsData[questionId];

    const handleSubmit = (answer: string) => {
        if (answer !== question.correctChoice || answer === 'no-answer') {
            dispatch({ type: EActionTypes.SET_CORRECT, payload: { operation: 'F', correct: false } })
            dispatch({ type: EActionTypes.SET_SCORE, payload: { operation: 'DEC', score: state.score } })
        }
        else {
            dispatch({ type: EActionTypes.SET_SCORE, payload: { operation: 'INC', score: state.score } })
            dispatch({ type: EActionTypes.SET_CORRECT, payload: { operation: 'T', correct: true } })
        }

        dispatch({ type: EActionTypes.SET_INDEX, payload: { index: state.index } })

        navigate('/feedback');
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value.toString());
    }
  return{
    questionId,
    question,
    handleSubmit,
    handleChange,
    answer
  }
}

export default useQuizScreen
