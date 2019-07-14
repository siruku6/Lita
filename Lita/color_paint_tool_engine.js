/* TODO: Extract Lita-class from PaintTool-class */
var PaintTool = {
  $theme_select_box: '',
  $pattern_select_box: '',
  target_selectors: [],
  array_$target_displays: [],

  // initialize Lita-window
  ready_for_the_performance: function() {
    PaintTool.$pattern_select_box = $('select#pattern');
    PaintTool.$theme_select_box = $('select#color-theme');

    PaintTool.set_default_target();

    var target_size = PaintTool.target_selectors.length;
    for (var i = 0; i < target_size; i++) {
      PaintTool.array_$target_displays.push($(`#target-${i} > .selector`));
      PaintTool.array_$target_displays[i].html(
        PaintTool.target_selectors[i]
      );
    }
    PaintTool.$theme_select_box.html('');
    var index = 0;
    $.each(ColorLake, function(key, theme) {
      PaintTool.$theme_select_box.append(`<option value="${index}">${key}</option>`);
      index++;
    });
    PaintTool.change_color_theme(Object.keys(ColorLake)[0]);
  },
  change_color_theme: function(theme_name){
    PaintTool.$pattern_select_box.html('');
    $.each(ColorLake[theme_name], function(i, color_pattern) {
      PaintTool.$pattern_select_box.append(`<option value="${i}">${i}</option>`);
    });
  },
  talk_to_Lita: function() {
    var $Lita = $(PaintTool.Lita.document);
    console.log($Lita.find('select'));
    $Lita.find('div#chat-space').append('<p>おーい、りたー(`・ワ・´)</p>');
  },
  set_default_target: function() {
    selectors = ['header', 'div.main-title', 'p.second-title', 'body'];
    $.each(selectors, function(i, selector){
      PaintTool.target_selectors[i] = selector;
    });
  },
  // set_target: function($target, i) {
  //   PaintTool.$target_objects[i] = $target;
  // },
  // paint_target: function(rgb, i) {
  //   PaintTool.$target_objects[i].attr('style', `background-color: rgb(${rgb});`);
  // },
  paint_all_target: function() {
    var $parent = $(window.opener.document);
    var theme_name = $('select#color-theme > option:selected').html()
    var color_ID = Number(PaintTool.$pattern_select_box.find('option:selected').val());
    var color_pattern = ColorLake[theme_name][color_ID];
    if (typeof color_pattern === 'undefined') {
      alert('There is no color pattern !');
      return;
    }
    $.each(PaintTool.target_selectors, function(i, selector) {
      $parent.find(selector).attr('style', `background-color: rgb(${color_pattern[i]}) !important;`);
    });
  }
};
