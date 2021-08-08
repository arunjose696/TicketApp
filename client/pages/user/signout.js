import React, { useEffect, useState } from 'react';
import userRequest from '../../hooks/userRequest';
import { useRouter } from 'next/router';

const signout = () => {
  const router = useRouter();
  const onSuccess = () => {
    router.push('/');
  };
  const { errs, makeRequest, errEmail, errPassword } = userRequest({
    method: 'get',
    url: '/api/users/signout',
    onSuccess,
  });
  useEffect(() => makeRequest(), []);

  return <h1>Signing out</h1>;
};

export default signout;
