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
Ext.data.JsonP.Ext_tree_TreeFilter({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TreeFilter.html#Ext-tree-TreeFilter' target='_blank'>TreeFilter.js</a></div></pre><div class='doc-contents'><p>Note this class is experimental and doesn't update the indent (lines) or expand collapse icons of the nodes</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeFilter'>Ext.tree.TreeFilter</span><br/><a href='source/TreeFilter.html#Ext-tree-TreeFilter-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeFilter-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Clears the current filter. ...</div><div class='long'><p>Clears the current filter. Note: with the \"remove\" option\nset a filter cannot be cleared.</p>\n</div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeFilter'>Ext.tree.TreeFilter</span><br/><a href='source/TreeFilter.html#Ext-tree-TreeFilter-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeFilter-method-filter' class='name expandable'>filter</a>( <span class='pre'>value, [attr], [startNode]</span> )</div><div class='description'><div class='short'>Filter the data by a specific attribute. ...</div><div class='long'><p>Filter the data by a specific attribute.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/RegExp<div class='sub-desc'><p>Either string that the attribute value\nshould start with or a RegExp to test against the attribute</p>\n</div></li><li><span class='pre'>attr</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The attribute passed in your node's attributes collection. Defaults to \"text\".</p>\n</div></li><li><span class='pre'>startNode</span> : TreeNode (optional)<div class='sub-desc'><p>The node to start the filter at.</p>\n</div></li></ul></div></div></div><div id='method-filterBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeFilter'>Ext.tree.TreeFilter</span><br/><a href='source/TreeFilter.html#Ext-tree-TreeFilter-method-filterBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeFilter-method-filterBy' class='name expandable'>filterBy</a>( <span class='pre'>fn, [scope]</span> )</div><div class='description'><div class='short'>Filter by a function. ...</div><div class='long'><p>Filter by a function. The passed function will be called with each\nnode in the tree (or from the startNode). If the function returns true, the node is kept\notherwise it is filtered. If a node is filtered, its children are also filtered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The filter function</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "TreeFilter.html#Ext-tree-TreeFilter",
        "filename": "TreeFilter.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.tree.TreeFilter",
            "meta": {},
            "name": "clear",
            "id": "method-clear"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeFilter",
            "meta": {},
            "name": "filter",
            "id": "method-filter"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeFilter",
            "meta": {},
            "name": "filterBy",
            "id": "method-filterBy"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.tree.TreeFilter",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.tree.TreeFilter",
    "mixins": [],
    "mixedInto": []
});