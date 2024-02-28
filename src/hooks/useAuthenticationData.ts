import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

import { auth } from '@lib/firebase';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { signIn } from 'next-auth/react';

import { useRouter } from 'next/navigation';

const useAuthData = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [emailValidity, setEmailValidity] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const resetForm = () => {
    setEmail('');
    setEmailValidity(false);
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleOnChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(e.target.value);
    setEmailValidity(isEmail(e.target.value));
  };

  const handleOnChangePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setError('');
    e.preventDefault();

    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    if (!emailValidity) {
      setError('Please use a valid email address.');
      return;
    }

    let success = true;

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.status == 200) {
        router.push('/');
      } else if (res?.error) {
        success = false;

        switch (res.error) {
          case 'auth/invalid-credential':
            setError('Invalid email or password.');
            break;
          case 'auth/internal-error':
            setError('Internal server error while signing in.');
            break;
          case 'auth/too-many-requests':
            setError('Too many requests.');
            break;
        }
      }
    } catch (err) {
      throw new Error(`An error occured while signing in: ${err}`);
    }
  };

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setError('');
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (!emailValidity) {
      setError('Please use a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Please make sure your passwords match.');
      return;
    }

    let success = true;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      success = false;

      switch (err.code) {
        case 'auth/weak-password':
          setError('Password should at least be 6 characters.');
          break;
        case 'auth/email-already-in-use':
          setError('Email already in use.');
          break;
      }
    }

    if (success) {
      router.push('/signin');
    }
  };

  const handleResetEmail = async () => {
    if (!email) {
      setError('Enter an email address.');
    }

    if (!emailValidity) {
      setError('Please use a valid email address.');
      return;
    }
    let success = true;

    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      success = false;
      throw new Error(
        `An error occured when requesting password reset. ${err}`,
      );
    }

    if (success) {
      resetForm();
    }
  };

  return {
    email,
    emailValidity,
    password,
    confirmPassword,
    error,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleOnChangeConfirmPassword,
    handleSignUp,
    handleSignIn,
    handleResetEmail,
  };
};

export default useAuthData;
