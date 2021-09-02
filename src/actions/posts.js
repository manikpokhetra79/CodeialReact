import { UPDATE_POSTS } from './actionTypes';
import { APIUrls } from '../helpers/urls';
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}
