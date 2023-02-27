import {createSlice} from '@reduxjs/toolkit'
import {data} from '../features/UsersFakeData'


 export const userSlice = createSlice({
    name: "users", 
    initialState:{value: data},
    reducers:{
        addUser: (state, action)=>{
            state.value.push(action.payload)
        },
        deleteUser:(state, action)=>{
            state.value = state.value.filter((user)=> user.id !== action.payload.id)
        },
        updateUser: (state, action)=>{
            state.value.map(user=>{
                if(user.id==action.payload.id){
                    user.stack = action.payload.stack
                    user.name = action.payload.name
                    user.age = action.payload.age
                    user.country = action.payload.country
                    user.isTrue = action.payload.isTrue
                }
            })
        }
    }
     
 })
 export const {addUser, deleteUser, updateUser} = userSlice.actions
 export default userSlice.reducer

