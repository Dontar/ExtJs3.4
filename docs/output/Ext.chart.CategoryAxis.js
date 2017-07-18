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
Ext.data.JsonP.Ext_chart_CategoryAxis({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.chart.Axis",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='docClass'>Ext.chart.Axis</a><div class='subclass '><strong>Ext.chart.CategoryAxis</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Chart.html#Ext-chart-CategoryAxis' target='_blank'>Chart.js</a></div></pre><div class='doc-contents'><p>A type of axis that displays items in categories.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-calculateCategoryCount' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.CategoryAxis'>Ext.chart.CategoryAxis</span><br/><a href='source/Chart.html#Ext-chart-CategoryAxis-property-calculateCategoryCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.CategoryAxis-property-calculateCategoryCount' class='name expandable'>calculateCategoryCount</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates whether or not to calculate the number of categories (ticks and\nlabels) when there is not enough room to di...</div><div class='long'><p>Indicates whether or not to calculate the number of categories (ticks and\nlabels) when there is not enough room to display all labels on the axis.\nIf set to true, the axis will determine the number of categories to plot.\nIf not, all categories will be plotted.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-categoryNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.CategoryAxis'>Ext.chart.CategoryAxis</span><br/><a href='source/Chart.html#Ext-chart-CategoryAxis-property-categoryNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.CategoryAxis-property-categoryNames' class='name not-expandable'>categoryNames</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'><p>A list of category names to display along this axis.</p>\n</div><div class='long'><p>A list of category names to display along this axis.</p>\n</div></div></div><div id='property-hideOverlappingLabels' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-hideOverlappingLabels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-hideOverlappingLabels' class='name expandable'>hideOverlappingLabels</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, labels that overlap previously drawn labels on the axis will be hidden. ...</div><div class='long'><p>If true, labels that overlap previously drawn labels on the axis will be hidden.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-labelFunction' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-labelFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-labelFunction' class='name expandable'>labelFunction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>A string reference to the globally-accessible function that may be called to\ndetermine each of the label values for t...</div><div class='long'><p>A string reference to the globally-accessible function that may be called to\ndetermine each of the label values for this axis.</p>\n</div></div></div><div id='property-labelSpacing' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-labelSpacing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-labelSpacing' class='name expandable'>labelSpacing</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The space, in pixels, between labels on an axis. ...</div><div class='long'><p>The space, in pixels, between labels on an axis.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='property-orientation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-orientation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-orientation' class='name expandable'>orientation</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The direction in which the axis is drawn. ...</div><div class='long'><p>The direction in which the axis is drawn. May be \"horizontal\" or \"vertical\".</p>\n<p>Defaults to: <code>&quot;horizontal&quot;</code></p></div></div></div><div id='property-reverse' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Axis' rel='Ext.chart.Axis' class='defined-in docClass'>Ext.chart.Axis</a><br/><a href='source/Chart.html#Ext-chart-Axis-property-reverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Axis-property-reverse' class='name expandable'>reverse</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, the items on the axis will be drawn in opposite direction. ...</div><div class='long'><p>If true, the items on the axis will be drawn in opposite direction.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.CategoryAxis'>Ext.chart.CategoryAxis</span><br/><a href='source/Chart.html#Ext-chart-CategoryAxis-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.CategoryAxis-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of axis. ...</div><div class='long'><p>The type of axis.</p>\n<p>Defaults to: <code>&quot;category&quot;</code></p><p>Overrides: <a href='#!/api/Ext.chart.Axis-property-type' rel='Ext.chart.Axis-property-type' class='docClass'>Ext.chart.Axis.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.CategoryAxis'>Ext.chart.CategoryAxis</span><br/><a href='source/Chart.html#Ext-chart-CategoryAxis-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.chart.CategoryAxis-method-constructor' class='name expandable'>Ext.chart.CategoryAxis</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.chart.CategoryAxis\" rel=\"Ext.chart.CategoryAxis\" class=\"docClass\">Ext.chart.CategoryAxis</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.chart.CategoryAxis\" rel=\"Ext.chart.CategoryAxis\" class=\"docClass\">Ext.chart.CategoryAxis</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.chart.Axis-method-constructor' rel='Ext.chart.Axis-method-constructor' class='docClass'>Ext.chart.Axis.constructor</a></p></div></div></div></div></div></div></div>",
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
        "href": "Chart.html#Ext-chart-CategoryAxis",
        "filename": "Chart.js"
    }],
    "linenr": 857,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.chart.CategoryAxis",
            "meta": {},
            "name": "calculateCategoryCount",
            "id": "property-calculateCategoryCount"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.CategoryAxis",
            "meta": {},
            "name": "categoryNames",
            "id": "property-categoryNames"
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
            "owner": "Ext.chart.CategoryAxis",
            "meta": {},
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.chart.CategoryAxis",
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
    "name": "Ext.chart.CategoryAxis",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.chart.CategoryAxis",
    "mixins": [],
    "mixedInto": []
});