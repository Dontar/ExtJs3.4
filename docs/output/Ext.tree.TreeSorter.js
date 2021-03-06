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
Ext.data.JsonP.Ext_tree_TreeSorter({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TreeSorter.html#Ext-tree-TreeSorter' target='_blank'>TreeSorter.js</a></div></pre><div class='doc-contents'><p>Provides sorting of nodes in a <a href=\"#!/api/Ext.tree.TreePanel\" rel=\"Ext.tree.TreePanel\" class=\"docClass\">Ext.tree.TreePanel</a>.  The TreeSorter automatically monitors events on the\nassociated TreePanel that might affect the tree's sort order (beforechildrenrendered, append, insert and textchange).\nExample usage:<br /></p>\n\n<pre><code>new <a href=\"#!/api/Ext.tree.TreeSorter\" rel=\"Ext.tree.TreeSorter\" class=\"docClass\">Ext.tree.TreeSorter</a>(myTree, {\n    folderSort: true,\n    dir: \"desc\",\n    sortType: function(value, node) {\n        // sort by a custom, typed attribute:\n        return parseInt(node.id, 10);\n    }\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-caseSensitive' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-cfg-caseSensitive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-cfg-caseSensitive' class='name not-expandable'>caseSensitive</a><span> : Boolean</span></div><div class='description'><div class='short'><p>true for case-sensitive sort (defaults to false)</p>\n</div><div class='long'><p>true for case-sensitive sort (defaults to false)</p>\n</div></div></div><div id='cfg-dir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-cfg-dir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-cfg-dir' class='name not-expandable'>dir</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The direction to sort (\"asc\" or \"desc,\" case-insensitive, defaults to \"asc\")</p>\n</div><div class='long'><p>The direction to sort (\"asc\" or \"desc,\" case-insensitive, defaults to \"asc\")</p>\n</div></div></div><div id='cfg-folderSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-cfg-folderSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-cfg-folderSort' class='name not-expandable'>folderSort</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to sort leaf nodes under non-leaf nodes (defaults to false)</p>\n</div><div class='long'><p>True to sort leaf nodes under non-leaf nodes (defaults to false)</p>\n</div></div></div><div id='cfg-leafAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-cfg-leafAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-cfg-leafAttr' class='name not-expandable'>leafAttr</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The attribute used to determine leaf nodes when <a href=\"#!/api/Ext.tree.TreeSorter-cfg-folderSort\" rel=\"Ext.tree.TreeSorter-cfg-folderSort\" class=\"docClass\">folderSort</a> = true (defaults to \"leaf\")</p>\n</div><div class='long'><p>The attribute used to determine leaf nodes when <a href=\"#!/api/Ext.tree.TreeSorter-cfg-folderSort\" rel=\"Ext.tree.TreeSorter-cfg-folderSort\" class=\"docClass\">folderSort</a> = true (defaults to \"leaf\")</p>\n</div></div></div><div id='cfg-property' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-cfg-property' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-cfg-property' class='name expandable'>property</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The named attribute on the node to sort by (defaults to \"text\"). ...</div><div class='long'><p>The named attribute on the node to sort by (defaults to \"text\").  Note that this\nproperty is only used if no <a href=\"#!/api/Ext.tree.TreeSorter-cfg-sortType\" rel=\"Ext.tree.TreeSorter-cfg-sortType\" class=\"docClass\">sortType</a> function is specified, otherwise it is ignored.</p>\n</div></div></div><div id='cfg-sortType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-cfg-sortType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-cfg-sortType' class='name expandable'>sortType</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>A custom \"casting\" function used to convert node values before sorting. ...</div><div class='long'><p>A custom \"casting\" function used to convert node values before sorting.  The function\nwill be called with a two parameters, the <a href=\"#!/api/Ext.tree.TreeSorter-cfg-property\" rel=\"Ext.tree.TreeSorter-cfg-property\" class=\"docClass\">property</a> value for the node and the <a href=\"#!/api/Ext.tree.TreeNode\" rel=\"Ext.tree.TreeNode\" class=\"docClass\">Ext.tree.TreeNode</a> being evaluated.\nIt is expected to return the node's sort value cast to the specific data type required for sorting.  This could be used, for example, when\na node's text (or other attribute) should be sorted as a date or numeric value.  See the class description for\nexample usage.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.tree.TreeSorter-method-constructor' class='name expandable'>Ext.tree.TreeSorter</a>( <span class='pre'>tree, config</span> ) : <a href=\"#!/api/Ext.tree.TreeSorter\" rel=\"Ext.tree.TreeSorter\" class=\"docClass\">Ext.tree.TreeSorter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tree</span> : TreePanel<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.tree.TreeSorter\" rel=\"Ext.tree.TreeSorter\" class=\"docClass\">Ext.tree.TreeSorter</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-method-doSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-method-doSort' class='name expandable'>doSort</a>( <span class='pre'>node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-method-updateSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-method-updateSort' class='name expandable'>updateSort</a>( <span class='pre'>tree, node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tree</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateSortParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeSorter'>Ext.tree.TreeSorter</span><br/><a href='source/TreeSorter.html#Ext-tree-TreeSorter-method-updateSortParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeSorter-method-updateSortParent' class='name expandable'>updateSortParent</a>( <span class='pre'>node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "TreeSorter.html#Ext-tree-TreeSorter",
        "filename": "TreeSorter.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.tree.TreeSorter",
            "meta": {},
            "name": "caseSensitive",
            "id": "cfg-caseSensitive"
        }, {
            "tagname": "cfg",
            "owner": "Ext.tree.TreeSorter",
            "meta": {},
            "name": "dir",
            "id": "cfg-dir"
        }, {
            "tagname": "cfg",
            "owner": "Ext.tree.TreeSorter",
            "meta": {},
            "name": "folderSort",
            "id": "cfg-folderSort"
        }, {
            "tagname": "cfg",
            "owner": "Ext.tree.TreeSorter",
            "meta": {},
            "name": "leafAttr",
            "id": "cfg-leafAttr"
        }, {
            "tagname": "cfg",
            "owner": "Ext.tree.TreeSorter",
            "meta": {},
            "name": "property",
            "id": "cfg-property"
        }, {
            "tagname": "cfg",
            "owner": "Ext.tree.TreeSorter",
            "meta": {},
            "name": "sortType",
            "id": "cfg-sortType"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.tree.TreeSorter",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeSorter",
            "meta": {
                "private": true
            },
            "name": "doSort",
            "id": "method-doSort"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeSorter",
            "meta": {
                "private": true
            },
            "name": "updateSort",
            "id": "method-updateSort"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeSorter",
            "meta": {
                "private": true
            },
            "name": "updateSortParent",
            "id": "method-updateSortParent"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.tree.TreeSorter",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.tree.TreeSorter",
    "mixins": [],
    "mixedInto": []
});