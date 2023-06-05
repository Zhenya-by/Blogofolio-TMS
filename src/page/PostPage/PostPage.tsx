import { FC } from 'react';
import thumbsDown from '../../assets/icons/thumbsDown.svg';
import thumbsUp from '../../assets/icons/thumbsUp.svg';
import favorites from '../../assets/icons/favorites.svg';
import arrowPrev from '../../assets/icons/arrowPrev.svg';
import arrowNext from '../../assets/icons/arrowNext.svg';
import './PostPage.scss';
import { cards } from '../../mock/cards';
import { Typography } from '../../components/Typography/Typography';
import { IconButton } from '../../components/IconButton/IconButton';

interface IPostPage {
}

export const PostPage: FC<IPostPage> = () => {
    const { title, image } = cards[0];


    return (
        <div className='post'>
            <Typography content={title} type='H1' />
            <div className='post__img-box'>
                <img src={image} alt={title} className='post__img' />
            </div>
            <div className='post__content'>
                <Typography
                    content='Astronauts Kayla Barron and Raja Chari floated out of the 
                International Space Station airlock for a spacewalk Tuesday, installing brackets 
                and struts to support new solar arrays to upgrade the research lab’s power system 
                on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, 
                a U.S. record for a single spaceflight.'
                    type='textPrimary' 
                />
                <Typography
                    content='Astronauts Kayla Barron and Raja Chari floated out of the 
                International Space Station airlock for a spacewalk Tuesday, installing brackets 
                and struts to support new solar arrays to upgrade the research lab’s power system 
                on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, 
                a U.S. record for a single spaceflight.'
                    type='textPrimary' 
                />
                <Typography
                    content='Astronauts Kayla Barron and Raja Chari floated out of the 
                International Space Station airlock for a spacewalk Tuesday, installing brackets 
                and struts to support new solar arrays to upgrade the research lab’s power system 
                on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, 
                a U.S. record for a single spaceflight.'
                    type='textPrimary' 
                />
                <Typography
                    content='Astronauts Kayla Barron and Raja Chari floated out of the 
                International Space Station airlock for a spacewalk Tuesday, installing brackets 
                and struts to support new solar arrays to upgrade the research lab’s power system 
                on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, 
                a U.S. record for a single spaceflight.'
                    type='textPrimary' 
                />
                <Typography
                    content='Astronauts Kayla Barron and Raja Chari floated out of the 
                International Space Station airlock for a spacewalk Tuesday, installing brackets 
                and struts to support new solar arrays to upgrade the research lab’s power system 
                on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, 
                a U.S. record for a single spaceflight.'
                    type='textPrimary' 
                />
                <div className='post__actions'>
                    <div className='post__actions-likes'>
                        <IconButton onClick={() => console.log('thumbsUp')} withBackground>
                            <img src={thumbsUp} alt="thumbsUp" />
                        </IconButton>
                    <div className='post__actions-likes'>
                        <IconButton onClick={() => console.log('thumbsDown')} withBackground>
                            <img src={thumbsDown} alt="thumbsDown" />
                        </IconButton>
                    </div>
                    </div>
                    < IconButton onClick={() => console.log('thumbsDown')} withBackground>
                        <div className='post__actions-favorites'>
                            <img src={favorites} alt="favorites" /> 
                            Add to favorites
                        </div>
                    </IconButton>
                </div>
                <div className="post__transitions">
                <IconButton onClick={() => console.log('arrowPrev')}>
                    <div className="post__transitions-box">
                        <img src={arrowPrev} alt="prev" />
                        <div className='post__transitions-texts prev'>
                            <div className='post__transitions-title'>Prev</div>
                            <div className='post__transitions-text'>10 Things to Know About Salvador Dalí</div>
                        </div>
                    </div>
                </IconButton>
                <IconButton onClick={() => console.log('arrowNext')}>
                    <div className="post__transitions-box">
                        <div className='post__transitions-texts next'>
                            <div className='post__transitions-title'>Next</div>
                            <div className='post__transitions-text'>8 Beautiful Villas Belonging to Artists You Need to See</div>
                        </div>
                        <img src={arrowNext} alt="next" />
                    </div>
                </IconButton>
            </div>
            </div>
        </div>
    )
};
