import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "../Features/User/userSlice";
import moviereducer from "../Features/Movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: moviereducer
        
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),

});