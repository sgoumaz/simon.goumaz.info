$(document).ready(function () {
  var $packContainer = $('#items');
  $packContainer.packery({
    itemSelector: '.item',
    gutter: 0
  });
  $packContainer.imagesLoaded(function () {
    $packContainer.packery();
  });
});
