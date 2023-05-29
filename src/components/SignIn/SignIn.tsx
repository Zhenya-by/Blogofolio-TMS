import { FC, useState } from 'react';
import { Input } from '../Input/Input';
import { log } from 'console';
import { Button } from '../ButtonSignIn/ButtonSignIn';
import './SignIn.scss';


export const SignIn: FC = () => {
    const [emall, setEmall] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmall = (newEmall: string) => {
        setEmall(newEmall);
    }
    const handleChangePassword = (newPassword: string) => {
        setPassword(newPassword);
    }


    function handleClick(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className='wrapper'>
            <form className='form'>
                <Input
                    title='Sign in'
                    placeholder='Your email'
                    value={emall}
                    handleChange={handleChangeEmall}
                />
                <Input
                    title='Password'
                    placeholder='Your password'
                    value={password}
                    handleChange={handleChangePassword}
                />
                <Button type='primary' content='Sign In' isDisabled={false} onClick={handleClick}/>
            <p className='text-text'>Don’t have an account? <span className="text-color">Sign Up</span></p>
            </form>
        </div>
    )
};
