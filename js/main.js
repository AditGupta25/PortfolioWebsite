var tooltipTimeout;

$("#timedPopup").hover(function()
                    {tooltipTimeout = setTimeout(showTooltip, 2000);}, 
                    hideTooltip);

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
