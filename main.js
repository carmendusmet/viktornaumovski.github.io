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

var videoList = ["catgirl.mp4", "grandpa1.mp4", "grandpa2.mp4"];
videoList.sort(function(a, b) {return 0.5 - Math.random()});

$("#videoplayer").html("<video id='rawvideo' autoplay poster='' id='bgvid' loop><source src='" + videoList[0] + "' type='video/mp4'></video>");
});
