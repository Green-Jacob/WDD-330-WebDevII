export default class Game{
  constructor(match, o1, o2, o3)
  {
    this.match = match;
    this.opt1 = o1;
    this.opt2 = o2;
    this.opt3 = o3;
  }

  click(option)
  {
    console.log(option);
    console.log(this.match);
    if (option == this.match)
    {
      console.log("match!!");
    }
    else
    {
      console.log("nope!");
    }
  }

}
