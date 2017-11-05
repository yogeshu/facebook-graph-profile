$( document) .ready (function() {
    
         var myFacebookToken = 'EAACEdEose0cBADuzwZB8iwXjD8of8ev38ro47ZBHZBrzBeZBMjRNhyxAVCzEyGhcTiZAbHJxL8Wd5EuqlwMsuLZB0aunrAbv4GQnrCPk0q8cSo6m8OhbyenvkBc3FqiYbBvcSoZBxlkY7I4HME4T1vyTfFFZByptvaGZBnYVmiGEBqGYreeoKBO2RzZA4cZC4V0bwq3kffJFNbnugZDZD'; 
 
            var getFacebookPostsInfo = function(){
                    
          $.ajax('https://graph.facebook.com/me/?fields=name,feed&access_token='+myFacebookToken,{
                success : function(response){
                    console.log(response);
                    console.log(response.data);
                    console.log(response.feed.data);
                    console.log(typeof(response));
                    $(".Name").text(response.name); //Gets name/
                    $(".1Message").text(response.feed.data[0].message);
                    $(".2Message").text(response.feed.data[1].message); 
                    $(".3Message").text(response.feed.data[2].message); 
                    $(".4Message").text(response.feed.data[4].message); 
                    $(".5Message").text(response.feed.data[5].message);
                     $(".6Message").text(response.feed.data[6].message); e
                    $(".7Message").text(response.feed.data[7].message);
                    $(".8Message").text(response.feed.data[8].message); 
                    $(".9Message").text(response.feed.data[9].message); 
                    $(".10Message").text(response.feed.data[10].message);
                    },
                    error : function(error){
                
                    alert(error.responseJSON.error.message)
                }
           } //end argument list 
        );// end ajax call 
    }// end get facebook info
    $("#facebookPostsBtn").on('click',getFacebookPostsInfo)
})