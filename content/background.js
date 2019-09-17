browser.menus.create({
  checked: true,
  id: 'taskview1',
  title: 'View to put task view up',
  contexts: ['browser_action'],
  onclick: function() {
var insertBefore = document.getElementById('calendar-task-box').insertBefore(document.getElementById('calendar-task-details-container'), document.getElementById('task-addition-box'));
var InsertBefore = browser.tabs.executeScript({
         code: 'insertBefore'
});
var deckStyle1 = document.getElementById('calendarDisplayDeck').style.flex = '1';
var DeckStyle1 = browser.tabs.executeScript({
         code: 'deckStyle1'
});
 InsertBefore;
 DeckStyle1;
}
});

browser.menus.create({
  checked: true,
  id: 'taskview2',
  title: 'View to put task view neutrally',
  contexts: ['browser_action'],
  onclick: function() {
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
}
});

browser.menus.create({
  checked: true,
  id: 'taskview3',
  title: 'View to put task view vertically',
  contexts: ['browser_action'],
  onclick: function() {
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
}
});
