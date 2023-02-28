import { createSlice } from "@reduxjs/toolkit";
import {data} from '../../features/UsersFakeData'

const userReducer = createSlice({
    name: "user",
    initialState:{value: data},
    reducers: {
        addUser: (state, action) => {
          state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user)=> user.id !==action.payload.id)
        },  
        updateUser: (state, action)=>{
            state.value.map(user=>{
                if(user.id == action.payload.id){
                    user.name = action.payload.name
                    user.stack = action.payload.stack
                    user.age = action.payload.age
                    user.country = action.payload.country
                    user.isChecked = action.payload.isChecked
                }
            })
        }
    }
})

export const {addUser, deleteUser, updateUser} = userReducer.actions;
export default userReducer.reducer;