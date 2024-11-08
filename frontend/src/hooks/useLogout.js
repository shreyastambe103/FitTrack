//frontend/src/hooks/useLogout.js
import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const {dispatch} =useAuthContext()
    const {dispatch: workoutsDispatch} =useWorkoutsContext()
    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch ({type: 'SET_WORKOUTS', payload: null})//clear prev user's workouts
    }

    return {logout}

}