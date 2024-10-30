import { faker } from "@faker-js/faker";

// export type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   progress: number;
//   status: "relationship" | "complicated" | "single";
//   subRows?: Person[];
// };

export type Excercise = {
  name: string;
  modality: string;
  muscle_group: string;
  movement_pattern: string;
  category: string;
  date_uploaded: Date;
  subRows?: Excercise[];
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Excercise => {
  return {
    name: faker.lorem.words(),
    modality: faker.lorem.words(),
    muscle_group: faker.lorem.words(),
    movement_pattern: faker.lorem.words(),
    category: faker.lorem.words(),
    date_uploaded: faker.date.recent(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Excercise[] => {
    const len = lens[depth]!;
    return range(len).map((d): Excercise => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
