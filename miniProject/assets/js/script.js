function getting(){
    var jsondata = JSON.parse(main);
    let htmlContent='';
    jsondata.forEach(item=>{
        htmlContent+=`
        <div class="col">
            <div class="card border-0 pt-3 rounded-3 ms-3">
                <a href="${item.Bimg}"><img src="${item.Bimg}" class="card-img-top img-container bg-light " alt="${item.des}" height="300px"></a>
            </div>
        </div>`
    });
    $('#Bimg').append(htmlContent);
  
}
$(document).ready(function(){
    
    var $overlay = $('<div class="overlay"></div>');
    var $image = $('<img>');
    var $caption = $("<p></p>");
    
    $overlay.append($image);
    $overlay.append($caption);
    $("body").append($overlay);
    
   
    $(".gallery a").click(function(event){
        event.preventDefault();
        var href = $(this).attr("href");
        var captionText = $(this).children("img").attr("alt");
    
        $image.attr("src", href);
        $caption.text(captionText);
    
        console.log("img: " + href + " " + "caption: " + captionText);
        $overlay.fadeIn("slow");
    });
    
   
    $(".overlay").click(function() {
        $(this).fadeOut("slow");
    });
    
    });
    
      $( function() {
    var availableTags = [
      "Mobile phones",
      "Watches",
      "Laptops",
      "Ear buds",
      "Head sets",
      "Air coolers",
      "Ac",
      "Fridges",
      "Tablets",
      "Speakers",
      "Led Tvs",
      "Washing Machines",
      "Printers",
      "Apple watches",
      "Fan",
      "Chargers",
      "Mouses",
      "KeyBoards",
      "Desktops",
    
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );