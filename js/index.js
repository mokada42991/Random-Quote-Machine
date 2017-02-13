$(document).ready(function() {

  $("#getQuote").on("click", function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(response) {
      
      $(".quote").html(response.quoteText);
      $(".author").html("- " + (response.quoteAuthor || "Unknown"));
      $(".tweet-button").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + response.quoteText + '"' + " - " + (response.quoteAuthor || "Unknown")));
      
    });
  });
});