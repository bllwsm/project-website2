document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.info-column');
  
    columns.forEach((column, index) => {
      column.addEventListener('click', () => {
        const extraInfoContainer = document.querySelector('.extra-info-container');
        const extraInfoDivs = document.querySelectorAll('.extra-info');
        
        // Hide all extra info divs
        extraInfoDivs.forEach(div => div.classList.add('d-none'));
  
        // Show the corresponding extra info
        const infoId = `extra-info${index + 1}`;
        const infoDiv = document.getElementById(infoId);
        infoDiv.classList.remove('d-none');
        
        // Append the extra info div to the container
        extraInfoContainer.appendChild(infoDiv);
      });
    });
  });
  



  $(document).ready(function() {
    $('.scroll-link').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top - ($(window).height() / 2) + ($target.outerHeight() / 2)
        }, 0, 'swing');
    });
});




 // Get all the cards
 var cards = document.querySelectorAll('.card');
 // Get the image element
 var image = document.getElementById('hover-image');

 // Default image
 var defaultImage = image.src;

 cards.forEach(function(card) {
     card.addEventListener('mouseover', function() {
         // Change the image source when hovering over a card
         image.src = card.dataset.hoverImage;
     });

     card.addEventListener('mouseout', function() {
         // Change the image back to the default when not hovering over a card
         image.src = defaultImage;
     });
 });



 $(document).ready(function(){
  $(".close").click(function(){
    $("#myAlert").alert('close');
  });
});


$(document).ready(function(){
  setTimeout(function() {
    $('#myAlert').removeClass('d-none').addClass('show');
  }, 0); // This will make the alert appear

  $(".close").click(function(){
    $("#myAlert").alert('close');
  });
});