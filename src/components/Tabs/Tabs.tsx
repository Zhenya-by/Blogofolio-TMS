import { FC } from 'react';
import './Tabs.scss';
import { Tab } from '../Tab/Tab';

interface ITabs {
}

export const Tabs: FC<ITabs> = () => {
    return (
        <ul className='tabs'>
            <Tab title='All' isActive/>
            <Tab title='My favorites'/>
            <Tab title='Popular' isDisabled/>
        </ul>
    )
};
