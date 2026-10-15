// IIFE (Immediately Invoked Function Expression)
// Why do we use IIFE?
// We use IIFE to execute a function immediately and to avoid polluting the global scope.


// Named IIFE below
(function () {
  
  console.log('Hello');
})();

//unnamed IIFE below
(()=>{
  console.log('Hello from arrow function');
})();

// how to pass parameters in IIFE,
(function (name) {
  console.log(`Hello ${name}`);
})('Vishal');

// make clouser example
