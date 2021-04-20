inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "1") {
        async function twoOne(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "70% 30%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoOne();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "2") {
        async function twoTwo(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "65% 35%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoTwo();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "3") {
        async function twoThree(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "60% 40%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoThree();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "4") {
        async function twoFour(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "55% 45%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoFour();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "5") {
        async function twoFive(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "50% 50%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoFive();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "6") {
        async function twoSix(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "45% 55%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoSix();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "7") {
        async function twoSeven(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "40% 60%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoSeven();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "8") {
        async function twoEight(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "35% 65%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoEight();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "9") {
        async function twoNine(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "30% 70%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoNine();
    };
});

inputTwo.addEventListener('input', function() {
    if (inputTwo.value == "10") {
        async function twoTen(currentTheme) {
            var currentTheme = await browser.theme.getCurrent();
            var theme = {
                "colors": {
                    "frame": currentTheme.colors.frame,
                    "bookmark_text": currentTheme.colors.bookmark_text,
                    "popup": currentTheme.colors.popup,
                    "popup_text": currentTheme.colors.popup_text,
                    "popup_border": currentTheme.colors.popup_border,
                    "popup_highlight": currentTheme.colors.popup_highlight,
                    "popup_highlight_text": currentTheme.colors.popup_highlight_text,
                    "sidebar": currentTheme.colors.sidebar,
                    "sidebar_text": currentTheme.colors.sidebar_text,
                    "sidebar_highlight": currentTheme.colors.sidebar_highlight,
                    "sidebar_highlight_text": currentTheme.colors.sidebar_highlight_text,
                    "sidebar_border": currentTheme.colors.sidebar_border,
                    "tab_text": currentTheme.colors.tab_text,
                    "tab_line": currentTheme.colors.tab_line,
                    "tab_loading": currentTheme.colors.tab_loading,
                    "tab_background_text": currentTheme.colors.tab_background_text,
                    "toolbar_field": currentTheme.colors.toolbar_field,
                    "toolbar_field_text": currentTheme.colors.toolbar_field_text,
                    "toolbar_field_highlight": currentTheme.colors.toolbar_field_highlight,
                    "toolbar_field_highlight_text": currentTheme.colors.toolbar_field_highlight_text,
                    "toolbar_field_focus": currentTheme.colors.toolbar_field_focus,
                    "toolbar_field_text_focus": currentTheme.colors.toolbar_field_text_focus,
                    "toolbar_field_border": currentTheme.colors.toolbar_field_border,
                    "toolbar_field_border_focus": currentTheme.colors.toolbar_field_border_focus,
                    "toolbar_top_separator": currentTheme.colors.toolbar_top_separator,
                    "toolbar_bottom_separator": currentTheme.colors.toolbar_bottom_separator,
                    "toolbar_vertical_separator": currentTheme.colors.toolbar_vertical_separator,
                    "tab_selected": currentTheme.colors.tab_selected,
                    "toolbar": currentTheme.colors.toolbar,
                    "box_bg": currentTheme.colors.box_bg,
                    "box_text": currentTheme.colors.box_text
                },
                "properties": {
                    "display": "grid",
                    "width1": "100%",
                    "height1": "100%",
                    "grid_template_areas1": "#calendar-task-box>vbox>#calendar-task-tree #calendar-task-box>vbox>#calendar-task-details-container",
                    "grid_template_columns1": "25% 75%",
                    "grid_template_rows1": "100%",
                    "visibility2": "hidden",
                    "width3": "100%",
                    "grid_row3": "1",
                    "border4": "1px solid",
                    "width4": "100%",
                    "height3": "100%",
                    "height4": "100%",
                    "grid_row4": "1"
                }
            }
            browser.theme.update(theme);
        };
        twoTen();
    };
});