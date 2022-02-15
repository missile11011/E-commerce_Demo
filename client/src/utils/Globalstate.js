import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
import store from "./store"
import { Provider } from "react-redux";

const StoreContext = createContext();


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
    });

    return <Provider store ={store} value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };