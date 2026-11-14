
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please provide a valid height';
        return;
    }

    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please provide a valid weight';
        return;
    }

    else {
        const bmi = weight / ((height * height) / 10000);

        let category;

        if (bmi < 18.6) {
            category = 'Underweight';
        }
        else if (bmi <= 24.9) {
            category = 'Normal Range';
        }
        else {
            category = 'Overweight';
        }

        results.innerHTML = `
            Height: ${height} cm <br>
            Weight: ${weight} kg <br>
            Your BMI is: ${bmi.toFixed(2)} <br>
            Category: ${category}
        `;
    }
});
