import { createSlice } from "@reduxjs/toolkit";
const initialState={
    nomOfCake:20
}
let CakeSlice=createSlice({
    name:"cake",
    initialState,
    reducers:{
        // order is 1 action
        order:(state,action)=>{
            state.nomOfCake -= action.payload
        },
        restock:(state,action)=>{
            state.nomOfCake += action.payload
        }
    }
})
export default CakeSlice.reducer;
export let {order,restock} = CakeSlice.actions