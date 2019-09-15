browser.windows.onCreated.addListener(function() {browser.browserAction.getPopup({})});
browser.menus.create({
  id: 'taskview1',
  title: 'View to put task view up',
  contexts: ['browser_action']
});
browser.menus.create({
  id: 'taskview2',
  title: 'View to put task view neutrally',
  contexts: ['browser_action']
});
browser.menus.create({
  id: 'taskview3',
  title: 'View to put task view vertically',
  contexts: ['browser_action']
});