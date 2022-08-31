let Mansur = {
  skin_tone: "PANTONE 62-5 C",
  age: 18,
  haveCar: false,
  haveWife: false,
  money: 155,
  danar: 0,
  working_days: 0,
  job: false,
  hands: {
    rightHand: true,
    leftHand: true,
  },

  work: function () {
    this.working_days += 1;
    this.money += 1000;
    if (this.working_days % 365 === 0) {
      this.grow_up();
    }
    this.byeDanar();
    this.eat();
  },
  byeCar: function () {
    if (this.money > 100000) {
      this.haveCar = "Семерка битая";
    } else {
      console.log("не хватает денег.");
    }
  },
  marry: function () {
    if (this.age >= 20) {
      this.haveWife = true;
    }
  },
  grow_up: function () {
    this.age += 1;
  },
  byeDanar: function () {
    this.danar += 1;
    this.money -= 120;
  },
  eat: function () {
    if (this.danar > 0) {
      this.danar -= 1;
    }
  },
};
