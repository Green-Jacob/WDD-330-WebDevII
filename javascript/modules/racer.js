class Racer {
  constructor() {
    this.name = "Default";
    this.gender = "Male";
    this.race = "100 Meter";
    this.idNum = 0;
  }
  display(){
    let s = "Name: " + this.name + "<br>";
    s += "Gender: " + this.gender + "<br>";
    s += "Race: " + this.race + "<br>";
    s += "Bib Number: " + this.idNum + "<br>";
    s += "<hr>"
    return s;
  }
}
