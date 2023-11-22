//C1
// import { createStore, combineReducers } from "@reduxjs/toolkit";
// import { CarouselReducer } from "./reducers/carousel_reducer";
// // import { CartReducer } from "./reducers/cart_reducer";


// const rootReducer = combineReducers({
  
//     CarouselReducer,
  
// });

// export const store = createStore(rootReducer
//   ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// -----------------

//C2
import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/carousel_reducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";


const rootReducer = combineReducers({
  
    CarouselReducer,
    QuanLyPhimReducer,
    // QuanLyRapReducer,
  
});

export const store = createStore(rootReducer
  ,applyMiddleware(thunk))