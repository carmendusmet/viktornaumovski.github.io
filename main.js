if (window.chrome)
    $("[type=video\\\/mp4]").each(function()
    {
        $(this).attr('src', $(this).attr('src').replace(".mp4", "_c.mp4"));
    });

$(function() {
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.article-title');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.accordion-container'), false);
});

$(function() {

var videoList = ["catgirl.mp4", "grandpa1_01.mp4", "grandpa1_02.mp4", "grandpa2_01.mp4", "grandpa2_02.mp4", "new_01.mp4", "new_02.mp4" ];
videoList.sort(function(a, b) {return 0.5 - Math.random()});

$("#videoplayer").html("<video id='rawvideo' autoplay poster='' id='bgvid' loop><source src='" + videoList[0] + "' type='video/mp4'></video>");
});

function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('Welcome_Mobile_Stills_1.png')",
                 "url('Welcome_Mobile_Stills_2.png')",
                 "url('Welcome_Mobile_Stills_4.png')",
		"url('Welcome_Mobile_Stills_5.png')",
		"url('Welcome_Mobile_Stills_6.png')",
		"url('Welcome_Mobile_Stills_7.png')",
		"url('Welcome_Mobile_Stills_8.png')",
		"url('Welcome_Mobile_Stills_9.png')",
                 "url('Welcome_Mobile_Stills_10.png')",
                 "url('Welcome_Mobile_Stills_11.png')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}
