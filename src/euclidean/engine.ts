export class EuclideanRhythmEngine {
  private steps: number;
  private pulses: number;

  constructor(steps: number, pulses: number) {
    this.steps = steps;
    this.pulses = pulses;
  }

  generateRhythm(): boolean[] {
    const rhythm: boolean[] = new Array(this.steps).fill(false);

    if (this.pulses <= 0 || this.steps <= 0) {
      return rhythm;
    }

    const bucketSize = Math.floor(this.steps / this.pulses);
    let remainder = this.steps % this.pulses;

    let index = 0;
    for (let i = 0; i < this.pulses; i++) {
      rhythm[index] = true;
      index += bucketSize;

      if (remainder > 0) {
        index++;
        remainder--;
      }
    }

    return rhythm;
  }
}
