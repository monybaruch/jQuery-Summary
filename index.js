// // $(document).ready(function () {
// //   $("h1").css("color", "red");
// // });
// document.querySelector("h1"); //js

// $("h1"); //jQuery

// // adding a jQuery class to css element

// $("h1").addClass("big-title");

// removing a jQuery class
// $("h1").removeClass("big-title");

// adding a couple of classes

// $("h1").addClass("big-title spacing");

// to check if a element has a class

// $("h1").hasClass("big-title spacing");

// changing the text of an element

// $("h1").text("byeee");

// $("h1").html("<em>byeee<em>");

// manipulating attributes

// console.log($("button").attr("type")); get the value of an attribute

// $("button").attr("type", "submit"); changing the value of a attribute

// event listeners

// $("h1").click(function () {
//   $("h1").css("color", "white");
// });

// for (let index = 0; index < 5; index++) {
//   document
//     .querySelectorAll("button")
//     [index].addEventListener("click", function () {
//       document.querySelector("h1").style.color = "white";
//     });
// }

// $("button").click(function () {
//   $("h1").css("color", "white");
// });

// $("input").keypress(function (event) {
//   console.log(event.key);
// });

// $("body").keypress(function (event) {
//   let keyPress = event.key;
//   $("h1").text(keyPress);
// });

// $("h1").on("mouseover", function () {
//   $("h1").text("stop hovering over me please");
// });

// // // adding and removing elements
// $("h1").before("<button>New Button</button>");
// $("h1").after("<button>New Button</button>");
// $("h1").prepend("<button>New Button</button>");
// $("h1").append("<button>New Button</button>");
// $("button").remove();

// // // animations

// $("button").on("click", function () {
//   $("h1").hide();
// });

// $("h1").show;

// $("button").on("click", function () {
//   $("h1").toggle();
// });

// $("button").on("click", function () {
//   $("h1").fadeOut();
// });

// $("button").on("click", function () {
//   $("h1").fadeIn();
// });

// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

// $("button").on("click", function () {
//   $("h1").slideUp();
// });

// $("button").on("click", function () {
//   $("h1").slideDown();
// });

// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
// });

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ margin: "20%" });
});
