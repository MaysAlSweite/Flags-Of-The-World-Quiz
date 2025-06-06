import { NavLink } from 'react-router-dom'
import { readData } from '../storage/storage';
import classes from './header.module.css'
const Header = () => {
    const user = readData('user');
    return (
        <div>
            <nav>
                <ul className={classes.ul}>
                    {
                        !user && (

                            <li className={classes.li}><NavLink to={'/login'}>Login</NavLink></li>
                        )
                    }
                    <li className={classes.li}><NavLink to={'/start'}>Start Quiz</NavLink></li>
                    {
                        user?.role === 'admin' && (
                            <li className={classes.li}><NavLink to={'/addQuestionForm'}>Add Question</NavLink></li>
                        )
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Header
