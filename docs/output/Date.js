/*
 * This file is part of Ext JS 3.4
 * 
 * Copyright (c) 2011-2013 Sencha Inc
 * 
 * Contact: http://www.sencha.com/contact
 * 
 * GNU General Public License Usage This file may be used under the terms of the
 * GNU General Public License version 3.0 as published by the Free Software
 * Foundation and appearing in the file LICENSE included in the packaging of
 * this file.
 * 
 * Please review the following information to ensure the GNU General Public
 * License version 3.0 requirements will be met:
 * http://www.gnu.org/copyleft/gpl.html.
 * 
 * If you are unsure which license is appropriate for your use, please contact
 * the sales department at http://www.sencha.com/contact.
 * 
 * Build date: 2013-04-03 15:07:25
 */
Ext.data.JsonP.Date({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Date.html#Date' target='_blank'>Date.js</a></div></pre><div class='doc-contents'><p>The date parsing and formatting syntax contains a subset of\n<a href=\"http://www.php.net/date\">PHP's date() function</a>, and the formats that are\nsupported will provide results equivalent to their PHP versions.</p>\n\n<p>The following is a list of all currently supported formats:</p>\n\n<pre>Format  Description                                                               Example returned values\n------  -----------------------------------------------------------------------   -----------------------\n  d     Day of the month, 2 digits with leading zeros                             01 to 31\n  D     A short textual representation of the day of the week                     Mon to Sun\n  j     Day of the month without leading zeros                                    1 to 31\n  l     A full textual representation of the day of the week                      Sunday to Saturday\n  N     ISO-8601 numeric representation of the day of the week                    1 (for Monday) through 7 (for Sunday)\n  S     English ordinal suffix for the day of the month, 2 characters             st, nd, rd or th. Works well with j\n  w     Numeric representation of the day of the week                             0 (for Sunday) to 6 (for Saturday)\n  z     The day of the year (starting from 0)                                     0 to 364 (365 in leap years)\n  W     ISO-8601 week number of year, weeks starting on Monday                    01 to 53\n  F     A full textual representation of a month, such as January or March        January to December\n  m     Numeric representation of a month, with leading zeros                     01 to 12\n  M     A short textual representation of a month                                 Jan to Dec\n  n     Numeric representation of a month, without leading zeros                  1 to 12\n  t     Number of days in the given month                                         28 to 31\n  L     Whether it's a leap year                                                  1 if it is a leap year, 0 otherwise.\n  o     ISO-8601 year number (identical to (Y), but if the ISO week number (W)    Examples: 1998 or 2004\n        belongs to the previous or next year, that year is used instead)\n  Y     A full numeric representation of a year, 4 digits                         Examples: 1999 or 2003\n  y     A two digit representation of a year                                      Examples: 99 or 03\n  a     Lowercase Ante meridiem and Post meridiem                                 am or pm\n  A     Uppercase Ante meridiem and Post meridiem                                 AM or PM\n  g     12-hour format of an hour without leading zeros                           1 to 12\n  G     24-hour format of an hour without leading zeros                           0 to 23\n  h     12-hour format of an hour with leading zeros                              01 to 12\n  H     24-hour format of an hour with leading zeros                              00 to 23\n  i     Minutes, with leading zeros                                               00 to 59\n  s     Seconds, with leading zeros                                               00 to 59\n  u     Decimal fraction of a second                                              Examples:\n        (minimum 1 digit, arbitrary number of digits allowed)                     001 (i.e. 0.001s) or\n                                                                                  100 (i.e. 0.100s) or\n                                                                                  999 (i.e. 0.999s) or\n                                                                                  999876543210 (i.e. 0.999876543210s)\n  O     Difference to Greenwich time (GMT) in hours and minutes                   Example: +1030\n  P     Difference to Greenwich time (GMT) with colon between hours and minutes   Example: -08:00\n  T     Timezone abbreviation of the machine running the code                     Examples: EST, MDT, PDT ...\n  Z     Timezone offset in seconds (negative if west of UTC, positive if east)    -43200 to 50400\n  c     ISO 8601 date\n        Notes:                                                                    Examples:\n        1) If unspecified, the month / day defaults to the current month / day,   1991 or\n           the time defaults to midnight, while the timezone defaults to the      1992-10 or\n           browser's timezone. If a time is specified, it must include both hours 1993-09-20 or\n           and minutes. The \"T\" delimiter, seconds, milliseconds and timezone     1994-08-19T16:20+01:00 or\n           are optional.                                                          1995-07-18T17:21:28-02:00 or\n        2) The decimal fraction of a second, if specified, must contain at        1996-06-17T18:22:29.98765+03:00 or\n           least 1 digit (there is no limit to the maximum number                 1997-05-16T19:23:30,12345-0400 or\n           of digits allowed), and may be delimited by either a '.' or a ','      1998-04-15T20:24:31.2468Z or\n        Refer to the examples on the right for the various levels of              1999-03-14T20:24:32Z or\n        date-time granularity which are supported, or see                         2000-02-13T21:25:33\n        http://www.w3.org/TR/NOTE-datetime for more info.                         2001-01-12 22:26:34\n  U     Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)                1193432466 or -2138434463\n  M$    Microsoft AJAX serialized dates                                           \\/Date(1238606590509)\\/ (i.e. UTC milliseconds since epoch) or\n                                                                                  \\/Date(1238606590509+0800)\\/\n</pre>\n\n\n<p>Example usage (note that you must escape format specifiers with '\\' to render them as character literals):</p>\n\n<pre><code>// Sample date:\n// 'Wed Jan 10 2007 15:05:01 GMT-0600 (Central Standard Time)'\n\nvar dt = new Date('1/10/2007 03:05:01 PM GMT-0600');\ndocument.write(dt.format('Y-m-d'));                           // 2007-01-10\ndocument.write(dt.format('F j, Y, g:i a'));                   // January 10, 2007, 3:05 pm\ndocument.write(dt.format('l, \\\\t\\\\he jS \\\\of F Y h:i:s A'));  // Wednesday, the 10th of January 2007 03:05:01 PM\n</code></pre>\n\n\n<p>Here are some standard date/time patterns that you might find helpful.  They\nare not part of the source of Date.js, but to use them you can simply copy this\nblock of code into any script that is included after Date.js and they will also become\nglobally available on the Date object.  Feel free to add or remove patterns as needed in your code.</p>\n\n<pre><code>Date.patterns = {\n    ISO8601Long:\"Y-m-d H:i:s\",\n    ISO8601Short:\"Y-m-d\",\n    ShortDate: \"n/j/Y\",\n    LongDate: \"l, F d, Y\",\n    FullDateTime: \"l, F d, Y g:i:s A\",\n    MonthDay: \"F d\",\n    ShortTime: \"g:i A\",\n    LongTime: \"g:i:s A\",\n    SortableDateTime: \"Y-m-d\\\\TH:i:s\",\n    UniversalSortableDateTime: \"Y-m-d H:i:sO\",\n    YearMonth: \"F, Y\"\n};\n</code></pre>\n\n\n<p>Example usage:</p>\n\n<pre><code>var dt = new Date();\ndocument.write(dt.format(Date.patterns.ShortDate));\n</code></pre>\n\n\n<p>Developer-written, custom formats may be used by supplying both a formatting and a parsing function\nwhich perform to specialized requirements. The functions are stored in <a href=\"#!/api/Date-static-property-parseFunctions\" rel=\"Date-static-property-parseFunctions\" class=\"docClass\">parseFunctions</a> and <a href=\"#!/api/Date-static-property-formatFunctions\" rel=\"Date-static-property-formatFunctions\" class=\"docClass\">formatFunctions</a>.</p>\n\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-DAY' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-DAY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-DAY' class='name expandable'>DAY</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Date interval constant ...</div><div class='long'><p>Date interval constant</p>\n<p>Defaults to: <code>&quot;d&quot;</code></p></div></div></div><div id='static-property-HOUR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-HOUR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-HOUR' class='name expandable'>HOUR</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Date interval constant ...</div><div class='long'><p>Date interval constant</p>\n<p>Defaults to: <code>&quot;h&quot;</code></p></div></div></div><div id='static-property-MILLI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-MILLI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-MILLI' class='name expandable'>MILLI</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Date interval constant ...</div><div class='long'><p>Date interval constant</p>\n<p>Defaults to: <code>&quot;ms&quot;</code></p></div></div></div><div id='static-property-MINUTE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-MINUTE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-MINUTE' class='name expandable'>MINUTE</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Date interval constant ...</div><div class='long'><p>Date interval constant</p>\n<p>Defaults to: <code>&quot;mi&quot;</code></p></div></div></div><div id='static-property-MONTH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-MONTH' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-MONTH' class='name expandable'>MONTH</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Date interval constant ...</div><div class='long'><p>Date interval constant</p>\n<p>Defaults to: <code>&quot;mo&quot;</code></p></div></div></div><div id='static-property-SECOND' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-SECOND' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-SECOND' class='name expandable'>SECOND</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Date interval constant ...</div><div class='long'><p>Date interval constant</p>\n<p>Defaults to: <code>&quot;s&quot;</code></p></div></div></div><div id='static-property-YEAR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-YEAR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-YEAR' class='name expandable'>YEAR</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Date interval constant ...</div><div class='long'><p>Date interval constant</p>\n<p>Defaults to: <code>&quot;y&quot;</code></p></div></div></div><div id='static-property-dayNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-dayNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-dayNames' class='name expandable'>dayNames</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>An array of textual day names. ...</div><div class='long'><p>An array of textual day names.\nOverride these values for international dates.\nExample:</p>\n\n<pre><code><a href=\"#!/api/Date-static-property-dayNames\" rel=\"Date-static-property-dayNames\" class=\"docClass\">Date.dayNames</a> = [\n    'SundayInYourLang',\n    'MondayInYourLang',\n    ...\n];\n</code></pre>\n\n<p>Defaults to: <code>[&quot;Sunday&quot;, &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, &quot;Saturday&quot;]</code></p></div></div></div><div id='static-property-defaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-defaults' class='name expandable'>defaults</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>An object hash containing default date values used during date parsing. ...</div><div class='long'><p>An object hash containing default date values used during date parsing.</p>\n\n\n<p>The following properties are available:<div class=\"mdetail-params\"><ul>\n<li><code>y</code> : Number<div class=\"sub-desc\">The default year value. (defaults to undefined)</div></li>\n<li><code>m</code> : Number<div class=\"sub-desc\">The default 1-based month value. (defaults to undefined)</div></li>\n<li><code>d</code> : Number<div class=\"sub-desc\">The default day value. (defaults to undefined)</div></li>\n<li><code>h</code> : Number<div class=\"sub-desc\">The default hour value. (defaults to undefined)</div></li>\n<li><code>i</code> : Number<div class=\"sub-desc\">The default minute value. (defaults to undefined)</div></li>\n<li><code>s</code> : Number<div class=\"sub-desc\">The default second value. (defaults to undefined)</div></li>\n<li><code>ms</code> : Number<div class=\"sub-desc\">The default millisecond value. (defaults to undefined)</div></li>\n</ul></div></p>\n\n\n<p>Override these properties to customize the default date values used by the <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">parseDate</a> method.</p>\n\n\n<p><b>Note: In countries which experience Daylight Saving Time (i.e. DST), the <tt>h</tt>, <tt>i</tt>, <tt>s</tt>\nand <tt>ms</tt> properties may coincide with the exact time in which DST takes effect.\nIt is the responsiblity of the developer to account for this.</b></p>\n\n\n<p>Example Usage:</p>\n\n<pre><code>// set default day value to the first day of the month\nDate.defaults.d = 1;\n\n// parse a February date string containing only year and month values.\n// setting the default day value to 1 prevents weird date rollover issues\n// when attempting to parse the following date string on, for example, March 31st 2009.\n<a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">Date.parseDate</a>('2009-02', 'Y-m'); // returns a Date object representing February 1st 2009\n</code></pre>\n\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='static-property-formatCodes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-formatCodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-formatCodes' class='name expandable'>formatCodes</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The base format-code to formatting-function hashmap used by the format method. ...</div><div class='long'><p>The base format-code to formatting-function hashmap used by the <a href=\"#!/api/Date-method-format\" rel=\"Date-method-format\" class=\"docClass\">format</a> method.\nFormatting functions are strings (or functions which return strings) which\nwill return the appropriate value when evaluated in the context of the Date object\nfrom which the <a href=\"#!/api/Date-method-format\" rel=\"Date-method-format\" class=\"docClass\">format</a> method is called.\nAdd to / override these mappings for custom date formatting.\nNote: <a href=\"#!/api/Date-method-format\" rel=\"Date-method-format\" class=\"docClass\">Date.format</a>() treats characters as literals if an appropriate mapping cannot be found.\nExample:</p>\n\n<pre><code>Date.formatCodes.x = \"<a href=\"#!/api/String-static-method-leftPad\" rel=\"String-static-method-leftPad\" class=\"docClass\">String.leftPad</a>(this.getDate(), 2, '0')\";\n(new Date()).format(\"X\"); // returns the current day of the month\n</code></pre>\n\n</div></div></div><div id='static-property-formatFunctions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-formatFunctions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-formatFunctions' class='name expandable'>formatFunctions</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>An object hash in which each property is a date formatting function. ...</div><div class='long'><p>An object hash in which each property is a date formatting function. The property name is the\nformat string which corresponds to the produced formatted date string.</p>\n\n\n<p>This object is automatically populated with date formatting functions as\ndate formats are requested for Ext standard formatting strings.</p>\n\n\n<p>Custom formatting functions may be inserted into this object, keyed by a name which from then on\nmay be used as a format string to <a href=\"#!/api/Date-method-format\" rel=\"Date-method-format\" class=\"docClass\">format</a>. Example:</p>\n\n\n<pre><code><a href=\"#!/api/Date-static-property-formatFunctions\" rel=\"Date-static-property-formatFunctions\" class=\"docClass\">Date.formatFunctions</a>['x-date-format'] = myDateFormatter;\n</code></pre>\n\n\n<p>A formatting function should return a string representation of the passed Date object, and is passed the following parameters:<div class=\"mdetail-params\"><ul>\n<li><code>date</code> : Date<div class=\"sub-desc\">The Date to format.</div></li>\n</ul></div></p>\n\n\n<p>To enable date strings to also be <i>parsed</i> according to that format, a corresponding\nparsing function must be placed into the <a href=\"#!/api/Date-static-property-parseFunctions\" rel=\"Date-static-property-parseFunctions\" class=\"docClass\">parseFunctions</a> property.\n\n</p></div></div></div><div id='static-property-monthNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-monthNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-monthNames' class='name expandable'>monthNames</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>An array of textual month names. ...</div><div class='long'><p>An array of textual month names.\nOverride these values for international dates.\nExample:</p>\n\n<pre><code><a href=\"#!/api/Date-static-property-monthNames\" rel=\"Date-static-property-monthNames\" class=\"docClass\">Date.monthNames</a> = [\n    'JanInYourLang',\n    'FebInYourLang',\n    ...\n];\n</code></pre>\n\n<p>Defaults to: <code>[&quot;January&quot;, &quot;February&quot;, &quot;March&quot;, &quot;April&quot;, &quot;May&quot;, &quot;June&quot;, &quot;July&quot;, &quot;August&quot;, &quot;September&quot;, &quot;October&quot;, &quot;November&quot;, &quot;December&quot;]</code></p></div></div></div><div id='static-property-monthNumbers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-monthNumbers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-monthNumbers' class='name expandable'>monthNumbers</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>An object hash of zero-based javascript month numbers (with short month names as keys. ...</div><div class='long'><p>An object hash of zero-based javascript month numbers (with short month names as keys. note: keys are case-sensitive).\nOverride these values for international dates.\nExample:</p>\n\n<pre><code><a href=\"#!/api/Date-static-property-monthNumbers\" rel=\"Date-static-property-monthNumbers\" class=\"docClass\">Date.monthNumbers</a> = {\n    'ShortJanNameInYourLang':0,\n    'ShortFebNameInYourLang':1,\n    ...\n};\n</code></pre>\n\n<p>Defaults to: <code>{Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11}</code></p></div></div></div><div id='static-property-parseFunctions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-parseFunctions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-parseFunctions' class='name expandable'>parseFunctions</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>An object hash in which each property is a date parsing function. ...</div><div class='long'><p>An object hash in which each property is a date parsing function. The property name is the\nformat string which that function parses.</p>\n\n\n<p>This object is automatically populated with date parsing functions as\ndate formats are requested for Ext standard formatting strings.</p>\n\n\n<p>Custom parsing functions may be inserted into this object, keyed by a name which from then on\nmay be used as a format string to <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">parseDate</a>.<p>\n<p>Example:</p>\n<pre><code><a href=\"#!/api/Date-static-property-parseFunctions\" rel=\"Date-static-property-parseFunctions\" class=\"docClass\">Date.parseFunctions</a>['x-date-format'] = myDateParser;\n</code></pre>\n<p>A parsing function should return a Date object, and is passed the following parameters:<div class=\"mdetail-params\"><ul>\n<li><code>date</code> : String<div class=\"sub-desc\">The date string to parse.</div></li>\n<li><code>strict</code> : Boolean<div class=\"sub-desc\">True to validate date strings while parsing\n(i.e. prevent javascript Date \"rollover\") (The default must be false).\nInvalid date strings should return null when parsed.</div></li>\n</ul></div></p>\n<p>To enable Dates to also be <i>formatted</i> according to that format, a corresponding\nformatting function must be placed into the <a href=\"#!/api/Date-static-property-formatFunctions\" rel=\"Date-static-property-formatFunctions\" class=\"docClass\">formatFunctions</a> property.\n\n</p></p></p></div></div></div><div id='static-property-useStrict' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-property-useStrict' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-property-useStrict' class='name expandable'>useStrict</a><span> : Boolean</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Global flag which determines if strict date parsing should be used. ...</div><div class='long'><p>Global flag which determines if strict date parsing should be used.\nStrict date parsing will not roll-over invalid dates, which is the\ndefault behaviour of javascript Date objects.\n(see <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">parseDate</a> for more information)\nDefaults to <tt>false</tt>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-a' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-a' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-a' class='name expandable'>a</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>In the am/pm parsing routines, we allow both upper and lower case\neven though it doesn't exactly match the spec. ...</div><div class='long'><p>In the am/pm parsing routines, we allow both upper and lower case\neven though it doesn't exactly match the spec. It gives much more flexibility\nin being able to specify case insensitive regexes.</p>\n</div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-add' class='name expandable'>add</a>( <span class='pre'>interval, value</span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>Provides a convenient method for performing basic date arithmetic. ...</div><div class='long'><p>Provides a convenient method for performing basic date arithmetic. This method\ndoes not modify the Date instance being called - it creates and returns\na new Date instance containing the resulting date value.</p>\n\n<p>Examples:</p>\n\n<pre><code>// Basic usage:\nvar dt = new Date('10/29/2006').add(<a href=\"#!/api/Date-static-property-DAY\" rel=\"Date-static-property-DAY\" class=\"docClass\">Date.DAY</a>, 5);\ndocument.write(dt); //returns 'Fri Nov 03 2006 00:00:00'\n\n// Negative values will be subtracted:\nvar dt2 = new Date('10/1/2006').add(<a href=\"#!/api/Date-static-property-DAY\" rel=\"Date-static-property-DAY\" class=\"docClass\">Date.DAY</a>, -5);\ndocument.write(dt2); //returns 'Tue Sep 26 2006 00:00:00'\n\n// You can even chain several calls together in one line:\nvar dt3 = new Date('10/1/2006').add(<a href=\"#!/api/Date-static-property-DAY\" rel=\"Date-static-property-DAY\" class=\"docClass\">Date.DAY</a>, 5).add(<a href=\"#!/api/Date-static-property-HOUR\" rel=\"Date-static-property-HOUR\" class=\"docClass\">Date.HOUR</a>, 8).add(<a href=\"#!/api/Date-static-property-MINUTE\" rel=\"Date-static-property-MINUTE\" class=\"docClass\">Date.MINUTE</a>, -30);\ndocument.write(dt3); //returns 'Fri Oct 06 2006 07:30:00'\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A valid date interval enum value.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The amount to add to the current date.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'><p>The new Date instance.</p>\n</div></li></ul></div></div></div><div id='method-between' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-between' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-between' class='name expandable'>between</a>( <span class='pre'>start, end</span> ) : Boolean</div><div class='description'><div class='short'>Checks if this date falls on or between the given start and end dates. ...</div><div class='long'><p>Checks if this date falls on or between the given start and end dates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>Start date</p>\n</div></li><li><span class='pre'>end</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>End date</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if this date falls on or between the given start and end dates.</p>\n</div></li></ul></div></div></div><div id='method-clearTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-clearTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-clearTime' class='name expandable'>clearTime</a>( <span class='pre'>clone</span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Attempts to clear all time information from this Date by setting the time to midnight of the same day,\nautomatically ...</div><div class='long'><p>Attempts to clear all time information from this Date by setting the time to midnight of the same day,\nautomatically adjusting for Daylight Saving Time (DST) where applicable.\n(note: DST timezone information for the browser's host operating system is assumed to be up-to-date)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clone</span> : Boolean<div class='sub-desc'><p>true to create a clone of this date, clear the time and return it (defaults to false).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'><p>this or the clone.</p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>Creates and returns a new Date instance with the exact same date value as the called instance. ...</div><div class='long'><p>Creates and returns a new Date instance with the exact same date value as the called instance.\nDates are copied and passed by reference, so if a copied date variable is modified later, the original\nvariable will also be changed.  When the intention is to create a new variable that will not\nmodify the original instance, you should create a clone.</p>\n\n<p>Example of correctly cloning a date:</p>\n\n<pre><code>//wrong way:\nvar orig = new Date('10/1/2006');\nvar copy = orig;\ncopy.setDate(5);\ndocument.write(orig);  //returns 'Thu Oct 05 2006'!\n\n//correct way:\nvar orig = new Date('10/1/2006');\nvar copy = orig.clone();\ncopy.setDate(5);\ndocument.write(orig);  //returns 'Thu Oct 01 2006'\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'><p>The new Date instance.</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-format' class='name expandable'>format</a>( <span class='pre'>format</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Formats a date given the supplied format string. ...</div><div class='long'><p>Formats a date given the supplied format string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The format string.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The formatted date.</p>\n</div></li></ul></div></div></div><div id='method-getDayOfYear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getDayOfYear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getDayOfYear' class='name expandable'>getDayOfYear</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Get the numeric day number of the year, adjusted for leap year. ...</div><div class='long'><p>Get the numeric day number of the year, adjusted for leap year.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>0 to 364 (365 in leap years).</p>\n</div></li></ul></div></div></div><div id='method-getDaysInMonth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getDaysInMonth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getDaysInMonth' class='name expandable'>getDaysInMonth</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Get the number of days in the current month, adjusted for leap year. ...</div><div class='long'><p>Get the number of days in the current month, adjusted for leap year.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The number of days in the month.</p>\n</div></li></ul></div></div></div><div id='method-getElapsed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Ext-more.html#Date-method-getElapsed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getElapsed' class='name expandable'>getElapsed</a>( <span class='pre'>[date]</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns the number of milliseconds between this date and date getElapsed ...</div><div class='long'><p>Returns the number of milliseconds between this date and date getElapsed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a> (optional)<div class='sub-desc'><p>Defaults to now</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The diff in milliseconds</p>\n</div></li></ul></div></div></div><div id='method-getFirstDateOfMonth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getFirstDateOfMonth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getFirstDateOfMonth' class='name expandable'>getFirstDateOfMonth</a>( <span class='pre'></span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>Get the date of the first day of the month in which this date resides. ...</div><div class='long'><p>Get the date of the first day of the month in which this date resides.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFirstDayOfMonth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getFirstDayOfMonth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getFirstDayOfMonth' class='name expandable'>getFirstDayOfMonth</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Get the first day of the current month, adjusted for leap year. ...</div><div class='long'><p>Get the first day of the current month, adjusted for leap year.  The returned value\nis the numeric day index within the week (0-6) which can be used in conjunction with\nthe <a href=\"#!/api/Date-static-property-monthNames\" rel=\"Date-static-property-monthNames\" class=\"docClass\">monthNames</a> array to retrieve the textual day name.\nExample:</p>\n\n<pre><code>var dt = new Date('1/10/2007');\ndocument.write(<a href=\"#!/api/Date-static-property-dayNames\" rel=\"Date-static-property-dayNames\" class=\"docClass\">Date.dayNames</a>[dt.getFirstDayOfMonth()]); //output: 'Monday'\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The day number (0-6).</p>\n</div></li></ul></div></div></div><div id='method-getGMTOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getGMTOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getGMTOffset' class='name expandable'>getGMTOffset</a>( <span class='pre'>[colon]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get the offset from GMT of the current date (equivalent to the format specifier 'O'). ...</div><div class='long'><p>Get the offset from GMT of the current date (equivalent to the format specifier 'O').</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colon</span> : Boolean (optional)<div class='sub-desc'><p>true to separate the hours and minutes with a colon (defaults to false).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The 4-character offset string prefixed with + or - (e.g. '-0600').</p>\n</div></li></ul></div></div></div><div id='method-getLastDateOfMonth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getLastDateOfMonth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getLastDateOfMonth' class='name expandable'>getLastDateOfMonth</a>( <span class='pre'></span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>Get the date of the last day of the month in which this date resides. ...</div><div class='long'><p>Get the date of the last day of the month in which this date resides.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLastDayOfMonth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getLastDayOfMonth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getLastDayOfMonth' class='name expandable'>getLastDayOfMonth</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Get the last day of the current month, adjusted for leap year. ...</div><div class='long'><p>Get the last day of the current month, adjusted for leap year.  The returned value\nis the numeric day index within the week (0-6) which can be used in conjunction with\nthe <a href=\"#!/api/Date-static-property-monthNames\" rel=\"Date-static-property-monthNames\" class=\"docClass\">monthNames</a> array to retrieve the textual day name.\nExample:</p>\n\n<pre><code>var dt = new Date('1/10/2007');\ndocument.write(<a href=\"#!/api/Date-static-property-dayNames\" rel=\"Date-static-property-dayNames\" class=\"docClass\">Date.dayNames</a>[dt.getLastDayOfMonth()]); //output: 'Wednesday'\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The day number (0-6).</p>\n</div></li></ul></div></div></div><div id='method-getSuffix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getSuffix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getSuffix' class='name expandable'>getSuffix</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get the English ordinal suffix of the current day (equivalent to the format specifier 'S'). ...</div><div class='long'><p>Get the English ordinal suffix of the current day (equivalent to the format specifier 'S').</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>'st, 'nd', 'rd' or 'th'.</p>\n</div></li></ul></div></div></div><div id='method-getTimezone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getTimezone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getTimezone' class='name expandable'>getTimezone</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get the timezone abbreviation of the current date (equivalent to the format specifier 'T'). ...</div><div class='long'><p>Get the timezone abbreviation of the current date (equivalent to the format specifier 'T').</p>\n\n<p>Note: The date string returned by the javascript Date object's toString() method varies\nbetween browsers (e.g. FF vs IE) and system region settings (e.g. IE in Asia vs IE in America).\nFor a given date string e.g. \"Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)\",\ngetTimezone() first tries to get the timezone abbreviation from between a pair of parentheses\n(which may or may not be present), failing which it proceeds to get the timezone abbreviation\nfrom the GMT offset portion of the date string.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The abbreviated timezone name (e.g. 'CST', 'PDT', 'EDT', 'MPST' ...).</p>\n</div></li></ul></div></div></div><div id='method-getWeekOfYear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-getWeekOfYear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-getWeekOfYear' class='name expandable'>getWeekOfYear</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Get the numeric ISO-8601 week number of the year. ...</div><div class='long'><p>Get the numeric ISO-8601 week number of the year.\n(equivalent to the format specifier 'W', but without a leading zero).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>1 to 53</p>\n</div></li></ul></div></div></div><div id='method-isDST' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-isDST' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-isDST' class='name expandable'>isDST</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks if the current date is affected by Daylight Saving Time (DST). ...</div><div class='long'><p>Checks if the current date is affected by Daylight Saving Time (DST).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the current date is affected by DST.</p>\n</div></li></ul></div></div></div><div id='method-isLeapYear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-method-isLeapYear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-method-isLeapYear' class='name expandable'>isLeapYear</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks if the current date falls within a leap year. ...</div><div class='long'><p>Checks if the current date falls within a leap year.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the current date falls within a leap year, false otherwise.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-formatContainsHourInfo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-method-formatContainsHourInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-method-formatContainsHourInfo' class='name expandable'>formatContainsHourInfo</a>( <span class='pre'>format</span> ) : Boolean<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Checks if the specified format contains hour information ...</div><div class='long'><p>Checks if the specified format contains hour information</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : Object<div class='sub-desc'><p>The format to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the format contains hour information</p>\n</div></li></ul></div></div></div><div id='static-method-getMonthNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-method-getMonthNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-method-getMonthNumber' class='name expandable'>getMonthNumber</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Get the zero-based javascript month number for the given short/full month name. ...</div><div class='long'><p>Get the zero-based javascript month number for the given short/full month name.\nOverride this function for international dates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The short/full month name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The zero-based javascript month number.</p>\n</div></li></ul></div></div></div><div id='static-method-getShortDayName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-method-getShortDayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-method-getShortDayName' class='name expandable'>getShortDayName</a>( <span class='pre'>day</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Get the short day name for the given day number. ...</div><div class='long'><p>Get the short day name for the given day number.\nOverride this function for international dates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>day</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>A zero-based javascript day number.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The short day name.</p>\n</div></li></ul></div></div></div><div id='static-method-getShortMonthName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-method-getShortMonthName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-method-getShortMonthName' class='name expandable'>getShortMonthName</a>( <span class='pre'>month</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Get the short month name for the given month number. ...</div><div class='long'><p>Get the short month name for the given month number.\nOverride this function for international dates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>month</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>A zero-based javascript month number.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The short month name.</p>\n</div></li></ul></div></div></div><div id='static-method-isValid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-method-isValid' class='name expandable'>isValid</a>( <span class='pre'>year, month, day, [hour], [minute], [second], [millisecond]</span> ) : Boolean<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Checks if the passed Date parameters will cause a javascript Date \"rollover\". ...</div><div class='long'><p>Checks if the passed Date parameters will cause a javascript Date \"rollover\".</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>year</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>4-digit year</p>\n</div></li><li><span class='pre'>month</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>1-based month-of-year</p>\n</div></li><li><span class='pre'>day</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Day of month</p>\n</div></li><li><span class='pre'>hour</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Hour</p>\n</div></li><li><span class='pre'>minute</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Minute</p>\n</div></li><li><span class='pre'>second</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Second</p>\n</div></li><li><span class='pre'>millisecond</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Millisecond</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the passed parameters do not cause a Date \"rollover\", false otherwise.</p>\n</div></li></ul></div></div></div><div id='static-method-parseDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Date'>Date</span><br/><a href='source/Date.html#Date-static-method-parseDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Date-static-method-parseDate' class='name expandable'>parseDate</a>( <span class='pre'>input, format, [strict]</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Parses the passed string using the specified date format. ...</div><div class='long'><p>Parses the passed string using the specified date format.\nNote that this function expects normal calendar dates, meaning that months are 1-based (i.e. 1 = January).\nThe <a href=\"#!/api/Date-static-property-defaults\" rel=\"Date-static-property-defaults\" class=\"docClass\">defaults</a> hash will be used for any date value (i.e. year, month, day, hour, minute, second or millisecond)\nwhich cannot be found in the passed string. If a corresponding default date value has not been specified in the <a href=\"#!/api/Date-static-property-defaults\" rel=\"Date-static-property-defaults\" class=\"docClass\">defaults</a> hash,\nthe current date's year, month, day or DST-adjusted zero-hour time value will be used instead.\nKeep in mind that the input date string must precisely match the specified format string\nin order for the parse operation to be successful (failed parse operations return a null value).</p>\n\n<p>Example:</p>\n\n\n<pre><code>//dt = Fri May 25 2007 (current date)\nvar dt = new Date();\n\n//dt = Thu May 25 2006 (today&#39;s month/day in 2006)\ndt = <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">Date.parseDate</a>(\"2006\", \"Y\");\n\n//dt = Sun Jan 15 2006 (all date parts specified)\ndt = <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">Date.parseDate</a>(\"2006-01-15\", \"Y-m-d\");\n\n//dt = Sun Jan 15 2006 15:20:01\ndt = <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">Date.parseDate</a>(\"2006-01-15 3:20:01 PM\", \"Y-m-d g:i:s A\");\n\n// attempt to parse Sun Feb 29 2006 03:20:01 in strict mode\ndt = <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">Date.parseDate</a>(\"2006-02-29 03:20:01\", \"Y-m-d H:i:s\", true); // returns null\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>input</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The raw date string.</p>\n</div></li><li><span class='pre'>format</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The expected date string format.</p>\n</div></li><li><span class='pre'>strict</span> : Boolean (optional)<div class='sub-desc'><p>True to validate date strings while parsing (i.e. prevents javascript Date \"rollover\")</p>\n\n<pre><code>                    (defaults to false). Invalid date strings will return null when parsed.\n</code></pre>\n\n<p>@return {Date} The parsed Date.</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": [],
    "meta": {},
    "requires": [],
    "html_meta": {},
    "statics": {
        "property": [{
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "DAY",
            "id": "static-property-DAY"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "HOUR",
            "id": "static-property-HOUR"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "MILLI",
            "id": "static-property-MILLI"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "MINUTE",
            "id": "static-property-MINUTE"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "MONTH",
            "id": "static-property-MONTH"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "SECOND",
            "id": "static-property-SECOND"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "YEAR",
            "id": "static-property-YEAR"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "dayNames",
            "id": "static-property-dayNames"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "defaults",
            "id": "static-property-defaults"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "formatCodes",
            "id": "static-property-formatCodes"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "formatFunctions",
            "id": "static-property-formatFunctions"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "monthNames",
            "id": "static-property-monthNames"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "monthNumbers",
            "id": "static-property-monthNumbers"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "parseFunctions",
            "id": "static-property-parseFunctions"
        }, {
            "tagname": "property",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "useStrict",
            "id": "static-property-useStrict"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "formatContainsHourInfo",
            "id": "static-method-formatContainsHourInfo"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "getMonthNumber",
            "id": "static-method-getMonthNumber"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "getShortDayName",
            "id": "static-method-getShortDayName"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "getShortMonthName",
            "id": "static-method-getShortMonthName"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "isValid",
            "id": "static-method-isValid"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {
                "static": true
            },
            "name": "parseDate",
            "id": "static-method-parseDate"
        }],
        "event": [],
        "css_mixin": []
    },
    "files": [{
        "href": "Date.html#Date",
        "filename": "Date.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "a",
            "id": "method-a"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "add",
            "id": "method-add"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "between",
            "id": "method-between"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {
                "chainable": true
            },
            "name": "clearTime",
            "id": "method-clearTime"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "clone",
            "id": "method-clone"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "format",
            "id": "method-format"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getDayOfYear",
            "id": "method-getDayOfYear"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getDaysInMonth",
            "id": "method-getDaysInMonth"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getElapsed",
            "id": "method-getElapsed"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getFirstDateOfMonth",
            "id": "method-getFirstDateOfMonth"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getFirstDayOfMonth",
            "id": "method-getFirstDayOfMonth"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getGMTOffset",
            "id": "method-getGMTOffset"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getLastDateOfMonth",
            "id": "method-getLastDateOfMonth"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getLastDayOfMonth",
            "id": "method-getLastDayOfMonth"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getSuffix",
            "id": "method-getSuffix"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getTimezone",
            "id": "method-getTimezone"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "getWeekOfYear",
            "id": "method-getWeekOfYear"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "isDST",
            "id": "method-isDST"
        }, {
            "tagname": "method",
            "owner": "Date",
            "meta": {},
            "name": "isLeapYear",
            "id": "method-isLeapYear"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Date",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Date",
    "mixins": [],
    "mixedInto": []
});