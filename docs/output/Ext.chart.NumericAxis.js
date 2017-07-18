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
Ext.data.JsonP.Ext_chart_NumericAxis({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.chart.Axis",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='docClass'>Ext.chart.Axis</a><div class='subclass '><strong>Ext.chart.NumericAxis</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Chart.html#Ext-chart-NumericAxis' target='_blank'>Chart.js</a></div></pre><div class='doc-contents'><p>A type of axis whose units are measured in numeric values.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-adjustMaximumByMajorUnit' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-adjustMaximumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-adjustMaximumByMajorUnit' class='name expandable'>adjustMaximumByMajorUnit</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates whether to extend maximum beyond data's maximum to the nearest\nmajorUnit. ...</div><div class='long'><p>Indicates whether to extend maximum beyond data's maximum to the nearest\nmajorUnit.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-adjustMinimumByMajorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-adjustMinimumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-adjustMinimumByMajorUnit' class='name expandable'>adjustMinimumByMajorUnit</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates whether to extend the minimum beyond data's minimum to the\nnearest majorUnit. ...</div><div class='long'><p>Indicates whether to extend the minimum beyond data's minimum to the\nnearest majorUnit.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-alwaysShowZero' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-alwaysShowZero' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-alwaysShowZero' class='name expandable'>alwaysShowZero</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, and the bounds are calculated automatically, either the minimum\nor maximum will be set to zero. ...</div><div class='long'><p>If true, and the bounds are calculated automatically, either the minimum\nor maximum will be set to zero.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-calculateByLabelSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-calculateByLabelSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-calculateByLabelSize' class='name expandable'>calculateByLabelSize</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates whether to factor in the size of the labels when calculating a\nmajor unit. ...</div><div class='long'><p>Indicates whether to factor in the size of the labels when calculating a\nmajor unit.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-hideOverlappingLabels' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-hideOverlappingLabels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-hideOverlappingLabels' class='name expandable'>hideOverlappingLabels</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, labels that overlap previously drawn labels on the axis will be hidden. ...</div><div class='long'><p>If true, labels that overlap previously drawn labels on the axis will be hidden.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-labelFunction' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-labelFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-labelFunction' class='name expandable'>labelFunction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>A string reference to the globally-accessible function that may be called to\ndetermine each of the label values for t...</div><div class='long'><p>A string reference to the globally-accessible function that may be called to\ndetermine each of the label values for this axis.</p>\n</div></div></div><div id='property-labelSpacing' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-labelSpacing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-labelSpacing' class='name expandable'>labelSpacing</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The space, in pixels, between labels on an axis. ...</div><div class='long'><p>The space, in pixels, between labels on an axis.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='property-majorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-majorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-majorUnit' class='name not-expandable'>majorUnit</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The spacing between major intervals on this axis.</p>\n</div><div class='long'><p>The spacing between major intervals on this axis.</p>\n</div></div></div><div id='property-maximum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-maximum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-maximum' class='name expandable'>maximum</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The maximum value drawn by the axis. ...</div><div class='long'><p>The maximum value drawn by the axis. If not set explicitly, the axis\nmaximum will be calculated automatically.</p>\n</div></div></div><div id='property-minimum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-minimum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-minimum' class='name expandable'>minimum</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The minimum value drawn by the axis. ...</div><div class='long'><p>The minimum value drawn by the axis. If not set explicitly, the axis\nminimum will be calculated automatically.</p>\n</div></div></div><div id='property-minorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-minorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-minorUnit' class='name not-expandable'>minorUnit</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The spacing between minor intervals on this axis.</p>\n</div><div class='long'><p>The spacing between minor intervals on this axis.</p>\n</div></div></div><div id='property-orientation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-orientation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-orientation' class='name expandable'>orientation</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The direction in which the axis is drawn. ...</div><div class='long'><p>The direction in which the axis is drawn. May be \"horizontal\" or \"vertical\".</p>\n<p>Defaults to: <code>&quot;horizontal&quot;</code></p></div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-position' class='name expandable'>position</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Indicates the position of the axis relative to the chart ...</div><div class='long'><p>Indicates the position of the axis relative to the chart</p>\n<p>Defaults to: <code>'left'</code></p></div></div></div><div id='property-reverse' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-reverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-reverse' class='name expandable'>reverse</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, the items on the axis will be drawn in opposite direction. ...</div><div class='long'><p>If true, the items on the axis will be drawn in opposite direction.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-roundMajorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-roundMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-roundMajorUnit' class='name expandable'>roundMajorUnit</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates whether to round the major unit. ...</div><div class='long'><p>Indicates whether to round the major unit.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-scale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-scale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-scale' class='name expandable'>scale</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The scaling algorithm to use on this axis. ...</div><div class='long'><p>The scaling algorithm to use on this axis. May be \"linear\" or\n\"logarithmic\".</p>\n<p>Defaults to: <code>&quot;linear&quot;</code></p></div></div></div><div id='property-snapToUnits' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-snapToUnits' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-snapToUnits' class='name expandable'>snapToUnits</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, the labels, ticks, gridlines, and other objects will snap to the\nnearest major or minor unit. ...</div><div class='long'><p>If true, the labels, ticks, gridlines, and other objects will snap to the\nnearest major or minor unit. If false, their position will be based on\nthe minimum value.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.NumericAxis-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of axis. ...</div><div class='long'><p>The type of axis.</p>\n<p>Defaults to: <code>&quot;numeric&quot;</code></p><p>Overrides: <a href='#!/api/Ext.chart.Axis-property-type' rel='Ext.chart.Axis-property-type' class='docClass'>Ext.chart.Axis.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.NumericAxis'>Ext.chart.NumericAxis</span><br/><a href='source/Chart.html#Ext-chart-NumericAxis-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.chart.NumericAxis-method-constructor' class='name expandable'>Ext.chart.NumericAxis</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.chart.NumericAxis\" rel=\"Ext.chart.NumericAxis\" class=\"docClass\">Ext.chart.NumericAxis</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.chart.NumericAxis\" rel=\"Ext.chart.NumericAxis\" class=\"docClass\">Ext.chart.NumericAxis</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.chart.Axis-method-constructor' rel='Ext.chart.Axis-method-constructor' class='docClass'>Ext.chart.Axis.constructor</a></p></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.chart.Axis"],
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
        "href": "Chart.html#Ext-chart-NumericAxis",
        "filename": "Chart.js"
    }],
    "linenr": 653,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "adjustMaximumByMajorUnit",
            "id": "property-adjustMaximumByMajorUnit"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "adjustMinimumByMajorUnit",
            "id": "property-adjustMinimumByMajorUnit"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "alwaysShowZero",
            "id": "property-alwaysShowZero"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "calculateByLabelSize",
            "id": "property-calculateByLabelSize"
        }, {
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
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "majorUnit",
            "id": "property-majorUnit"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "maximum",
            "id": "property-maximum"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "minimum",
            "id": "property-minimum"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "minorUnit",
            "id": "property-minorUnit"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "orientation",
            "id": "property-orientation"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "position",
            "id": "property-position"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Axis",
            "meta": {},
            "name": "reverse",
            "id": "property-reverse"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "roundMajorUnit",
            "id": "property-roundMajorUnit"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "scale",
            "id": "property-scale"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "snapToUnits",
            "id": "property-snapToUnits"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.NumericAxis",
            "meta": {},
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.chart.NumericAxis",
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
    "name": "Ext.chart.NumericAxis",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.chart.NumericAxis",
    "mixins": [],
    "mixedInto": []
});