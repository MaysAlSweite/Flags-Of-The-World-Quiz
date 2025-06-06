import { createContext, useReducer } from 'react'
import './App.css'
import StartScreen from './components/start_screen/StartScreen'
import QuizScreen from './components/quiz-screen/QuizScreen';
import FeedbackScreen from './components/feedback_screen/FeedbackScreen';
import ResultsScreen from './components/result-screen/ResultsScreen';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import React from 'react';
import questionsReducer from './components/reducers/questionsReducer';
import { initialState, IReducer } from './components/reducers/types';
import AddQuestionForm from './components/add-question-form/AddQuestion';
import LoginScreen from './components/login-screen/LoginScreen';
import Guard from './components/guarded-routing/Guard';
import Header from './components/header/Header';



export const reducerContext = createContext<IReducer>({ state: initialState, dispatch: () => { } });

function App() {
  const [state, dispatch] = useReducer(questionsReducer, initialState);

  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <reducerContext.Provider value={{ state, dispatch }}>
            <Header />
            <Routes>

              <Route
                path='/start'
                element={
                  <Guard allowed={['admin', 'user']}>
                    <StartScreen />
                  </Guard>
                } />


              <Route path='/feedback' element={
                <FeedbackScreen />}></Route>

              {state.index < state.questions.length ? <Route path={`/q/:index`} element={
                <QuizScreen
                />
              }></Route> : <Route path='/results' element={<ResultsScreen />}></Route>}

              <Route path='/results' element={<ResultsScreen />}></Route>
              <Route path='/*' element={<Navigate to={'/start'} />}></Route>


              <Route path='/addQuestionForm'
                element={
                  <Guard allowed={['admin']}>
                    <AddQuestionForm /> </Guard>} />


              <Route path='/login' element={<LoginScreen />}></Route>
            </Routes>
          </reducerContext.Provider >
        </BrowserRouter>

      </React.StrictMode>
    </>
  )
}

export default App
