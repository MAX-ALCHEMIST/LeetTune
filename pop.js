// let previousCount = 0;
// let mainUrl;

// const handleSubmit = () => {
//   const url = "https://leetcode-stats-api.herokuapp.com/";
//   const username = document.getElementById("username").value;
//   mainUrl = `${url}${username}`;
//   console.log(mainUrl);
//   const demo = document.getElementById("demo");
//   demo.innerHTML = username;
// };

// const fetchData = () => {
//   console.log(mainUrl);
//   fetch(mainUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const newCount = JSON.stringify(data.totalSolved, null, 2);
//       console.log("New Count:", newCount);
//       if (newCount > previousCount) {
//         const audioElement = document.getElementById("leetTuneAudio");
//         audioElement.play();
//       }
//       previousCount = newCount;
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// };

// setInterval(fetchData, 10000);

// window.onload = () => {
//   document.getElementById("btn").addEventListener("click", handleSubmit);
// };
