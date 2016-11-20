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
      $('.quote').html(data.quote);
      $('.author').html(data.author);

      $('.twitter-share-button').attr('data-text', data.quote);

      console.log(data)
    })

  };

  getQuote();

  $('.new-quote').on('click', function(){
    getQuote();
  });


  /* jQuery $.get method */
  // var quoteAPI = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies'
  // $.getJSON(quoteAPI, function(){
  //   X-Mashape-Key: 'dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f',
  //   format: "json"
  // }).done(function(data){
  //   $('body').html(JSON.stringify(data));
  // });


});
