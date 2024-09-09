import React from 'react'
import PropTypes from "prop-types"
export default function Notifications    ({notification,setNotifications,notifications}) {
    const read = (id)=>{
        const updatedNotifications = notifications.map((message) => {
          
         if (message.id === id){
          return {...message, isRead: true}
         }
         return message
        })
        setNotifications(updatedNotifications)
      }
  return (
  <div 
            className={`p-4 m-4 border border-red-500 ${!notification.isRead ? 'bg-[#28af3a]' : ''}`}
           onClick={ ()=> read( notification.id )  }
          >
            <img src={notification.profilePic} />
           <span> {notification.username} </span>
           <span>{notification.action}</span>
           {
            notification.post 
            ?
            <span>{notification.post}</span>
            :
            null
           }
           {
            notification.groupName 
            ?
            <span>{notification.groupName}</span>
            :
            null
           }
          {notification.text ? <span className="text-gray-700 text-sm font-medium hover:bg-gray-200 cursor-pointer " >{notification.text}</span> : null }
          {!notification.isRead ? < div class="w-2	h-2  rounded-3xl	bg-[#f65552] " >  </div> : null }
          </div>
  )
}

Notification.propTypes = {
    notification: PropTypes.shape({
      id: PropTypes.number.isRequired,
      profilePic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      post: PropTypes.string,
      groupName: PropTypes.string,
      time: PropTypes.string.isRequired,
      text: PropTypes.string,
      userPicture: PropTypes.string,
      isRead: PropTypes.bool.isRequired,
    }).isRequired,
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        profilePic: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        post: PropTypes.string,
        groupName: PropTypes.string,
        time: PropTypes.string.isRequired,
        text: PropTypes.string,
        userPicture: PropTypes.string,
        isRead: PropTypes.bool.isRequired,
      })
    ).isRequired,
    setNotifications: PropTypes.func.isRequired,
  };