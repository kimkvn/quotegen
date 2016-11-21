$(document).ready(function(){

  var photoAPI = 'https://pixabay.com/api/';
  var key = '3816165-f45dd5d04573ce59bcdfc3e48';

  $.ajax({
    url: photoAPI+'?key='+key+'&q=nature&image_type=photo',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data){
      console.log(data)
    },
    error: function(err){
      alert(err);
    }
  })

});
