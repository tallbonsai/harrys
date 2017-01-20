$(document).ready(function() {
    var points = 49; // $('.rewards').data('points');
    var progress_stop = false;
    var rewards = [];

    $('.reward').each(function(e) {
        rewards.push($(this)); // put all rewards to array;
    })

    for (var i = rewards.length; i > 0; i--) {
        if (!progress_stop) {

            var _this = rewards[i - 1];
						var min_points = $(_this).data('min');
            var reward_points = parseInt($(_this).children('.points').text());
            var r_points = 1.0 * reward_points;
            var height_percent = (points / reward_points) * 100.0;
            console.log(height_percent);

            if (height_percent < 100)
                var progress_stop = true;
						if (height_percent >= 100)
							_this.addClass('completed');
						else if (progress_stop && min_points != points) {
							$(_this).css('background', '-webkit-linear-gradient(bottom, #0068FF, #0068FF '+height_percent+'%, transparent '+height_percent+'%, transparent 100%)');
						}
        }
    }
})
