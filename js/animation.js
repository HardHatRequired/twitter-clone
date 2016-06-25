$(document).ready(function() {

  $('button').click(function() {
    var tweet = $('.tweet-compose').val();
    var tweetFormat = '<div class="tweet">' + '<div class="content">' + '<img class="avatar" src="img/alagoon.jpg" />' + '<strong class="fullname">Scary Indie Guy</strong>' + '<span class="username"> @ScaryIndie</span>' + '<p class="tweet-text">' + tweet + '</p>' + '<div class="tweet-actions">' + '<ul>' + '<li><span class="icon action-reply"></span> Reply</li>' + '<li><span class="icon action-retweet"></span> Retweet</li>' + '<li><span class="icon action-favorite"></span> Favorite</li>' + '<li><span class="icon action-more"></span> More</li>' + '</ul>' + '</div>' + '<div class="stats">' + '<div class="retweets">' + '<p class="num-retweets">0</p>' + '<p>RETWEETS</p>' + '</div>' + '<div class="favorites">' + '<p class="num-favorites">0</p>' + '<p>FAVORITES</p>' + '</div>' + '<div class="users-interact">' + '<div>' + '<img src="img/alagoon.jpg" />' + '<img src="img/vklimenko.jpg" />' + '</div>' + '</div>' + '<div class="time">' + '1:04 PM - 19 Sep 13' + '</div>' + '</div>' + '<div class="reply">' + '<img class="avatar" src="img/alagoon.jpg" />' + '<textarea class="reply-compose" placeholder="Reply to @ScaryIndie"/></textarea>' + '</div>' + '</div>' + '</div><!-- .tweet -->'
    $('#stream').prepend(tweetFormat);
    $('.tweet-compose').val('');
    $('#tweet-controls').hide();
    $('.tweet-compose').css('height', '2.5em');
  })

//hide the stuff at outset
$('#tweet-controls').hide();
$('.reply').hide();
$('.stats').hide();

//show stats
  $('.tweet').click(function() {
    $('.stats', this).show();
  })


//show the reply when hover
  $('.tweet').mouseenter(function() {
    $('.reply', this).show();
  })

//hide reply and stats when leave
  $('.tweet').mouseleave(function() {
    $('.reply', this).hide();
    $('.stats', this).hide();
  })

//show the controls when focused
  $('.tweet-compose').focusin(function() {
    $('#tweet-controls').show();
    $('.tweet-compose').css('height', '5em');
    if ($('.tweet-compose').val().length === 0) {
      $('.button').prop('disabled', true);
    }
  });

//character counting
  $('.tweet-compose').keyup(function () {
    var tweetLength = $('.tweet-compose').val().length;
    var tweetRemain = 140 - tweetLength;
    $('#char-count').html(tweetRemain);
    if(tweetRemain < 11) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', '#999');
    }
    if(tweetRemain < 0 || tweetRemain === 140) {
      $('.button').prop('disabled', true);
      // $('button').toggleClass('.button:disabled'); //WHY DOESN"T THIS WORK?
    } else {
      $('.button').prop('disabled', false);
    }
  }) // end character counting

//hide the controls when focused
  $('.tweet-compose').focusout(function() {
    if($('.tweet-compose').val().length === 0) {
      $('#tweet-controls').hide();
      $('.tweet-compose').css('height', '2.5em');
    }
  });


}); // End bracket
