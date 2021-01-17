export default {
  mounted(el, binding) {
    console.log(el);
    console.log(binding);
    el.style[binding.arg] = binding.value;
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
  },
  unmount() {},
};
