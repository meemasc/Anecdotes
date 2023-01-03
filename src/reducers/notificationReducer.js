import { createSlice } from "@reduxjs/toolkit"

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    dispatch(notificationSlicer.actions.createNotification(notification))
    setTimeout(() => 
      dispatch(notificationSlicer.actions.resetNotification()), time*1000)
  }
}

const notificationSlicer = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    createNotification(state, action) {
      return action.payload
    },
    resetNotification(state, action) {
      return null
    }
  }
})

export default notificationSlicer.reducer