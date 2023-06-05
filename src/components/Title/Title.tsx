
import { FC } from 'react';
import './title.scss';

export interface ITitle {
    signIn: string;
}

export const Title: FC<ITitle> = ({signIn}) => {
    return (
        <div className='title'>{signIn}</div>
    );
}