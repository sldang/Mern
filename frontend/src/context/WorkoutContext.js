import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        //this is to keep the locally deployed application up to date with the database without refreshing the page 
        case 'CREATE_WORKOUTS': 
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT': 
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return(
        <WorkoutsContext.Provider value ={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}