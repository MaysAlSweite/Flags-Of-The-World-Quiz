import  { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { reducerContext } from '../../App';
import { EActionTypes } from '../reducers/types';

const useResults = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(reducerContext);

    const handlePlayAgain = () => {
        dispatch({ type: EActionTypes.RESET_INDEX, payload: {} })
        dispatch({ type: EActionTypes.SET_SCORE, payload: { score: state.score, operation: 'reset' } })
        navigate("/start");
    }
  return {
state,
  handlePlayAgain
  }
}

export default useResults
