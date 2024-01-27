document.addEventListener('DOMContentLoaded', function() {
    var rangeInput = document.getElementById('myRange');
    var numOfViews = document.getElementById('num-of-views');
    var priceElement = document.getElementById('price' && 'responsive-price');
    var toggleSwitch = document.querySelector('#switch input[type="checkbox"]');
    var pricePerView = 0.00016;
    var yearlyDiscount = 0.25; // 25% discount

    // Function to format page views
    function formatPageViews(value) {
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + 'M';
        } else if (value >= 1000) {
            return (value / 1000).toFixed(1) + 'K';
        }
        return value.toString();
    }

    // Function to calculate and format the price
    function calculatePrice(views) {
        var monthlyPrice = views * pricePerView;
        // Apply yearly discount if the toggle is checked
        if (toggleSwitch.checked) {
            monthlyPrice *= (1 - yearlyDiscount);
        }
        return (monthlyPrice).toFixed(2);
    }

    // Function to update the number of views and price
    function updateValues() {
        var views = rangeInput.value;
        numOfViews.textContent = formatPageViews(views);
        priceElement.textContent = '$' + calculatePrice(views);
    }

    // Initialize with default value
    updateValues();

    // Event listener for input changes
    rangeInput.addEventListener('input', function() {
        updateValues();
    });

    // Event listener for toggle switch changes
    toggleSwitch.addEventListener('change', function() {
        updateValues();
    });
});
