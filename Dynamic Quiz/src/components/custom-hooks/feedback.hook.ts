import  { useContext } from 'react'
import { reducerContext } from '../../App';

const useFeedback= () => {
    const { state } = useContext(reducerContext);  
      const answer =  state.questions[state.index == 0 ? state.index : state.index - 1].correctChoice ;
      const length= state.questions.length;
  return {
  state,answer,length  
  }
}

export default useFeedback
