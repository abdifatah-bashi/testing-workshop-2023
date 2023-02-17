import { getRandomNumber } from "./utils";

export function getWinner(person1: string, person2: string) {
  const random = getRandomNumber();

  if (random % 2 !== 0) {
    return person1;
  }

  return person2;
}
