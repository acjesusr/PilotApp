import { FETCH_EVENTS, SELECTED_EVENT } from './types';
export const fecthEvents = () => dispatch => {
  console.log("Fetching Events");
  console.log(eventData);
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
  console.log(eventData);
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
    console.log(eventData);
  }

  export const updateEvent = eventData => {
    console.log("Updating Event");
    console.log(eventData);
  }

  export const selectEvent = eventData => dispatch => {
    console.log("Selecting Event");
    dispatch({
      type: SELECTED_EVENT,
      payload: eventData
    })
    console.log(eventData);
    console.log(dispatch);
  }