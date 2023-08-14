import { authService } from '@/services/authService';
import { actLoginSuccess } from './authSlice';

export function actFetchMeAsync(token) {
  return async dispatch => {
    if (token === undefined) {
      token = localStorage.getItem('access_token');
    }
    const user = await authService.fetchMe(token);

    // if (user.success === false) {
    //   localStorage.removeItem('access_token');
    // }

    dispatch(actLoginSuccess({ user, token }));
    return user;
  };
}

export function actLogionAsync(username, password) {
  return async dispatch => {
    const response = await authService.login(username, password);

    await dispatch(actFetchMeAsync(response.token));

    return response;
  };
}

export function actRegisterAsync(name, birthdate, email, password) {
  return async dispatch => {
    const response = await authService.register(name, birthdate, email, password);
    // const token = response.token;
    if (response && response.error) {
      return response;
    } else {
      const responseLogin = await dispatch(actLogionAsync(email, password));
      return responseLogin;
    }
  };
}
