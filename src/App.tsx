import React from 'react';
import './App.css';
import { Button, InputField } from 'sb-ui-library';

function App() {
  return (
    <div className="App">
      <div className='center'>
        <div className='input-div' style={{ width: '70%', marginLeft: '10%', display: 'flex', flexDirection: 'column' }}>
          <InputField id='id_username' name="Enter Username" placeholder="Enter your username" type={'text'}
            isRequired={true} isInvalid={true} validationerror={'Invalid Input'} defaultValue={''} disabled={false}
            onChangeHandler={() => { console.log('text changed') }}
          />
          <InputField id='id_password' name="Enter Password" placeholder="Enter your password" type={'password'}
            isRequired={true} isInvalid={false} validationerror={'ERROR'} defaultValue={''} disabled={false}
            onChangeHandler={() => { console.log('text changed') }}
          />
        </div>
        <div className='login-btn' style={{ textAlign: 'center' }}><Button buttonText='Login' handleClick={()=>{console.log('login clicked')}} /></div>
      </div>       
    </div>
  );
}

export default App;
