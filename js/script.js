// $(function () {
//   $("#myImg").hover(
//     function () {
//       $("#thisImage").attr("src", "../images/profile-gif.GIF")
//     },
//     function () {
//       $("#thisImage").attr("src", "../images/profile-pic.jpg")
//     }
//   )
// })

// $(function () {
//   $("#boringStocksImgCard").hover(
//     function () {
//       $("#boringStock").attr("src", "../images/project-images/")
//     },
//     function () {
//       $("#boringStock").attr("src", "../images/boring-stocks-filter.png")
//     }
//   )
// })

// $(function () {
//   $("#popcornImgCard").hover(
//     function () {
//       $("#boringStock").attr("src", "../images/project-images/popcorn/popcorn-emoji-color.png")
//     },
//     function () {
//       $("#boringStock").attr("src", "../images/project-images/popcorn/popcorn-nocolor.png")
//     }
//   )
// })

function boringstocksCarouselNormalization() {
  var items = $(".boringstocks-carousel .item"), //grab all slides
    heights = [], //create empty array to store height values
    tallest //create variable to make note of the tallest slide

  if (items.length) {
    function normalizeHeights() {
      items.each(function () {
        //add heights to array
        heights.push($(this).height())
      })
      tallest = Math.max.apply(null, heights) //cache largest value
      items.each(function () {
        $(this).css("min-height", tallest + "px")
      })
    }
    normalizeHeights()

    $(window).on("resize orientationchange", function () {
      ;(tallest = 0), (heights.length = 0) //reset vars
      items.each(function () {
        $(this).css("min-height", "0") //reset min-height
      })
      normalizeHeights() //run it again
    })
  }
}

function popcornCarouselNormalization() {
  var items = $(".popcorn-carousel .item"), //grab all slides
    heights = [], //create empty array to store height values
    tallest //create variable to make note of the tallest slide

  if (items.length) {
    function normalizeHeights() {
      items.each(function () {
        //add heights to array
        heights.push($(this).height())
      })
      tallest = Math.max.apply(null, heights) //cache largest value
      items.each(function () {
        $(this).css("min-height", tallest + "px")
      })
    }
    normalizeHeights()

    $(window).on("resize orientationchange", function () {
      ;(tallest = 0), (heights.length = 0) //reset vars
      items.each(function () {
        $(this).css("min-height", "0") //reset min-height
      })
      normalizeHeights() //run it again
    })
  }
}

/**
 * Wait until all the assets have been loaded so a maximum height
 * can be calculated correctly.
 */
window.onload = function () {
  boringstocksCarouselNormalization()
  popcornCarouselNormalization()
}
