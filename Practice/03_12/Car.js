/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Car {
  constructor(make, model, color, carType, seatNum, insured) {
    (this.make = make),
      (this.model = model),
      (this.color = color),
      (this.carType = carType),
      (this.seatNum = seatNum),
      (this.insured = insured);
  }
  toggleInsured(insuredStatus) {
    this.insured = insuredStatus;
  }
}

export default Car;
