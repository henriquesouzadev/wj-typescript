// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
}

type CharInfo = {
  nickname: string;
  level: number;
}

type PlayerInfo = AccountInfo & CharInfo

const account: AccountInfo = {
  id: 123,
  name: 'Willian',
}

const char: CharInfo = {
  nickname: 'willian',
  level: 2
}

const player: PlayerInfo = {
  id: 12,
  name: 'John',
  nickname: 'Jonny',
  level: 100,
}