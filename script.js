// script.js
$(document).ready(function() {
    // Smooth Scrolling
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Parallax Effect
    $('.parallax').each(function() {
      var $this = $(this);
      $this.parallax('50%', 0.3);
    });
  
    // Waypoints Animations
    $('.animate__animated').waypoint(function() {
      $(this).addClass('animate__fadeInUp');
    }, {
      offset: '80%'
    });
  
    // Map Integration
    var map = L.map('map').setView([37.7749, -122.4194], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);
  
    L.marker([37.7749, -122.4194]).addTo(map)
      .bindPopup('Blockchains.bond Headquarters')
      .openPopup();
  });