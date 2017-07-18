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
Ext.data.JsonP.Ext_chart_BarSeries({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.chart.CartesianSeries",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.chart.Series' rel='Ext.chart.Series' class='docClass'>Ext.chart.Series</a><div class='subclass '><a href='#!/api/Ext.chart.CartesianSeries' rel='Ext.chart.CartesianSeries' class='docClass'>Ext.chart.CartesianSeries</a><div class='subclass '><strong>Ext.chart.BarSeries</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Chart.html#Ext-chart-BarSeries' target='_blank'>Chart.js</a></div></pre><div class='doc-contents'><p>BarSeries class for the charts widget.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-axis' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.CartesianSeries' rel='Ext.chart.CartesianSeries' class='defined-in docClass'>Ext.chart.CartesianSeries</a><br/><a href='source/Chart.html#Ext-chart-CartesianSeries-property-axis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.CartesianSeries-property-axis' class='name expandable'>axis</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Indicates which axis the series will bind to ...</div><div class='long'><p>Indicates which axis the series will bind to</p>\n<p>Defaults to: <code>'primary'</code></p></div></div></div><div id='property-displayName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.Series' rel='Ext.chart.Series' class='defined-in docClass'>Ext.chart.Series</a><br/><a href='source/Chart.html#Ext-chart-Series-property-displayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.Series-property-displayName' class='name not-expandable'>displayName</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The human-readable name of the series.</p>\n</div><div class='long'><p>The human-readable name of the series.</p>\n</div></div></div><div id='property-showInLegend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.CartesianSeries' rel='Ext.chart.CartesianSeries' class='defined-in docClass'>Ext.chart.CartesianSeries</a><br/><a href='source/Chart.html#Ext-chart-CartesianSeries-property-showInLegend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.CartesianSeries-property-showInLegend' class='name expandable'>showInLegend</a><span> : Boolean</span></div><div class='description'><div class='short'>False to not show this series in the legend. ...</div><div class='long'><p>False to not show this series in the legend. Defaults to <tt>true</tt>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.BarSeries'>Ext.chart.BarSeries</span><br/><a href='source/Chart.html#Ext-chart-BarSeries-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.BarSeries-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of series. ...</div><div class='long'><p>The type of series.</p>\n<p>Defaults to: <code>&quot;bar&quot;</code></p><p>Overrides: <a href='#!/api/Ext.chart.Series-property-type' rel='Ext.chart.Series-property-type' class='docClass'>Ext.chart.Series.type</a></p></div></div></div><div id='property-xField' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.CartesianSeries' rel='Ext.chart.CartesianSeries' class='defined-in docClass'>Ext.chart.CartesianSeries</a><br/><a href='source/Chart.html#Ext-chart-CartesianSeries-property-xField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.CartesianSeries-property-xField' class='name not-expandable'>xField</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The field used to access the x-axis value from the items from the data\nsource.</p>\n</div><div class='long'><p>The field used to access the x-axis value from the items from the data\nsource.</p>\n</div></div></div><div id='property-yField' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.CartesianSeries' rel='Ext.chart.CartesianSeries' class='defined-in docClass'>Ext.chart.CartesianSeries</a><br/><a href='source/Chart.html#Ext-chart-CartesianSeries-property-yField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.CartesianSeries-property-yField' class='name not-expandable'>yField</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The field used to access the y-axis value from the items from the data\nsource.</p>\n</div><div class='long'><p>The field used to access the y-axis value from the items from the data\nsource.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.BarSeries'>Ext.chart.BarSeries</span><br/><a href='source/Chart.html#Ext-chart-BarSeries-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.chart.BarSeries-method-constructor' class='name expandable'>Ext.chart.BarSeries</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.chart.BarSeries\" rel=\"Ext.chart.BarSeries\" class=\"docClass\">Ext.chart.BarSeries</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.chart.BarSeries\" rel=\"Ext.chart.BarSeries\" class=\"docClass\">Ext.chart.BarSeries</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.chart.CartesianSeries-method-constructor' rel='Ext.chart.CartesianSeries-method-constructor' class='docClass'>Ext.chart.CartesianSeries.constructor</a></p></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.chart.Series", "Ext.chart.CartesianSeries"],
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
        "href": "Chart.html#Ext-chart-BarSeries",
        "filename": "Chart.js"
    }],
    "linenr": 975,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.chart.CartesianSeries",
            "meta": {},
            "name": "axis",
            "id": "property-axis"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.Series",
            "meta": {},
            "name": "displayName",
            "id": "property-displayName"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.CartesianSeries",
            "meta": {},
            "name": "showInLegend",
            "id": "property-showInLegend"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.BarSeries",
            "meta": {},
            "name": "type",
            "id": "property-type"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.CartesianSeries",
            "meta": {},
            "name": "xField",
            "id": "property-xField"
        }, {
            "tagname": "property",
            "owner": "Ext.chart.CartesianSeries",
            "meta": {},
            "name": "yField",
            "id": "property-yField"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.chart.BarSeries",
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
    "name": "Ext.chart.BarSeries",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.chart.BarSeries",
    "mixins": [],
    "mixedInto": []
});