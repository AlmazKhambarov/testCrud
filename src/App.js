import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from './features/Users';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const userList  = useSelector((state)=> state.users.value )
  const [name, setName]= useState("");
  const [stack, setStack] = useState("")
 const handleAdd = (e)=>{
  // e.preventDefault()
  dispatch(addUser({id:userList[userList.length -1].id+1, name, stack}))
 }
  return (
    <div className="App">
      <div className='forms'>
         <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Name..." onChange={(e)=> (setName(e.target.value))}/>
         <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Stack..." onChange={(e)=> (setStack(e.target.value))}/>
         <button className='btn w100 btn-primary' onClick={handleAdd}>Add User</button>
      </div>
      <div className="usersList">
        {userList.map((user, i)=>(
          // console.log(user)
          <div className="usersDisplay" key={i}>  
            <p>{user.name}</p>
            <p>{user.stack}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
