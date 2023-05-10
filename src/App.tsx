import './App.scss';
import { Button } from './components/Button/Button';
import { UserInfo } from './components/Userinfo/Userinfo';
import { Title } from './components/Title/Title';
import { HamburgerMenu } from './components/HamburgerMenu/Menuhamburger';
import { Tabs } from './components/Tabs/Tabs';
import { Form } from './components/Form/Form';

export const App = () => {

  const handleClick = () => {
    console.log('click');
    
  }

  return (
    <>
    <div className="app">
      <h2 className='lessonH2'>Lesson Work (00)</h2>
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
      <h2 className='homeWorkH2'>Home Work (00)</h2>
      <Title signIn= 'Sign in'/>
      <br/>
      <br/>
      <div>
      <HamburgerMenu/>
    </div>
      <br />
      <br />
      <br />
      <Tabs/>
      <h2 className='lessonH2'>Lesson Work (01)</h2>
      <Form/>
    </div>
    </>
  );
}

