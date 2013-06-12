dayPicker
=========

JQuery Plugin allows you to select day of week in Arabic and English , it depends on JQuerUI to get better format.

Example :-

   <link href="css/le-frog/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" type="text/css" />
    <!--<link href="css/smoothness/jquery-ui-1.9.2.custom.min.css" rel="stylesheet" type="text/css" />-->
    <script src="js/jquery-1.9.1.js" type="text/javascript"></script>
    <script src="js/dayPicker-Plugin.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $(".arday").dayPicker({ lang: 'ar' });
            //for english week days 
            $(".day").dayPicker({ lang: 'en' });
        });
    </script>

 <fieldset dir="rtl">
            <legend>إختبار إختيار اليوم من القائمة (الإسبوع بالعربية ) </legend>
            <div>
                <table border="0" cellpadding="5" cellspacing="5">
                    <tr>
                        <td>
                            من يوم
                        </td>
                        <td>
                            <input type="text" name="name" class="arday" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            إلى يوم
                        </td>
                        <td>
                            <input type="text" name="name" class="arday" />
                        </td>
                    </tr>
                </table>
            </div>
        </fieldset>
        
        <fieldset>
            <legend>Testing Day Picker Plugin (English Week)</legend>
            <div>
                <table border="0" cellpadding="5" cellspacing="5">
                    <tr>
                        <td>
                            From Day
                        </td>
                        <td>
                            <input type="text" name="name" class="day" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            To Day
                        </td>
                        <td>
                            <input type="text" name="name" class="day" />
                        </td>
                    </tr>
                </table>
            </div>
        </fieldset>

