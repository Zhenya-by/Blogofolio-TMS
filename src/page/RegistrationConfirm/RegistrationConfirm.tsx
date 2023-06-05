import { FC } from 'react';
import './RegistrationConfirm.scss';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';


export const RegistrationConfirm: FC = () => {

    const handleClickGoHome = () => {
        console.log('handleClickGoHome');
        
    }

    return (
        <div className='registration-confirm'>
            <Typography content='Registration Confirmation' type='H1' />
            <div className='registration-confirm--cotainer'>
                <p className='registration-confirm--text'>
                    Please activate your account with the activation <br />
                    link in the email <span className='bold--link'>example@gmail.com</span>. <br /> 
                    Please, check your email
                </p>
                <Button content='Go to home' type={'primary'} onClick={handleClickGoHome}/>
            </div>
        </div>
    )
};
