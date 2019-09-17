var deckStyle3 = 'document.getElementById('calendarDisplayDeck').style.flex = '0 2 0'';
var DeckStyle3 = browser.tabs.executeScript({
         code: 'deckStyle3'
});
var appendChild3 = 'document.getElementById('calendarContent').appendChild(document.getElementById('calendar-task-details-container'))';
var AppendChild3 = browser.tabs.executeScript({
         code: 'appendChild3'
});

      var ButtonListener3 = 'document.querySelector('taskview3').addEventListener('click', function() {DeckStyle3; AppendChild3;})';
      var ButtonLIstener3 = browser.tabs.executeScript({
         code: 'ButtonLIstener3'
      });
   
      ButtonLIstener3.then();
