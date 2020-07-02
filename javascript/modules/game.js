export default class Game{
  constructor(match, o1, o2, o3)
  {
    this.match = match;
    this.opt1 = o1;
    this.opt2 = o2;
    this.opt3 = o3;
  }

  click()
  {
    console.log(this.match);
    console.log(this.opt1);
    console.log(this.opt2);
    console.log(this.opt3);
  }

}
