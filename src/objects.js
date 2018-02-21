export const createPerson = (name, age) => {
  // your code here
  const person = {
    name: name,
    age: age
  };
  return person;
};

export const getName = (object) => {
  // your code here
  return object.name;
};

export const getProperty = (property, object) => {
  // your code here
  return object.property;
};

export const hasProperty = (property, object) => {
  // your code here
};

export const isOver65 = (person) => {
  // your code here
  if (person.age > 65){
    return true;
  } else {
    return false;
  }
};

export const getAges = (people) => {
  // your code here
};

export const findByName = (name, people) => {
  // your code here
};

export const findHondas = (cars) => {
  // your code here

return cars
};

export const averageAge = (people) => {
  // your code here
};

export const createTalkingPerson = (name, age) => {
  // your code here
};
