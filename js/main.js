var tooltipTimeout;

function showTooltip()
    {
    var tooltip = $("<div id='tooltip' class='tooltip'>This picture was taken while hiking on Mount Titlis, Switzerland</div>");
    tooltip.appendTo($("#timedPopup"));
    }

function hideTooltip()
    {
    clearTimeout(tooltipTimeout);
    $("#tooltip").fadeOut().remove();
    }

$(document).ready(function() {


	/* Apply fancybox to multiple items */
	
	$(".iframe").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});
              