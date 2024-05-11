import React, { Children, useReducer } from "react";

export default (reducer, action, initState) => {

    const Context = React.createContext();

    const Provider = ({ Children }) => {
        const [state, dispatch] = useReducer(reducer, initState)

        return <Context.Provider value={{ state: state }}>
            {Children}
        </Context.Provider>
    }
    return { Context, Provider }
}