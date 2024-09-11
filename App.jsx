jjimport { useState } from "react"
import data from './components/data.json'
import Notifications from "./components/Notifications"
import Starter from "./components/Starter"
function App() {
  const [notifications, setNotifications] = useState(data)
  return(
    <div>
     <Starter  
     notifications={notifications} 
     setNotifications={setNotifications} 
     
     />
     <main>
      {notifications.map(notification=>{
        return(
          <Notifications 
           notifications={notifications} 
           setNotifications={setNotifications} 
           key={notification.id} 
           notification={notification} />
        )
      })}
     </main>
    </div>
  )
}
export default App
