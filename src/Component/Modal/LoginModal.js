import { useRef } from 'react';
import './LoginModal.css';

const LoginModal = (props) => {
    const Login_UserName = "Starberry"
    const Login_Password = "frontend"
    const userName = useRef();
    const password = useRef();
    //require('dotenv').config()

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userName.current.value);
        console.log(password.current.value);
        
        if(userName.current.value === Login_UserName && password.current.value == Login_Password) {
            props.onhide(true)
        }
    }
    return (
        <div>
            <div className="backdrop"/>
            <div className="modal">
                <div className='formCard'>
                    <form onSubmit={submitHandler}>
                        <div className="formGroup">
                            <input id="userName" className="forminput" type="text" ref={userName} required/>
                            <label className="formlabel" for="userName">Enter UserNmae</label>
                        </div>
                        <div className="formGroup">
                            <input id="password" className="forminput" type="text" ref={password} required/>
                            <label className="formlabel" for="password">Enter Password</label>
                        </div>
                        <div className='btn-sec'>
                            <button className='signInButton' type="submit">Sign In</button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;