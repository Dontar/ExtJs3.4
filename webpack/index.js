var Ext = require("exports-loader?Ext!../adapter/ext/ext-base-debug.js");
require("../ext-all-debug");

Ext.chart.Chart.CHART_URL = require("url-loader!../resources/charts.swf");

require("../examples/ux/ux-all-debug");

module.exports = Ext;