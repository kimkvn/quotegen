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

      $('.twitter').append("<a class='twitter-share-button' href='https://twitter.com/intent/tweet' data-text=\""+data.quote+"\" data-url=0></a>");
      twttr.widgets.load();
      //$('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet/?text='+data.quote);

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
