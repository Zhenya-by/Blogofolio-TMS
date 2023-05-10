import { FC } from 'react';
import './Input.scss';
import { title } from 'process';

interface Input {
    value: string;
    handleChange: (newValue: string) => void;
    title: string;
    placeholder?: string;
    isDisabled?: boolean;
    errorMesage?: string;
}

export const Input: FC<Input> = ({
    value,
    handleChange,
    title,
    placeholder,
    isDisabled = false,
    errorMesage
}) => {

    return (
        <div className='input-wrapper'>
            <label className='label' htmlFor="input-text">{title}</label>
            <input 
                className={`input ${errorMesage && 'error'}`}
                placeholder={placeholder} 
                disabled={isDisabled}
                type="text" 
                id= 'input-text'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
            {errorMesage && <div className='errorMesage'>{errorMesage}</div>}
        </div>
    )
};
