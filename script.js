document.getElementById('search').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`; // Change to your search URL format
    }
});

// Optional: Automatically focus on the search input field when the page loads
window.addEventListener('load', function() {
    document.getElementById('search-input').focus();
});
