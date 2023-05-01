// import { initReactQueryAuth } from 'react-query-auth';
// import { setCookie, deleteCookie, hasCookie } from 'cookies-next';
// import jwt_decode from 'jwt-decode';

// import {
//   loginWithEmailAndPassword,
//   registerClient,
//   registerProvider,
//   getCurrentUser,
//   ILoginCredentials,
//   IRegisterCredentials,
//   IAuthUser,
//   IFinalFormValues,
//   logout,
// } from '@/features/auth';
// // import { SplashScreen } from '@/components/SplashScreen';

// interface IJwtPayload {
//   aud: string;
//   exp: number;
//   iat: number;
//   jti: string;
//   nbf: number;
//   scopes: [];
//   sub: string;
// }

// async function handleUserResponse(data: any) {
//   const token = data.data.token;
//   const decodedToken = jwt_decode<IJwtPayload>(token);

//   const expirationTimestamp = decodedToken.exp * 1000;
//   const expirationDate = new Date(expirationTimestamp);

//   setCookie('auth_token', token, { expires: expirationDate });

//   const user = await getCurrentUser();

//   return user;
// }

// async function loadUser() {
//   if (hasCookie('auth_token')) {
//     const user = await getCurrentUser();

//     return user;
//   }

//   return null;
// }

// async function loginFn(data: ILoginCredentials): Promise<any> {
//   const response = await loginWithEmailAndPassword(data);
//   const user = await handleUserResponse(response);

//   return user;
// }

// async function registerFn(data: {
//   signupData: FormData | IFinalFormValues;
//   role: string;
// }): Promise<any> {
//   const { signupData, role } = data;

//   if (role === 'provider') {
//     const response = await registerProvider(signupData);
//     const user = await handleUserResponse(response);

//     return user;
//   }

//   const response = await registerClient(signupData);
//   const user = await handleUserResponse(response);

//   return user;
// }

// async function logoutFn() {
//   await logout();
//   deleteCookie('auth_token');
//   // window.location.assign(window.location.origin as unknown as string);
// }

// const authConfig = {
//   loadUser,
//   loginFn,
//   registerFn,
//   logoutFn,
//   LoaderComponent() {
//     return <SplashScreen />;
//   },
// };

// export const { AuthProvider, useAuth } = initReactQueryAuth<
//   IAuthUser | null,
//   unknown,
//   ILoginCredentials,
//   IRegisterCredentials
// >(authConfig);
