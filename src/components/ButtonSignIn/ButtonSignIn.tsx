import { FC } from 'react';
import './ButtonSignIn.scss';
import { log } from 'console';

interface ButtonSignIn {
    isDisabled: boolean;
    type: 'primary' | 'secondary' | 'secondary2';
    content: string;
    onClick: () => void;

}

export const Button: FC<ButtonSignIn> = ({content, isDisabled, onClick, type}) => {

    const buttonClass = `button1 button--${type} ${isDisabled ? 'disabled' : 'active'}`

    return (
        <button
          className={buttonClass} 
          onClick={onClick} 
          disabled= {isDisabled}
        >
             {content}
        </button>
    );
}