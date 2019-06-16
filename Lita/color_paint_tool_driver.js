/* * * * * * * * * * * * * * * *
         Event Drivers
 * * * * * * * * * * * * * * * */
$(function(){
  // When loading HTML is finished ...
  $.getScript('./color_lake.js', function() {
    // console.log(ColorLake.default);
    if ($('#Lita').length !== 0) {
      PaintTool.ready_for_the_performance();
      alert('Lita is ready !');
      PaintTool.paint_all_target();
    }
  });

  // unused ...
  // $(document).on('click', '#paint', function(){
  //   if (window.opener === null) {
  //     PaintTool.talk_to_Lita();
  //   } else {
  //     PaintTool.paint_all_target();
  //   }
  // });

  // When theme-select-box is changed ...
  $(document).on('change', 'select#color-theme', function(){
    var theme_name = PaintTool.$theme_select_box.find('option:selected').text()
    PaintTool.change_color_theme(theme_name);
    PaintTool.paint_all_target();
  });

  // When pattern-select-box is changed ...
  $(document).on('change', 'select#pattern', function(){
    PaintTool.paint_all_target();
  });

  // When Arrow-Key is pressed ...
  $(document).on('keydown', function(e){
    if (!('originalEvent' in e)) { return; }

    var old_theme_num   = Number(PaintTool.$theme_select_box.children("option:selected").val());
    var old_pattern_num = Number(PaintTool.$pattern_select_box.children("option:selected").val());
    if (e.originalEvent.code === 'ArrowLeft') {
      if (old_theme_num === 0) { return }

      PaintTool.$theme_select_box.val(old_theme_num - 1).change();
    } else if (e.originalEvent.code === 'ArrowRight') {
      // TODO: if last number is selected, return

      PaintTool.$theme_select_box.val(old_theme_num + 1).change();
    } else if (e.originalEvent.code === 'ArrowUp') {
      if (old_pattern_num === 0) { return }

      PaintTool.$pattern_select_box.val(old_pattern_num - 1).change();
    } else if (e.originalEvent.code === 'ArrowDown') {
      // TODO: if last number is selected, return

      PaintTool.$pattern_select_box.val(old_pattern_num + 1).change();
    }
  });

  // TODO: 親windowの要素をクリックすることで、色変更対象を変更できるようにする
  // $(document).click(function(event){
  //   if (window.opener === null) { return }
  //   if (PaintTool.resetting_target_num === null) { return }
  //
  //   // INFO: event.target
  //   // http://www.hp-stylelink.com/news/2014/04/20140422.php
  //   var $target = $(event.target);
  //   var target_num = Number(PaintTool.resetting_target_num);
  //
  //   alert(`localname: ${$target[0].localName},\ninnerHTML: ${$target[0].innerHTML}`);
  //   PaintTool.set_target($target, target_num);
  //   PaintTool.paint_target(ColorLake.default[0], target_num);
  //   PaintTool.array_$target_displays[target_num].html($target[0].localName);
  //   PaintTool.switch_resetting_target(null)
  // 	// if($target.parents("ul").length){
  //   //
  // 	// }
  // });

  // $(document).on('click', '.reset-switch', function() {
  //   if (PaintTool.resetting_target_num !== null) { return }
  //   alert('Select target-element which you want to paint !')
  //
  //   var target_num = event.target.innerHTML
  //   PaintTool.resetting_target_num = target_num
  // });
});
