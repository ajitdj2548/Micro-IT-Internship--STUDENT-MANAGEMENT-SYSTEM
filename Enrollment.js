// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const totalStudentsElement = document.querySelector('#totalStudents p');
    const attendanceTodayElement = document.querySelector('#attendanceToday p');
    const messagesSentElement = document.querySelector('#messagesSent p');
    const loadingElements = document.querySelectorAll('.loading'); // Elements that show loading state

    // Simulate fetching data with a delay (replace with real data fetch logic)
    simulateFetchData()
        .then((data) => {
            // Update the stats with the fetched data
            totalStudentsElement.textContent = data.totalStudents;
            attendanceTodayElement.textContent = data.attendanceToday;
            messagesSentElement.textContent = data.messagesSent;

            // Remove loading state
            loadingElements.forEach(el => el.classList.add('hidden'));
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            // Display error message (optional)
            totalStudentsElement.textContent = 'N/A';
            attendanceTodayElement.textContent = 'N/A';
            messagesSentElement.textContent = 'N/A';
        });
});

// Simulate an API call (replace with actual data fetching)
function simulateFetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success response with random data
            const success = true; // Set to false to simulate an error
            if (success) {
                resolve({
                    totalStudents: 25,
                    attendanceToday: 22,
                    messagesSent: 10
                });
            } else {
                reject('Failed to fetch data');
            }
        }, 2000); // Simulating a 2-second delay for the data fetch
    });
}
