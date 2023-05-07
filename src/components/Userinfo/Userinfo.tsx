import { FC } from 'react';
import './Userinfo.scss';


interface IUserInfo {
    username: string;
}

export const UserInfo: FC<IUserInfo> = ({username}) => {
    // console.log(initials);

    const generateInitials = (username: string) => {
        return username.split(' ').map((n) => n[0]).join('').toLocaleUpperCase();
    }
    
    return (
        <div className='userinfo'>
            <div className='userinfo_initials'>{generateInitials(username)}</div>
            <div className='userinfo__name'>{username}</div>
        </div>
    );
}