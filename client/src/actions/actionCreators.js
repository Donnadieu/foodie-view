import fetch from 'isomorphic-fetch'

// add comment
function addComment (id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    id,
    author,
    comment
  }
}

// remove comment
function removeComment (id, i) {
  return {
    type: 'REMOVE_COMMENT',
    id,
    i
  }
}

// fetch places
function fetchPlaces () {
  return (dispatch) => {
    dispatch({type: 'FETCH_PLACES'})
    return fetch('http://localhost:3001/api/places')
      .then(response => {
        response.json()
        .then(json => {
          dispatch({type: 'RECEIVED_PLACES', payload: json})
        })
      })
      .catch((err) => {
        dispatch({type: 'FETCH_PLACES_ERROR', payload: err})
      })
  }
}

// fetch Yelp places
function fetchYelp () {
  const yelpHeaders = {
    'Authorization': 'Bearer EakxldXP-2T72QO6NEvyqojjbrKHztRqEm2eHaa_QPSMPYM08QaY-yoYp0SsHzfPb1Sc7GBUPUleAa0ysHr0iNwafFC476KssKf8c8lVwc2kZy4oPle4vewxu0xYWXYx'
  }
  return (dispatch) => {
    dispatch({type: 'FETCH_YELP'})

  }
}

export {
  addComment,
  removeComment,
  fetchPlaces,
  fetchYelp
}
