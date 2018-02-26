
    
    var topics = ["corgis"];

    function generateButtons() {
        $("#buttons").empty();

        for (i=0; i< topics.length; i++) {
            var buttonMaker = $("<button>");
            buttonMaker.addClass("tastes");
            buttonMaker.attr("pickles", topics[i]);
            buttonMaker.text(topics[i]);
            buttonMaker.css("margin", "10px 10px 10px 10px");
            buttonMaker.css("float", "left");
            buttonMaker.addClass("btn-success");
            $("#buttons").append(buttonMaker);
        }
    }

    function gifHammer() {
        $("#gifs").empty();
        var query = $(this).attr("pickles");
        var limit = $("#limit").val();
        var rating = $("#rating").val();
        console.log(limit);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          query + "&api_key=ZxQUlHEYBLvryL4k88bq9DaoycBcFslG&limit=" + limit + "&rating=" + rating;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            var results = response.data;

            for (var i=0; i<results.length; i++) {
                var gifDiv = $("<div>");
                var rate = $("<p>").text("Rated " + results[i].rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr("still", results[i].images.fixed_height_still.url);
                gifImage.attr("active", results[i].images.fixed_height.url );
                gifImage.attr("state", "still");
                gifImage.addClass("gif");
                gifDiv.append(gifImage, rate);
                gifDiv.css("margin", "10px 10px 10px 10px");
                gifDiv.css("float", "left");
                gifDiv.css("color", "whitesmoke");
                $("#gifs").append(gifDiv);
                
            }
        });
    };

    function partyTime() {
        
        var state = $(this).attr('state');
        
        console.log(state)
        
        if (state == "still") {
           $(this).attr({"src":$(this).attr('active'), 'state':'animate'});

        }
        else if (state == "animate") {
          $(this).attr({"src":$(this).attr('still'), 'state':'still'});
        }
       
    };

    function buttonMake() {
        event.preventDefault();
        var interest = $("#buttonTopic").val().trim()
        topics.push(interest);
        generateButtons();
    };

   $(document).on("click", ".gif", partyTime);
   $(document).on("click", ".tastes", gifHammer);
   $(document).on("click", "#buttonAdd", buttonMake)

    generateButtons();


// var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";





// ZxQUlHEYBLvryL4k88bq9DaoycBcFslG

// bitly_gif_url
// :
// "https://gph.is/VwKDh4"
// bitly_url
// :
// "https://gph.is/VwKDh4"
// content_url
// :
// ""
// embed_url
// :
// "https://giphy.com/embed/ZAdAS1xI8Ormg"
// id
// :
// "ZAdAS1xI8Ormg"
// images
// :
// 480w_still
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/480w_s.jpg?cid=e1bb72ff5a94822b75465874329779bc", width: "480", height: "214"}
// downsized
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy…ownsized.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "500", height: "223", size: "510626"}
// downsized_large
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "500", height: "223", size: "510626"}
// downsized_medium
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "500", height: "223", size: "510626"}
// downsized_small
// :
// {width: "500", height: "222", mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy…ed-small.mp4?cid=e1bb72ff5a94822b75465874329779bc", mp4_size: "142152"}
// downsized_still
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy…nsized_s.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "500", height: "223", size: "85170"}
// fixed_height
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "448", height: "200", size: "174113", mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200.mp4?cid=e1bb72ff5a94822b75465874329779bc", …}
// fixed_height_downsampled
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200_d.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "448", height: "200", size: "474666", webp: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200_d.webp?cid=e1bb72ff5a94822b75465874329779bc", …}
// fixed_height_small
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/100.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "224", height: "100", size: "174113", mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/100.mp4?cid=e1bb72ff5a94822b75465874329779bc", …}
// fixed_height_small_still
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/100_s.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "224", height: "100"}
// fixed_height_still
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200_s.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "448", height: "200"}
// fixed_width
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200w.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "200", height: "89", size: "51141", mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200w.mp4?cid=e1bb72ff5a94822b75465874329779bc", …}
// fixed_width_downsampled
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200w_d.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "200", height: "89", size: "115469", webp: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200w_d.webp?cid=e1bb72ff5a94822b75465874329779bc", …}
// fixed_width_small
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/100w.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "100", height: "45", size: "51141", mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/100w.mp4?cid=e1bb72ff5a94822b75465874329779bc", …}
// fixed_width_small_still
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/100w_s.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "100", height: "45"}
// fixed_width_still
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/200w_s.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "200", height: "89"}
// looping
// :
// {mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy-loop.mp4?cid=e1bb72ff5a94822b75465874329779bc", mp4_size: "3847210"}
// original
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "500", height: "223", size: "510626", frames: "14", …}
// original_mp4
// :
// {width: "480", height: "214", mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy.mp4?cid=e1bb72ff5a94822b75465874329779bc", mp4_size: "138754"}
// original_still
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy_s.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "500", height: "223"}
// preview
// :
// {width: "296", height: "130", mp4: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy-preview.mp4?cid=e1bb72ff5a94822b75465874329779bc", mp4_size: "49319"}
// preview_gif
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy-preview.gif?cid=e1bb72ff5a94822b75465874329779bc", width: "197", height: "88", size: "49351"}
// preview_webp
// :
// {url: "https://media2.giphy.com/media/ZAdAS1xI8Ormg/giphy-preview.webp?cid=e1bb72ff5a94822b75465874329779bc", width: "186", height: "83", size: "47192"}
// __proto__
// :
// Object
// import_datetime
// :
// "1970-01-01 00:00:00"
// is_indexable
// :
// 0
// is_sticker
// :
// 0
// rating
// :
// "g"
// slug
// :
// "doctor-who-matt-smith-well-you-say-that-as-if-its-a-bad-thing-but-honestly-the-best-is-ZAdAS1xI8Ormg"
// source
// :
// "https://gifs-for-the-masses.tumblr.com/post/28781575357"
// source_post_url
// :
// "https://gifs-for-the-masses.tumblr.com/post/28781575357"
// source_tld
// :
// ""
// title
// :
// "doctor who well you say that as if it's a bad thing. but honestly it's the best thing there is. GIF"
// trending_datetime
// :
// "1970-01-01 00:00:00"
// type
// :
// "gif"
// url
// :
// "https://giphy.com/gifs/doctor-who-matt-smith-well-you-say-that-as-if-its-a-bad-thing-but-honestly-the-best-is-ZAdAS1xI8Ormg"
// username
// :
// ""