import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

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

  return {
    email,
    emailValidity,
    password,
    confirmPassword,
    error,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleOnChangeConfirmPassword,
  };
};

export default useAuthData;
