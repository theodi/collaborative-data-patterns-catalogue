function toggle({ trigger, target, opts, index }) {
  const wasHidden = target.getAttribute("aria-hidden") === "true";

  if (wasHidden) {
    opts.beforeIn({ trigger, target, opts });
  } else {
    opts.beforeOut({ trigger, target, opts });
  }

  // As we're sometimes binding multiple toggles to one trigger, we only need to change the class for the first item in the loop
  if (index < 1) {
    trigger.classList.toggle(opts.triggerActiveClass);
  }

  target.classList.toggle(opts.targetActiveClass);
  target.setAttribute("aria-hidden", !wasHidden);

  if (wasHidden) {
    opts.afterIn({ trigger, target, opts });
  } else {
    opts.afterOut({ trigger, target, opts });
  }
}

function bindToggles(trigger, opts) {
  const targetAttribute = opts.selector.slice(1, -1);
  const targetSelector = trigger.getAttribute(targetAttribute);
  const targets = [...document.querySelectorAll(targetSelector)];

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    targets.forEach((target, index) =>
      toggle({ trigger, target, opts, index })
    );
  });
}

export default function initToggle(selector = "[data-toggle]", opts) {
  const defaults = {
    targetActiveClass: "is--open",
    triggerActiveClass: "is--active",
    beforeIn: () => {},
    afterIn: () => {},
    beforeOut: () => {},
    afterOut: () => {},
    selector,
  };

  const options = Object.assign({}, defaults, opts);

  const toggleElements = document.querySelectorAll(selector);

  [...toggleElements].forEach((item) => bindToggles(item, options));
}
