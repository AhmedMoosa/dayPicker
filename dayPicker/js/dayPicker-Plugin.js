(function ($) {
    $.fn.dayPicker = function (options) {

        var settings = $.extend({
            lang: 'ar'
        }, options);

        var arabicDays = ["السبت", "الأحد ", "الإثنين", "الثلاثاء ", "الأربعاء", "الخميس", " الجمعة"];
        var englishDays = ["Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return $(this).each(function () {
            var returnedList = null;
            $(this).attr("autocomplete", "Off");
            var self = $(this);
            var position = self.position();
            if (settings.lang) {
                if (settings.lang == 'ar') {
                    returnedList = getHtml(arabicDays, position, self);
                } else {
                    returnedList = getHtml(englishDays, position, self);
                }
                $(this).click(function () {
                    self.parent().append(returnedList);
                    $(returnedList).find("li").each(function () {
                        $(this).click(function () {
                            self.val($(this).text());
                            $(returnedList).remove();
                        });
                        $(this).mouseover(function () {
                            //Remove existing CSS Class
                            $(returnedList).find(".ui-state-hover").removeClass("ui-state-hover");
                            //Add CSS Class
                            $(this).addClass("ui-state-hover");

                        });
                        $(returnedList).mouseleave(function () {
                            $(returnedList).remove();
                        });
                    });
                });
            }
        });

        function getHtml(source, p, element) {
            var ul = $("<ul/>");
            ul.addClass("ui-autocomplete");
            ul.addClass("ui-widget");
            ul.addClass("ui-widget-content");
            ul.addClass("ui-corner-all");
            ul.css("list-style-type", "none");
            ul.css("top", p.top);
            ul.width($(element).width())
                .css("left", p.left);
            var lis = "";
            for (var i in source) {
                lis += "<li><a>" + source[i] + "</a></li>";
            }
            ul.html(lis);
            return ul;
        }
    }
} (jQuery));