interface Game {
  id?: string | number;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  id: 123,
  title: 'The last of us',
  description: 'the best game in the world',
  genre: 'action',
  platform: ['ps3', 'ps4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  }
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: 'The last of us: left behind',
  description: 'you play as Ellie',
  genre: 'action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 hours story'],
}

if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}