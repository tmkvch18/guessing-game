class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    // console.log(this)
    return (this.mid = Math.round((this.max + this.min) / 2));
  }

  lower() {
    // console.log(this)
    return (this.max = this.mid);
  }

  greater() {
    // console.log(this)
    return (this.min = this.mid);
  }
}

module.exports = GuessingGame;
