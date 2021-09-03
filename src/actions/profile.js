import {
  FETCH_USER_PROFILE,
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS,
} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
export function startUserProfileFetch() {
  return {
    type: FETCH_USER_PROFILE,
  };
}
export function userProfileSuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}

export function userProfileFailed(error) {
  return {
    type: USER_PROFILE_FAILURE,
    error,
  };
}

export function fetchUserProfile(userId) {
  return (dispatch) => {
    dispatch(startUserProfileFetch());
    const url = APIUrls.userProfile(userId);
    fetch(url, {
      // method : 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(userProfileSuccess(data.data.user));
          return;
        }
        dispatch(userProfileFailed(data.message));
      });
  };
}
