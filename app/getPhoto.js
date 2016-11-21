// $(document).ready(function(){
//
//   var photoAPI = 'https://pixabay.com/api/';
//   var key = '3816165-f45dd5d04573ce59bcdfc3e48';
//
//   var randNum = Math.floor(Math.random()*(50 - 0 + 1));
//
//
//   $.ajax({
//     url: photoAPI+'?key='+key+'&q=nature+landscape&image_type=photo&per_page=50',
//     type: 'GET',
//     data: {},
//     dataType: 'json',
//     success: function(data){
//       var photoURL = data.hits[randNum].webformatURL;
//       $('.photo-bg img').attr('src', photoURL);
//
//       console.log(data.hits[randNum].webformatURL);
//     },
//     error: function(err){
//       alert(err);
//     }
//   })
//
// });
