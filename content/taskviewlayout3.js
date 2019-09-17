browser.menus.onClicked.addListener((info, tab) => {
var deckStyle3 = document.getElementById('calendarDisplayDeck').style.flex = '0 2 0';
var DeckStyle3 = browser.tabs.executeScript({
         code: 'deckStyle3'
});
var appendChild3 = document.getElementById('calendarContent').appendChild(document.getElementById('calendar-task-details-container'));
var AppendChild3 = browser.tabs.executeScript({
         code: 'appendChild3'
});
 DeckStyle3;
 appendChild3;
});
