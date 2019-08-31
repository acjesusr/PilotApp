import { FETCH_USER, SAVE_USER } from './types';
export const fecthUser = () => dispatch => {
  console.log("Fetching User");
    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
     */
};

export const saveUser = userData => dispatch => {
  console.log("Saving user");
    /*
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POST,
          payload: post
        })
      );
    */
  };