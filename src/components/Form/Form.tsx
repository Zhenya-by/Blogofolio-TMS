import { FC, useState } from 'react';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import './Form.scss';


export const Form: FC = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [text, setText] = useState('');

    const handleChangeName = (newName: string) => {
        setName(newName);
    }
    const handleChangeLastName = (lastName: string) => {
        setLastName(lastName);
    }
    const handleChangeText = (textName: string) => {
        setText(textName);
    }


    return (
        <form>
            <Input 
                title='Title'
                placeholder='Some placeholder'
                value={name}
                handleChange={handleChangeName}
            />
            <Input 
                title='Title'
                placeholder='Some placeholder'
                value={lastName}
                handleChange={handleChangeLastName}
                isDisabled
            />
            <Input 
                title='Title'
                placeholder='Some placeholder'
                value={text}
                handleChange={handleChangeText}
                errorMesage='Есть ошибка'
            />
            <br />
            <br />
            <br />
            <br />
            <Textarea 
                title='Title'
                value={text}
                placeholder='placeholder'  
                handleChange={handleChangeText}
            />
        </form>
    )
};
