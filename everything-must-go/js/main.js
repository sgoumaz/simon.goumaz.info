$(document).ready(function () {
  var $packContainer = $('#items');  
  $packContainer.imagesLoaded(function () {
    $packContainer.packery({
      itemSelector: '.item',
      gutter: 0
    });
  });
});
