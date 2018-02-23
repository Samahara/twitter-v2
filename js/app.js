
function loadPage() {
  $('#text-area').keyup(validateText);
  $('#text-area').keyup(counterCharacter);
  //$('#text-area').keydown(resizeTextArea);
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

  if ($count > 140) {
    counter.style.color = "red";
    $('#buttonTwitt').attr("disabled", true);
  } else if ($count >= 120) {
    counter.style.color = "orange";
  } else if ($count >= 100) {
    counter.style.color = "#90C071";
  } else {
    counter.style.color = "#6E7F8D";
  }
}

//function resizeTextArea() {
//  $(this).off( "scroll" );
//}

$(document).ready(loadPage);
