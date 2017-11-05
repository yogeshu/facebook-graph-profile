$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBALHzSm95st2XwrKdZBuILssGSlR6uKINKb95k43snVn9ZC2a3zB2JVycOfwS7DYuWYWk6jSOCVk8yZClXXnoOaoe4CHvU9PDTVPvG00XjHsg0WAPVAmyrx2VDUVpfa2wokVa08xGMAsUQ3hF5P1U3kLQmIbEzxNmlBc8rVZA1vQKM2AYgTutg3xCRPWnuQZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=id,name,hometown,education,email,location&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                      $("#myProfile").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                      $("#myName").text(response.name);
                      $("#myEmail").text(response.email);
                      $("#myHometown").text(response.hometown.name);
                      $("#myLocation").text(response.location.name);
                      $("#myEducation").html(response.education[0].school.name+'<ul>'+ '     '+    response.education[1].school.name);

                  }
                                   
            } 

        ); 

   }
    $("#facebookBtn").on('click',getFacebookInfo)

  });

(function(){
    $.getJSON("https://graph.facebook.com/237173582992285/feed?access_token=EAACEdEose0cBAH0K7vjhcszIaZAgIqD9bDDJTHrVn5SjwaCjNHl3uHdDJvfFjnTzE9vClMxXQfhI1xlFk1hDais164fIuVDbZBZCFf2x26ZAzZC5pcGOnxBMpk93xUziKCit5ZCpqPfYFegSAMOs4F7uYlWlFwa2F3QoyoZBzgjgOOzBQ4IwhW7b6JB3gTz1TsZD", function(results){
        console.log(results);
    });
})();
