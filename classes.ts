abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level
  }

  get getLevel() {
    console.log('---GET---')
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old and has the char ${this.nickname} at level ${this.level}`)
  }
}

// const will = new UserAccount('Will', 29)
const john = new CharAccount('John', 31, 'Mr John', 100)
john.logDetails()

john.setLevel = 30
john.logCharDetails()
console.log(john.getLevel)