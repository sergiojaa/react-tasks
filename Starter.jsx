import React from 'react'

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
