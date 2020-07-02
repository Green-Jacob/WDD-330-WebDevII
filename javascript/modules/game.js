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
    console.log(option.getAttribute("value"));
    console.log(this.match.getAttribute("value"));
    if (option.getAttribute("value") == this.match.getAttribute("value"))
    {
      console.log("match!!");
      return true;
    }
    else
    {
      console.log("nope!");
      return false;
    }
  }

}
