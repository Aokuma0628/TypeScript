class Creature {
	protected hands: number;
	protected feets: number;

	constructor(hand_num: number, feet_num: number) {
		this.hands = hand_num;
		this.feets = feet_num;
	}
}

const creature = new Creature(5,2);
console.log(creature);

class Cat extends Creature {
	private bark: string;
	constructor(bark: string) {
		super(0, 4);
		this.bark = bark;
	}

	public barking() {
		console.log(`${this.bark}!`);
	}
}

class Human extends Creature {
	private name: string;
	constructor(name: string) {
		super(2, 2);
		this.name = name;
	}
	
	public greet() {
		console.log(`Hello I'm ${this.name}`);
	}
}

const cat = new Cat('nyaaaa');
cat.barking();

const human = new Human('Taro'); 
human.greet();
