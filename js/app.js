
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
  var $buttonOffAnswer = $('#buttonTwittAnswer');

  if ($(this).val().trim().length > 0) {
    $buttonOff.removeAttr("disabled");
    $buttonOffM.removeAttr("disabled");
    $buttonOffAnswer.removeAttr("disabled");
  } else {
    $buttonOff.attr("disabled", true);
    $buttonOffM.attr("disabled", true);
    $buttonOffAnswer.attr("disabled", true);
  }
}

function counterCharacter() {
  var counter = document.getElementById('counter');
  var counterM = document.getElementById('counterM');
  var counterAnswer = document.getElementById('counterAnswer');

  var $count = 0;
  var $countM = 0;
  var $countAnswer = 0;
  $count = $('#text-area').val().length;
  $countM = $('#text-areaM').val().length;
  $countAnswer = $('#text-areaAnswer').val().length;

  counter.value = 140 - $count;
  counterM.value = 140 - $countM;
  counterAnswer.value = 140 - $countAnswer;

  if ($count > 140 || $countM > 140 || $countAnswer > 140 ) {
    counter.style.color = "red";
    counterM.style.color = "red";
    counterAnswer.style.color = "red";
    $('#buttonTwitt').attr("disabled", true);
    $('#buttonTwittM').attr("disabled", true);
    $('#buttonTwittAnswer').attr("disabled", true);
  } else if ($count >= 120 || $countM >= 120 || $countAnswer >= 120) {
    counter.style.color = "orange";
    counterM.style.color = "orange";
    counterAnswer.style.color = "orange";
  } else if ($count >= 100 || $countM >= 100 || $countAnswer >= 100) {
    counter.style.color = "#90C071";
    counterM.style.color = "#90C071";
    counterAnswer.style.color = "#90C071";
  } else {
    counter.style.color = "#6E7F8D";
    counterM.style.color = "#6E7F8D";
    counterAnswer.style.color = "#6E7F8D";
  }
}

function resizeTextArea() {
  var textArea = document.getElementById('text-area');
  textArea.style.height = "50px";
  textArea.style.height = textArea.scrollHeight + 20 + "px";

  if (textArea.value.length === 0) {
    textArea.style.height = "50px";
  }
}

function resizeTextAreaM() {
  var textAreaM = document.getElementById('text-areaM');
  textAreaM.style.height = "50px";
  textAreaM.style.height = textAreaM.scrollHeight + 20 + "px";

  if (textAreaM.value.length === 0) {
    textAreaM.style.height = "50px";
  }
}

function resizeTextAreaAnswer() {
  var textAreaAnswer = document.getElementById('text-areaAnswer');
  textAreaAnswer.style.height = "50px";
  textAreaAnswer.style.height = textAreaAnswer.scrollHeight + 20 + "px";

  if (textAreaAnswer.value.length === 0) {
    textAreaAnswer.style.height = "50px";
  }
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

  var $commentUser = $('<div />', {
    'class': "col-md-12 content-answers pb-pt"
  });

  var template = '<div class="col-md-12 col-xs-12 pl-0 pr-0 light-gray fs-1">' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-comment blue-icon" data-toggle="modal" data-target="#myModalAnswer" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-retweet green-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-heart-empty pink-icon" data-like="true" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-envelope pink-icon1" aria-hidden="true"></span>' +
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
  $mainContainer.append($commentUser);

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

  var $commentUser = $('<div />', {
    'class': "col-md-12 content-answers pb-pt"
  });

  var template = '<div class="col-md-12 col-xs-12 pl-0 pr-0 light-gray fs-1">' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-comment blue-icon" data-toggle="modal" data-target="#myModalAnswer" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-retweet green-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-heart-empty pink-icon" data-like="true" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-envelope pink-icon1" aria-hidden="true"></span>' +
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
  $mainContainer.append($commentUser);

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

function comment() {
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
    'class': "col-md-12 col-xs-12 pr-0 pl-0"
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
                      '<span class="glyphicon glyphicon-heart-empty pink-icon" data-like="true" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 col-xs-3 pl-0">' +
                      '<span class="glyphicon glyphicon-stats pink-icon1" aria-hidden="true"></span>' +
                    '</div>' +
                  '</div>';

  // Add attributes
  $imgUser.attr('src', "assets/images/user-logo.png");
  $nameUser.text("Sɑмɑнɑяɑ サマアラ ~");
  $linkUser.text(" @SamaharaOficial");
  $top.text(" · ");
  $timeTweet.text(hour + ":" + minute + " " + ampm);
  $textUser.text($('#text-areaAnswer').val());

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

  $('.content-answers').prepend($mainContainer);

  $('#text-areaAnswer').val("");
  $('#buttonTwittAnswer').attr("disabled", true);
  $('#buttonTwittM').attr("disabled", true);
  $('#buttonTwitt').attr("disabled", true);
  var counter = document.getElementById('counter');
  var counterM = document.getElementById('counterM');
  var counterAnswer = document.getElementById('counterAnswer');
  counter.value = 140;
  counterM.value = 140;
  counterAnswer.value = 140;
  $('#myModalAnswer').modal('toggle');
}

function myHeart() {
  if ($(this).data("like")) {
    $(this).data('like', false);
    $(this).removeClass('glyphicon-heart-empty pink-icon');
    $(this).addClass('glyphicon-heart pink-icon');
    $(this).css('color', '#D61E80');
  } else {
    $(this).removeClass('glyphicon-heart pink-icon');
    $(this).data('like', true);
    $(this).addClass('glyphicon-heart-empty pink-icon');
    $(this).css('color', 'gray');
  }
}

function userComment() {
  $('#text-areaAnswer').keyup(validateText);
  $('#text-areaAnswer').keyup(counterCharacter);
  $('#buttonTwittAnswer').click(comment);
  $('#text-areaAnswer').keydown(resizeTextAreaAnswer);
}

$(document).on('click', '.pink-icon', myHeart);
$(document).on('click', '.comment', userComment);
$(document).ready(loadPage);
