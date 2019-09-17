var insertBefore = 'document.getElementById('calendar-task-box').insertBefore(document.getElementById('calendar-task-details-container'), document.getElementById('task-addition-box'))';
var InsertBefore = browser.tabs.executeScript({
         code: 'insertBefore'
});
var deckStyle1 = 'document.getElementById('calendarDisplayDeck').style.flex = '1'';
var DeckStyle1 = browser.tabs.executeScript({
         code: 'deckStyle1'
});
      var ButtonListener1 = 'document.querySelector('taskview1').addEventListener('click', function() {InsertBefore; DeckStyle1;})';
      var ButtonLIstener1 = browser.tabs.executeScript({
         code: 'ButtonLIstener1'
      });
   
      ButtonLIstener2.then();
