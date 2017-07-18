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
Ext.data.JsonP.Ext_grid_GridView({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.grid.GroupingView", "Ext.grid.PivotGridView"],
    "extends": "Ext.util.Observable",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a><div class='subclass '><strong>Ext.grid.GridView</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.grid.GroupingView' rel='Ext.grid.GroupingView' class='docClass'>Ext.grid.GroupingView</a></div><div class='dependency'><a href='#!/api/Ext.grid.PivotGridView' rel='Ext.grid.PivotGridView' class='docClass'>Ext.grid.PivotGridView</a></div><h4>Files</h4><div class='dependency'><a href='source/GridView.html#Ext-grid-GridView' target='_blank'>GridView.js</a></div></pre><div class='doc-contents'><p>This class encapsulates the user interface of an <a href=\"#!/api/Ext.grid.GridPanel\" rel=\"Ext.grid.GridPanel\" class=\"docClass\">Ext.grid.GridPanel</a>.\nMethods of this class may be used to access user interface elements to enable\nspecial display effects. Do not change the DOM structure of the user interface.</p>\n\n\n<p>This class does not provide ways to manipulate the underlying data. The data\nmodel of a Grid is held in an <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoFill' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-autoFill' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-autoFill' class='name expandable'>autoFill</a><span> : Boolean</span></div><div class='description'><div class='short'>Defaults to false. ...</div><div class='long'><p>Defaults to <tt>false</tt>.  Specify <tt>true</tt> to have the column widths re-proportioned\nwhen the grid is <b>initially rendered</b>.  The\n<a href=\"#!/api/Ext.grid.Column-cfg-width\" rel=\"Ext.grid.Column-cfg-width\" class=\"docClass\">initially configured width</a></tt> of each column will be adjusted\nto fit the grid width and prevent horizontal scrolling. If columns are later resized (manually\nor programmatically), the other columns in the grid will <b>not</b> be resized to fit the grid width.\nSee <tt><a href=\"#!/api/Ext.grid.GridView-cfg-forceFit\" rel=\"Ext.grid.GridView-cfg-forceFit\" class=\"docClass\">forceFit</a></tt> also.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-cellSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-cellSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-cellSelector' class='name expandable'>cellSelector</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The selector used to find cells internally (defaults to 'td.x-grid3-cell') ...</div><div class='long'><p>The selector used to find cells internally (defaults to <tt>'td.x-grid3-cell'</tt>)</p>\n<p>Defaults to: <code>'td.x-grid3-cell'</code></p></div></div></div><div id='cfg-cellSelectorDepth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-cellSelectorDepth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-cellSelectorDepth' class='name expandable'>cellSelectorDepth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of levels to search for cells in event delegation (defaults to 4) ...</div><div class='long'><p>The number of levels to search for cells in event delegation (defaults to <tt>4</tt>)</p>\n<p>Defaults to: <code>4</code></p></div></div></div><div id='cfg-columnsText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-columnsText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-columnsText' class='name expandable'>columnsText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The text displayed in the 'Columns' menu item (defaults to 'Columns') ...</div><div class='long'><p>The text displayed in the 'Columns' menu item (defaults to <tt>'Columns'</tt>)</p>\n<p>Defaults to: <code>'Columns'</code></p></div></div></div><div id='cfg-deferEmptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-deferEmptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-deferEmptyText' class='name expandable'>deferEmptyText</a><span> : Boolean</span></div><div class='description'><div class='short'>True to defer emptyText being applied until the store's\nfirst load (defaults to true). ...</div><div class='long'><p>True to defer <tt><a href=\"#!/api/Ext.grid.GridView-cfg-emptyText\" rel=\"Ext.grid.GridView-cfg-emptyText\" class=\"docClass\">emptyText</a></tt> being applied until the store's\nfirst load (defaults to <tt>true</tt>).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-emptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-emptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-emptyText' class='name expandable'>emptyText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Default text (html tags are accepted) to display in the grid body when no rows\nare available (defaults to ''). ...</div><div class='long'><p>Default text (html tags are accepted) to display in the grid body when no rows\nare available (defaults to ''). This value will be used to update the <tt><a href=\"#!/api/Ext.grid.GridView-property-mainBody\" rel=\"Ext.grid.GridView-property-mainBody\" class=\"docClass\">mainBody</a></tt>:</p>\n\n<pre><code>    this.mainBody.update('&lt;div class=\"x-grid-empty\">' + this.emptyText + '&lt;/div>');\n    </code></pre>\n\n</div></div></div><div id='cfg-enableRowBody' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-enableRowBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-enableRowBody' class='name expandable'>enableRowBody</a><span> : Boolean</span></div><div class='description'><div class='short'>True to add a second TR element per row that can be used to provide a row body\nthat spans beneath the data row. ...</div><div class='long'><p>True to add a second TR element per row that can be used to provide a row body\nthat spans beneath the data row.  Use the <a href=\"#!/api/Ext.grid.GridView-method-getRowClass\" rel=\"Ext.grid.GridView-method-getRowClass\" class=\"docClass\">getRowClass</a> method's rowParams config to customize the row body.</p>\n</div></div></div><div id='cfg-forceFit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-forceFit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-forceFit' class='name expandable'>forceFit</a><span> : Boolean</span></div><div class='description'><div class='short'>Defaults to false. ...</div><div class='long'><p>Defaults to <tt>false</tt>.  Specify <tt>true</tt> to have the column widths re-proportioned\nat <b>all times</b>.</p>\n\n\n<p>The <a href=\"#!/api/Ext.grid.Column-cfg-width\" rel=\"Ext.grid.Column-cfg-width\" class=\"docClass\">initially configured width</a></tt> of each\ncolumn will be adjusted to fit the grid width and prevent horizontal scrolling. If columns are\nlater resized (manually or programmatically), the other columns in the grid <b>will</b> be resized\nto fit the grid width.</p>\n\n\n<p>Columns which are configured with <code>fixed: true</code> are omitted from being resized.</p>\n\n\n<p>See <tt><a href=\"#!/api/Ext.grid.GridView-cfg-autoFill\" rel=\"Ext.grid.GridView-cfg-autoFill\" class=\"docClass\">autoFill</a></tt>.</p>\n\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-headerMenuOpenCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-headerMenuOpenCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-headerMenuOpenCls' class='name expandable'>headerMenuOpenCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class to add to the header cell when its menu is visible. ...</div><div class='long'><p>The CSS class to add to the header cell when its menu is visible. Defaults to 'x-grid3-hd-menu-open'</p>\n<p>Defaults to: <code>'x-grid3-hd-menu-open'</code></p></div></div></div><div id='cfg-headersDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-headersDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-headersDisabled' class='name expandable'>headersDisabled</a><span> : Boolean</span></div><div class='description'><div class='short'>True to disable the grid column headers (defaults to false). ...</div><div class='long'><p>True to disable the grid column headers (defaults to <tt>false</tt>).\nUse the <a href=\"#!/api/Ext.grid.ColumnModel\" rel=\"Ext.grid.ColumnModel\" class=\"docClass\">ColumnModel</a> <tt>menuDisabled</tt>\nconfig to disable the <i>menu</i> for individual columns.  While this config is true the\nfollowing will be disabled:<div class=\"mdetail-params\"><ul>\n<li>clicking on header to sort</li>\n<li>the trigger to reveal the menu.</li>\n</ul></div></p>\n</div></div></div><div id='cfg-hideSortIcons' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-hideSortIcons' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-hideSortIcons' class='name expandable'>hideSortIcons</a><span> : Boolean</span></div><div class='description'><div class='short'>True to hide the sorting icons if sorting is disabled for a column. ...</div><div class='long'><p>True to hide the sorting icons if sorting is disabled for a column. Defaults to <tt>false</tt></p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-cfg-listeners' class='name expandable'>listeners</a><span> : Object</span></div><div class='description'><div class='short'>(optional) A config object containing one or more event handlers to be added to this\nobject during initialization. ...</div><div class='long'><p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#!/api/Ext.DataView\" rel=\"Ext.DataView\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#!/api/Ext.DataView-event-click\" rel=\"Ext.DataView-event-click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a Component's HTMLElement, listeners must be added to the <i><a href=\"#!/api/Ext.Component-method-getEl\" rel=\"Ext.Component-method-getEl\" class=\"docClass\">Element</a></i> after the Component\nhas been rendered. A plugin can simplify this step:</p>\n\n<pre><code>// Plugin is configured with a listeners config object.\n// The Component is appended to the argument list of all handler functions.\nExt.DomObserver = <a href=\"#!/api/Ext-method-extend\" rel=\"Ext-method-extend\" class=\"docClass\">Ext.extend</a>(Object, {\n    constructor: function(config) {\n        this.listeners = config.listeners ? config.listeners : config;\n    },\n\n    // Component passes itself into plugin&#39;s init method\n    init: function(c) {\n        var p, l = this.listeners;\n        for (p in l) {\n            if (<a href=\"#!/api/Ext-method-isFunction\" rel=\"Ext-method-isFunction\" class=\"docClass\">Ext.isFunction</a>(l[p])) {\n                l[p] = this.createHandler(l[p], c);\n            } else {\n                l[p].fn = this.createHandler(l[p].fn, c);\n            }\n        }\n\n        // Add the listeners to the Element immediately following the render call\n        c.render = c.render.<a href=\"#!/api/Function-method-createSequence\" rel=\"Function-method-createSequence\" class=\"docClass\">createSequence</a>(function() {\n            var e = c.getEl();\n            if (e) {\n                e.on(l);\n            }\n        });\n    },\n\n    createHandler: function(fn, c) {\n        return function(e) {\n            fn.call(this, e, c);\n        };\n    }\n});\n\nvar combo = new <a href=\"#!/api/Ext.form.ComboBox\" rel=\"Ext.form.ComboBox\" class=\"docClass\">Ext.form.ComboBox</a>({\n\n    // Collapse combo when its element is clicked on\n    plugins: [ new Ext.DomObserver({\n        click: function(evt, comp) {\n            comp.collapse();\n        }\n    })],\n    store: myStore,\n    typeAhead: true,\n    mode: 'local',\n    triggerAction: 'all'\n});\n</code></pre>\n\n\n<p></p></p>\n</div></div></div><div id='cfg-markDirty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-markDirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-markDirty' class='name expandable'>markDirty</a><span> : Boolean</span></div><div class='description'><div class='short'>True to show the dirty cell indicator when a cell has been modified. ...</div><div class='long'><p>True to show the dirty cell indicator when a cell has been modified. Defaults to <tt>true</tt>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-rowBodySelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-rowBodySelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-rowBodySelector' class='name expandable'>rowBodySelector</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The selector used to find row bodies internally (defaults to 'div.x-grid3-row') ...</div><div class='long'><p>The selector used to find row bodies internally (defaults to <tt>'div.x-grid3-row'</tt>)</p>\n<p>Defaults to: <code>'div.x-grid3-row-body'</code></p></div></div></div><div id='cfg-rowBodySelectorDepth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-rowBodySelectorDepth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-rowBodySelectorDepth' class='name expandable'>rowBodySelectorDepth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of levels to search for row bodies in event delegation (defaults to 10) ...</div><div class='long'><p>The number of levels to search for row bodies in event delegation (defaults to <tt>10</tt>)</p>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='cfg-rowOverCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-rowOverCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-rowOverCls' class='name expandable'>rowOverCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class added to each row when it is hovered over. ...</div><div class='long'><p>The CSS class added to each row when it is hovered over. Defaults to 'x-grid3-row-over'</p>\n<p>Defaults to: <code>'x-grid3-row-over'</code></p></div></div></div><div id='cfg-rowSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-rowSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-rowSelector' class='name expandable'>rowSelector</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The selector used to find rows internally (defaults to 'div.x-grid3-row') ...</div><div class='long'><p>The selector used to find rows internally (defaults to <tt>'div.x-grid3-row'</tt>)</p>\n<p>Defaults to: <code>'div.x-grid3-row'</code></p></div></div></div><div id='cfg-rowSelectorDepth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-rowSelectorDepth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-rowSelectorDepth' class='name expandable'>rowSelectorDepth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of levels to search for rows in event delegation (defaults to 10) ...</div><div class='long'><p>The number of levels to search for rows in event delegation (defaults to <tt>10</tt>)</p>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='cfg-scrollOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-scrollOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-scrollOffset' class='name expandable'>scrollOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The amount of space to reserve for the vertical scrollbar\n(defaults to undefined). ...</div><div class='long'><p>The amount of space to reserve for the vertical scrollbar\n(defaults to <tt>undefined</tt>). If an explicit value isn't specified, this will be automatically\ncalculated.</p>\n</div></div></div><div id='cfg-selectedRowClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-selectedRowClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-selectedRowClass' class='name expandable'>selectedRowClass</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class applied to a selected row (defaults to 'x-grid3-row-selected'). ...</div><div class='long'><p>The CSS class applied to a selected row (defaults to <tt>'x-grid3-row-selected'</tt>). An\nexample overriding the default styling:</p>\n\n<pre><code>    .x-grid3-row-selected {background-color: yellow;}\n    </code></pre>\n\n\n<p>Note that this only controls the row, and will not do anything for the text inside it.  To style inner\nfacets (like text) use something like:</p>\n\n<pre><code>    .x-grid3-row-selected .x-grid3-cell-inner {\n        color: #FFCC00;\n    }\n    </code></pre>\n\n\n<p>@type String</p>\n<p>Defaults to: <code>'x-grid3-row-selected'</code></p></div></div></div><div id='cfg-sortAscText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-sortAscText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-sortAscText' class='name expandable'>sortAscText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The text displayed in the 'Sort Ascending' menu item (defaults to 'Sort Ascending') ...</div><div class='long'><p>The text displayed in the 'Sort Ascending' menu item (defaults to <tt>'Sort Ascending'</tt>)</p>\n<p>Defaults to: <code>'Sort Ascending'</code></p></div></div></div><div id='cfg-sortClasses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-sortClasses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-sortClasses' class='name expandable'>sortClasses</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>The CSS classes applied to a header when it is sorted. ...</div><div class='long'><p>The CSS classes applied to a header when it is sorted. (defaults to <tt>['sort-asc', 'sort-desc']</tt>)</p>\n<p>Defaults to: <code>['sort-asc', 'sort-desc']</code></p></div></div></div><div id='cfg-sortDescText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-cfg-sortDescText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-cfg-sortDescText' class='name expandable'>sortDescText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The text displayed in the 'Sort Descending' menu item (defaults to 'Sort Descending') ...</div><div class='long'><p>The text displayed in the 'Sort Descending' menu item (defaults to <tt>'Sort Descending'</tt>)</p>\n<p>Defaults to: <code>'Sort Descending'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Ext.Template' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-Ext.Template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-Ext.Template' class='name expandable'>Ext.Template</a><span> : masterTpl</span></div><div class='description'><div class='short'>The master template to use when rendering the GridView. ...</div><div class='long'><p>The master template to use when rendering the GridView. Has a default template</p>\n</div></div></div><div id='property-bodyTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-bodyTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-bodyTpl' class='name expandable'>bodyTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The template to use when rendering the body. ...</div><div class='long'><p>The template to use when rendering the body. Has a default template</p>\n</div></div></div><div id='property-borderWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-borderWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-borderWidth' class='name expandable'>borderWidth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='property-cellTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-cellTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-cellTpl' class='name expandable'>cellTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The template to use to render each cell. ...</div><div class='long'><p>The template to use to render each cell. Has a default template</p>\n</div></div></div><div id='property-dragZone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-dragZone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-dragZone' class='name expandable'>dragZone</a><span> : <a href=\"#!/api/Ext.grid.GridDragZone\" rel=\"Ext.grid.GridDragZone\" class=\"docClass\">Ext.grid.GridDragZone</a></span></div><div class='description'><div class='short'>A customized implementation of a DragZone which provides default implementations\nof the template methods of DragZone ...</div><div class='long'><p>A customized implementation of a <a href=\"#!/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which provides default implementations\nof the template methods of DragZone to enable dragging of the selected rows of a GridPanel.\nSee <a href=\"#!/api/Ext.grid.GridDragZone\" rel=\"Ext.grid.GridDragZone\" class=\"docClass\">Ext.grid.GridDragZone</a> for details.</p>\n\n\n<p>This will <b>only</b> be present:<div class=\"mdetail-params\"><ul>\n<li><i>if</i> the owning GridPanel was configured with <a href=\"#!/api/Ext.grid.GridPanel-cfg-enableDragDrop\" rel=\"Ext.grid.GridPanel-cfg-enableDragDrop\" class=\"docClass\">enableDragDrop</a>: <tt>true</tt>.</li>\n<li><i>after</i> the owning GridPanel has been rendered.</li>\n</ul></div>\n\n</p></div></div></div><div id='property-firstRowCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-firstRowCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-firstRowCls' class='name expandable'>firstRowCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>'x-grid3-row-first'</code></p></div></div></div><div id='property-hdCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-hdCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-hdCls' class='name expandable'>hdCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'x-grid3-hd'</code></p></div></div></div><div id='property-headerTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-headerTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-headerTpl' class='name expandable'>headerTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The template to use when rendering headers. ...</div><div class='long'><p>The template to use when rendering headers. Has a default template</p>\n</div></div></div><div id='property-lastRowCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-lastRowCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-lastRowCls' class='name expandable'>lastRowCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'x-grid3-row-last'</code></p></div></div></div><div id='property-mainBody' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-mainBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-mainBody' class='name expandable'>mainBody</a><span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span></div><div class='description'><div class='short'>Read-only. ...</div><div class='long'><p><i>Read-only</i>. The GridView's body Element which encapsulates all rows in the Grid.\nThis <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> is only available after the GridPanel has been rendered.</p>\n</div></div></div><div id='property-rowClsRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-rowClsRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-rowClsRe' class='name expandable'>rowClsRe</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/(?:^|\\s+)x-grid3-row-(first|last|alt)(?:\\s+|$)/g</code></p></div></div></div><div id='property-tdClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-property-tdClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-property-tdClass' class='name expandable'>tdClass</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'x-grid3-cell'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.GridView-method-constructor' class='name expandable'>Ext.grid.GridView</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>o, Optional</span> )</div><div class='description'><div class='short'>Adds the specified events to the list of events which this Observable may fire. ...</div><div class='long'><p>Adds the specified events to the list of events which this Observable may fire.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n</div></li><li><span class='pre'>Optional</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>. Event name if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-addListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object. ...</div><div class='long'><p>Appends an event handler to this object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myDataView.on('click', this.onClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.\n<p>\n<pre><code>myGridPanel.on({\n'click' : {\n    fn: this.onClick,\n    scope: this,\n    delay: 100\n},\n'mouseover' : {\n    fn: this.onMouseOver,\n    scope: this\n},\n'mouseout' : {\n    fn: this.onMouseOut,\n    scope: this\n}\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\n<pre><code>myGridPanel.on({\n'click' : this.onClick,\n'mouseover' : this.onMouseOver,\n'mouseout' : this.onMouseOut,\n scope: this\n});</code></pre>\n\n</p></p></p></p></div></li></ul></div></div></div><div id='method-addRowClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-addRowClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-addRowClass' class='name expandable'>addRowClass</a>( <span class='pre'>rowId, cls</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private - use getRowClass to apply custom row classes ...</div><div class='long'><p>private - use getRowClass to apply custom row classes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rowId</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cls</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-afterMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-afterMove' class='name expandable'>afterMove</a>( <span class='pre'>colIndex</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colIndex</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-afterRenderUI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-afterRenderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-afterRenderUI' class='name expandable'>afterRenderUI</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>This is always intended to be called after renderUI. ...</div><div class='long'><p>This is always intended to be called after renderUI. Sets up listeners on the UI elements\nand sets up options like column menus, moving and resizing.</p>\n</div></div></div><div id='method-applyEmptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-applyEmptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-applyEmptyText' class='name expandable'>applyEmptyText</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Displays the configured emptyText if there are currently no rows to display ...</div><div class='long'><p>Displays the configured emptyText if there are currently no rows to display</p>\n</div></div></div><div id='method-autoExpand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-autoExpand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-autoExpand' class='name expandable'>autoExpand</a>( <span class='pre'>preventUpdate</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Resizes the configured autoExpandColumn to take the available width after the other columns have\nbeen accounted for ...</div><div class='long'><p>Resizes the configured autoExpandColumn to take the available width after the other columns have\nbeen accounted for</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>preventUpdate</span> : Boolean<div class='sub-desc'><p>True to prevent the resizing of all rows (defaults to false)</p>\n</div></li></ul></div></div></div><div id='method-beforeColMenuShow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-beforeColMenuShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-beforeColMenuShow' class='name expandable'>beforeColMenuShow</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Click handler for the shared column dropdown menu, called on beforeshow. ...</div><div class='long'><p>Click handler for the shared column dropdown menu, called on beforeshow. Builds the menu\nwhich displays the list of columns for the user to show or hide.</p>\n</div></div></div><div id='method-beforeUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-beforeUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-beforeUpdate' class='name expandable'>beforeUpdate</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-bind' class='name expandable'>bind</a>( <span class='pre'>d, c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>DEPRECATED - will be removed in Ext JS 5.0 ...</div><div class='long'><p>DEPRECATED - will be removed in Ext JS 5.0</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clearHeaderSortState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-clearHeaderSortState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-clearHeaderSortState' class='name expandable'>clearHeaderSortState</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Removes any sorting indicator classes from the column headers ...</div><div class='long'><p>Removes any sorting indicator classes from the column headers</p>\n</div></div></div><div id='method-deleteRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-deleteRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-deleteRows' class='name expandable'>deleteRows</a>( <span class='pre'>dm, firstRow, lastRow</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>DEPRECATED - this doesn't appear to be called anywhere in the library, remove in 4.0. ...</div><div class='long'><p>DEPRECATED - this doesn't appear to be called anywhere in the library, remove in 4.0.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dm</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>firstRow</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>lastRow</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Destroys all objects associated with the GridView ...</div><div class='long'><p>Destroys all objects associated with the GridView</p>\n</div></div></div><div id='method-doRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-doRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-doRender' class='name expandable'>doRender</a>( <span class='pre'>columns, records, store, startRow, colCount, stripe</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Renders all of the rows to a string buffer and returns the string. ...</div><div class='long'><p>Renders all of the rows to a string buffer and returns the string. This is called internally\nby renderRows and performs the actual string building for the rows - it does not inject HTML into the DOM.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columns</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The column data acquired from getColumnData.</p>\n</div></li><li><span class='pre'>records</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The array of records to render</p>\n</div></li><li><span class='pre'>store</span> : <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a><div class='sub-desc'><p>The store to render the rows from</p>\n</div></li><li><span class='pre'>startRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the first row being rendered. Sometimes we only render a subset of\nthe rows so this is used to maintain logic for striping etc</p>\n</div></li><li><span class='pre'>colCount</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The total number of columns in the column model</p>\n</div></li><li><span class='pre'>stripe</span> : Boolean<div class='sub-desc'><p>True to stripe the rows</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>A string containing the HTML for the rendered rows</p>\n</div></li></ul></div></div></div><div id='method-enableBubble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-enableBubble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-enableBubble' class='name expandable'>enableBubble</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present. ...</div><div class='long'><p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See Ext.Component.getBubbleTarget. The default\nimplementation in <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code><a href=\"#!/api/Ext-method-override\" rel=\"Ext-method-override\" class=\"docClass\">Ext.override</a>(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>, {\n    //  Add functionality to Field&#39;s initComponent to enable the change event to bubble\n    initComponent : Ext.form.Field.prototype.initComponent.createSequence(function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field&#39;s events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The event name to bubble, or an Array of event names.</p>\n</div></li></ul></div></div></div><div id='method-ensureVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-ensureVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-ensureVisible' class='name expandable'>ensureVisible</a>( <span class='pre'>row, col, hscroll</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>hscroll</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-findCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-findCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-findCell' class='name expandable'>findCell</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-findCellIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-findCellIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-findCellIndex' class='name expandable'>findCellIndex</a>( <span class='pre'>el</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Return the index of the grid column which contains the passed HTMLElement. ...</div><div class='long'><p>Return the index of the grid column which contains the passed HTMLElement.</p>\n\n\n<p>See also <a href=\"#!/api/Ext.grid.GridView-method-findRowIndex\" rel=\"Ext.grid.GridView-method-findRowIndex\" class=\"docClass\">findRowIndex</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The target element</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The column index, or <b>false</b> if the target element is not within a row of this GridView.</p>\n</div></li></ul></div></div></div><div id='method-findHeaderCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-findHeaderCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-findHeaderCell' class='name expandable'>findHeaderCell</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-findHeaderIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-findHeaderIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-findHeaderIndex' class='name expandable'>findHeaderIndex</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-findRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-findRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-findRow' class='name expandable'>findRow</a>( <span class='pre'>el</span> ) : HTMLElement</div><div class='description'><div class='short'>Return the HtmlElement representing the grid row which contains the passed element. ...</div><div class='long'><p>Return the HtmlElement representing the grid row which contains the passed element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The target HTMLElement</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The row element, or null if the target element is not within a row of this GridView.</p>\n</div></li></ul></div></div></div><div id='method-findRowBody' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-findRowBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-findRowBody' class='name expandable'>findRowBody</a>( <span class='pre'>el</span> ) : HTMLElement</div><div class='description'><div class='short'>Return the HtmlElement representing the grid row body which contains the passed element. ...</div><div class='long'><p>Return the HtmlElement representing the grid row body which contains the passed element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The target HTMLElement</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The row body element, or null if the target element is not within a row body of this GridView.</p>\n</div></li></ul></div></div></div><div id='method-findRowIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-findRowIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-findRowIndex' class='name expandable'>findRowIndex</a>( <span class='pre'>el</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Return the index of the grid row which contains the passed HTMLElement. ...</div><div class='long'><p>Return the index of the grid row which contains the passed HTMLElement.\nSee also <a href=\"#!/api/Ext.grid.GridView-method-findCellIndex\" rel=\"Ext.grid.GridView-method-findCellIndex\" class=\"docClass\">findCellIndex</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The target HTMLElement</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The row index, or <b>false</b> if the target element is not within a row of this GridView.</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>eventName, args</span> ) : Boolean</div><div class='description'><div class='short'>Fires the specified event with the passed parameters (minus the event name). ...</div><div class='long'><p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#!/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#!/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to fire.</p>\n</div></li><li><span class='pre'>args</span> : Object...<div class='sub-desc'><p>Variable number of parameters are passed to handlers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>returns false if any of the handlers return false otherwise it returns true.</p>\n</div></li></ul></div></div></div><div id='method-fitColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-fitColumns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-fitColumns' class='name expandable'>fitColumns</a>( <span class='pre'>preventRefresh, onlyExpand, omitColumn</span> ) : Boolean<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Resizes each column to fit the available grid width. ...</div><div class='long'><p>Resizes each column to fit the available grid width.\nTODO: The second argument isn't even used, remove it in 4.0</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>preventRefresh</span> : Boolean<div class='sub-desc'><p>True to prevent resizing of each row to the new column sizes (defaults to false)</p>\n</div></li><li><span class='pre'>onlyExpand</span> : null<div class='sub-desc'><p>NOT USED, will be removed in 4.0</p>\n</div></li><li><span class='pre'>omitColumn</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of a column to leave at its current width. Defaults to undefined</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the operation succeeded, false if not or undefined if the grid view is not yet initialized</p>\n</div></li></ul></div></div></div><div id='method-fly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-fly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-fly' class='name expandable'>fly</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Each GridView has its own private flyweight, accessed through this method ...</div><div class='long'><p>Each GridView has its own private flyweight, accessed through this method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-focusCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-focusCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-focusCell' class='name expandable'>focusCell</a>( <span class='pre'>row, col</span> )</div><div class='description'><div class='short'>Focuses the specified cell. ...</div><div class='long'><p>Focuses the specified cell.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The row index</p>\n</div></li><li><span class='pre'>col</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The column index</p>\n</div></li></ul></div></div></div><div id='method-focusRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-focusRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-focusRow' class='name expandable'>focusRow</a>( <span class='pre'>row</span> )</div><div class='description'><div class='short'>Focuses the specified row. ...</div><div class='long'><p>Focuses the specified row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The row index</p>\n</div></li></ul></div></div></div><div id='method-getCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getCell' class='name expandable'>getCell</a>( <span class='pre'>row, col</span> ) : HtmlElement</div><div class='description'><div class='short'>Returns the grid's &lt;td> HtmlElement at the specified coordinates. ...</div><div class='long'><p>Returns the grid's <tt>&lt;td></tt> HtmlElement at the specified coordinates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The row index in which to find the cell.</p>\n</div></li><li><span class='pre'>col</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The column index of the cell.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlElement</span><div class='sub-desc'><p>The td at the specified coordinates.</p>\n</div></li></ul></div></div></div><div id='method-getCellIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getCellIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getCellIndex' class='name expandable'>getCellIndex</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getColumnData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getColumnData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getColumnData' class='name expandable'>getColumnData</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns an array of column configurations - one for each column ...</div><div class='long'><p>Returns an array of column configurations - one for each column</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Array of column config objects. This includes the column name, renderer, id style and renderer</p>\n</div></li></ul></div></div></div><div id='method-getColumnId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getColumnId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getColumnId' class='name expandable'>getColumnId</a>( <span class='pre'>index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getColumnStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getColumnStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getColumnStyle' class='name expandable'>getColumnStyle</a>( <span class='pre'>colIndex, isHeader</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Builds a CSS string for the given column index ...</div><div class='long'><p>Builds a CSS string for the given column index</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The column index</p>\n</div></li><li><span class='pre'>isHeader</span> : Boolean<div class='sub-desc'><p>True if getting the style for the column's header</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The CSS string</p>\n</div></li></ul></div></div></div><div id='method-getColumnTooltip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getColumnTooltip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getColumnTooltip' class='name expandable'>getColumnTooltip</a>( <span class='pre'>i</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>i</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getColumnWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getColumnWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getColumnWidth' class='name expandable'>getColumnWidth</a>( <span class='pre'>column</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns the width of a given column minus its border width ...</div><div class='long'><p>Returns the width of a given column minus its border width</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The column index</p>\n</div></li></ul></div></div></div><div id='method-getEditorParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getEditorParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getEditorParent' class='name expandable'>getEditorParent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getGridInnerWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getGridInnerWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getGridInnerWidth' class='name expandable'>getGridInnerWidth</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns the total internal width available to the grid, taking the scrollbar into account ...</div><div class='long'><p>Returns the total internal width available to the grid, taking the scrollbar into account</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The total width</p>\n</div></li></ul></div></div></div><div id='method-getHeaderCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getHeaderCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getHeaderCell' class='name expandable'>getHeaderCell</a>( <span class='pre'>index</span> ) : HtmlElement</div><div class='description'><div class='short'>Return the &lt;td> HtmlElement which represents the Grid's header cell for the specified column index. ...</div><div class='long'><p>Return the <tt>&lt;td></tt> HtmlElement which represents the Grid's header cell for the specified column index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The column index</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlElement</span><div class='sub-desc'><p>The td element.</p>\n</div></li></ul></div></div></div><div id='method-getOffsetWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getOffsetWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getOffsetWidth' class='name expandable'>getOffsetWidth</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getPreviousVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getPreviousVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getPreviousVisible' class='name expandable'>getPreviousVisible</a>( <span class='pre'>index</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/undefined<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns the index of the nearest currently visible header to the left of the given index. ...</div><div class='long'><p>Returns the index of the nearest currently visible header to the left of the given index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The header index</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/undefined</span><div class='sub-desc'><p>The index of the nearest visible header</p>\n</div></li></ul></div></div></div><div id='method-getResolvedXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getResolvedXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getResolvedXY' class='name expandable'>getResolvedXY</a>( <span class='pre'>resolved</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns the XY co-ordinates of a given row/cell resolution (see resolveCell) ...</div><div class='long'><p>Returns the XY co-ordinates of a given row/cell resolution (see <a href=\"#!/api/Ext.grid.GridView-method-resolveCell\" rel=\"Ext.grid.GridView-method-resolveCell\" class=\"docClass\">resolveCell</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolved</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>X and Y coords</p>\n</div></li></ul></div></div></div><div id='method-getRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getRow' class='name expandable'>getRow</a>( <span class='pre'>index</span> ) : HtmlElement</div><div class='description'><div class='short'>Return the &lt;div> HtmlElement which represents a Grid row for the specified index. ...</div><div class='long'><p>Return the <tt>&lt;div></tt> HtmlElement which represents a Grid row for the specified index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The row index</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlElement</span><div class='sub-desc'><p>The div element.</p>\n</div></li></ul></div></div></div><div id='method-getRowClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getRowClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getRowClass' class='name expandable'>getRowClass</a>( <span class='pre'>index, rowParams, store</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Override this function to apply custom CSS classes to rows during rendering. ...</div><div class='long'><p>Override this function to apply custom CSS classes to rows during rendering.  You can also supply custom\nparameters to the row template for the current row to customize how it is rendered using the <b>rowParams</b>\nparameter.  This function should return the CSS class name (or empty string '' for none) that will be added\nto the row's wrapping div.  To apply multiple class names, simply return them space-delimited within the string\n(e.g., 'my-class another-class'). Example usage:</p>\n\n<pre><code>viewConfig: {\n    forceFit: true,\n    showPreview: true, // custom property\n    enableRowBody: true, // required to create a second, full-width row to show expanded Record data\n    getRowClass: function(record, rowIndex, rp, ds){ // rp = rowParams\n        if(this.showPreview){\n            rp.body = '&lt;p>'+record.data.excerpt+'&lt;/p>';\n            return 'x-grid3-row-expanded';\n        }\n        return 'x-grid3-row-collapsed';\n    }\n},\n    </code></pre>\n\n\n<p>@param {Record} record The <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> corresponding to the current row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The row index.</p>\n</div></li><li><span class='pre'>rowParams</span> : Object<div class='sub-desc'><p>A config object that is passed to the row template during rendering that allows\ncustomization of various aspects of a grid row.</p>\n\n<p>If <a href=\"#!/api/Ext.grid.GridView-cfg-enableRowBody\" rel=\"Ext.grid.GridView-cfg-enableRowBody\" class=\"docClass\">enableRowBody</a> is configured <b><tt></tt>true</b>, then the following properties may be set\nby this function, and will be used to render a full-width expansion row below each grid row:</p>\n\n\n<ul>\n<li><code>body</code> : String <div class=\"sub-desc\">An HTML fragment to be used as the expansion row's body content (defaults to '').</div></li>\n<li><code>bodyStyle</code> : String <div class=\"sub-desc\">A CSS style specification that will be applied to the expansion row's &lt;tr> element. (defaults to '').</div></li>\n</ul>\n\n\n<p>The following property will be passed in, and may be appended to:</p>\n\n<ul>\n<li><code>tstyle</code> : String <div class=\"sub-desc\">A CSS style specification that willl be applied to the &lt;table> element which encapsulates\nboth the standard grid row, and any expansion row.</div></li>\n</ul>\n\n</div></li><li><span class='pre'>store</span> : Store<div class='sub-desc'><p>The <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> this grid is bound to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>a CSS class name to add to the row.</p>\n</div></li></ul></div></div></div><div id='method-getRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getRows' class='name expandable'>getRows</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getScrollOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getScrollOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getScrollOffset' class='name expandable'>getScrollOffset</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getScrollState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getScrollState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getScrollState' class='name expandable'>getScrollState</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getTotalWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-getTotalWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-getTotalWidth' class='name expandable'>getTotalWidth</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns the total width of all visible columns ...</div><div class='long'><p>Returns the total width of all visible columns</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleHdDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-handleHdDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-handleHdDown' class='name expandable'>handleHdDown</a>( <span class='pre'>e, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called when a header cell is clicked - shows the menu if the click happened over a trigger button ...</div><div class='long'><p>Called when a header cell is clicked - shows the menu if the click happened over a trigger button</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleHdMenuClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-handleHdMenuClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-handleHdMenuClick' class='name expandable'>handleHdMenuClick</a>( <span class='pre'>item</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Attached as the 'itemclick' handler to the header menu and the column show/hide submenu (if available). ...</div><div class='long'><p>Attached as the 'itemclick' handler to the header menu and the column show/hide submenu (if available).\nPerforms sorting if the sorter buttons were clicked, otherwise hides/shows the column that was clicked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleHdMenuClickDefault' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-handleHdMenuClickDefault' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-handleHdMenuClickDefault' class='name expandable'>handleHdMenuClickDefault</a>( <span class='pre'>item</span> )</div><div class='description'><div class='short'>Called by handleHdMenuClick if any button except a sort ASC/DESC button was clicked. ...</div><div class='long'><p>Called by handleHdMenuClick if any button except a sort ASC/DESC button was clicked. The default implementation provides\nthe column hide/show functionality based on the check state of the menu item. A different implementation can be provided\nif needed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.menu.BaseItem\" rel=\"Ext.menu.BaseItem\" class=\"docClass\">Ext.menu.BaseItem</a><div class='sub-desc'><p>The menu item that was clicked</p>\n</div></li></ul></div></div></div><div id='method-handleHdMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-handleHdMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-handleHdMove' class='name expandable'>handleHdMove</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Attached to the headers' mousemove event. ...</div><div class='long'><p>Attached to the headers' mousemove event. This figures out the CSS cursor to use based on where the mouse is currently\npointed. If the mouse is currently hovered over the extreme left or extreme right of any header cell and the cell next\nto it is resizable it is given the resize cursor, otherwise the cursor is set to an empty string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleHdOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-handleHdOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-handleHdOut' class='name expandable'>handleHdOut</a>( <span class='pre'>e, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Tied to the header element's mouseout event. ...</div><div class='long'><p>Tied to the header element's mouseout event. Removes the hover class from the header cell</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleHdOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-handleHdOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-handleHdOver' class='name expandable'>handleHdOver</a>( <span class='pre'>e, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Tied to the header element's mouseover event - adds the over class to the header cell if the menu is not disabled\nfor...</div><div class='long'><p>Tied to the header element's mouseover event - adds the over class to the header cell if the menu is not disabled\nfor that cell</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleWheel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-handleWheel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-handleWheel' class='name expandable'>handleWheel</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-hasListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-hasListener' class='name expandable'>hasListener</a>( <span class='pre'>eventName</span> ) : Boolean</div><div class='description'><div class='short'>Checks to see if this object has any listeners for a specified event ...</div><div class='long'><p>Checks to see if this object has any listeners for a specified event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to check for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the event is being listened for, else false</p>\n</div></li></ul></div></div></div><div id='method-hasRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-hasRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-hasRows' class='name expandable'>hasRows</a>( <span class='pre'></span> ) : Boolean<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns true if there are any rows rendered into the GridView ...</div><div class='long'><p>Returns true if there are any rows rendered into the GridView</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if any rows have been rendered</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-init' class='name expandable'>init</a>( <span class='pre'>grid</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-initData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-initData' class='name expandable'>initData</a>( <span class='pre'>newStore, newColModel</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Binds a new Store and ColumnModel to this GridView. ...</div><div class='long'><p>Binds a new Store and ColumnModel to this GridView. Removes any listeners from the old objects (if present)\nand adds listeners to the new ones</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newStore</span> : <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a><div class='sub-desc'><p>The new Store instance</p>\n</div></li><li><span class='pre'>newColModel</span> : <a href=\"#!/api/Ext.grid.ColumnModel\" rel=\"Ext.grid.ColumnModel\" class=\"docClass\">Ext.grid.ColumnModel</a><div class='sub-desc'><p>The new ColumnModel instance</p>\n</div></li></ul></div></div></div><div id='method-initElements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-initElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-initElements' class='name expandable'>initElements</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Finds and stores references to important elements ...</div><div class='long'><p>Finds and stores references to important elements</p>\n</div></div></div><div id='method-initEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-initEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-initEvents' class='name expandable'>initEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-initTemplates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-initTemplates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-initTemplates' class='name expandable'>initTemplates</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Provides default templates if they are not given for this particular instance. ...</div><div class='long'><p>Provides default templates if they are not given for this particular instance. Most of the templates are defined on\nthe prototype, the ones defined inside this function are done so because they are based on Grid or GridView configuration</p>\n</div></div></div><div id='method-initUI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-initUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-initUI' class='name expandable'>initUI</a>( <span class='pre'>grid</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-insertRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-insertRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-insertRows' class='name expandable'>insertRows</a>( <span class='pre'>dm, firstRow, lastRow, isUpdate</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dm</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>firstRow</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>lastRow</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>isUpdate</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isHideableColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-isHideableColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-isHideableColumn' class='name expandable'>isHideableColumn</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isMenuDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-isMenuDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-isMenuDisabled' class='name expandable'>isMenuDisabled</a>( <span class='pre'>cellIndex, el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Used by handleHdOver to determine whether or not to show the header menu class on cell hover ...</div><div class='long'><p>Used by <a href=\"#!/api/Ext.grid.GridView-method-handleHdOver\" rel=\"Ext.grid.GridView-method-handleHdOver\" class=\"docClass\">handleHdOver</a> to determine whether or not to show the header menu class on cell hover</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cellIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The header cell index</p>\n</div></li><li><span class='pre'>el</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The cell element currently being hovered over</p>\n</div></li></ul></div></div></div><div id='method-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-layout' class='name expandable'>layout</a>( <span class='pre'>initial</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Sizes the grid's header and body elements ...</div><div class='long'><p>Sizes the grid's header and body elements</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>initial</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object (shorthand for addListener.) ...</div><div class='long'><p>Appends an event handler to this object (shorthand for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event to listen for</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.</p>\n</div></li></ul></div></div></div><div id='method-onAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onAdd' class='name expandable'>onAdd</a>( <span class='pre'>store, records, index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onAllColumnWidthsUpdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onAllColumnWidthsUpdated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onAllColumnWidthsUpdated' class='name expandable'>onAllColumnWidthsUpdated</a>( <span class='pre'>ws, tw</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ws</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>tw</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onCellDeselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onCellDeselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onCellDeselect' class='name expandable'>onCellDeselect</a>( <span class='pre'>row, col</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onCellSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onCellSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onCellSelect' class='name expandable'>onCellSelect</a>( <span class='pre'>row, col</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onClear' class='name expandable'>onClear</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onColConfigChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onColConfigChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onColConfigChange' class='name expandable'>onColConfigChange</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onColWidthChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onColWidthChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onColWidthChange' class='name expandable'>onColWidthChange</a>( <span class='pre'>cm, col, width</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cm</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>width</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onColumnHiddenUpdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onColumnHiddenUpdated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onColumnHiddenUpdated' class='name expandable'>onColumnHiddenUpdated</a>( <span class='pre'>col, hidden, tw</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>hidden</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>tw</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onColumnMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onColumnMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onColumnMove' class='name expandable'>onColumnMove</a>( <span class='pre'>cm, oldIndex, newIndex</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cm</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>newIndex</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onColumnSplitterMoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onColumnSplitterMoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onColumnSplitterMoved' class='name expandable'>onColumnSplitterMoved</a>( <span class='pre'>cellIndex, width</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called by the SplitDragZone when a drag has been completed. ...</div><div class='long'><p>Called by the SplitDragZone when a drag has been completed. Resizes the columns</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cellIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>width</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onColumnWidthUpdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onColumnWidthUpdated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onColumnWidthUpdated' class='name expandable'>onColumnWidthUpdated</a>( <span class='pre'>col, w, tw</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>w</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>tw</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onDataChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onDataChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onDataChange' class='name expandable'>onDataChange</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onDenyColumnHide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onDenyColumnHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onDenyColumnHide' class='name expandable'>onDenyColumnHide</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onHeaderChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onHeaderChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onHeaderChange' class='name expandable'>onHeaderChange</a>( <span class='pre'>cm, col, text</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cm</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>text</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onHeaderClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onHeaderClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onHeaderClick' class='name expandable'>onHeaderClick</a>( <span class='pre'>g, index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onHiddenChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onHiddenChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onHiddenChange' class='name expandable'>onHiddenChange</a>( <span class='pre'>cm, col, hidden</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cm</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>hidden</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>vw, vh</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>template functions for subclasses and plugins\nthese functions include precalculated values ...</div><div class='long'><p>template functions for subclasses and plugins\nthese functions include precalculated values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>vw</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>vh</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onLoad' class='name expandable'>onLoad</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called when a store is loaded, scrolls to the top row ...</div><div class='long'><p>Called when a store is loaded, scrolls to the top row</p>\n</div></div></div><div id='method-onRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>store, record, index, isUpdate</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>isUpdate</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRowDeselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onRowDeselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onRowDeselect' class='name expandable'>onRowDeselect</a>( <span class='pre'>row</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRowOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onRowOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onRowOut' class='name expandable'>onRowOut</a>( <span class='pre'>e, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Removes the hover class from a row on mouseout ...</div><div class='long'><p>Removes the hover class from a row on mouseout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRowOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onRowOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onRowOver' class='name expandable'>onRowOver</a>( <span class='pre'>e, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Adds the hover class to a row when hovered over ...</div><div class='long'><p>Adds the hover class to a row when hovered over</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRowSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onRowSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onRowSelect' class='name expandable'>onRowSelect</a>( <span class='pre'>row</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-onUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-onUpdate' class='name expandable'>onUpdate</a>( <span class='pre'>store, record</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-processEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-processEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-processEvent' class='name expandable'>processEvent</a>( <span class='pre'>name, e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-processRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-processRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-processRows' class='name expandable'>processRows</a>( <span class='pre'>startRow</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Adds CSS classes and rowIndex to each row ...</div><div class='long'><p>Adds CSS classes and rowIndex to each row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The row to start from (defaults to 0)</p>\n</div></li></ul></div></div></div><div id='method-purgeListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-purgeListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-purgeListeners' class='name expandable'>purgeListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all listeners for this object ...</div><div class='long'><p>Removes all listeners for this object</p>\n</div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-refresh' class='name expandable'>refresh</a>( <span class='pre'>[headersToo]</span> )</div><div class='description'><div class='short'>Refreshs the grid UI ...</div><div class='long'><p>Refreshs the grid UI</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>headersToo</span> : Boolean (optional)<div class='sub-desc'><p>True to also refresh the headers</p>\n</div></li></ul></div></div></div><div id='method-refreshRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-refreshRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-refreshRow' class='name expandable'>refreshRow</a>( <span class='pre'>record</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Refreshes a row by re-rendering it. ...</div><div class='long'><p>Refreshes a row by re-rendering it. Fires the rowupdated event when done</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-relayEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>o, events</span> )</div><div class='description'><div class='short'>Relays selected events from the specified Observable as if the events were fired by this. ...</div><div class='long'><p>Relays selected events from the specified Observable as if the events were fired by <tt><b>this</b></tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The Observable whose events this object is to relay.</p>\n</div></li><li><span class='pre'>events</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Array of event names to relay.</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler. ...</div><div class='long'><p>Removes an event handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-removeRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-removeRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-removeRow' class='name expandable'>removeRow</a>( <span class='pre'>row</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeRowClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-removeRowClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-removeRowClass' class='name expandable'>removeRowClass</a>( <span class='pre'>row, cls</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cls</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-removeRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-removeRows' class='name expandable'>removeRows</a>( <span class='pre'>firstRow, lastRow</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>firstRow</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>lastRow</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-render' class='name expandable'>render</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-renderBody' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-renderBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-renderBody' class='name expandable'>renderBody</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-renderHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-renderHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-renderHeaders' class='name expandable'>renderHeaders</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Renders the header row using the 'header' template. ...</div><div class='long'><p>Renders the header row using the 'header' template. Does not inject the HTML into the DOM, just\nreturns a string.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>Rendered header row</p>\n</div></li></ul></div></div></div><div id='method-renderRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-renderRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-renderRows' class='name expandable'>renderRows</a>( <span class='pre'>startRow, endRow</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Renders rows between start and end indexes ...</div><div class='long'><p>Renders rows between start and end indexes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Index of the first row to render</p>\n</div></li><li><span class='pre'>endRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Index of the last row to render</p>\n</div></li></ul></div></div></div><div id='method-renderUI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-renderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-renderUI' class='name expandable'>renderUI</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Renders each of the UI elements in turn. ...</div><div class='long'><p>Renders each of the UI elements in turn. This is called internally, once, by this.render. It does not\nrender rows from the store, just the surrounding UI elements.</p>\n</div></div></div><div id='method-resolveCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-resolveCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-resolveCell' class='name expandable'>resolveCell</a>( <span class='pre'>row, col, hscroll</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Finds the Elements corresponding to the given row and column indexes ...</div><div class='long'><p>Finds the Elements corresponding to the given row and column indexes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>hscroll</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-restoreScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-restoreScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-restoreScroll' class='name expandable'>restoreScroll</a>( <span class='pre'>state</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resumeEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-resumeEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-resumeEvents' class='name expandable'>resumeEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resume firing events. ...</div><div class='long'><p>Resume firing events. (see <a href=\"#!/api/Ext.util.Observable-method-suspendEvents\" rel=\"Ext.util.Observable-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <tt><b>queueSuspended</b></tt> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n</div></div></div><div id='method-scrollToTop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-scrollToTop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-scrollToTop' class='name expandable'>scrollToTop</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Scrolls the grid to the top ...</div><div class='long'><p>Scrolls the grid to the top</p>\n</div></div></div><div id='method-suspendEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-suspendEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-suspendEvents' class='name expandable'>suspendEvents</a>( <span class='pre'>queueSuspended</span> )</div><div class='description'><div class='short'>Suspend the firing of all events. ...</div><div class='long'><p>Suspend the firing of all events. (see <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queueSuspended</span> : Boolean<div class='sub-desc'><p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n</div></li></ul></div></div></div><div id='method-syncFocusEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-syncFocusEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-syncFocusEl' class='name expandable'>syncFocusEl</a>( <span class='pre'>row, col, hscroll</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Moves the focus element to the x and y co-ordinates of the given row and column ...</div><div class='long'><p>Moves the focus element to the x and y co-ordinates of the given row and column</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>hscroll</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-syncHeaderScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-syncHeaderScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-syncHeaderScroll' class='name expandable'>syncHeaderScroll</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-syncScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-syncScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-syncScroll' class='name expandable'>syncScroll</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-un' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-un' class='name expandable'>un</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler (shorthand for removeListener.) ...</div><div class='long'><p>Removes an event handler (shorthand for <a href=\"#!/api/Ext.util.Observable-method-removeListener\" rel=\"Ext.util.Observable-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-updateAllColumnWidths' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateAllColumnWidths' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateAllColumnWidths' class='name expandable'>updateAllColumnWidths</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Updates the size of every column and cell in the grid ...</div><div class='long'><p>Updates the size of every column and cell in the grid</p>\n</div></div></div><div id='method-updateColumnHidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateColumnHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateColumnHidden' class='name expandable'>updateColumnHidden</a>( <span class='pre'>col, hidden</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Sets the hidden status of a given column. ...</div><div class='long'><p>Sets the hidden status of a given column.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>col</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The column index</p>\n</div></li><li><span class='pre'>hidden</span> : Boolean<div class='sub-desc'><p>True to make the column hidden</p>\n</div></li></ul></div></div></div><div id='method-updateColumnText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateColumnText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateColumnText' class='name expandable'>updateColumnText</a>( <span class='pre'>col, text</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>text</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateColumnWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateColumnWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateColumnWidth' class='name expandable'>updateColumnWidth</a>( <span class='pre'>column</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called after a column's width has been updated, this resizes all of the cells for that column in each row ...</div><div class='long'><p>Called after a column's width has been updated, this resizes all of the cells for that column in each row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The column index</p>\n</div></li></ul></div></div></div><div id='method-updateHeaderSortState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateHeaderSortState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateHeaderSortState' class='name expandable'>updateHeaderSortState</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Adds sorting classes to the column headers based on the bound store's sortInfo. ...</div><div class='long'><p>Adds sorting classes to the column headers based on the bound store's sortInfo. Fires the 'sortchange' event\nif the sorting has changed since this function was last run.</p>\n</div></div></div><div id='method-updateHeaderWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateHeaderWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateHeaderWidth' class='name expandable'>updateHeaderWidth</a>( <span class='pre'>updateMain</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Ensures that the header is sized to the total width available to it ...</div><div class='long'><p>Ensures that the header is sized to the total width available to it</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>updateMain</span> : Boolean<div class='sub-desc'><p>True to update the mainBody's width also (defaults to true)</p>\n</div></li></ul></div></div></div><div id='method-updateHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateHeaders' class='name expandable'>updateHeaders</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Re-renders the headers and ensures they are sized correctly ...</div><div class='long'><p>Re-renders the headers and ensures they are sized correctly</p>\n</div></div></div><div id='method-updateSortIcon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-method-updateSortIcon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-method-updateSortIcon' class='name expandable'>updateSortIcon</a>( <span class='pre'>col, dir</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Ensures the given column has the given icon class ...</div><div class='long'><p>Ensures the given column has the given icon class</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>dir</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforerefresh' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-event-beforerefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-event-beforerefresh' class='name expandable'>beforerefresh</a>( <span class='pre'>view</span> )</div><div class='description'><div class='short'>Internal UI Event. ...</div><div class='long'><p>Internal UI Event. Fired before the view is refreshed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-beforerowremoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-event-beforerowremoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-event-beforerowremoved' class='name expandable'>beforerowremoved</a>( <span class='pre'>view, rowIndex, record</span> )</div><div class='description'><div class='short'>Internal UI Event. ...</div><div class='long'><p>Internal UI Event. Fired before a row is removed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a><div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the row to be removed.</p>\n</div></li><li><span class='pre'>record</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'><p>The Record to be removed</p>\n</div></li></ul></div></div></div><div id='event-beforerowsinserted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-event-beforerowsinserted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-event-beforerowsinserted' class='name expandable'>beforerowsinserted</a>( <span class='pre'>view, firstRow, lastRow</span> )</div><div class='description'><div class='short'>Internal UI Event. ...</div><div class='long'><p>Internal UI Event. Fired before rows are inserted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a><div class='sub-desc'>\n</div></li><li><span class='pre'>firstRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the first row to be inserted.</p>\n</div></li><li><span class='pre'>lastRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the last row to be inserted.</p>\n</div></li></ul></div></div></div><div id='event-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-event-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-event-refresh' class='name expandable'>refresh</a>( <span class='pre'>view</span> )</div><div class='description'><div class='short'>Internal UI Event. ...</div><div class='long'><p>Internal UI Event. Fired after the GridView's body has been refreshed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-rowremoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-event-rowremoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-event-rowremoved' class='name expandable'>rowremoved</a>( <span class='pre'>view, rowIndex, record</span> )</div><div class='description'><div class='short'>Internal UI Event. ...</div><div class='long'><p>Internal UI Event. Fired after a row is removed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a><div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the row that was removed.</p>\n</div></li><li><span class='pre'>record</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'><p>The Record that was removed</p>\n</div></li></ul></div></div></div><div id='event-rowsinserted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-event-rowsinserted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-event-rowsinserted' class='name expandable'>rowsinserted</a>( <span class='pre'>view, firstRow, lastRow</span> )</div><div class='description'><div class='short'>Internal UI Event. ...</div><div class='long'><p>Internal UI Event. Fired after rows are inserted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a><div class='sub-desc'>\n</div></li><li><span class='pre'>firstRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the first inserted.</p>\n</div></li><li><span class='pre'>lastRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the last row inserted.</p>\n</div></li></ul></div></div></div><div id='event-rowupdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.GridView'>Ext.grid.GridView</span><br/><a href='source/GridView.html#Ext-grid-GridView-event-rowupdated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.GridView-event-rowupdated' class='name expandable'>rowupdated</a>( <span class='pre'>view, firstRow, record</span> )</div><div class='description'><div class='short'>Internal UI Event. ...</div><div class='long'><p>Internal UI Event. Fired after a row has been updated.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.grid.GridView\" rel=\"Ext.grid.GridView\" class=\"docClass\">Ext.grid.GridView</a><div class='sub-desc'>\n</div></li><li><span class='pre'>firstRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the row updated.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.record<div class='sub-desc'><p>The Record backing the row updated.</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.util.Observable"],
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
        "href": "GridView.html#Ext-grid-GridView",
        "filename": "GridView.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "Ext.Template",
            "id": "property-Ext.Template"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "bodyTpl",
            "id": "property-bodyTpl"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "borderWidth",
            "id": "property-borderWidth"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "cellTpl",
            "id": "property-cellTpl"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "dragZone",
            "id": "property-dragZone"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "firstRowCls",
            "id": "property-firstRowCls"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "hdCls",
            "id": "property-hdCls"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "headerTpl",
            "id": "property-headerTpl"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "lastRowCls",
            "id": "property-lastRowCls"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "mainBody",
            "id": "property-mainBody"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "rowClsRe",
            "id": "property-rowClsRe"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "tdClass",
            "id": "property-tdClass"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "autoFill",
            "id": "cfg-autoFill"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "cellSelector",
            "id": "cfg-cellSelector"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "cellSelectorDepth",
            "id": "cfg-cellSelectorDepth"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "columnsText",
            "id": "cfg-columnsText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "deferEmptyText",
            "id": "cfg-deferEmptyText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "emptyText",
            "id": "cfg-emptyText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "enableRowBody",
            "id": "cfg-enableRowBody"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "forceFit",
            "id": "cfg-forceFit"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "headerMenuOpenCls",
            "id": "cfg-headerMenuOpenCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "headersDisabled",
            "id": "cfg-headersDisabled"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "hideSortIcons",
            "id": "cfg-hideSortIcons"
        }, {
            "tagname": "cfg",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "listeners",
            "id": "cfg-listeners"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "markDirty",
            "id": "cfg-markDirty"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowBodySelector",
            "id": "cfg-rowBodySelector"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowBodySelectorDepth",
            "id": "cfg-rowBodySelectorDepth"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowOverCls",
            "id": "cfg-rowOverCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowSelector",
            "id": "cfg-rowSelector"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowSelectorDepth",
            "id": "cfg-rowSelectorDepth"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "scrollOffset",
            "id": "cfg-scrollOffset"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "selectedRowClass",
            "id": "cfg-selectedRowClass"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "sortAscText",
            "id": "cfg-sortAscText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "sortClasses",
            "id": "cfg-sortClasses"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "sortDescText",
            "id": "cfg-sortDescText"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "addEvents",
            "id": "method-addEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "addListener",
            "id": "method-addListener"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "addRowClass",
            "id": "method-addRowClass"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "afterMove",
            "id": "method-afterMove"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "afterRender",
            "id": "method-afterRender"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "afterRenderUI",
            "id": "method-afterRenderUI"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "applyEmptyText",
            "id": "method-applyEmptyText"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "autoExpand",
            "id": "method-autoExpand"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "beforeColMenuShow",
            "id": "method-beforeColMenuShow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "beforeUpdate",
            "id": "method-beforeUpdate"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "bind",
            "id": "method-bind"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "clearHeaderSortState",
            "id": "method-clearHeaderSortState"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "deleteRows",
            "id": "method-deleteRows"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "doRender",
            "id": "method-doRender"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "enableBubble",
            "id": "method-enableBubble"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "ensureVisible",
            "id": "method-ensureVisible"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "findCell",
            "id": "method-findCell"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "findCellIndex",
            "id": "method-findCellIndex"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "findHeaderCell",
            "id": "method-findHeaderCell"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "findHeaderIndex",
            "id": "method-findHeaderIndex"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "findRow",
            "id": "method-findRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "findRowBody",
            "id": "method-findRowBody"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "findRowIndex",
            "id": "method-findRowIndex"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "fireEvent",
            "id": "method-fireEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "fitColumns",
            "id": "method-fitColumns"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "fly",
            "id": "method-fly"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "focusCell",
            "id": "method-focusCell"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "focusRow",
            "id": "method-focusRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "getCell",
            "id": "method-getCell"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getCellIndex",
            "id": "method-getCellIndex"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getColumnData",
            "id": "method-getColumnData"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getColumnId",
            "id": "method-getColumnId"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getColumnStyle",
            "id": "method-getColumnStyle"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getColumnTooltip",
            "id": "method-getColumnTooltip"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getColumnWidth",
            "id": "method-getColumnWidth"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getEditorParent",
            "id": "method-getEditorParent"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "getGridInnerWidth",
            "id": "method-getGridInnerWidth"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "getHeaderCell",
            "id": "method-getHeaderCell"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getOffsetWidth",
            "id": "method-getOffsetWidth"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getPreviousVisible",
            "id": "method-getPreviousVisible"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getResolvedXY",
            "id": "method-getResolvedXY"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "getRow",
            "id": "method-getRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "getRowClass",
            "id": "method-getRowClass"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getRows",
            "id": "method-getRows"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getScrollOffset",
            "id": "method-getScrollOffset"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getScrollState",
            "id": "method-getScrollState"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "getTotalWidth",
            "id": "method-getTotalWidth"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "handleHdDown",
            "id": "method-handleHdDown"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "handleHdMenuClick",
            "id": "method-handleHdMenuClick"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "handleHdMenuClickDefault",
            "id": "method-handleHdMenuClickDefault"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "handleHdMove",
            "id": "method-handleHdMove"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "handleHdOut",
            "id": "method-handleHdOut"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "handleHdOver",
            "id": "method-handleHdOver"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "handleWheel",
            "id": "method-handleWheel"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "hasListener",
            "id": "method-hasListener"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "hasRows",
            "id": "method-hasRows"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "init",
            "id": "method-init"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "initData",
            "id": "method-initData"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "initElements",
            "id": "method-initElements"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "initEvents",
            "id": "method-initEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "initTemplates",
            "id": "method-initTemplates"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "initUI",
            "id": "method-initUI"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "insertRows",
            "id": "method-insertRows"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "isHideableColumn",
            "id": "method-isHideableColumn"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "isMenuDisabled",
            "id": "method-isMenuDisabled"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "layout",
            "id": "method-layout"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "on",
            "id": "method-on"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onAdd",
            "id": "method-onAdd"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onAllColumnWidthsUpdated",
            "id": "method-onAllColumnWidthsUpdated"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onCellDeselect",
            "id": "method-onCellDeselect"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onCellSelect",
            "id": "method-onCellSelect"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onClear",
            "id": "method-onClear"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onColConfigChange",
            "id": "method-onColConfigChange"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onColWidthChange",
            "id": "method-onColWidthChange"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onColumnHiddenUpdated",
            "id": "method-onColumnHiddenUpdated"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onColumnMove",
            "id": "method-onColumnMove"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onColumnSplitterMoved",
            "id": "method-onColumnSplitterMoved"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onColumnWidthUpdated",
            "id": "method-onColumnWidthUpdated"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onDataChange",
            "id": "method-onDataChange"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onDenyColumnHide",
            "id": "method-onDenyColumnHide"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onHeaderChange",
            "id": "method-onHeaderChange"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onHeaderClick",
            "id": "method-onHeaderClick"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onHiddenChange",
            "id": "method-onHiddenChange"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onLayout",
            "id": "method-onLayout"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onLoad",
            "id": "method-onLoad"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onRemove",
            "id": "method-onRemove"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onRowDeselect",
            "id": "method-onRowDeselect"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onRowOut",
            "id": "method-onRowOut"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onRowOver",
            "id": "method-onRowOver"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onRowSelect",
            "id": "method-onRowSelect"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "onUpdate",
            "id": "method-onUpdate"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "processEvent",
            "id": "method-processEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "processRows",
            "id": "method-processRows"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "purgeListeners",
            "id": "method-purgeListeners"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "refresh",
            "id": "method-refresh"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "refreshRow",
            "id": "method-refreshRow"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "relayEvents",
            "id": "method-relayEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "removeListener",
            "id": "method-removeListener"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "removeRow",
            "id": "method-removeRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "removeRowClass",
            "id": "method-removeRowClass"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "removeRows",
            "id": "method-removeRows"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "render",
            "id": "method-render"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "renderBody",
            "id": "method-renderBody"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "renderHeaders",
            "id": "method-renderHeaders"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "renderRows",
            "id": "method-renderRows"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "renderUI",
            "id": "method-renderUI"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "resolveCell",
            "id": "method-resolveCell"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "restoreScroll",
            "id": "method-restoreScroll"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "resumeEvents",
            "id": "method-resumeEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "scrollToTop",
            "id": "method-scrollToTop"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "suspendEvents",
            "id": "method-suspendEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "syncFocusEl",
            "id": "method-syncFocusEl"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "syncHeaderScroll",
            "id": "method-syncHeaderScroll"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "syncScroll",
            "id": "method-syncScroll"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "un",
            "id": "method-un"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateAllColumnWidths",
            "id": "method-updateAllColumnWidths"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateColumnHidden",
            "id": "method-updateColumnHidden"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateColumnText",
            "id": "method-updateColumnText"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateColumnWidth",
            "id": "method-updateColumnWidth"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateHeaderSortState",
            "id": "method-updateHeaderSortState"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateHeaderWidth",
            "id": "method-updateHeaderWidth"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateHeaders",
            "id": "method-updateHeaders"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.GridView",
            "meta": {
                "private": true
            },
            "name": "updateSortIcon",
            "id": "method-updateSortIcon"
        }],
        "event": [{
            "tagname": "event",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "beforerefresh",
            "id": "event-beforerefresh"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "beforerowremoved",
            "id": "event-beforerowremoved"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "beforerowsinserted",
            "id": "event-beforerowsinserted"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "refresh",
            "id": "event-refresh"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowremoved",
            "id": "event-rowremoved"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowsinserted",
            "id": "event-rowsinserted"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.GridView",
            "meta": {},
            "name": "rowupdated",
            "id": "event-rowupdated"
        }],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.grid.GridView",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.grid.GridView",
    "mixins": [],
    "mixedInto": []
});