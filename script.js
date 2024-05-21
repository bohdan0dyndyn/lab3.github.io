console.log("-------------Завдання 1-10--------------------\n----------------");
let car1 = new Object();
car1.color="Red";
car1.maxSpeed=120;
car1.driver = new Object();
car1.driver.name = "Tony Stark";
car1.driver.category = "C";
car1.driver["personal limitation"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;
car1.drive = function(){
  console.log("I am not driving at night");
};

let car2 = {
  color: "black",
  maxSpeed: 100,
  driver: {
    name: "Steave Rogers",
    category: "B",
    ["personal limitation"]: null,
  },
  tuning: false,
  ["number of accidents"]: 2,
  drive: function(){
    console.log("I can drive anytime");
  },
};


function Truck(color, weight, avgSpeed, brand, model){
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
};

Truck.prototype.AssignDriver = function(name, nightDriving, experience){
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience,
  };
};

Truck.prototype.trip = function(){
  if(!this.driver){
    console.log("No driver assigned");
  }else{
    console.log(`Driver ${this.driver.name}  ${this.driver.nightDriving ? 'drives at night' : 'does not drive at night'} and has ${this.driver.experience} years of experience.`);
  };
};

let truck1 = new Truck("Blue", 5000, 70, "Reno", "T9");
truck1.AssignDriver("Jack Sparrow", true, 30);
truck1.trip();

let truck2 = new Truck("Yellow", 4000, 80, "Honda", "Calibr");
truck1.AssignDriver("William Terner", false, 10);
truck1.trip();

console.log("-------------Завдання 11-24--------------------\n----------------");

class Square{
  constructor(a){
    this.a = a;
  };

  static help(){
    console.log("Клас Square представляє собою чотирикутник в якому всі сторони та всі кути рівні.\nВ якому 'a' це сторона квадрата.");
  };

  lenght(){
    return 4 * this.a;
  };

  square(){
    return this.a * this.a;
  };

  info(){
    console.log(`Фігура: Квадрат
Довжина сторін: ${this.a}
Кути рівні: 90
Периметр: ${this.lenght()}
Площа: ${this.square()}`);
  };
};

class Rectangle extends Square{
  constructor(a,b){
    super(a);
    this._b = b;
  }

  get b(){
    return this._b;
  }

  set b(val){
    this._b = val;
  }

  static help(){
    console.log("Клас Rectangle представляє собою чотирикутник в якому протилежні сторони рівні та всі кути рівні.\nВ якому 'a' це довжина прямокутника, а 'b' це ширина.");
  };

  lenght(){
    return this.a * 2 + this.b * 2;
  }

  square(){
    return this.a * this.b;
  }

  info(){
    console.log(`Фігура: Прямокутник
Довжина сторін: ${this.a} , ширина: ${this.b}
Кути рівні: 90
Периметр: ${this.lenght()}
Площа: ${this.square()}`);
  };
}

class Rhombus extends Square{
  constructor(a, alpha, beta ){
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help(){
    console.log("Клас Rhombus представляє собою чотирикутник в якому всі сторони рівні та протилежні кути рівні.\nВ якому 'a' це довжина сторін ромба, а 'alpha' це тупий кут, а 'beta' це гострий кут.");
  };

  lenght(){
    return this.a * 4;
  }

  square(){
    return Math.pow(this.a, 2) * Math.sin(degToRad(this.beta));
  }

  info(){
    console.log(`Фігура: Ромб
Довжина сторін: ${this.a}
Тупий кут: ${this.alpha} Гострий кут: ${this.beta}
Периметр: ${this.lenght()}
Площа: ${this.square()}`);
  };
}

function degToRad(degAngle){
  return degAngle*(Math.PI/180);
}

class Parallelogram extends Rhombus{
  constructor(a, b, alpha, beta ){
    super(a, alpha, beta);
    this.b = b;
  }

  static help(){
    console.log("Клас Parallelogram представляє собою чотирикутник в якому протилежні сторони рівні та протилежні кути рівні.\nВ якому 'a' це довжина сторін паралелограма,а 'b' це ширина сторін, 'alpha' це тупий кут, 'beta' це гострий кут.");
  };

  lenght(){
    return this.a * 2 + this.b * 2;
  }

  square(){
    return this.a * this.b * Math.sin(degToRad(this.beta));
  }

  info(){
    console.log(`Фігура: Паралелограм
Довжина сторін: ${this.a} Ширина: ${this.b}
Тупий кут: ${this.alpha} Гострий кут: ${this.beta}
Периметр: ${this.lenght()}
Площа: ${this.square()}`);
  };
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const sq = new Square(6);
sq.info();
const rec = new Rectangle(2,3);
rec.info();
const romb = new Rhombus(3,60,30);
romb.info();
const paral = new Parallelogram(3,4,50,40);
paral.info();

console.log("-------------Завдання 25-32--------------------\n----------------");

function Triangular(a=3, b=4, c=5){
  return{a,b,c};
}

console.log(Triangular());
console.log(Triangular(7,9));
console.log(Triangular(10,21,4));

function PiMultiplier(multiplier){
  let myFunc = function(){
    return multiplier * Math.PI;
  }
  return myFunc;
}

const MultiplieBy2 = PiMultiplier(2);
const MultiplieBy2divide3 = PiMultiplier(2/3);
const DivideBy2 = PiMultiplier(0.5);

console.log(MultiplieBy2());
console.log(MultiplieBy2divide3());
console.log(DivideBy2());

function Painter(color){
  let myFunc = function(obj){
      const type = obj.type;
      const messege = type? `Color: ${color}, Type: ${type}` : `No 'type'property occured!`;
      console.log(messege);
  }
  return myFunc;
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const obj1 = {
  maxSpeed: 280,
  type: "Sportcar",
  color: "magenta",
}
const obj2 = {
  type: "Truck",
  ["avg speed"]: 90,
  ["load capacity"]: 2400,
}
const obj3 = {
  maxSpeed: 280,
  color: "magenta",
  isCar: true,
}

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);