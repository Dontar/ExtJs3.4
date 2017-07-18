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
Ext.data.JsonP.Ext_chart_Axis({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.chart.CategoryAxis", "Ext.chart.NumericAxis",
        "Ext.chart.TimeAxis"],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.chart.CategoryAxis' rel='Ext.chart.CategoryAxis' class='docClass'>Ext.chart.CategoryAxis</a></div><div class='dependency'><a href='#!/api/Ext.chart.NumericAxis' rel='Ext.chart.NumericAxis' class='docClass'>Ext.chart.NumericAxis</a></div><div class='dependency'><a href='#!/api/Ext.chart.TimeAxis' rel='Ext.chart.TimeAxis' class='docClass'>Ext.chart.TimeAxis</a></div><h4>Files</h4><div class='dependency'><a href='source/Chart.html#Ext-chart-Axis' target='_blank'>Chart.js</a></div></pre><div class='doc-contents'><p>Defines a CartesianChart's vertical or horizontal axis.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-hideOverlappingLabels' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.Axis'>Ext.chart.Axis</span><br/><a href='source/Chart.html#Ext-chart-Axis-property-hideOverlappingLabels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-hideOverlappingLabels' class='name expandable'>hideOverlappingLabels</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, labels that overlap previously drawn labels on the axis will be hidden. ...</div><div class='long'><p>If true, labels that overlap previously drawn labels on the axis will be hidden.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-labelFunction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.Axis'>Ext.chart.Axis</span><br/><a href='source/Chart.html#Ext-chart-Axis-property-labelFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-labelFunction' class='name expandable'>labelFunction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>A string reference to the globally-accessible function that may be called to\ndetermine each of the label values for t...</div><div class='long'><p>A string reference to the globally-accessible function that may be called to\ndetermine each of the label values for this axis.</p>\n</div></div></div><div id='property-labelSpacing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.Axis'>Ext.chart.Axis</span><br/><a href='source/Chart.html#Ext-chart-Axis-property-labelSpacing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-labelSpacing' class='name expandable'>labelSpacing</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The space, in pixels, between labels on an axis. ...</div><div class='long'><p>The space, in pixels, between labels on an axis.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='property-orientation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.Axis'>Ext.chart.Axis</span><br/><a href='source/Chart.html#Ext-chart-Axis-property-orientation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-orientation' class='name expandable'>orientation</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The direction in which the axis is drawn. ...</div><div class='long'><p>The direction in which the axis is drawn. May be \"horizontal\" or \"vertical\".</p>\n<p>Defaults to: <code>&quot;horizontal&quot;</code></p></div></div></div><div id='property-reverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.Axis'>Ext.chart.Axis</span><br/><a href='source/Chart.html#Ext-chart-Axis-property-reverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-reverse' class='name expandable'>reverse</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, the items on the axis will be drawn in opposite direction. ...</div><div class='long'><p>If true, the items on the axis will be drawn in opposite direction.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.Axis'>Ext.chart.Axis</span><br/><a href='source/Chart.html#Ext-chart-Axis-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-type' class='name not-expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The type of axis.</p>\n</div><div class='long'><p>The type of axis.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.Axis'>Ext.chart.Axis</span><br/><a href='source/Chart.html#Ext-chart-Axis-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.chart.Axis-method-constructor' class='name expandable'>Ext.chart.Axis</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.chart.Axis\" rel=\"Ext.chart.Axis\" class=\"docClass\">Ext.chart.Axis</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.chart.Axis\" rel=\"Ext.chart.Axis\" class=\"docClass\">Ext.chart.Axis</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": [],
    "meta": {},
    "requires": [],
    "html_meta": {},
    "statics": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [],
        "event": [],
        "css_mixin": []
    },
    "files": [{
        "href": "Chart.html#Ext-chart-Axis",
        "filename": "Chart.js"
    }],
    "linenr": 592,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "hideOverlappingLabels",
            "id": "property-hideOverlappingLabels"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "labelFunction",
            "id": "property-labelFunction"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "labelSpacing",
            "id": "property-labelSpacing"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "orientation",
            "id": "property-orientation"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "reverse",
            "id": "property-reverse"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.chart.Axis",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.chart.Axis",
    "mixins": [],
    "mixedInto": []
});