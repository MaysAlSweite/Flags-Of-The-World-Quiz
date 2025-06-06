import { EActionTypes, IState, IAction } from './types'
const questionsReducer = (state: IState, action: IAction): IState => {

    switch (action.type) {

        case EActionTypes.SET_INDEX: {
            return {
                ...state,
                index: action.payload.index + 1
            }
        }
        case EActionTypes.RESET_INDEX: {
            return {
                ...state,
                index: 0
            }
        }
        case EActionTypes.SET_SCORE: {
            if (action.payload.operation === 'INC') {
                return {
                    ...state,
                    score: state.score + 2
                }
            }
            else if (action.payload.operation === 'DEC' && state.score > 0) {
                return {
                    ...state,
                    score: state.score - 2
                }
            }
            else {
                return {
                    ...state,
                    score: 0
                }
            }

        }
        case EActionTypes.SET_CORRECT: {
            action.payload.operation === 'T' ? state.correct = true : state.correct = false;
            return {
                ...state,
                correct: state.correct
            }
        }
        case EActionTypes.ADD_QUESTION: {
            return {
                ...state,
                questions: action.payload.questions
            }

        }
        default:
            return state;
    }
}
export default questionsReducer
