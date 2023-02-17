const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = search.value;

  fetch("http://localhost:3000/weather?address=" + address).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log("err");
      } else {
        console.log(data);
        const myRes = document.querySelector("#res");
        myRes.textContent = JSON.stringify(data);
      }
    });
  });
});
