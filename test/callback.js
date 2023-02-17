setTimeout(() => {
  console.log("2 sec");
}, 2000);

const names = ["Joe", "Jack", "John"];
const shortNames = names.filter((n) => n.length < 4);
console.log(shortNames);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longtitude: 0,
    };
    callback(data);
  }, 2000);
};

const data = geocode("Philadelphia", (ddd) => {
  //  console.log(ddd);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(3, 4, (sum) => {
  console.log(sum);
});


