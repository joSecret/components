((Drupal) => {
  Drupal.behaviors.pageDocs = {
    attach(context) {
      const btnsGroup = context.querySelectorAll('.page-docs--mob-menu .btn');

      context.querySelectorAll('.pb-mob').forEach((el) => {
        el.addEventListener('click', (event) => {
          if (event.target === el) {
            const btn = document.querySelector('[aria-expanded="true"]');

            btn.setAttribute('aria-expanded', 'false');
          }
        });
      });

      btnsGroup.forEach((el) => {
        el.addEventListener('click', () => {
          btnsGroup.forEach((btn) => {
            if (btn !== el) {
              btn.setAttribute('aria-expanded', 'false');
            }
          });
        });
      });
    },
  };
})(Drupal);
