import React, { useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function SignIn() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    const logIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
                console.log(err.message)
                console.log('pon la wea bn po ctm', err.code)
        })
    }

    return (
        <div className='sign-in'>
            <form action=''>
                <input ref={nameRef} type='text'/>
                <input ref={emailRef} type='email'/>
                <input ref={passwordRef} type='password'/>
                <button onClick={logIn}>Log In</button>
                <button onClick={signUp}>Sign Up</button>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </form>
        </div>
    )
}

export default SignIn