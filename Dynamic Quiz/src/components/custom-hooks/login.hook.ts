import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IUser } from '../reducers/types';
import { storeData } from '../storage/storage';

const useLogin = () => {
    const navigate = useNavigate();
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const user = formData.get('username') as string;
        const pass = formData.get('password') as string;
        const newUser: IUser = {
            username: user,
            password: pass,
            role: user == 'admin' && pass == '1234' ? 'admin' : 'user'
        };
        storeData('user', newUser);
        navigate('/start');

    }
  return {
      handleLogin
  }
}

export default useLogin
