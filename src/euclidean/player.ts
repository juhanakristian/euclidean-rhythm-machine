export async function playRhythm(
  rhythm: boolean[],
  bpm: number,
  audioSampleUrl: string
): Promise<void> {
  const audioContext = new AudioContext();
  const audioBuffer = await fetch(audioSampleUrl)
    .then((res) => res.arrayBuffer())
    .then((ArrayBuffer) => audioContext.decodeAudioData(ArrayBuffer));
  const stepDuration = (60 / bpm) * 1000; // Duration of each step in milliseconds
  let stepIndex = 0;

  const playStep = async () => {
    const step = rhythm[stepIndex];
    if (step) {
      const source = audioContext.createBufferSource();

      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();

      console.log("playing");
    }

    stepIndex = (stepIndex + 1) % rhythm.length;
    setTimeout(playStep, stepDuration);
  };

  playStep();
}
