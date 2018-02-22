
function loadPage() {
  $('#text-area').keyup(validateText);
  $('#text-area').keyup(counterCharacter);
}

function validateText() {
  var $buttonOff = $('#buttonTwitt');

  if ($(this).val().trim().length > 0) {
    $buttonOff.removeAttr("disabled");
  } else {
    $buttonOff.attr("disabled", true);
  }
}

function counterCharacter() {
  var counter = document.getElementById('counter');
  var $count = 0;
  $count = $('#text-area').val().length;
  counter.value = 140 - $count;
}

$(document).ready(loadPage);
