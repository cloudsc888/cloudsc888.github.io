google.load("feeds", "1");
var entry; //entry of the feed
var entry2; //content
var poem ='';
var title ='';
var url;
function initialize(arg) {
  //url=document.getElementById("urlBox").value;
  var feed = new google.feeds.Feed(arg,{
  api_key : 'gtemo248xegxwz9txbe8qx4ybyuu3ohnifdpfbac',
  count : 5,
  order_by : 'title',
  order_dir : 'asc'});
  feed.load(function(result) {
    if (!result.error) {
      //var container = document.getElementById("feed");//the div
      for (var i = 0; i < result.feed.entries.length; i++) {
      entry = result.feed.entries[i];
      entry2 += entry.content;
      entry2 = entry2.replace(/<.*?>/g, '');
      var div = document.createElement("div");
      }
     
     
      
      
      }
      }
      
      );

    }
    
