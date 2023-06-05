import { FC } from 'react';
import './FullCard.scss';
import { Typography } from '../Typography/Typography';
import { DateCard } from '../DateCard/DateCard';
import { ActionsCard } from '../ActionsCard/ActionsCard';

interface IFullCard {
    id: number;
    text: string;
    title: string;
    image: string;
    date: string;
}

export const FullCard: FC<IFullCard> = ({ id, text, title, image, date }) => {
    return (
        <div className='full-card'>
            <div className='full-card__content'>
                <div className='full-card__box'>
                    <DateCard date={date} />
                    <Typography content={title} type='H2' />
                    <p className='full-card__text'>{text}</p>
                </div>
                <div className='full-card__img-box'>
                    <img className='full-card__img' src={image} alt={title} />
                </div>
            </div>
            <ActionsCard />
        </div>
    )
};
