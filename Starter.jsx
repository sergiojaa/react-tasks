import React from 'react'
import PropTypes from "prop-types"
export default function Starter({setNotifications,notifications}) {
    const markAllAsRead = () =>{
        const updatedNotifications = notifications.map((message) => {
          return {...message, isRead: true}
        })
        setNotifications(updatedNotifications)
      }
        //derived state agmocenebuli

      const counter = notifications.filter
  (notification => !notification.isRead).length
 
  return (
    <div>
      <section>
      <h1>Notifications {counter} </h1>
      <p onClick={markAllAsRead} className=" cursor-pointer" >Mark all as read</p>
     </section>
    </div>
  )
}
Starter.propTypes = {
    setNotifications: PropTypes.func.isRequired,
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        isRead: PropTypes.bool.isRequired,
        // Add other properties here if needed
      })
    ).isRequired
  };