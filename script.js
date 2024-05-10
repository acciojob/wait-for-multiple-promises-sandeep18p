const ele = document.getElementById('output');

function addRow(one = 'Loading...', two = '') { // Modified function to take two arguments
    const row = document.createElement("tr");
    row.setAttribute("id", "loading");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.textContent = one;
    cell2.textContent = two; // Uncommented this line to add the second argument to cell2
    row.appendChild(cell1);
    row.appendChild(cell2);
    ele.appendChild(row);
}

addRow();

function createPromise() {
    return new Promise((resolve) => {
        const x = Math.random() * 3;
        setTimeout(() => {
            resolve(x);
        }, 1000 * x);
    });
}

const promises = [];

for (let i = 1; i <= 3; i++) {
    promises.push(createPromise());
}

Promise.all(promises)
    .then((times) => {
        ele.innerHTML = '';

        let totalTime = 0;

        times.forEach((time, index) => {
            totalTime += time;
            addRow(`Promise ${index + 1}`, `${time.toFixed(3)} seconds`);
        });

        addRow('Total', `${totalTime.toFixed(3)} seconds`); // Added "seconds" to the end
    })
    .catch((error) => { 
        console.error("Error:", error);
    });
