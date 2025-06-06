export interface IState {
     questions: Question[];
      index: number; 
      score: number; 
      operation:string;
      correct: boolean;
      
}
export type Question = {
     id: number;
     imgLink: string;
     choices: string[];
     correctChoice: string;
};


export const questionsData: Question[] = [
     {
          id: 1,
          imgLink: "https://flagpedia.net/data/flags/w580/jp.png",
          choices: ["China", "South Korea", "Japan", "Vietnam"],
          correctChoice: "Japan"
     },
     {
          id: 2,
          imgLink: "https://flagpedia.net/data/flags/w580/de.png",
          choices: ["Germany", "Belgium", "Austria", "Netherlands"],
          correctChoice: "Germany"
     },
     {
          id: 3,
          imgLink: "https://flagpedia.net/data/flags/w580/in.png",
          choices: ["India", "Pakistan", "Bangladesh", "Sri Lanka"],
          correctChoice: "India"
     },
     {
          id: 4,
          imgLink: "https://flagpedia.net/data/flags/w580/ca.png",
          choices: ["United States", "Canada", "Mexico", "Australia"],
          correctChoice: "Canada"
     },
     {
          id: 5,
          imgLink: "https://flagpedia.net/data/flags/w580/za.png",
          choices: ["South Africa", "Kenya", "Nigeria", "Ghana"],
          correctChoice: "South Africa"
     },
     {
          id: 6,
          imgLink: "https://flagpedia.net/data/flags/w580/it.png",
          choices: ["Ireland", "Italy", "Mexico", "Portugal"],
          correctChoice: "Italy"
     }

]

export interface IUser {
     username:string;
     password:string;
     role: 'admin' | 'user';
}
export interface IReducer {
     state: IState;
     dispatch: React.ActionDispatch<[action: IAction]>;
}
export const initialState: IState = {
     questions: questionsData,
     index: 0,
     score: 0,
     operation: '',
     correct: false
}
export enum EActionTypes {
     SET_INDEX = 'SET_INDEX',
     RESET_INDEX = 'RESET_INDEX',
     SET_SCORE = 'SET_SCORE',
     SET_CORRECT = 'SET_CORRECT',
     ADD_QUESTION = 'ADD_QUESTION',
}


export interface ISetIndex {
     type: EActionTypes.SET_INDEX;
     payload: {index: number} 
}
export interface IResetIndex {
     type: EActionTypes.RESET_INDEX;
     payload: {} 
}
export interface ISetScore {
     type: EActionTypes.SET_SCORE;
     payload: {score: number , operation:string} 
}
export interface ISetCorrect {
     type: EActionTypes.SET_CORRECT;
     payload: { correct: boolean, operation: string } 
}
export interface IAddQuestion {
     type: EActionTypes.ADD_QUESTION;
     payload: { questions: Question[] } 
}
export type IAction =  ISetIndex | IResetIndex | ISetScore | ISetCorrect | IAddQuestion;