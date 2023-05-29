import React, { useState, useEffect } from "react";
import { EuclideanRhythmEngine } from "./engine";
import { playRhythm } from "./player";

const EuclideanRhythmMachine: React.FC = () => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rhythm, setRhythm] = useState<boolean[]>([]);
  // Create an instance of the EuclideanRhythmEngine

  // Generate the rhythm whenever bpm or engine changes
  useEffect(() => {
    const engine = new EuclideanRhythmEngine(16, 5);
    setRhythm(engine.generateRhythm());
  }, [bpm]);

  // Function to start or stop the playback
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const audioSampleUrl = "/rim.wav"; // Replace with your audio sample URL
      playRhythm(rhythm, bpm, audioSampleUrl);
    }
  }, [isPlaying, rhythm, bpm]);

  return (
    <div>
      <h2>Euclidean Rhythm Machine</h2>
      <div>
        <label>BPM:</label>
        <input
          type="number"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          min={1}
        />
        <button onClick={togglePlayback}>{isPlaying ? "Stop" : "Play"}</button>
      </div>
      <div className="rhythm-display">
        {rhythm.map((step, index) => (
          <div key={index} className={`rhythm-step ${step ? "active" : ""}`}>
            O
          </div>
        ))}
      </div>
    </div>
  );
};

export default EuclideanRhythmMachine;
