
window.onload = function () {
  var feed = document.getElementById("feed");
  //title = makeDivHtml('<h2>' + url.slice(url.indexOf('.')+1, url.indexOf('.com'))+'</h2><br>');
  var userDiv= document.createElement('div');
  var titleDiv =document.createElement('div');
  titleDiv.className = "titleDiv";
  userDiv.setAttribute("id", "userDiv");
  title = makeDivHtml('<span><h2>' + url +'</h2></span><br>');
  poem = makeDivHtml(generateHaiku(entry2));
  titleDiv.appendChild(title);
  userDiv.appendChild(titleDiv);
  userDiv.appendChild(poem);
  feed.appendChild(userDiv);
   entry2 ='';//clear the entry from the reed retriever
   };

function userCall(){
initialize(document.getElementById("urlBox").value);
var userDiv= document.createElement('div');
userDiv.setAttribute("id", "userDiv");
var titleDiv =document.createElement('div');

var userEntry =  makeDivHtml(generateHaiku(entry2));
title = makeDivHtml('<span><h2>' + url +'</h2></span><br>');

var feed = document.getElementById("feed");
var divRemove = document.getElementById("userDiv");
    titleDiv.className = "titleDiv";
  titleDiv.appendChild(title);
  userDiv.appendChild(titleDiv);
  userDiv.appendChild(userEntry);
  if (divRemove){

  feed.removeChild(divRemove);
  feed.appendChild(userDiv);

    
  }else{
  feed.appendChild(userDiv); 
  }
 entry2=''; 
}

function makeDivHtml(str) {
  var element = document.createElement("b");
  element.innerHTML = str;
  return element;
}    
    
    
  
function countSyl(word) {

   if(word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '-');   
    word = word.replace(/^y/, '-');
    // return '-' + sylStr.match(/[aeiouy]{1,2}/g).length;
   
    return word.match(/[aeiouy]{1,2}/g).length;
}
 
function parseText(blurb) {
  // return blurb.toLowerCase().replace(/[^a-z\s]/ig, "").replace(/<.*?>/g, '').split(' ');
  var blurbArr= blurb.toLowerCase().replace(/[^a-z\s]/ig, "").replace(/<.*?>/g, '').split(' ');
  for (var i = 0; i <blurbArr.length; i++){
    if (blurbArr[i].length){
    blurbArr[i]+= '-' +(countSyl(blurbArr[i]));
    }
  }
  return blurbArr;
}
function generateWordPairs(str){
  var pairObj = {}
  var arrStr =parseText(str);

  for (var i =0; i <arrStr.length; i++){
    if (pairObj[arrStr[i]] === undefined){
    pairObj[arrStr[i]]=[arrStr[i+1]];
  }
  else{
     pairObj[arrStr[i]].push(arrStr[i+1]);
  }
}
return pairObj;
  
}

// function generateWordPairs(str){
//   var pairObj = {}
//   var arrStr =parseText(str);

//   for (var i =0; i <arrStr.length; i++){
//     if (pairObj[arrStr[i]] === undefined){
//     pairObj[arrStr[i]]=[arrStr[i+1]];
//   }
//   else{
//     pairObj[arrStr[i]].push(arrStr[i+1]);
//   }
// }
// return pairObj;
  
// }
function writeLine(blurb,length,syllables){
  var sylCount = 0;
  var words = parseText(blurb);
  var wordStart = randomWord(words);
  sylCount = Number(wordStart.slice(wordStart.indexOf('-')+1));
 var firstWord = wordStart.slice(0,wordStart.indexOf('-'));

  var wordPairs = generateWordPairs(blurb);
  var line = firstWord.toUpperCase();
  var count = 0;
  while (sylCount !== syllables){
    wordStart= randomWord(wordPairs[wordStart]);
      if (wordStart){
      count = Number(wordStart.slice(wordStart.indexOf('-')+1));
      sylCount += count;
      if (sylCount > syllables){
      sylCount = sylCount-count;
    }
 else{
   line += ' ' + wordStart.slice(0,wordStart.indexOf('-'));
      }

    }

  }
return line;
}

function generateHaiku(blurb){
  var poem = ''
    poem +='<blockquote><p>'
    poem += writeLine(blurb,0,5) +'<br>';
    poem += writeLine(blurb,0,7) + '<br>';
    poem += writeLine(blurb,0,5) +' ';
    poem +='</p></blockquote>'
    return poem;
  
}
function generatePoem (blurb, lines,wpl){
  var poem ='';
  for (i =0; i <lines; i++){
   poem += writeLine(blurb,wpl);
  }
  return poem;
  
}

function randomWord(arr) {
  
  var i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function changeUrlBox(arg){
  document.getElementById ("urlBox").value = arg.value;
}


// google.setOnLoadCallback(initialize("https://www.reddit.com/r/relationship/comments.rss")); 