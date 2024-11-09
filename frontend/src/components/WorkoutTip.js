import React, { useEffect, useState } from "react";
import fetchWorkoutTip from "../utils/generateWorkoutTip";

const WorkoutTip = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    async function loadTip() {
      const workoutTip = await fetchWorkoutTip();
      setTip(workoutTip);
    }
    loadTip();
  }, []);

  return (
    <div className="workout-tip">
      <h3><strong>Today's Workout Tip</strong></h3>
      <p>{tip}</p>
    </div>
  );
};

export default WorkoutTip;