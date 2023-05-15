import { FC } from 'react';
import './FullCard.scss';
import { Typography } from '../Typography/Typography';
import { DateCard } from '../DateCard/DateCard';

interface IFullCard {
    id: number;
    text: string;
    title: string;
    image: string;
    date: string;
}

export const FullCard: FC<IFullCard> = ({id, text, title, image, date}) => {
    return (
        <div className='full-card'>
            <div className='full-card_content'>
                <DateCard date={date} />
                <Typography content={title} type='H2'/>
                <p className='full-card_text'>{text}</p>
            </div>
            <div>
                <div className='full-card_img-box'>
                    <img className='full-card_img' src={image} alt={title} />
                </div>
            </div>
        </div>
    )
};
