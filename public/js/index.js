const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 4000
});

// $('#textarea1').val('New Text');
M.textareaAutoResize($("#textarea1"));
