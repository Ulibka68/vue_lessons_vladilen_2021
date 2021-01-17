let interval = null;

let defaultcolor;

const mouseover = (event) => {
  event.target.style.color = "green";
};
const mouseout = (event) => {
  event.target.style.color = defaultcolor;
};

export default {
  mounted(el, binding) {
    console.log(el);
    console.log(binding);
    el.style[binding.arg] = binding.value;
    defaultcolor = binding.value;

    if (binding.modifiers.blink) {
      let flag = true;
      interval = setInterval(() => {
        el.style.color = flag ? "#fff" : binding.value;
        flag = !flag;
      }, 1000);
    }

    if (binding.modifiers.hover) {
      el.addEventListener("mouseover", mouseover);
      el.addEventListener("mouseout", mouseout);
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
  },
  unmount(el) {
    if (interval) clearInterval(interval);
    el.removeEventListener("mouseover", mouseover);
    el.removeEventListener("mouseout", mouseout);
  },
};
