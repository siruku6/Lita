export const modal = ' \
  <div id="modal-1" class="modal" aria-hidden="true"> \
    <div tabindex="-1" data-micromodal-close> \
      <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title"> \
        <header> \
          <h2 id="modal-1-title">Modal Title</h2> \
          <button aria-label="Close modal" data-micromodal-close></button> \
        </header> \
        <div id="modal-1-content">Modal Content</div> \
      </div> \
    </div> \
  </div> \
  <style> \
    .modal { display: none; } .modal.is-open { display: block; } \
  </style> \
';
