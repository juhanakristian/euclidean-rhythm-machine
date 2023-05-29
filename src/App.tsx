import "./styles.css";

import { playRhythm } from "./euclidean/player";
import EuclideanRhythmMachine from "./euclidean/EuclideanRhythmMachine";

export default function App() {
  return (
    <div className="App">
      <EuclideanRhythmMachine />
    </div>
  );
}
