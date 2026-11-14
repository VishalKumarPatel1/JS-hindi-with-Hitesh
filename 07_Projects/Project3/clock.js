// const clock = document.getElementById('time');

// setInterval(() => {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);


// above code is for digital clock, below code is for analog clock




(function () {

  // Select HTML elements
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");

  // Check HTML elements
  if (!hour || !minute || !second) {
      console.error("Clock hands not found!");
      return;
  }

  // Update clock function
  function updateClock() {

      const date = new Date();

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const milliseconds = date.getMilliseconds();

      // Calculate rotation degrees
      const hourRotation =
          (hours % 12) * 30 + minutes * 0.5;

      const minuteRotation =
          minutes * 6 + seconds * 0.1;

      const secondRotation =
          seconds * 6 + milliseconds * 0.006;

      // Apply rotation to clock hands
      hour.style.transform =
          `translateX(-50%) rotate(${hourRotation}deg)`;

      minute.style.transform =
          `translateX(-50%) rotate(${minuteRotation}deg)`;

      second.style.transform =
          `translateX(-50%) rotate(${secondRotation}deg)`;
  }

  // Run clock immediately
  updateClock();

  // Update clock every 50 milliseconds
  setInterval(updateClock, 50);

})();


updateClock();

setInterval(updateClock, 50);