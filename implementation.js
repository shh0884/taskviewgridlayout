var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
var taskContainer = Services.wm.getMostRecentWindow('mail:3pane').document.getElementById('calendar-task-details-container');
var { ExtensionParent } = ChromeUtils.import("resource://gre/modules/ExtensionParent.jsm");
var extension = ExtensionParent.GlobalManager.getExtension("TaskviewLayoutGrid@Sungho.Hwang");

var myapi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
  extension.callOnClose(this)
    return {
      myapi: {
          setOneXS: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont);
            taskAdditionBox.insertAdjacentElement("beforebegin", calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"calTaskDetailsCont" "taskAdditionBox" "calTaskTree"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px auto 40px 700px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("calendar-task-tree").style.height = "700px";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();
                }
            },
          setOneS: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont);
            taskAdditionBox.insertAdjacentElement("beforebegin", calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"calTaskDetailsCont" "taskAdditionBox" "calTaskTree"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px auto 40px 650px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("calendar-task-tree").style.height = "650px";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();
                }
            },
          setOneM: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont);
            taskAdditionBox.insertAdjacentElement("beforebegin", calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"calTaskDetailsCont" "taskAdditionBox" "calTaskTree"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px auto 40px 600px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("calendar-task-tree").style.height = "600px";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();
                }
            },
          setOneL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont);
            taskAdditionBox.insertAdjacentElement("beforebegin", calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"calTaskDetailsCont" "taskAdditionBox" "calTaskTree"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px auto 40px 550px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("calendar-task-tree").style.height = "550px";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();
                }
            },
          setOneXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont);
            taskAdditionBox.insertAdjacentElement("beforebegin", calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"calTaskDetailsCont" "taskAdditionBox" "calTaskTree"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px auto 40px 500px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("calendar-task-tree").style.height = "500px";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();
                }
            },
          setOneTwoXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont);
            taskAdditionBox.insertAdjacentElement("beforebegin", calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"calTaskDetailsCont" "taskAdditionBox" "calTaskTree"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px auto 40px 450px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("calendar-task-tree").style.height = "450px";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();
                }
            },
          setOneThreeXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont);
            taskAdditionBox.insertAdjacentElement("beforebegin", calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"calTaskDetailsCont" "taskAdditionBox" "calTaskTree"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px auto 40px 400px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("calendar-task-tree").style.height = "400px";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();
                }
            },
          setTwoXS: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox taskAdditionBox" "calTaskTree calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "70% 30%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "auto";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "2";
            window.document.getElementById("calendar-task-tree").refresh();
                    }
                },
          setTwoS: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox taskAdditionBox" "calTaskTree calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "65% 35%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "auto";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "2";
            window.document.getElementById("calendar-task-tree").refresh();
                    }
                },
          setTwoM: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox taskAdditionBox" "calTaskTree calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "60% 40%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "auto";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "2";
            window.document.getElementById("calendar-task-tree").refresh();
                    }
                },
          setTwoL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox taskAdditionBox" "calTaskTree calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "55% 45%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "auto";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "2";
            window.document.getElementById("calendar-task-tree").refresh();
                    }
                },
          setTwoXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox taskAdditionBox" "calTaskTree calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "50% 50%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "auto";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "2";
            window.document.getElementById("calendar-task-tree").refresh();
                    }
                },
          setTwoTwoXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox taskAdditionBox" "calTaskTree calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "45% 55%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "auto";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "2";
            window.document.getElementById("calendar-task-tree").refresh();
                    }
                },
          setTwoThreeXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox taskAdditionBox" "calTaskTree calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "40% 60%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "auto";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "2";
            window.document.getElementById("calendar-task-tree").refresh();
                    }
                },
          setThreeXS: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 700px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "700px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();            
                 }
              },
          setThreeS: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 640px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "640px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();            
                 }
              },
          setThreeM: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 580px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "580px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();            
                 }
              },
          setThreeL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 520px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "520px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();            
                 }
              },
          setThreeXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 460px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "460px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();            
                 }
              },
          setThreeTwoXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 400px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "400px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();            
                 }
              },
          setThreeThreeXL: function() {
            let windows = Services.wm.getEnumerator("mail:3pane");
            while (windows.hasMoreElements()) {
            let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 340px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "340px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();            
                 }
              }
            }
        }
    }
    close() {
          let windows = Services.wm.getEnumerator("mail:3pane");
         while (windows.hasMoreElements()) {
         let window = windows.getNext();
            var taskAdditionBox = window.document.getElementById("task-addition-box");
            var calTaskTree = window.document.getElementById("calendar-task-tree");
            var calTaskDetailsCont = window.document.getElementById("calendar-task-details-container");
            window.document.getElementById("calendar-task-details-container").style.border = "1px solid";
            window.document.getElementById("calendar-task-box").appendChild(calTaskDetailsCont); 
            window.document.getElementById("calendar-task-box").style.display = "grid";
            window.document.getElementById("calendar-task-box").style.gridTemplateAreas = '"taskAdditionBox" "calTaskTree" "calTaskDetailsCont"';
            window.document.getElementById("calendar-task-box").style.gridGap = "0px";
            window.document.getElementById("calendar-task-box").style.width = "100%";
            window.document.getElementById("calendar-task-box").style.height = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateColumns = "100%";
            window.document.getElementById("calendar-task-box").style.gridTemplateRows = "0px 40px 500px";
            window.document.getElementById("task-addition-box").style.height = "40px";
            window.document.getElementById("calendar-task-tree").style.height = "500px";
            window.document.getElementById("calendar-task-details-container").height = "auto";
            window.document.getElementById("task-addition-box").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-details-container").style.gridColumn = "1/span 3";
            window.document.getElementById("calendar-task-tree").refresh();   

}
        Services.obs.notifyObservers(null, "startupcache-invalidate", null); 
    }
};