//frontend/src/components/WorkoutDetails.js
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { toast } from 'react-toastify'; // Import toast for notifications
import { useAuthContext } from '../hooks/useAuthContext';
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const {user} = useAuthContext()
  const handleClick = async () => {
    if(!user){

      return
    }
    
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
      toast.success('Workout deleted!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
            backgroundColor: '#e7195a',  // Primary color for success
            color: '#ffffff',            // Text color
          }
        }); // Show success toast
    } else {
      toast.error('Failed to delete workout!'); // Show error toast
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load(kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;