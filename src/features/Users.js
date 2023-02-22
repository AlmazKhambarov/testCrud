import {createSlice} from '@reduxjs/toolkit'
import {data} from '../features/UsersFakeData'


 export const userSlice = createSlice({
    name: "users", 
    initialState:{value: data},
    reducers:{
        addUser: (state, action)=>{
            
            //Write code for adding users
            state.value.push(action.payload)
        }
    }
     
 })
 export const {addUser} = userSlice.actions
 export default userSlice.reducer