var PainterBell = {
  ClientLita: '',
  call_Lita: function() {
    PainterBell.ClientLita = window.open(
      './Lita/paint_menu.html', // $(this).attr('href'),
      'painter_toolwindow',
      'width=300, height=300, resizable=1'
    );
  }
}

// Main
$(function(){
  PainterBell.call_Lita();
  return false;
});

