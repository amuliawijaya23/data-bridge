import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

import { auth } from '@lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useRouter } from 'next/navigation';

const useAuthData = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [emailValidity, setEmailValidity] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

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
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log('New User Created: ', newUser);
    } catch (err) {
      success = false;
      throw new Error(`An error occured during registration: ${err}`);
    }

    if (success) {
      router.push('/signin');
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
  };
};

export default useAuthData;
