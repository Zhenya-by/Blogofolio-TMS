import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import './SignUp.scss';
import { Button } from '../../components/Button/Button';


export const SignUp: FC = () => {
    const [name, setName] = useState('');
    const [emallName, setEmall] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeName = (newName: string) => {
        setName(newName);
    }
    const handleChangeEmall = (emallName: string) => {
        setEmall(emallName);
    }
    const handleChangePassword = (passwordName: string) => {
        setPassword(passwordName);
    }
    const handleChangeConfirmPassword = (confirmPasswordName: string) => {
        setConfirmPassword(confirmPasswordName);
    }

    const handleSubmit = () => {
        console.log('форма отправляеться на сервер');
        
    }

    return (
        <div className='sign-up'>
            <Typography content='Sign Up' type='H1'/> 
            <form className='sign-up__form'>
            <Input 
                title='Name'
                placeholder='Your Name'
                value={name}
                handleChange={handleChangeName}
            />
            <Input 
                title='Emall'
                placeholder='Your email'
                value={emallName}
                handleChange={handleChangeEmall}
            />
            <Input 
                title='Password'
                placeholder='Your password'
                value={password}
                handleChange={handleChangePassword}
            />
            <Input 
                title='Confirm password'
                placeholder='Confirm password'
                value={confirmPassword}
                handleChange={handleChangeConfirmPassword}
            />
                <Button
                isDisabled={false}
                type={'primary'} 
                content={'Шлепни me'} 
                onClick={handleSubmit} 
                />
                <p className='sign-up__form-description'>
                    Don’t have an account? {''}
                <a className='sign-up__form-link' href="http://google.com">
                    Sign Up
                </a>
                </p>
            </form>
        </div>
    )
};
