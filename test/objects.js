const user = {
  username: "Joe",
  age: 10,
  location: "Chickago",
  location: 5,
};

const { username: a123, age, rating = 7 } = user;
//console.log(a123);
//console.log(rating);

const transaction = (type, {age,location}={}) => {
 console.log(location)
};

transaction("order", user);
