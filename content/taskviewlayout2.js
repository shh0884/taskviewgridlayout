var appendChild = window.document.getElementById('calendar-task-box').appendChild(document.getElementById('calendar-task-details-container'));
var AppendChild = browser.tabs.executeScript({
code: 'appendChild'
});
var deckStyle = document.getElementById('calendarDisplayDeck').style.flex = '1';
var DeckStyle = browser.tabs.executeScript({
code: 'deckStyle'
});

var ButtonListener2 = 'document.querySelector('taskview2').addEventListener('click', function() {AppendChild; DeckStyle;})';
var ButtonLIstener2 = browser.tabs.executeScript({
code: 'ButtonLIstener2'
});
   
      ButtonLIstener2.then();
