import './App.scss';
import { Button } from './components/Button/Button';
import { UserInfo } from './components/Userinfo/Userinfo';
import { Title } from './components/Title/Title';
import { HamburgerMenu } from './components/HamburgerMenu/Menuhamburger';

export const App = () => {

  const handleClick = () => {
    console.log('click');
    
  }

  return (
    <>
    <div className="app">
      <Button type='primary' content='click me' isDisabled={false} onClick={handleClick}/>
      <Button type='primary' content='click me' isDisabled onClick={handleClick}/>
      <br/>
      <br/>
      <Button type='secondary' content='click me' isDisabled={false} onClick={handleClick}/>
      <Button type='secondary' content='click me' isDisabled onClick={handleClick}/>
      <br/>
      <br/>
      <Button type='secondary2' content='click me' isDisabled={false} onClick={handleClick}/>
      <Button type='secondary2' content='click me' isDisabled onClick={handleClick}/>
      <br/>
      <br/>
      <UserInfo username='Evgeny Minko'/>
      <br/>
      <br/>
      <Title signIn='Sign in'/>
      <br/>
      <br/>
      <div>
      <HamburgerMenu/>
    </div>
    </div>
    </>
  );
}

