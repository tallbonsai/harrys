$(document).ready(function() {
    var points = $('.rewards').data('points');
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

            if (height_percent < 100)
                var progress_stop = true;
            if (height_percent >= 100)
                _this.addClass('completed');
            else if (progress_stop && min_points != points) {
                $(_this).css('background', '-webkit-linear-gradient(bottom, #0068FF, #0068FF ' + height_percent + '%, transparent ' + height_percent + '%, transparent 100%)');
            }
        }
    }

    function copyToClipboard(elem) {
        // create hidden text element, if it doesn't already exist
        var targetId = "referal_link";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
        } catch (e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    }
    $('#referal_link').click(function(){
      copyToClipboard('#referal_link');
    });
})
