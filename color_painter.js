/* TODO: Extract Lita-class from ColorPainter-class */
var ColorPainter = {
  Lita: '',
  $pattern_select_box: '',
  $target_object: [],
  target_selectors: [],
  array_$target_displays: [],
  resetting_target_num: null,

  call_Lita: function() {
    ColorPainter.Lita = window.open(
      './bg_painter_lita.html', // $(this).attr('href'),
      'painter_toolwindow',
      'width=300, height=300, resizable=1'
    );
  },
  // initialize Lita-window
  ready_for_the_performance: function() {
    ColorPainter.$pattern_select_box = $('select#pattern');
    ColorPainter.set_default_target();
    for (var i = 0; i < 4; i++) {
      ColorPainter.array_$target_displays.push($(`.target-${i}`));
      if (ColorPainter.$target_object[i].length > 0) {
        // TODO: ほとんどLita-windowに表示されない
        ColorPainter.array_$target_displays[i].html(
          ColorPainter.$target_object[i][0].localName
        );
      }
    }
    $.each(ColorLake, function(key, theme) {
      $('select#color-theme').append(`<option value="${key}">${key}</option>`);
    });
    ColorPainter.change_color_theme('default');
  },
  change_color_theme: function(theme_name){
    ColorPainter.$pattern_select_box.html('');
    $.each(ColorLake[theme_name], function(i, color_pattern) {
      ColorPainter.$pattern_select_box.append(`<option value="${i}">${i}</option>`);
    });
  },
  talk_to_Lita: function() {
    var $Lita = $(ColorPainter.Lita.document);
    console.log($Lita.find('select'));
    $Lita.find('div#chat-space').append('<p>おーい、りたー(`・ワ・´)</p>');
  },
  switch_resetting_target: function(i) {
    if (ColorPainter.resetting_target_num === null) {
      ColorPainter.resetting_target_num = i;
    } else {
      ColorPainter.resetting_target_num = null;
    }
  },
  set_default_target: function() {
    selectors = ['header', 'div.main-title', 'p.second-title', 'body']
    $.each(selectors, function(i, selector){
      // TODO: object と selector の相互変換
      ColorPainter.$target_object[i] = $(selector);
      ColorPainter.target_selectors[i] = selector;
    });
  },
  set_target: function($target, i) {
    ColorPainter.$target_object[i] = $target;
  },
  pa_target: function(rgb, i) {
    ColorPainter.$target_object[i].attr('style', `background-color: rgb(${rgb});`);
  },
  pa_all_targets: function() {
    var $parent = $(window.opener.document);
    var theme_name = $('select#color-theme > option:selected').val()
    var color_ID = Number(ColorPainter.$pattern_select_box.find('option:selected').val());
    var color_pattern = ColorLake[theme_name][color_ID];
    if (typeof color_pattern === 'undefined') {
      alert('There is no color pattern !')
      return
    }
    $.each(ColorPainter.target_selectors, function(i, selector) {
      $parent.find(selector).attr('style', `background-color: rgb(${color_pattern[i]});`);
    });
  }
}

// Main
$(function(){
  $.getScript('./color_lake.js', function() {
    // console.log(ColorLake.default);
    if ($('#Lita').length === 0) {
      ColorPainter.call_Lita()
    	return false;
    } else {
      ColorPainter.ready_for_the_performance()
      alert('Lita is ready !');
    }
  });

  $(document).on('click', '#paint', function(){
    if (window.opener === null) {
      ColorPainter.talk_to_Lita();
    } else {
      // Paint targets on parent-window
      ColorPainter.pa_all_targets()
    }
  });

  $(document).on('change', 'select#color-theme', function(){
    ColorPainter.change_color_theme(this.value);
  });

  // TODO: 親windowの要素をクリックすることで、色変更対象を変更できるようにする
  // $(document).click(function(event){
  //   if (window.opener === null) { return }
  //   if (ColorPainter.resetting_target_num === null) { return }
  //
  //   // INFO: event.target
  //   // http://www.hp-stylelink.com/news/2014/04/20140422.php
  //   var $target = $(event.target);
  //   var target_num = Number(ColorPainter.resetting_target_num);
  //
  //   alert(`localname: ${$target[0].localName},\ninnerHTML: ${$target[0].innerHTML}`);
  //   ColorPainter.set_target($target, target_num);
  //   ColorPainter.pa_target(ColorLake.default[0], target_num);
  //   ColorPainter.array_$target_displays[target_num].html($target[0].localName);
  //   ColorPainter.switch_resetting_target(null)
  // 	// if($target.parents("ul").length){
  //   //
  // 	// }
  // });

  // $(document).on('click', '.reset-switch', function() {
  //   if (ColorPainter.resetting_target_num !== null) { return }
  //   alert('Select target-element which you want to paint !')
  //
  //   var target_num = event.target.innerHTML
  //   ColorPainter.resetting_target_num = target_num
  // });
});
