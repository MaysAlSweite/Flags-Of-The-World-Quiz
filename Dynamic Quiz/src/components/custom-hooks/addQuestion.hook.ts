import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { reducerContext } from '../../App';
import { Question, questionsData, EActionTypes } from '../reducers/types';

const useAddQuestion = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(reducerContext);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const img = formData.get('img') as string;
        const correctChoice = formData.get('correctChoice') as string;
        const choices = formData.get('choices') as string;
        const newQuestion: Question = {
            id: state.questions.length + 1,
            imgLink: img,
            choices: choices.split(','),
            correctChoice: correctChoice
        }
        questionsData.push(newQuestion);
        dispatch({ type: EActionTypes.ADD_QUESTION, payload: { questions: questionsData } });
        event.currentTarget.reset();
        alert('Question Added Successfully!');
        navigate('/start');
    }
  return (
      handleSubmit
  )
}

export default useAddQuestion
