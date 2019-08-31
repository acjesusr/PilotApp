import { FETCH_EVENTS, SELECTED_EVENT } from './types';
export const fecthEvents = () => dispatch => {
  console.log("Fetching Events");
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

export const createEvent = eventData => dispatch => {
  console.log("Creating Event");
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

  export const deleteEvent = eventData => {
    console.log("Deleting Event");
  }

  export const updateEvent = eventData => {
    console.log("Updating Event");
  }