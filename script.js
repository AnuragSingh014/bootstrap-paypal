function toggleNav() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  }


  function equalizeColumnHeights() {
    // Get all rows with the class "equal-height"
    const rows = document.querySelectorAll('.row.equal-height');
    
    rows.forEach(row => {
        // Get all columns in the current row
        const columns = row.querySelectorAll('.col-md-6');
        
        // Reset each column's height to auto before recalculating
        columns.forEach(column => {
            column.style.height = 'auto';
        });

        // Calculate the maximum height in this row
        let maxHeight = Math.max(...Array.from(columns, col => col.offsetHeight));

        // Set each column in the current row to the max height
        const cards = row.querySelectorAll('.card');
        cards.forEach(column => {
            column.style.height = `${maxHeight}px`;
        });
    });
}

// Run the function when the page loads
window.addEventListener('load', () => {
    setTimeout(equalizeColumnHeights, 100); // Slight delay to ensure rendering completion
});

// Re-run the function when the window is resized
window.addEventListener('resize', equalizeColumnHeights);
