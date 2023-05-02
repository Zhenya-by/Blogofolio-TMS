import './App.scss';
import { Button } from './components/Button/Button';
import { UserInfo } from './components/Userinfo/Userinfo';

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
    </div>
    </>
  );
}

