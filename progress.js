document.addEventListener('DOMContentLoaded', function() {
    // Example function to fetch data
    fetchProgressData();

    function fetchProgressData() {
        // This function should fetch data from your server or local storage
        // Here we simulate data fetching with a static example
        const progressData = {
            totalSolves: 0,
            bestTime: 'NA',
            averageTime: 'NA',
            cubeTypes: '3x3',
            recentSolves: [
                // { time: '1:30', cubeType: '3x3' },
                // { time: '2:15', cubeType: '4x4' }
            ]
        };

        displayProgressData(progressData);
    }
    // Store data in localStorage if it doesn't already exist
    if (!localStorage.getItem('progressData')) {
        localStorage.setItem('progressData', JSON.stringify(initialData));
    }

    // Retrieve data from localStorage
    const progressData = JSON.parse(localStorage.getItem('progressData'));


    function displayProgressData(data) {
        document.getElementById('total-solves').textContent = data.totalSolves;
        document.getElementById('best-time').textContent = data.bestTime;
        document.getElementById('average-time').textContent = data.averageTime;
        document.getElementById('cube-types').textContent = data.cubeTypes;

        if(data.totalSolves == 0) document.getElementById('no-progress').textContent = "Please attempt atleast once to display the progress!!"
        const recentSolvesList = document.getElementById('recent-solves');
        recentSolvesList.innerHTML = ''; // Clear previous entries
        data.recentSolves.forEach(solve => {
            const listItem = document.createElement('li');
            listItem.textContent = `${solve.time} - ${solve.cubeType}`;
            recentSolvesList.appendChild(listItem);
        });
    }
    // Fetch and display data on page load
    fetchProgressData();
});