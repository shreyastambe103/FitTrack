//frontend/src/hooks/useWorkoutsContext.js
import { WorkoutsContext } from  '../context/WorkoutContext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkoutContext must be used inside a WorkoutContextProvider')
    }

    return context 
}