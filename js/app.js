
function loadPage() {
  $('#text-area').keyup(validateText);
  $('#text-areaM').keyup(validateText);
  $('#text-area').keyup(counterCharacter);
  $('#text-areaM').keyup(counterCharacter);
  $('#buttonTwitt').click(tweet);
  $('#buttonTwittM').click(tweetM);
  $('#text-area').keydown(resizeTextArea);
  $('#text-areaM').keydown(resizeTextAreaM);
}

function validateText() {
  var $buttonOff = $('#buttonTwitt');
  var $buttonOffM = $('#buttonTwittM');

  if ($(this).val().trim().length > 0) {
    $buttonOff.removeAttr("disabled");
    $buttonOffM.removeAttr("disabled");
  } else {
    $buttonOff.attr("disabled", true);
    $buttonOffM.attr("disabled", true);
  }
}

function counterCharacter() {
  var counter = document.getElementById('counter');
  var counterM = document.getElementById('counterM');

  var $count = 0;
  $count = $('#text-area').val().length;
  $countM = $('#text-areaM').val().length;

  counter.value = 140 - $count;
  counterM.value = 140 - $countM;

  if ($count > 140) {
    counter.style.color = "red";
    counterM.style.color = "red";
    $('#buttonTwitt').attr("disabled", true);
    $('#buttonTwittM').attr("disabled", true);
  } else if ($count >= 120) {
    counter.style.color = "orange";
    counterM.style.color = "orange";
  } else if ($count >= 100) {
    counter.style.color = "#90C071";
    counterM.style.color = "#90C071";
  } else {
    counter.style.color = "#6E7F8D";
    counterM.style.color = "#6E7F8D";
  }
}

function resizeTextArea() {
  var textArea = document.getElementById('text-area');
  textArea.style.height = "50px";
  textArea.style.height = textArea.scrollHeight + 20 + "px";
}

function resizeTextAreaM() {
  var textAreaM = document.getElementById('text-areaM');
  textAreaM.style.height = "50px";
  textAreaM.style.height = textAreaM.scrollHeight + 20 + "px";
}

function tweet() {
  // Time tweet
  var time = new Date();
  var hour = time.getHours();
  var ampm = "";
  var minute = time.getMinutes();

  if (hour >= 12) {
    hour = hour - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  };

  if (hour === 0) {
    hour = 12;
  };

  if (minute < 10) {
    minute = "0" + minute;
  };

  // Create elements
  var $mainContainer = $('<div />', {
    'class': "col-md-12 col-xs-12 pb-pt"
  });

  var $userPhotoTweet = $('<div />', {
    'class': "col-md-1 col-xs-1 photo-user pl-0 pr-0"
  });

  var $imgUser = $('<img />', {
    'class': "img-responsive"
  });

  var $contentContainer = $('<div />', {
    'class': "col-md-10 col-xs-11 pr-0"
  });

  var $nameUser = $('<p />', {
    'class': "fw-b ancoreTweet inline-block"
  });

  var $linkUser = $('<span />', {
    'class': "fw-n fs-1 light-gray"
  });

  var $top = $('<span />', {
    'class': "light-gray fw-n"
  });

  var $timeTweet = $('<span />', {
    'class': "fs-1 light-gray ancoreTweet"
  });

  var $textUser = $('<p />');

  var template = '<div class="col-md-12 col-xs-12 pl-0 pr-0 light-gray fs-1">' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-comment blue-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-retweet green-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-heart-empty pink-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-envelope pink-icon" aria-hidden="true"></span>' +
                    '</div>' +
                  '</div>';

  // Add attributes
  $imgUser.attr('src', "assets/images/user-logo.png");
  $nameUser.text("Sɑмɑнɑяɑ サマアラ ~");
  $linkUser.text(" @SamaharaOficial");
  $top.text(" · ");
  $timeTweet.text(hour + ":" + minute + " " + ampm);
  $textUser.text($('#text-area').val());

  // Dom -> HTML
  $userPhotoTweet.append($imgUser);
  $contentContainer.append($nameUser);
  $contentContainer.append($linkUser);
  $contentContainer.append($top);
  $contentContainer.append($timeTweet);
  $contentContainer.append($textUser);
  $contentContainer.append(template);
  $mainContainer.append($userPhotoTweet);
  $mainContainer.append($contentContainer);

  $('#twitts-container').prepend($mainContainer);

  $('#text-area').val("");
  $('#buttonTwitt').attr("disabled", true);
  $('#buttonTwittM').attr("disabled", true);
  var counter = document.getElementById('counter');
  var counterM = document.getElementById('counterM');
  counter.value = 140;
  counterM.value = 140;
  var textArea = document.getElementById('text-area');
  textArea.style.height = "50px";
}

function tweetM() {
  // Time tweet
  var time = new Date();
  var hour = time.getHours();
  var ampm = "";
  var minute = time.getMinutes();

  if (hour >= 12) {
    hour = hour - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  };

  if (hour === 0) {
    hour = 12;
  };

  if (minute < 10) {
    minute = "0" + minute;
  };

  // Create elements
  var $mainContainer = $('<div />', {
    'class': "col-md-12 col-xs-12 pb-pt"
  });

  var $userPhotoTweet = $('<div />', {
    'class': "col-md-1 col-xs-1 photo-user pl-0 pr-0"
  });

  var $imgUser = $('<img />', {
    'class': "img-responsive"
  });

  var $contentContainer = $('<div />', {
    'class': "col-md-10 col-xs-11 pr-0"
  });

  var $nameUser = $('<p />', {
    'class': "fw-b ancoreTweet inline-block"
  });

  var $linkUser = $('<span />', {
    'class': "fw-n fs-1 light-gray"
  });

  var $top = $('<span />', {
    'class': "light-gray fw-n"
  });

  var $timeTweet = $('<span />', {
    'class': "fs-1 light-gray ancoreTweet"
  });

  var $textUser = $('<p />');

  var template = '<div class="col-md-12 col-xs-12 pl-0 pr-0 light-gray fs-1">' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-comment blue-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-retweet green-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-heart-empty pink-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-envelope pink-icon" aria-hidden="true"></span>' +
                    '</div>' +
                  '</div>';

  // Add attributes
  $imgUser.attr('src', "assets/images/user-logo.png");
  $nameUser.text("Sɑмɑнɑяɑ サマアラ ~");
  $linkUser.text(" @SamaharaOficial");
  $top.text(" · ");
  $timeTweet.text(hour + ":" + minute + " " + ampm);
  $textUser.text($('#text-areaM').val());

  // Dom -> HTML
  $userPhotoTweet.append($imgUser);
  $contentContainer.append($nameUser);
  $contentContainer.append($linkUser);
  $contentContainer.append($top);
  $contentContainer.append($timeTweet);
  $contentContainer.append($textUser);
  $contentContainer.append(template);
  $mainContainer.append($userPhotoTweet);
  $mainContainer.append($contentContainer);

  $('#twitts-container').prepend($mainContainer);

  $('#text-areaM').val("");
  $('#buttonTwittM').attr("disabled", true);
  $('#buttonTwitt').attr("disabled", true);
  var counter = document.getElementById('counter');
  var counterM = document.getElementById('counterM');
  counter.value = 140;
  counterM.value = 140;
  $('#myModal').modal('toggle');
  var textAreaM = document.getElementById('text-areaM');
  textAreaM.style.height = "50px";
}

$(document).ready(loadPage);
