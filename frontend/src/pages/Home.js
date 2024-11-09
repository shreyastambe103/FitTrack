// frontend/src/pages/Home.js
import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// components 
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutTip from '../components/WorkoutTip';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      
      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workout-tip-container">
        <WorkoutTip />
      </div>

      <div className="content-container">
        <div className="workouts-list">
          {/* Check if workouts exist before mapping */}
          {workouts ? (
            workouts.map(workout => (
              <WorkoutDetails key={workout.id} workout={workout} />
            ))
          ) : (
            <p>Loading workouts...</p>
          )}
        </div>

        <div className="workout-form">
          {/* Render the workout form */}
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;