$(function () {
  $("#myImg").hover(
    function () {
      $("#thisImage").attr("src", "../images/profile-gif.GIF")
    },
    function () {
      $("#thisImage").attr("src", "../images/profile-pic.jpg")
    }
  )
})
