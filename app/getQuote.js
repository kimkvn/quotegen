$(document).ready(function(){

  var quoteAPI = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies';

  function getQuote(){
    /* AJAX GET method */
    $.ajax({
      url: quoteAPI,
      type: 'GET',
      data: {},
      dataType: 'json',
      success: function(data){
        console.dir((data.source));
      },
      error: function(err){
        alert(err);
      },
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Mashape-Authorization', "dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f")
      }
    }).done(function(data){

      /* inserting data from the API */
      window.setTimeout(function(){
        $('.quote').html(data.quote);
        $('.author').html('- '+data.author);
        $('h1, .author, .quote-mark').removeClass('blur');
        $('h1, .author, .quote-mark').addClass('focus');
      }, 1000)



      /* injecting the Tweet button */
      $('.twitter').append("<a class='twitter-share-button' href='https://twitter.com/intent/tweet' data-text=\"" + data.quote + "\" data-url=0></a>");

      /* necessary step for the twitter script to recognize the updated data*/
      twttr.widgets.load();

      /* preventing a cluster of Tweet buttons from populating */
      if($('.twitter-share-button').length > 1){
        $('.twitter-share-button')[0].remove();
      }

    });
  };

  getQuote();

  $('.new-quote').on('click', function(){
    $('h1, .author, .quote-mark').removeClass('focus');
    $('h1, .author, .quote-mark').addClass('blur');
    getQuote();
  });

});
