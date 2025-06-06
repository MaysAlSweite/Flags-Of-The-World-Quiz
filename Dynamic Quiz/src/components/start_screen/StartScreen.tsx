import { useContext, useEffect } from 'react';
import { reducerContext } from '../../App';
import classes from './start_screen.module.css'
import { NavLink, useNavigate } from 'react-router';
import { readData } from '../storage/storage';


const StartScreen = () => {
    const { state } = useContext(reducerContext);

    const navigate = useNavigate();
    const user = readData('user');
    useEffect(() => { 
        if (state.index == state.questions.length) {
            navigate('/results');
        }
        if (user == null) {
            navigate('/login');
        }
    }, [state.index,user]);

    return (
        <div className={classes.startScreen} key="StartScreen">
            <h1 className={classes.welcome}>Welcome To Flags Of The World Quiz !</h1>
            <div className={classes.img}></div>
            <NavLink to={`/q/:0`} className={classes.start}>Start</NavLink>
        </div>
    )
}

export default StartScreen

