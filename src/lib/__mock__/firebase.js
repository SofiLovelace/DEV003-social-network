// jest.mock('firebase/auth');

// import { emailLogin } from '../firebase';

// export const resultEmailLogin = async () => {
//   const resultPromise = await emailLogin();
// };
export const registerNewUser = () => Promise.resolve('Kitty, Miau, catslover@gmail.com, 123456');
export const emailLogin1 = () => Promise.resolve('catslover@hotmail.com, 123456');
export const loginWithGoogle = () => Promise.resolve('catslover@gmail.com, 123456');
export const logOutFunction = () => Promise.resolve('');
export const usuario = [{
  nombre: 'Sofía',
  email: 'sofi@gmail.com',
  password: '123456',
}];
