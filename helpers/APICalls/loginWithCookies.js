import serverAddress from './serverAddress';

const loginWithCookies = async () => {
  const fetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`${serverAddress}/auth/user`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default loginWithCookies;
