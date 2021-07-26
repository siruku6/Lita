// var PainterBell = {
//   ClientLita: '',
//   call_Lita: function() {
//     PainterBell.ClientLita = window.open(
//       './Lita/paint_menu.html', // $(this).attr('href'),
//       'painter_toolwindow',
//       'width=300, height=300, resizable=1'
//     );
//   }
// }

// // Main
// $(function(){
//   PainterBell.call_Lita();
//   return false;
// });

import jquery from 'jquery';
window.$ = jquery;
import 'bootstrap';
import './scss/index.scss';

import { NAME, double } from './Lita/sample';
import { ColorLake } from './Lita/color_lake';
import { modal } from './Lita/modal_template';

console.log(ColorLake);
console.log(double(2));
console.log(NAME);

console.log(MicroModal);

console.log(document.getElementsByClassName('main-body'));
console.log(document);


// window が load され切ってから処理開始
window.onload = function() {
  console.log(document.getElementById('btn'));
  var p = document.createElement("p");
  document.body.appendChild(p);


  // const fragment = document.createDocumentFragment();
  const fragment = document.createElement('div');
  fragment.innerHTML = modal;
  console.log(modal);
  document.body.appendChild(fragment);
  MicroModal.init();
  MicroModal.show('modal-1');
}
