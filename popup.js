$(document).ready(function() {
    // Show the first popup when the page loads
    $('#popup').fadeIn();
    $('#popup2').draggable();
    // When the CLOSE button on the first popup is clicked
    $('#close').click(function() {
        $('#popup').fadeOut(function() {
            // After the first popup fades out, show the second popup
            $('#popup2').fadeIn();
        });
    });
    const backgroundImages = [
        'images/newimage.jpg',  // Initial image
        'images/answers.jpg', // Answers
    ];

    let currentImageIndex = 0;

    // Function to change background image
    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        $('body').css('background-image', `url(${backgroundImages[currentImageIndex]})`);
    }

    // Event listener for background change button
    $('#change-bg-btn').click(function() {
        changeBackground();
    });
    
});