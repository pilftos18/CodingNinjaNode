import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

 
  addExercise(exercise) {
    // console.log(exercise);
    // Update the progress
    this.progress += exercise.caloriesBurned;
    // console.log();
    // Check if the goal is reached
    if (this.progress >= this.goal) {
     // console.log('Goal reached!');
      this.emit('goalReached');
    } else {
      console.log(`Current progress: ${this.progress}/${this.goal}`);
    }
  }

  emit(event) {
    if (event === 'goalReached') {
      console.log('Goal reached event emitted!');
    }
  }
  }


const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
  const tracker = new FitnessTracker();
  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
  tracker.addExercise({ name: "squat", caloriesBurned: 700 });
};

Solution();

export { FitnessTracker, Solution };
