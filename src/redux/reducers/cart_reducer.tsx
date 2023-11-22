//rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[
        {id: 1, name:'product1', image:'https://i.pravatar.cc?u=1',price:1000, quantity:1}
    ],

    dataProduct:[{

    }]

}

const CartReducer = createSlice({
  name: 'CartReducer', //ten reducer/actionname
  initialState,
  reducers: {

  }
});

export const {} = CartReducer.actions

export default CartReducer.reducer