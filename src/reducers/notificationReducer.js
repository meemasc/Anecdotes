import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from 'react-redux'

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    const timerID = setTimeout(() => 
      dispatch(notificationSlicer.actions.resetNotification()), time*1000
    )
    const payload = {
      info: notification,
      timerID
    }
    dispatch(notificationSlicer.actions.createNotification(payload))
  }
}

const notificationSlicer = createSlice({
  name: 'notification',
  initialState: {
    info: null,
    timerID: null
  },
  reducers: {
    createNotification(state, action) {
      clearTimeout(state.timerID)
      return {
        info: action.payload.info,
        timerID: action.payload.timerID
      } 
    },
    resetNotification(state, action) {
      return {
        info: null,
        timerID: null
      }
    }
  }
})

export default notificationSlicer.reducer