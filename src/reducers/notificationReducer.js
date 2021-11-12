
export const likeNotification = (notification) => {
  return {
    type: 'LIKE_NOTIFICATION',
    data: { notification }
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

const notificationReducer = (state = null, action) => {

  switch(action.type) {
    case 'LIKE_NOTIFICATION':
      return `you voted ${action.data.notification}`
    
    case 'RESET_NOTIFICATION':
      return null
    
    default:
      return state
  }
}

export default notificationReducer