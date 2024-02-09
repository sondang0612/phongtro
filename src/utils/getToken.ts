const getToken = () => {
  let token = undefined;
  let persistAuth = window.localStorage.getItem('persist:auth');
  if (persistAuth) token = JSON.parse(persistAuth).token.slice(1, -1);

  return token as string | undefined;
};

export default getToken;
