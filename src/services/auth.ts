export const userLogin = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (username === 'test@test.com' && password === '1234') {
      resolve({
        user: 'test@test.com', 
        isLogged: true, 
        isLoading: false
      });
    }
    else {
      reject({
        message: "Username and password don't match"
      });
    }
  });
};

export const userLogout = async () => {
  return new Promise((resolve, reject) => {
    resolve({username: '', isLogged: false, isLoading: false});
  });
};