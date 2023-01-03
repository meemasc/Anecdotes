import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification

  const style = {
    display: notification ? '' : 'none',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification.info,
  }
}

export default connect(mapStateToProps)(Notification)