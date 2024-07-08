var typed = new Typed("#chess", {
  strings: ["Chess.","Satranj.","Chaturanga."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
})
var all_buttons = $('.ans1')
all_buttons.click(function(){
  $('.toggle1').html("correct 🙂🙂👌")
  $(".toggle1").addClass("toggle")
  $(".toggle1").removeClass("one")
})
  
const all_buttons1 = $('.ans2')
all_buttons1.click(function(){
  $('.toggle2').html("correct 🙂🙂👌")
  $(".toggle2").addClass("toggle")
  $(".toggle2").removeClass("one")
})
const all_buttons2 = $('.ans3')
all_buttons2.click(function(){
  $('.toggle3').html ("correct 🙂🙂👌")
  $(".toggle3").addClass("toggle")
  $(".toggle3").removeClass("one")
})
const all_buttons3 = $('.ans4')
all_buttons3.click(function(){
  $('.toggle4').html("correct 🙂🙂👌")
  $(".toggle4").addClass("toggle")
  $(".toggle4").removeClass("one")
})
const all_buttons4 = $('.wrg1')
all_buttons4.click(function(){
  $('.toggle1').html("incorrect! try again🥲🥲")
  $(".toggle1").removeClass("toggle")
  $(".toggle1").addClass("one")
})
const all_buttons5 = $('.wrg2')
all_buttons5.click(function(){
  $('.toggle2').html("incorrect! try again🥲🥲")
  $(".toggle2").removeClass("toggle")
  $(".toggle2").addClass("one")
})
const all_buttons6 = $('.wrg3')
all_buttons6.click(function(){
  $('.toggle3').html("incorrect! try again🥲🥲")
  $(".toggle3").removeClass("toggle")
  $(".toggle3").addClass("one")
})
const all_buttons7 = $('.wrg4')
all_buttons7.click(function(){
  $('.toggle4').html("incorrect! try again🥲🥲")
  $(".toggle4").removeClass("toggle")
  $(".toggle4").addClass("one")
})


