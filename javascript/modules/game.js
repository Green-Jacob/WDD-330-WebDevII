export default class Game{
  constructor(match, o1, o2, o3)
  {
    this.match = match.value;
    this.opt1 = o1.value;
    this.opt2 = o2.value;
    this.opt3 = o3.value;
  }

  click(option)
  {
    console.log(option.value);
    console.log(this.match);
    if (option.value == this.match)
    {
      console.log("match!!");
    }
    else
    {
      console.log("nope!");
    }
  }

}
