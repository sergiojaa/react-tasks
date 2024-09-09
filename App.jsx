import { useState } from "react"
import data from './components/data.json'
function App() {
  const [notifications, setNotifications] = useState(data)

  const read = (id)=>{
    const updatedNotifications = notifications.map((message) => {
      console.log(message)
     if (message.id === id){
      return {...message, isRead: true}
     }
     return message
    })
    setNotifications(updatedNotifications)
  }
  const markAllAsRead = () =>{
    const updatedNotifications = notifications.map((message) => {
      return {...message, isRead: true}
    })
    setNotifications(updatedNotifications)
  }



  return(
    <div>
     <section>
      <h1>Notifications 3</h1>
      <p onClick={markAllAsRead} className=" cursor-pointer" >Mark all as read</p>
     </section>
     <main>
      {notifications.map(notification=>{
        return(
          <div 
          key={notification.id}
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
       
      })}
     </main>
    </div>


  )
}

export default App
