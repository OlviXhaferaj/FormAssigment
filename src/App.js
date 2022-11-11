import './App.css';
import {useState} from 'react'
import List from './Components/List';

function App() {
  const [name, setName] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const preventDefault = (e) =>{
    console.log(e);
    e.preventDefault();

  }
  const newUser = {
    name,
    lname,
    email,
    password,
    confirmPassword
  }


  return (
    <div className='App'>
      <form onSubmit={preventDefault}>
        <div className='wrapper'>
            <label>First Name</label>
            <input type={'text'} onChange={(e) => setName(e.target.value)}/>
          </div>
        <div className='wrapper'>
          <label>Last Name</label>
          <input type={'text'} onChange={(e) => setLname(e.target.value) }/>
        </div>
        <div className='wrapper'>
          <label>Email</label>
          <input type={'email'} onChange={(e) =>{
            setEmail(e.target.value);
            console.log(e.target.value);
          }}/>
        </div>
        <div className='wrapper'>
          <label> Password</label>
          <input type={'password'} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='wrapper'>
          <label>Confirm Password</label>
          <input type={'password'} onChange = {(e) => setConfirmPassword(e.target.value)}/>
        </div>
          <input type="submit" value={"submit"}/>
      </form>
      <List name={name} lastname={lname} email={email} password={password} confirmpassword={confirmPassword}/>
    </div>
  );
}

export default App;


