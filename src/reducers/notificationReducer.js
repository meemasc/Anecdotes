
export const setNotification = (notification, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification
    })
    setTimeout(() => 
      dispatch({
        type: 'RESET_NOTIFICATION'
      }), time*1000)
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

const notificationReducer = (state = null, action) => {

  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    
    case 'RESET_NOTIFICATION':
      return null
    
    default:
      return state
  }
}

export default notificationReducer