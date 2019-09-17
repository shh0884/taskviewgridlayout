browser.tabs.onActivated.addListener(function() {

var insertBefore = 'document.getElementById('calendar-task-box').insertBefore(document.getElementById('calendar-task-details-container'),document.getElementById('task-addition-box'))';
var InsertBefore = browser.tabs.executeScript({
         code: 'insertBefore'
});
var deckStyle1 = 'document.getElementById('calendarDisplayDeck').style.flex = '1'';
var DeckStyle1 = browser.tabs.executeScript({
         code: 'deckStyle1'
});
};
