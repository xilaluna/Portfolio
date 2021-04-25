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

$(function () {
  $("#boringStocksImgCard").hover(
    function () {
      $("#boringStock").attr("src", "../images/boring-stocks-nofilter.png")
    },
    function () {
      $("#boringStock").attr("src", "../images/boring-stocks-filter.png")
    }
  )
})
