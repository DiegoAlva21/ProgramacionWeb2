function parseCSV(csvData) {
    const rows = csvData.split('\n');
    const tableBody = document.querySelector('#csvTable tbody');

    rows.forEach(row => {
        const columns = row.split(',');
        const tr = document.createElement('tr');
        
        columns.forEach(column => {
            const td = document.createElement('td');
            td.textContent = column;
            tr.appendChild(td);
        });
        
        tableBody.appendChild(tr);
    });
}

// Function to read CSV file
function readCSV(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const csvData = e.target.result;
        parseCSV(csvData);
    };
    reader.readAsText(file);
}

// Event listener for file input change
document.querySelector('input[type="file"]').addEventListener('change', function(e) {
    const file = e.target.files[0];
    readCSV(file);
});


