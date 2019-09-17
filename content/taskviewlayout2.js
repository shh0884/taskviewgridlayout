browser.menus.onClicked.addListener((info, tab) => {
var appendChild = document.getElementById('calendar-task-box').appendChild(document.getElementById('calendar-task-details-container'));
var AppendChild = browser.tabs.executeScript({
code: 'appendChild'
});
var deckStyle2 = document.getElementById('calendarDisplayDeck').style.flex = '1';
var DeckStyle2 = browser.tabs.executeScript({
code: 'deckStyle2'
});
 AppendChild;
 DeckStyle2;
});
