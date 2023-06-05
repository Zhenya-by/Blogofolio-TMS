import { FC } from 'react';
import './Footer.scss';

interface IFooter {
    copirate: string;
    text: string;

}

export const Footer: FC<IFooter> = ({ copirate, text }) => {
    return (
        <div className='footer__wrapper'>
            {/* <hr className='footer__hr'/> */}
            <div className='footer__text'>
                <p className='footer__title'>{copirate}</p>
                <p className='footer__title'>{text}</p>
            </div>
        </div>
    )
};
