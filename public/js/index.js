const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 4000
});

// $('#textarea1').val('New Text');
M.textareaAutoResize($("#textarea1"));

//write
$("#addArt").on("click", event => {
  event.preventDefault();
  let newArticle = {
    name: $("#name")
      .val()
      .trim(),
    photo: $("#photo")
      .val()
      .trim(),
    title: $("#artTitle")
      .val()
      .trim(),
    body: $("#textarea1")
      .val()
      .trim(),
    charities: $("#charities")
      .val()
      .trim()
  };
  console.log(newArticle);
  $.post("/write", newArticle).then(data => {
    console.log(data);
  });

  $("#name").val("");
  $("#photo").val("");
  $("#artTitle").val("");
  $("#textarea1").val("");
  $("#charities").val("");
});

$(".deleteBtn").on("click", function(event) {
  event.preventDefault();
  console.log($(this).val());
  $.ajax("/api/articles/" + $(this).val(), {
    type: "DELETE"
  }).then(data => {
    console.log(data);
    location.reload();
  });
});

$('.modal').modal();