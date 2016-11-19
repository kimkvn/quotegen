$(document).ready(function(){

  var data;

  /* AJAX GET method */
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
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
    console.log(data)
  })

  $('body').html(JSON.stringify(data))

  /* jQuery $.get method */
  // var quoteAPI = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies'
  // $.getJSON(quoteAPI, function(){
  //   X-Mashape-Key: 'dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f',
  //   format: "json"
  // }).done(function(data){
  //   $('body').html(JSON.stringify(data));
  // });


});
