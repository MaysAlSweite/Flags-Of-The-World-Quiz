import classes from './loginScreen.module.css'
import useLogin from '../custom-hooks/login.hook';

const LoginScreen = () => {

    const {handleLogin} = useLogin()

  return (
    <form onSubmit={handleLogin} className={classes.loginForm}>
          <div className={classes.title}><h1>Login Page</h1></div>
          <div className={classes.username}>
              <label htmlFor="username" className={classes.label}>Enter Username</label>
              <input type="text" id="username" name="username" className={classes.input} required />
          </div>
          <div className={classes.password}>
              <label htmlFor="password" className={classes.label}>Enter Password</label>
              <input type="text" id="password" name="password" className={classes.input} required />
          </div>
          <button type="submit" className={classes.loginButton} >Login</button>
    </form>
  )
}

export default LoginScreen
