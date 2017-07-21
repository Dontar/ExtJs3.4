interface Array<T> {
    // indexOf(o: any, from?: number): number;
    remove(o: any): Array<T>;
}
interface Date {
    a(): any;
    add(interval: string, value: number): Date;
    between(): any;
    clearTime(): any;
    clone(): any;
    format(format: string): string;
    getDayOfYear(): any;
    getDaysInMonth(): any;
    getElapsed(): any;
    getFirstDateOfMonth(): any;
    getFirstDayOfMonth(): any;
    getGMTOffset(): any;
    getLastDateOfMonth(): any;
    getLastDayOfMonth(): any;
    getSuffix(): any;
    getTimezone(): any;
    getWeekOfYear(): any;
    isDST(): any;
    isLeapYear(): any;
}
interface DateConstructor {
    DAY: string;
    HOUR: string;
    MILLI: string;
    MINUTE: string;
    MONTH: string;
    SECOND: string;
    YEAR: string;
    dayNames: any[];
    defaults: any;
    formatCodes: { [name: string]: string };
    formatFunctions: { [fName: string]: Function };
    monthNames: string[];
    monthNumbers: { [mNames: string]: number };
    parseFunctions: { [fname: string]: Function };
    useStrict: boolean;
    formatContainsHourInfo(format: string): boolean;
    getMonthNumber(name: string): number;
    getShortDayName(day: number): string;
    getShortMonthName(month: number): string;
    isValid(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number): boolean;
    parseDate(input: string, format: string, strict?: boolean): Date;
}
interface Function {
    createCallback(): any;
    createDelegate(scope?: any, args?: any[], appendArgs?: boolean): any;
    createInterceptor(): any;
    createSequence(cb: Function, scope?: any): any;
    defer(millis: number, scope?: any, args?: any[], appendArgs?: boolean): number;
}
interface Number {
    constrain(): any;
}
interface String {
    toggle(vlaue: string, other: string): string;
    trim(): string;
}
interface StringConstructor {
    format(value: string, ...params: any[]): string;
    escape(value: string): string;
    leftPad(value: string, size: number, char?: string): string;
}
interface IExtString {
    format(value: string, ...params: any[]): string;
}


declare namespace Ext {
    export interface IExtPlugin {
        init(comp: Component): void;
    }
    export class AbstractManager<T> {
        public all: any;
        private typeName: any;
        constructor(config?: any);
        create(config: util.ObservableConfig, defaultType?: string): T;
        get(item: any): any;
        isRegistered(): any;
        onAvailable(): any;
        register(item: T): any;
        registerType(): any;
        unregister(): any;
    }
    export interface ActionConfig {
        actionId?: string;
        disabled?: boolean;
        handler?: Function;
        hidden?: boolean;
        iconCls?: string;
        itemId?: string;
        scope?: any;
        text?: string;
    }
    export class Action {
        actionId: string;
        isAction: boolean;
        constructor(config?: ActionConfig);
        addComponent(): void;
        callEach(): any;
        disable(): void;
        each(cb: (item: Component) => boolean): void;
        enable(): void;
        execute(): void;
        getIconClass(): any;
        getText(): any;
        hide(): any;
        isDisabled(): boolean;
        isHidden(): boolean;
        removeComponent(): void;
        setDisabled(exp: boolean): void;
        setHandler(callback: Function, scope?: any): void;
        setHidden(visible: boolean): void;
        setIconClass(cls: string): void;
        setText(txt: string): void;
        show(): void;
    }
    export var Ajax: data.Connection;
    export interface BoxComponentConfig extends ComponentConfig {
        anchor?: string;
        autoHeight?: boolean;
        autoScroll?: boolean;
        autoWidth?: boolean;
        boxMaxHeight?: number;
        boxMaxWidth?: number;
        boxMinHeight?: number;
        boxMinWidth?: number;
        flex?: number;
        height?: number;
        margins?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        pageX?: number;
        pageY?: number;
        region?: string;
        tabTip?: string;
        width?: number;
        x?: number;
        y?: number;
    }
    export class BoxComponent extends Component {
        initialConfig: BoxComponentConfig;
        boxReady: any;
        deferHeight: any;
        constructor(config?: BoxComponentConfig);
        adjustPosition(): any;
        adjustSize(): any;
        afterRender(): any;
        getBox(): any;
        getHeight(): any;
        getOuterSize(): any;
        getPosition(): any;
        getResizeEl(): any;
        getSize(): any;
        getWidth(): any;
        initComponent(): any;
        onPosition(): any;
        onResize(adjWidth, adjHeight, rawWidth, rawHeight): void;
        setAutoScroll(): any;
        setHeight(height: number): void;
        setPagePosition(): any;
        setPosition(): any;
        setSize(): any;
        setWidth(w: number): any;
        syncSize(): any;
        updateBox(): any;
    }
    export interface ButtonConfig extends BoxComponentConfig {
        allowDepress?: any
        arrowAlign?: any
        autoWidth?: any
        buttonSelector?: any
        clickEvent?: any
        enableToggle?: any
        handleMouseEvents?: any
        handler?: any
        icon?: any
        iconAlign?: any
        iconCls?: any
        menu?: any
        menuAlign?: any
        minWidth?: any
        overflowText?: any
        pressed?: any
        repeat?: any
        scale?: any
        scope?: any
        tabIndex?: any
        text?: any
        toggleGroup?: any
        toggleHandler?: any
        tooltip?: any
        tooltipType?: any
        type?: any
    }
    export class Button extends BoxComponent {
        initialConfig: ButtonConfig;
        btnEl: Element;
        disabled: boolean;
        hidden: boolean;
        menu: menu.Menu;
        pressed: boolean;
        constructor(config?: ButtonConfig);
        afterRender(): any;
        beforeDestroy(): any;
        blur(): any;
        clearTip(): any;
        doAutoWidth(): any;
        doToggle(): any;
        focus(): any;
        getClickEl(): any;
        getMenuClass(): any;
        getPressed(): any;
        getTemplateArgs(): any;
        getText(): any;
        hasVisibleMenu(): any;
        hideMenu(): any;
        initButtonEl(): any;
        isMenuTriggerOut(): any;
        isMenuTriggerOver(): any;
        monitorMouseOver(): any;
        onBlur(): any;
        onClick(): any;
        onDestroy(): any;
        onDisable(): any;
        onDisableChange(): any;
        onEnable(): any;
        onFocus(): any;
        onMenuHide(): any;
        onMenuShow(): any;
        onMouseDown(): any;
        onMouseOut(): any;
        onMouseOver(): any;
        onMouseUp(): any;
        onRender(): any;
        onRepeatClick(): any;
        restoreClick(): any;
        setButtonClass(): any;
        setHandler(hanler: Function, scope?: any): void;
        setIcon(): any;
        setIconClass(): any;
        setText(): any;
        setTooltip(): any;
        showMenu(): any;
        toggle(): any;
    }
    export interface ButtonGroupConfig extends PanelConfig {
        baseCls?: any
        columns?: any
        defaultType?: any
        frame?: any
        layout?: any
    }
    export class ButtonGroup extends Panel {
        initialConfig: ButtonGroupConfig;
        internalDefaults: { removeMode: string; hideParent: boolean };
        constructor(config?: ButtonGroupConfig);
        applyDefaults(): any;
        initComponent(): any;
        onAfterLayout(): any;
    }
    export module chart {
        export class Axis {
            hideOverlappingLabels: any;
            labelFunction: any;
            labelSpacing: any;
            orientation: any;
            reverse: any;
            type: any;
            constructor();
        }
        export interface BarChartConfig extends chart.CartesianChartConfig {
        }
        export class BarChart extends chart.CartesianChart {
            type: any;
            constructor(config: BarChartConfig);
        }
        export class BarSeries extends chart.CartesianSeries {
            type: any;
            constructor();
        }
        export interface CartesianChartConfig extends chart.ChartConfig {
        }
        export class CartesianChart extends chart.Chart {
            constructor(config: CartesianChartConfig);
            createAxis(): any;
            onDestroy(): any;
            onSwfReady(): any;
            setXAxes(): any;
            setXAxis(): any;
            setXField(): any;
            setYAxes(): any;
            setYAxis(): any;
            setYField(): any;
        }
        export class CartesianSeries extends chart.Series {
            axis: any;
            showInLegend: any;
            xField: any;
            yField: any;
            constructor();
        }
        export class CategoryAxis extends chart.Axis {
            calculateCategoryCount: any;
            categoryNames: any;
            type: any;
            constructor();
        }
        export interface ChartConfig extends FlashComponentConfig {
            chartStyle?: any
            disableCaching?: any
            extraStyle?: any
            seriesStyles?: any
            url?: any
        }
        export class Chart extends FlashComponent {
            disableCacheParam: any;
            refreshBuffer: any;
            constructor(config: ChartConfig);
            bindStore(): any;
            createFnProxy(): any;
            delayRefresh(): any;
            getFunctionRef(): any;
            initComponent(): any;
            onDestroy(): any;
            onSwfReady(): any;
            refresh(): any;
            removeFnProxy(): any;
            setCategoryNames(): any;
            setLegendRenderer(): any;
            setSeries(): any;
            setSeriesStyles(): any;
            setStyle(): any;
            setStyles(): any;
            setTipRenderer(): any;
        }
        export interface ColumnChartConfig extends chart.CartesianChartConfig {
        }
        export class ColumnChart extends chart.CartesianChart {
            type: any;
            constructor(config: ColumnChartConfig);
        }
        export class ColumnSeries extends chart.CartesianSeries {
            type: any;
            constructor();
        }
        export interface LineChartConfig extends chart.CartesianChartConfig {
        }
        export class LineChart extends chart.CartesianChart {
            type: any;
            constructor(config: LineChartConfig);
        }
        export class LineSeries extends chart.CartesianSeries {
            type: any;
            constructor();
        }
        export class NumericAxis extends chart.Axis {
            adjustMaximumByMajorUnit: any;
            adjustMinimumByMajorUnit: any;
            alwaysShowZero: any;
            calculateByLabelSize: any;
            majorUnit: any;
            maximum: any;
            minimum: any;
            minorUnit: any;
            position: any;
            roundMajorUnit: any;
            scale: any;
            snapToUnits: any;
            type: any;
            constructor();
        }
        export interface PieChartConfig extends chart.ChartConfig {
        }
        export class PieChart extends chart.Chart {
            type: any;
            constructor(config: PieChartConfig);
            onSwfReady(): any;
            setCategoryField(): any;
            setDataField(): any;
        }
        export class PieSeries extends chart.Series {
            categoryField: any;
            dataField: any;
            type: any;
            constructor();
        }
        export class Series {
            displayName: any;
            type: any;
            constructor();
        }
        export interface StackedBarChartConfig extends chart.CartesianChartConfig {
        }
        export class StackedBarChart extends chart.CartesianChart {
            type: any;
            constructor(config: StackedBarChartConfig);
        }
        export interface StackedColumnChartConfig extends chart.CartesianChartConfig {
        }
        export class StackedColumnChart extends chart.CartesianChart {
            type: any;
            constructor(config: StackedColumnChartConfig);
        }
        export class TimeAxis extends chart.Axis {
            calculateByLabelSize: any;
            majorTimeUnit: any;
            majorUnit: any;
            maximum: any;
            minimum: any;
            minorTimeUnit: any;
            minorUnit: any;
            snapToUnits: any;
            stackingEnabled: any;
            type: any;
            constructor();
        }
    }
    export interface ColorPaletteConfig extends ComponentConfig {
        allowReselect?: any
        clickEvent?: any
        handler?: any
        scope?: any
        value?: any
    }
    export class ColorPalette extends Component {
        colors: any;
        ctype: any;
        constructor(config: ColorPaletteConfig);
        afterRender(): any;
        handleClick(): any;
        initComponent(): any;
        onRender(): any;
        select(): any;
    }
    export interface ComponentConfig extends util.ObservableConfig {
        allowDomMove?: boolean;
        applyTo?: string | Element | HTMLElement;
        autoEl?: any | string;
        autoShow?: boolean;
        bubbleEvents?: boolean;
        clearCls?: string;
        cls?: string;
        contentEl?: string;
        ctCls?: string;
        data?: any;
        disabled?: boolean;
        disabledClass?: string;
        fieldLabel?: string;
        hidden?: boolean;
        hideLabel?: boolean;
        hideMode?: string;
        hideParent?: boolean;
        html?: string;
        id?: string;
        itemCls?: string;
        itemId?: string;
        labelSeparator?: string;
        labelStyle?: string;
        overCls?: string;
        plugins?: any | any[];
        ptype?: string;
        ref?: string;
        renderTo?: string;
        stateEvents?: string[];
        stateId?: string;
        stateful?: boolean;
        style?: any | string;
        tpl?: string;
        tplWriteMode?: string;
        xtype?: string;
    }
    export class Component extends util.Observable {
        /**
         * True if this component is disabled. Read-only.
         */
        disabled: boolean;
        /**
         * <p>The {@link Ext.Element} which encapsulates this Component. Read-only.</p>
         * <p>This will <i>usually</i> be a &lt;DIV> element created by the class's onRender method, but
         * that may be overridden using the <code>{@link #autoEl}</code> config.</p>
         * <br><p><b>Note</b>: this element will not be available until this Component has been rendered.</p><br>
         * <p>To add listeners for <b>DOM events</b> to this Component (as opposed to listeners
         * for this Component's own Observable events), see the {@link Ext.util.Observable#listeners listeners}
         * config for a suggestion, or use a render listener directly:</p><pre><code>
    new Ext.Panel({
        title: 'The Clickable Panel',
        listeners: {
            render: function(p) {
                // Append the Panel to the click handler&#39;s argument list.
                p.getEl().on('click', handlePanelClick.createDelegate(null, [p], true));
            },
            single: true  // Remove the listener after first invocation
        }
    });
    </code></pre>
        * <p>See also <tt>{@link #getEl getEl}</tt></p>
        */
        el: Element;
        /**
         * This Component's initial configuration specification. Read-only.
         */
        initialConfig: ComponentConfig;
        /**
         * The ancestor Container into which the {@link #ref} reference was inserted if this Component
         * is a child of a Container, and has been configured with a <code>ref</code>.
         */
        refOwner: any;
        /**
         * True if this component has been rendered. Read-only.
         */
        rendered: boolean;
        /**
         * True if this component is hidden. Read-only.
         */
        hidden: boolean;
        /**
         * This Component's owner {@link Ext.Container Container} (defaults to undefined, and is set automatically when
         * this Component is added to a Container).  Read-only.
         * <p><b>Note</b>: to access items within the Container see <tt>{@link #itemId}</tt>.</p>
         */
        ownerCt: Container;
        plugins: any[] | any;
        /**
         * <p>Base class for all Ext components.  All subclasses of Component may participate in the automated
         * Ext component lifecycle of creation, rendering and destruction which is provided by the {@link Ext.Container Container} class.
         * Components may be added to a Container through the {@link Ext.Container#items items} config option at the time the Container is created,
         * or they may be added dynamically via the {@link Ext.Container#add add} method.</p>
         * <p>The Component base class has built-in support for basic hide/show and enable/disable behavior.</p>
         * <p>All Components are registered with the {@link Ext.ComponentMgr} on construction so that they can be referenced at any time via
         * {@link Ext#getCmp}, passing the {@link #id}.</p>
         * <p>All user-developed visual widgets that are required to participate in automated lifecycle and size management should subclass Component (or
         * {@link Ext.BoxComponent} if managed box model handling is required, ie height and width management).</p>
         * <p>See the <a href="http://extjs.com/learn/Tutorial:Creating_new_UI_controls">Creating new UI controls</a> tutorial for details on how
         * and to either extend or augment ExtJs base classes to create custom Components.</p>
         * <p>Every component has a specific xtype, which is its Ext-specific type name, along with methods for checking the
         * xtype like {@link #getXType} and {@link #isXType}. This is the list of all valid xtypes:</p>
         * <pre>
        xtype            Class
        -------------    ------------------
        box              {@link Ext.BoxComponent}
        button           {@link Ext.Button}
        buttongroup      {@link Ext.ButtonGroup}
        colorpalette     {@link Ext.ColorPalette}
        component        {@link Ext.Component}
        container        {@link Ext.Container}
        cycle            {@link Ext.CycleButton}
        dataview         {@link Ext.DataView}
        datepicker       {@link Ext.DatePicker}
        editor           {@link Ext.Editor}
        editorgrid       {@link Ext.grid.EditorGridPanel}
        flash            {@link Ext.FlashComponent}
        grid             {@link Ext.grid.GridPanel}
        listview         {@link Ext.ListView}
        multislider      {@link Ext.slider.MultiSlider}
        panel            {@link Ext.Panel}
        progress         {@link Ext.ProgressBar}
        propertygrid     {@link Ext.grid.PropertyGrid}
        slider           {@link Ext.slider.SingleSlider}
        spacer           {@link Ext.Spacer}
        splitbutton      {@link Ext.SplitButton}
        tabpanel         {@link Ext.TabPanel}
        treepanel        {@link Ext.tree.TreePanel}
        viewport         {@link Ext.ViewPort}
        window           {@link Ext.Window}
        Toolbar components
        ---------------------------------------
        paging           {@link Ext.PagingToolbar}
        toolbar          {@link Ext.Toolbar}
        tbbutton         {@link Ext.Toolbar.Button}        (deprecated; use button)
        tbfill           {@link Ext.Toolbar.Fill}
        tbitem           {@link Ext.Toolbar.Item}
        tbseparator      {@link Ext.Toolbar.Separator}
        tbspacer         {@link Ext.Toolbar.Spacer}
        tbsplit          {@link Ext.Toolbar.SplitButton}   (deprecated; use splitbutton)
        tbtext           {@link Ext.Toolbar.TextItem}
        Menu components
        ---------------------------------------
        menu             {@link Ext.menu.Menu}
        colormenu        {@link Ext.menu.ColorMenu}
        datemenu         {@link Ext.menu.DateMenu}
        menubaseitem     {@link Ext.menu.BaseItem}
        menucheckitem    {@link Ext.menu.CheckItem}
        menuitem         {@link Ext.menu.Item}
        menuseparator    {@link Ext.menu.Separator}
        menutextitem     {@link Ext.menu.TextItem}
        Form components
        ---------------------------------------
        form             {@link Ext.form.FormPanel}
        checkbox         {@link Ext.form.Checkbox}
        checkboxgroup    {@link Ext.form.CheckboxGroup}
        combo            {@link Ext.form.ComboBox}
        compositefield   {@link Ext.form.CompositeField}
        datefield        {@link Ext.form.DateField}
        displayfield     {@link Ext.form.DisplayField}
        field            {@link Ext.form.Field}
        fieldset         {@link Ext.form.FieldSet}
        hidden           {@link Ext.form.Hidden}
        htmleditor       {@link Ext.form.HtmlEditor}
        label            {@link Ext.form.Label}
        numberfield      {@link Ext.form.NumberField}
        radio            {@link Ext.form.Radio}
        radiogroup       {@link Ext.form.RadioGroup}
        textarea         {@link Ext.form.TextArea}
        textfield        {@link Ext.form.TextField}
        timefield        {@link Ext.form.TimeField}
        trigger          {@link Ext.form.TriggerField}
        twintrigger      {@link Ext.form.TwinTriggerField}
        Chart components
        ---------------------------------------
        chart            {@link Ext.chart.Chart}
        barchart         {@link Ext.chart.BarChart}
        cartesianchart   {@link Ext.chart.CartesianChart}
        columnchart      {@link Ext.chart.ColumnChart}
        linechart        {@link Ext.chart.LineChart}
        piechart         {@link Ext.chart.PieChart}
        Store xtypes
        ---------------------------------------
        arraystore       {@link Ext.data.ArrayStore}
        directstore      {@link Ext.data.DirectStore}
        groupingstore    {@link Ext.data.GroupingStore}
        jsonstore        {@link Ext.data.JsonStore}
        simplestore      {@link Ext.data.SimpleStore}      (deprecated; use arraystore)
        store            {@link Ext.data.Store}
        xmlstore         {@link Ext.data.XmlStore}
        </pre>
        * <div class="mdetail-params"><ul>
        * <li><b>an element</b> :
        * <p class="sub-desc">it is set as the internal element and its id used as the component id</p></li>
        * <li><b>a string</b> :
        * <p class="sub-desc">it is assumed to be the id of an existing element and is used as the component id</p></li>
        * <li><b>anything else</b> :
        * <p class="sub-desc">it is assumed to be a standard config object and is applied to the component</p></li>
        * </ul></div>
        */
        constructor(config?: ComponentConfig);
        /**
         * Adds a CSS class to the component's underlying element.
         */
        addClass(cls: string): this;
        /**
         * Apply this component to existing markup that is valid. With this function, no call to render() is required.
         */
        applyToMarkup(el: String | HTMLElement): void;
        /**
         * Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of
         * function call will be the scope provided or the current component. The arguments to the function
         * will be the args provided or the current component. If the function returns false at any point,
         * the bubble is stopped.
         */
        bubble(fn: (p: Container, ...args: any[]) => any, scope?: any, args?: any[]): this;
        /**
         * Clone the current component using the original config values passed into this instance by default.
         * An id property can be passed on this object, otherwise one will be generated to avoid duplicates.
         */
        cloneConfig<T extends Ext.ComponentConfig>(overrides: T): this;
        /**
         * Destroys this component by purging any event listeners, removing the component's element from the DOM,
         * removing the component from its {@link Ext.Container} (if applicable) and unregistering it from
         * {@link Ext.ComponentMgr}.  Destruction is generally handled automatically by the framework and this method
         * should usually not need to be called directly.
         *
         */
        destroy(): void;
        /**
         * Disable this component and fire the 'disable' event.
         */
        disable(): this;
        /**
         * Enable this component and fire the 'enable' event.
         */
        enable(): this;
        /**
         * Find a container above this component at any level by a custom function. If the passed function returns
         * true, the container will be returned.
         * @param {Function} fn The custom function to call with the arguments (container, this component).
         * @return {Ext.Container} The first Container for which the custom function returns true
         */
        findParentBy<T extends Ext.Component>(fn: (p: T, sender: T) => any): T;
        /**
         * Find a container above this component at any level by xtype or class
         * @param {String/Ext.Component/Class} xtype The xtype to check for this Component. Note that the the component can either be an instance
         * or a component class:
         * @param {Boolean} shallow (optional) False to check whether this Component is descended from the xtype (this is
         * the default), or true to check whether this Component is directly of the specified xtype.
         * @return {Ext.Container} The first Container which matches the given xtype or class
         */
        findParentByType(xtype: string): any;
        /**
         * Try to focus this component.
         * @param {Boolean} selectText (optional) If applicable, true to also select the text in this component
         * @param {Boolean/Number} delay (optional) Delay the focus this number of milliseconds (true for 10 milliseconds)
         * @return {Ext.Component} this
         */
        focus(selectText?: boolean, delay?: boolean | number): Component;
        /**
         * Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.
         * @return {Ext.Container} the Container which owns this Component.
         */
        getBubbleTarget(): any;
        /**
         * <p>Returns the {@link Ext.Element} which encapsulates this Component.</p>
         * <p>This will <i>usually</i> be a &lt;DIV> element created by the class's onRender method, but
         * that may be overridden using the {@link #autoEl} config.</p>
         * <br><p><b>Note</b>: this element will not be available until this Component has been rendered.</p><br>
         * <p>To add listeners for <b>DOM events</b> to this Component (as opposed to listeners
         * for this Component's own Observable events), see the {@link #listeners} config for a suggestion,
         * or use a render listener directly:</p><pre><code>
        new Ext.Panel({
            title: 'The Clickable Panel',
            listeners: {
                render: function(p) {
                    // Append the Panel to the click handler&#39;s argument list.
                    p.getEl().on('click', handlePanelClick.createDelegate(null, [p], true));
                },
                single: true  // Remove the listener after first invocation
            }
        });
        </code></pre>
         * @return {Ext.Element} The Element which encapsulates this Component.
         */
        getEl(): Element;
        /**
         * Returns the <code>id</code> of this component or automatically generates and
         * returns an <code>id</code> if an <code>id</code> is not defined yet:<pre><code>
         * 'ext-comp-' + (++Ext.Component.AUTO_ID)
         * </code></pre>
         * @return {String} id
         */
        getId(): any;
        /**
         * Returns the <code>{@link #itemId}</code> of this component.  If an
         * <code>{@link #itemId}</code> was not assigned through configuration the
         * <code>id</code> is returned using <code>{@link #getId}</code>.
         * @return {String}
         */
        getItemId(): any;
        /**
         * Gets the xtype for this component as registered with {@link Ext.ComponentMgr}. For a list of all
         * available xtypes, see the {@link Ext.Component} header. Example usage:
         * <pre><code>
        var t = new Ext.form.TextField();
        alert(t.getXType());  // alerts 'textfield'
        </code></pre>
         * @return {String} The xtype
         */
        getXType(): any;
        /**
         * <p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
         * available xtypes, see the {@link Ext.Component} header.</p>
         * <p><b>If using your own subclasses, be aware that a Component must register its own xtype
         * to participate in determination of inherited xtypes.</b></p>
         * <p>Example usage:</p>
         * <pre><code>
        var t = new Ext.form.TextField();
        alert(t.getXTypes());  // alerts 'component/box/field/textfield'
        </code></pre>
         * @return {String} The xtype hierarchy string
         */
        getXTypes(): any;
        /**
         * Hide this component.  Listen to the '{@link #beforehide}' event and return
         * <tt>false</tt> to cancel hiding the component.  Fires the '{@link #hide}'
         * event after hiding the component. Note this method is called internally if
         * the component is configured to be <code>{@link #hidden}</code>.
         * @return {Ext.Component} this
         */
        hide(): this;
        /**
         * @private
         * Method to establish a reference to a component.
         */
        protected initRef(): void;
        /**
         * Returns true if this component is visible.
         * @return {Boolean} True if this component is visible, false otherwise.
         */
        isVisible(): boolean;
        /**
         * <p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended
         * from the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>
         * <p><b>If using your own subclasses, be aware that a Component must register its own xtype
         * to participate in determination of inherited xtypes.</b></p>
         * <p>For a list of all available xtypes, see the {@link Ext.Component} header.</p>
         * <p>Example usage:</p>
         * <pre><code>
    var t = new Ext.form.TextField();
    var isText = t.isXType('textfield');        // true
    var isBoxSubclass = t.isXType('box');       // true, descended from BoxComponent
    var isBoxInstance = t.isXType('box', true); // false, not a direct BoxComponent instance
    </code></pre>
         * @param {String/Ext.Component/Class} xtype The xtype to check for this Component. Note that the the component can either be an instance
         * or a component class:
         * <pre><code>
    var c = new Ext.Component();
    console.log(c.isXType(c));
    console.log(c.isXType(Ext.Component));
    </code></pre>
         * @param {Boolean} shallow (optional) False to check whether this Component is descended from the xtype (this is
         * the default), or true to check whether this Component is directly of the specified xtype.
         * @return {Boolean} True if this component descends from the specified xtype, false otherwise.
         */
        isXType(): any;
        /**
         * <p>Adds listeners to any Observable object (or Elements) which are automatically removed when this Component
         * is destroyed. Usage:</p><code><pre>
    myGridPanel.mon(myGridPanel.getSelectionModel(), 'selectionchange', handleSelectionChange, null, {buffer: 50});
    </pre></code>
         * <p>or:</p><code><pre>
    myGridPanel.mon(myGridPanel.getSelectionModel(), {
        selectionchange: handleSelectionChange,
        buffer: 50
    });
    </pre></code>
         * @param {Observable|Element} item The item to which to add a listener/listeners.
         * @param {Object|String} ename The event name, or an object containing event name properties.
         * @param {Function} fn Optional. If the <code>ename</code> parameter was an event name, this
         * is the handler function.
         * @param {Object} scope Optional. If the <code>ename</code> parameter was an event name, this
         * is the scope (<code>this</code> reference) in which the handler function is executed.
         * @param {Object} opt Optional. If the <code>ename</code> parameter was an event name, this
         * is the {@link Ext.util.Observable#addListener addListener} options.
         */
        mon(): any;
        /**
         * Removes listeners that were added by the {@link #mon} method.
         * @param {Observable|Element} item The item from which to remove a listener/listeners.
         * @param {Object|String} ename The event name, or an object containing event name properties.
         * @param {Function} fn Optional. If the <code>ename</code> parameter was an event name, this
         * is the handler function.
         * @param {Object} scope Optional. If the <code>ename</code> parameter was an event name, this
         * is the scope (<code>this</code> reference) in which the handler function is executed.
         */
        mun(): any;
        /**
         * Returns the next component in the owning container
         * @return Ext.Component
         */
        nextSibling(): any;
        /**
         * @private
         * Method to manage awareness of when components are added to their
         * respective Container, firing an added event.
         * References are established at add time rather than at render time.
         * @param {Ext.Container} container Container which holds the component
         * @param {number} pos Position at which the component was added
         */
        protected onAdded(): any;
        /**
         * @private
         * Method to manage awareness of when components are removed from their
         * respective Container, firing an removed event. References are properly
         * cleaned up after removing a component from its owning container.
         */
        onRemoved(): any;
        // private
        // default function is not really useful
        onRender(ct: Element, position: HTMLElement): void;
        /**
         * Returns the previous component in the owning container
         * @return Ext.Component
         */
        previousSibling(): any;
        /**
         * Removes a CSS class from the component's underlying element.
         * @param {string} cls The CSS class name to remove
         * @return {Ext.Component} this
         */
        removeClass(cls: string): void;
        /**
         * <p>Render this Component into the passed HTML element.</p>
         * <p><b>If you are using a {@link Ext.Container Container} object to house this Component, then
         * do not use the render method.</b></p>
         * <p>A Container's child Components are rendered by that Container's
         * {@link Ext.Container#layout layout} manager when the Container is first rendered.</p>
         * <p>Certain layout managers allow dynamic addition of child components. Those that do
         * include {@link Ext.layout.CardLayout}, {@link Ext.layout.AnchorLayout},
         * {@link Ext.layout.FormLayout}, {@link Ext.layout.TableLayout}.</p>
         * <p>If the Container is already rendered when a new child Component is added, you may need to call
         * the Container's {@link Ext.Container#doLayout doLayout} to refresh the view which causes any
         * unrendered child Components to be rendered. This is required so that you can add multiple
         * child components if needed while only refreshing the layout once.</p>
         * <p>When creating complex UIs, it is important to remember that sizing and positioning
         * of child items is the responsibility of the Container's {@link Ext.Container#layout layout} manager.
         * If you expect child items to be sized in response to user interactions, you must
         * configure the Container with a layout manager which creates and manages the type of layout you
         * have in mind.</p>
         * <p><b>Omitting the Container's {@link Ext.Container#layout layout} config means that a basic
         * layout manager is used which does nothing but render child components sequentially into the
         * Container. No sizing or positioning will be performed in this situation.</b></p>
         * @param {Element/HTMLElement/String} container (optional) The element this Component should be
         * rendered into. If it is being created from existing markup, this should be omitted.
         * @param {String/Number} position (optional) The element ID or DOM node index within the container <b>before</b>
         * which this component will be inserted (defaults to appending to the end of the container)
         */
        render(ct: Element | HTMLElement | String, position?: String | Number): this;
        /**
         * Convenience function for setting disabled/enabled by boolean.
         * @param {Boolean} disabled
         * @return {Ext.Component} this
         */
        setDisabled(disable: boolean): this;
        /**
         * Convenience function to hide or show this component by boolean.
         * @param {Boolean} visible True to show, false to hide
         * @return {Ext.Component} this
         */
        setVisible(visible: boolean): this;
        /**
         * Show this component.  Listen to the '{@link #beforeshow}' event and return
         * <tt>false</tt> to cancel showing the component.  Fires the '{@link #show}'
         * event after showing the component.
         * @return {Ext.Component} this
         */
        show(el?: Element): this;
        /**
         * Update the content area of a component.
         * @param {Mixed} htmlOrData
         * If this component has been configured with a template via the tpl config
         * then it will use this argument as data to populate the template.
         * If this component was not configured with a template, the components
         * content area will be updated via Ext.Element update
         * @param {Boolean} loadScripts
         * (optional) Only legitimate when using the html configuration. Defaults to false
         * @param {Function} callback
         * (optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading
         */
        update(htmlOrData: any, loadScript?: boolean, callback?: Function): void;
    }
    export var ComponentMgr: {
        all: util.MixedCollection<Ext.Component>;
        ptypes: any;
        types: any;
        create(): any;
        createPlugin(): any;
        get(): any;
        isPluginRegistered(): any;
        isRegistered(): any;
        onAvailable(): any;
        register(): any;
        registerPlugin(): any;
        registerType(): any;
        unregister(): any;
    };
    export class CompositeElement extends CompositeElementLite {
        constructor();
        getElement(): any;
        transformElement(): any;
    }
    export class CompositeElementLite extends Element {
        elements: any;
        add(els: HTMLElement[] | CompositeElementLite): CompositeElement;
        clear(): void;
        contains(el: string | HTMLElement | Element): boolean;
        each(fn: (el: Element, c: CompositeElement, idx: number) => void, scope?: any): CompositeElement;
        fill(els: HTMLElement[] | CompositeElementLite): CompositeElement;
        filter(selector: string): CompositeElement;
        filter(selector: (el: Element, idx: number) => void): CompositeElement;
        first(): Element;
        getCount(): number;
        indexOf(el: string | HTMLElement | Element): number;
        item(idx: number): Element;
        last(): Element;
        removeElement(el: any): CompositeElement;
        replaceElement(el: any, replacement: any, domReplace?: boolean): CompositeElement;
    }
    export interface ContainerConfig extends BoxComponentConfig {
        activeItem?: string | number;
        autoDestroy?: boolean;
        bufferResize?: boolean | string;
        defaultType?: string;
        defaults?: any | Function;
        forceLayout?: boolean;
        hideBorders?: boolean;
        // items?: Component[]|ComponentConfig[];
        items?: any[];
        layout?: string | { type: string; padding: string; align: string; };
        layoutConfig?: layout.ContainerLayoutConfig;
        monitorResize?: boolean;
        resizeEvent?: string;
    }
    export class Container extends BoxComponent {
        initialConfig: ContainerConfig;
        constructor(config?: ContainerConfig);
        items: util.MixedCollection<Component>;
        add(comp: ComponentConfig): Component;
        add(comp: Component): Component;
        afterRender(): any;
        applyDefaults(): any;
        beforeDestroy(): any;
        canLayout(): any;
        cascade(): any;
        createComponent(): any;
        doLayout(): any;
        doRemove(): any;
        find(): any;
        findBy(): any;
        findById(): any;
        findByType(): any;
        get(): any;
        getComponent<T extends Component>(id: string): T;
        getComponent<T extends Component>(idx: number): T;
        getComponentId(): any;
        getLayout<T extends layout.ContainerLayout>(): T;
        getLayoutTarget(): any;
        hasLayoutPending(): any;
        initComponent(): any;
        initItems(): any;
        insert(idx: number, comp: Ext.Component): Ext.Component;
        insert(idx: number, comp: Ext.ComponentConfig): Ext.ComponentConfig;
        lookupComponent(): any;
        onAdd(): any;
        onAdded(): any;
        onBeforeAdd(): any;
        onLayout(): any;
        onRemove(): any;
        onShow(): any;
        remove(component: Component, autoDestroy?: boolean): void;
        removeAll(destroy?: boolean): void;
        setLayout(layout: layout.ContainerLayout): any;
        shouldBufferLayout(): any;
    }
    export interface CycleButtonConfig extends SplitButtonConfig {
        changeHandler?: any
        forceIcon?: any
        items?: any
        prependText?: any
        showText?: any
    }
    export class CycleButton extends SplitButton {
        menu: any;
        constructor(config: CycleButtonConfig);
        checkHandler(): any;
        getActiveItem(): any;
        getItemText(): any;
        initComponent(): any;
        setActiveItem(): any;
        toggleSelected(): any;
    }
    export module data {
        export var Api: {
            actions: any;
            restActions: any;
            Error: {
                name: any;
                prototype: Error;
            }
            getVerb(): any;
            hasUniqueUrl(): any;
            isAction(): any;
            isValid(): any;
            prepare(): any;
            restify(): any;
        }
        export interface ArrayReaderConfig extends data.JsonReaderConfig {
            id?: any
            idIndex?: any
        }
        export class ArrayReader extends data.JsonReader {
            constructor(config: ArrayReaderConfig);
            readRecords(): any;
        }
        export interface ArrayStoreConfig extends data.StoreConfig, data.ArrayReaderConfig {
        }
        export class ArrayStore<T> extends data.Store<T> {
            constructor(config: ArrayStoreConfig);
            loadData(): any;
        }
        export interface ConnectionConfig extends util.ObservableConfig {
            defaultHeaders?: any
            extraParams?: any
            method?: any
            timeout?: any
            url?: any
        }
        export interface ConnRequestParams {
            url?: string;
            params?: any;
            method?: string;
            callback?: (options, success, response) => void;
            success?: (response, options) => void;
            failure?: (response, options) => void;
            scope?: any;
            timeout?: number;
            form?: any;
            isUpload?: boolean;
            heades?: any;
            xmlData?: any;
            jsonData?: any;
            disableCaching?: boolean;
        }
        export class Connection extends util.Observable {
            autoAbort: any;
            disableCaching: any;
            disableCachingParam: any;
            constructor(config?: ConnectionConfig);
            abort(): void;
            isLoading(): boolean;
            request(options: ConnRequestParams): void;
        }
        export interface DataProxyConfig extends util.ObservableConfig {
            api?: any
            doRequest?: any
            onRead?: any
            onWrite?: any
            restful?: boolean;
        }
        export class DataProxy extends util.Observable {
            constructor(config?: DataProxyConfig);
            static Error: {
                name: string;
                prototype: Error;
            };
            private buildUrl(): string;
            destroy(): void;
            isApiAction(action: string): boolean;
            load(): any;
            request(): any;
            setApi(config: { read?: any; create?: any; update?: any; destroy?: any }): void;
        }
        export interface DataReaderConfig {
            fields?: FieldConfig[];
            messageProperty?: string;
        }
        export class DataReader {
            Error: {
                name: any;
                prototype: Error;
            };
            meta: any;
            readRecords(data: any): Ext.data.Record<any>[];
            constructor(config?: DataReaderConfig);
            buildExtractors(): any;
            extractData<T>(data: any[], returnRecords: boolean): data.Record<T>[];
            extractData(data: any[], returnRecords?: boolean): any[];
            extractValues(data: any, fields: any[], count: number): any;
            getId(): any;
            getMessage(): any;
            getRoot(): any;
            getSuccess(): any;
            getTotal(): any;
            isData(): any;
            realize<T>(rec: data.Record<T>, data: any): void;
            update<T>(rec: data.Record<T>, data: any): void;
        }
        export interface DataWriterConfig {
            createRecord?: Function;
            destroyRecord?: Function;
            listful?: boolean;
            updateRecord?: Function;
            writeAllFields?: boolean;
        }
        export class DataWriter {
            constructor(config: DataWriterConfig);
            apply(): any;
            render(): any;
            toArray(): any;
            toHash(): any;
        }
        export interface DirectProxyConfig extends data.DataProxyConfig {
            directFn?: Function;
            paramOrder?: string | string[];
            paramsAsHash?: boolean;
        }
        export class DirectProxy extends data.DataProxy {
            doRequest(): any;
            onRead(): any;
            onWrite(): any;
        }
        export interface DirectStoreConfig extends data.StoreConfig, data.DirectProxyConfig, data.JsonReaderConfig {
        }
        export class DirectStore<T> extends data.Store<T> {
            constructor(config: DirectStoreConfig);
            proxy: data.DirectProxy;
            reader: data.JsonReader;
        }
        export interface FieldConfig {
            allowBlank?: boolean;
            convert?: Function;
            dateFormat?: string;
            defaultValue?: any;
            mapping?: string;
            name?: string;
            sortDir?: string;
            sortType?: Function;
            type?: string;
            useNull?: boolean;
        }
        export class Field {
            constructor(config?: FieldConfig);
        }
        export interface GroupingStoreConfig extends data.StoreConfig {
            groupDir?: string;
            groupField?: string;
            groupOnSort?: boolean;
            remoteGroup?: boolean;
        }
        export class GroupingStore<T> extends data.Store<T> {
            constructor(config: GroupingStoreConfig);
            private applyGroupField(): void;
            clearGrouping(): void;
            private getGroupState(): string;
            groupBy(field: string, forceRegroup?: boolean): void;
        }
        export interface HttpProxyConfig extends data.DataProxyConfig {
        }
        export class HttpProxy extends data.DataProxy {
            conn: any;
            constructor(config: HttpProxyConfig);
            createCallback(): any;
            doRequest(): any;
            getConnection(): any;
            onRead(): any;
            onWrite(): any;
            setUrl(): any;
        }
        export interface Error {
            name: any;
        }
        export var Error: {
            prototype: data.Error;
        }
        export interface JsonReaderConfig extends data.DataReaderConfig {
            idProperty?: string;
            root?: string;
            successProperty?: string;
            totalProperty?: string;
        }
        export class JsonReader extends data.DataReader {
            jsonData: any;
            meta: any;
            constructor(config?: JsonReaderConfig, recordType?: any);
            extractValues(): any;
            read(): any;
            readRecords(): any;
            readResponse(): any;
        }
        export interface JsonStoreConfig extends data.StoreConfig, data.JsonReaderConfig {
        }
        export class JsonStore<T> extends data.Store<T> {
            constructor(config?: JsonStoreConfig);
        }
        export interface JsonWriterConfig extends data.DataWriterConfig {
            encode?: any
            encodeDelete?: any
        }
        export class JsonWriter extends data.DataWriter {
            constructor(config?: JsonWriterConfig);
            createRecord(): any;
            destroyRecord(): any;
            render(): any;
            updateRecord(): any;
        }
        export interface MemoryProxyConfig extends data.DataProxyConfig {
        }
        export class MemoryProxy extends data.DataProxy {
            constructor(config?: MemoryProxyConfig);
            doRequest(): any;
        }
        export interface NodeConfig extends util.ObservableConfig {
            id?: any
            leaf?: any
        }
        export class Node extends util.Observable {
            attributes: any;
            childNodes: this[];
            firstChild: this;
            id: any;
            lastChild: this;
            nextSibling: this;
            parentNode: this;
            previousSibling: this;
            constructor(config?: NodeConfig);
            appendChild(node: NodeConfig): this;
            appendChild(node: this): this;
            bubble(fn: (node: this) => any, scope?: any, args?: any[]): void;
            cascade(fn: (node: this) => any, scope?: any, args?: any[]): void;
            clear(): any;
            contains(node: this): boolean;
            destroy(): any;
            eachChild(fn: (node: this) => any, scope?: any, args?: any[]): void;
            findChild(attribute: string, value: any, deep?: boolean): this;
            findChildBy(fn: (node: this) => boolean | any, scope?, deep?: boolean): this;
            getDepth(): number;
            getOwnerTree<T>(): T;
            getPath(): string;
            hasChildNodes(): boolean;
            indexOf(node: this): number;
            insertBefore(node: this, refNode: this): this;
            isAncestor(node: this): boolean;
            isExpandable(): boolean;
            isFirst(): boolean;
            isLast(): boolean;
            isLeaf(): boolean;
            item(idx: number): this;
            onIdChange(): any;
            remove(destroy?: boolean): this;
            removeAll(destroy?: boolean): this;
            removeChild(node: this): this;
            replaceChild(newChild: this, oldChild: this): this;
            setFirstChild(): any;
            setId(id: string): void;
            setLastChild(): void;
            setOwnerTree(): void;
            sort(): any;
            toString(): any;
        }
        export class Record<T> {
            static EDIT: string;
            static REJECT: string;
            static COMMIT: string;
            static id(): number;
            data: T;
            dirty: boolean;
            fields: util.MixedCollection<Field>;
            id: number;
            json: any;
            modified: boolean;
            node: any;
            phantom: boolean;
            store: data.Store<T>;
            static create(fields: FieldConfig[] | string[]): typeof Record;
            constructor(data: any, key?: any);
            beginEdit(): void;
            cancelEdit(): void;
            commit(): void;
            copy(): data.Record<T>;
            endEdit(): void;
            get(field: string): any;
            getChanges(): any;
            isModified(): boolean;
            isValid(): boolean;
            markDirty(): void;
            reject(): void;
            set(field: string, value: any): void;
        }
        export interface RequestConfig {
            action?: any
            callback?: any
            params?: any
            reader?: any
            rs?: any
            scope?: any
        }
        export class Request {
        }
        export interface ResponseConfig {
            action?: any
            data?: any
            message?: any
            raw?: any
            records?: any
            success?: any
        }
        export class Response {
        }
        export interface ScriptTagProxyConfig extends data.DataProxyConfig {
            callbackParam?: any
            nocache?: any
            timeout?: any
            url?: any
        }
        export class ScriptTagProxy extends data.DataProxy {
            constructor(config: ScriptTagProxyConfig);
            abort(): any;
            doRequest(): any;
            onRead(): any;
            onWrite(): any;
        }
        export var SortTypes: {
            stripTagsRE: RegExp;
            asDate(val: any): number;
            asFloat(val: any): number;
            asInt(val: any): number;
            asText(val: any): string;
            asUCString(val: any): string;
            asUCText(val: any): string;
            none(val: any): any;
        }
        export interface StoreConfig extends util.ObservableConfig {
            xtype?: string;
            autoDestroy?: boolean;
            autoLoad?: boolean;
            autoSave?: boolean;
            baseParams?: any;
            batch?: boolean;
            data?: any[];
            defaultParamNames?: {
                start: string;
                limit: string;
                sort: string;
                dir: string;
            };
            paramNames?: {
                start: string;
                limit: string;
                sort: string;
                dir: string;
            };
            proxy?: DataProxy;
            pruneModifiedRecords?: boolean;
            reader?: DataReader;
            remoteSort?: boolean;
            restful?: boolean;
            sortInfo?: any;
            storeId?: string;
            url?: string;
            writer?: DataWriterConfig | DataWriter;
            recordType?: typeof Record;
        }
        export interface ILoadOptions {
            params?: any;
            callback?: (r: data.Record<any>[], opt: any, success: boolean) => void;
            scope?: any;
            add?: boolean
        }
        export class Store<T> extends util.Observable {
            proxy: DataProxy;
            reader: DataReader;
            writer: DataWriter;
            //            data:util.MixedCollection<data.Record>;
            baseParams: any;
            batchKey: string;
            fields: util.MixedCollection<data.Field>;
            hasMultiSort: boolean;
            isDestroyed: boolean;
            lastOptions: any;
            multiSortInfo: {
                sorters: {
                    field: string;
                    direction: string;
                }[];
                direction: string;
            };
            recordType: typeof Record;
            constructor(config?: StoreConfig);
            add(rec: Record<T>): void;
            add(rec: Record<T>[]): void;
            addSorted(rec: Record<T>): void;
            addToBatch(): any;
            afterCommit(): any;
            afterEdit(): any;
            afterReject(): any;
            applySort(): any;
            buildWriter(): any;
            clearData(): any;
            clearFilter(): any;
            clearModified(): any;
            collect(): any;
            commitChanges(): any;
            createCallback(): any;
            createFilterFn(): any;
            createMultipleFilterFn(): any;
            createRecords(): any;
            createSortFunction(): any;
            destroy(): any;
            destroyRecord(): any;
            doTransaction(): any;
            doUpdate(): any;
            each(cb: (rec: Record<T>) => boolean | void, scope?: any): void;
            execute(): any;
            filter(field: string | any[], value?: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean): void;
            filterBy(callback: (rec, id) => any, scope?: any): any;
            find(fieldName: string, value: string, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean): number;
            find(fieldName: string, value: RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean): number;
            findBy(fn: Function, scope?: any, startIndex?: number): number;
            findExact(fieldName: string, value: any, startIndex?: number): number;
            findInsertIndex(): any;
            getAt(idx: number): data.Record<T>;
            getById(id: any): data.Record<T>;
            getCount(): number;
            getModifiedRecords(): data.Record<any>[];
            getRange(start?: number, end?: number): Record<T>[];
            getSortState(): any;
            getTotalCount(): any;
            handleException(): any;
            indexOf(): any;
            indexOfId(): any;
            insert(idx: number, rec: data.Record<T>): any;
            isFiltered(): any;
            load(options?: ILoadOptions): any;
            loadData(data: any, append?: boolean): void;
            loadRecords(o: { records: data.Record<T>[], totalRecords?: number }, options: ILoadOptions, success: boolean): void;
            multiSort(): any;
            onClear(): any;
            onCreateRecords(): any;
            onDestroyRecords(): any;
            onMetaChange(): any;
            onUpdateRecords(): any;
            query(): any;
            queryBy(): any;
            reMap(): any;
            rejectChanges(): any;
            reload(): any;
            remove(rec: Record<any> | Record<any>[]): void;
            removeAll(): void;
            removeAt(idx: number): void;
            removeFromBatch(): any;
            save(): void;
            setBaseParam(param: string, value: any): void;
            setDefaultSort(): any;
            singleSort(): any;
            sort(fieldName: string, dir?: string): void;
            sort(fieldName: { field: string; direction: string; }[], dir?: string): void;
            sortData(): any;
            storeOptions(): any;
            sum(): any;
            updateRecord(): any;
        }
        export interface TreeConfig extends util.ObservableConfig {
            pathSeparator?: any
        }
        export class Tree extends util.Observable {
            root: any;
            constructor(config: TreeConfig);
            getNodeById(id: any): Node;
            getRootNode(): Node;
            proxyNodeEvent(): any;
            registerNode(): any;
            setRootNode(): any;
            toString(): any;
            unregisterNode(): any;
        }
        export interface TypeDef {
            convert: (v: any, record: any) => any;
            sortType: (s: any) => any;
            type: string;
        }
        export var Types: {
            AUTO: TypeDef;
            BOOL: TypeDef;
            BOOLEAN: TypeDef;
            DATE: TypeDef;
            FLOAT: TypeDef;
            INT: TypeDef;
            INTEGER: TypeDef;
            NUMBER: TypeDef;
            STRING: TypeDef;
        }
        export interface XmlReaderConfig extends data.DataReaderConfig {
            idPath?: any
            record?: any
            successProperty?: any
            totalProperty?: any
        }
        export class XmlReader extends data.DataReader {
            xmlData: any;
            constructor(config: XmlReaderConfig);
            read(): any;
            readRecords(): any;
            readResponse(): any;
        }
        export interface XmlStoreConfig extends data.StoreConfig {
        }
        export class XmlStore<T> extends data.Store<T> {
            constructor(config: XmlStoreConfig);
        }
        export interface XmlWriterConfig extends data.DataWriterConfig {
            documentRoot?: any
            forceDocumentRoot?: any
            root?: any
            tpl?: any
            xmlEncoding?: any
            xmlVersion?: any
        }
        export class XmlWriter extends data.DataWriter {
            createRecord(): any;
            destroyRecord(): any;
            render(): any;
            updateRecord(): any;
        }
    }
    export interface DataViewConfig extends BoxComponentConfig {
        blockRefresh?: any
        deferEmptyText?: any
        emptyText?: any
        itemSelector?: any
        loadingText?: any
        multiSelect?: any
        overClass?: any
        selectedClass?: any
        simpleSelect?: any
        singleSelect?: any
        store?: any
        trackOver?: any
    }
    export class DataView extends BoxComponent {
        last: any;
        constructor(config: DataViewConfig);
        afterRender(): any;
        bindStore(): any;
        bufferRender(): any;
        clearSelections(suppressEvent?: boolean): void;
        collectData(): any;
        deselect(): any;
        doMultiSelection(): any;
        doSingleSelection(): any;
        findItemFromChild(): any;
        getNode(): any;
        getNodes(): any;
        getRecord(): any;
        getRecords(): any;
        getSelectedIndexes(): number[];
        getSelectedNodes(): any;
        getSelectedRecords<T>(): data.Record<T>[];
        getSelectionCount(): any;
        getStore<T>(): data.Store<T>;
        getTemplateTarget(): any;
        indexOf(nodeInfo: HTMLElement | string | number | data.Record<any>): number;
        initComponent(): any;
        isSelected(): any;
        onAdd(): any;
        onBeforeLoad(): any;
        onClick(): any;
        onContainerClick(): any;
        onContextMenu(): any;
        onDataChanged(): any;
        onDblClick(): any;
        onDestroy(): any;
        onItemClick(): any;
        onMouseOut(): any;
        onMouseOver(): any;
        onRemove(): any;
        onUpdate(): any;
        prepareData(): any;
        refresh(): any;
        refreshNode(): any;
        select(idx: number): any;
        selectRange(): any;
        setStore(): any;
        updateIndexes(): any;
    }
    export interface DatePickerConfig extends ComponentConfig {
        cancelText?: any
        dayNames?: any
        disabledDates?: any
        disabledDatesRE?: any
        disabledDatesText?: any
        disabledDays?: any
        disabledDaysText?: any
        format?: any
        handler?: any
        maxDate?: any
        maxText?: any
        minDate?: any
        minText?: any
        monthNames?: any
        monthYearText?: any
        nextText?: any
        okText?: any
        prevText?: any
        scope?: any
        showToday?: any
        startDay?: any
        todayText?: any
        todayTip?: any
    }
    export class DatePicker extends Component {
        focusOnSelect: any;
        initHour: any;
        constructor(config: DatePickerConfig);
        beforeDestroy(): any;
        createMonthPicker(): any;
        doDisabled(): any;
        focus(): any;
        getValue(): any;
        handleDateClick(): any;
        handleMouseWheel(): any;
        hideMonthPicker(): any;
        initComponent(): any;
        initDisabledDays(): any;
        onDisable(): any;
        onEnable(): any;
        onMonthClick(): any;
        onMonthDblClick(): any;
        onRender(): any;
        selectMPMonth(): any;
        selectToday(): any;
        setDisabledDates(): any;
        setDisabledDays(): any;
        setMaxDate(): any;
        setMinDate(): any;
        setValue(): any;
        showMonthPicker(): any;
        showNextMonth(): any;
        showNextYear(): any;
        showPrevMonth(): any;
        showPrevYear(): any;
        update(): any;
        updateMPMonth(): any;
        updateMPYear(): any;
    }
    export module dd {
        export class DD extends dd.DragDrop {
            scroll: any;
            constructor();
            alignElWithMouse(): any;
            applyConfig(): any;
            autoOffset(): any;
            autoScroll(): any;
            b4Drag(): any;
            b4MouseDown(): any;
            cachePosition(): any;
            getTargetCoord(): any;
            setDelta(): any;
            setDragElPos(): any;
        }
        export class DDProxy extends dd.DD {
            centerFrame: any;
            resizeFrame: any;
            constructor();
            _resizeProxy(): any;
            createFrame(): any;
            initFrame(): any;
            showFrame(): any;
        }
        export class DDTarget extends dd.DragDrop {
            constructor();
        }
        export class DragDrop {
            __ygDragDrop: any;
            _domRef: any;
            available: any;
            config: any;
            constrainX: any;
            constrainY: any;
            defaultPadding: any;
            dragElId: any;
            groups: any;
            handleElId: any;
            hasOuterHandles: any;
            id: any;
            ignoreSelf: any;
            invalidHandleClasses: any;
            invalidHandleIds: any;
            invalidHandleTypes: any;
            isTarget: any;
            locked: any;
            maintainOffset: any;
            maxX: any;
            maxY: any;
            minX: any;
            minY: any;
            moveOnly: any;
            padding: any;
            primaryButtonOnly: any;
            startPageX: any;
            startPageY: any;
            xTicks: any;
            yTicks: any;
            constructor();
            addInvalidHandleClass(): any;
            addInvalidHandleId(): any;
            addInvalidHandleType(): any;
            addToGroup(): any;
            applyConfig(): any;
            b4Drag(): any;
            b4DragDrop(): any;
            b4DragOut(): any;
            b4DragOver(): any;
            b4EndDrag(): any;
            b4MouseDown(): any;
            b4StartDrag(): any;
            clearConstraints(): any;
            clearTicks(): any;
            constrainTo(): any;
            endDrag(): any;
            getDragEl(): any;
            getEl(): any;
            getTick(): any;
            handleMouseDown(): any;
            handleOnAvailable(): any;
            init(): any;
            initTarget(): any;
            isLocked(): any;
            isValidHandleChild(): any;
            lock(): any;
            onAvailable(): any;
            onDrag(): any;
            onDragDrop(): any;
            onDragEnter(): any;
            onDragOut(): any;
            onDragOver(): any;
            onInvalidDrop(): any;
            onMouseDown(): any;
            onMouseUp(): any;
            removeFromGroup(): any;
            removeInvalidHandleClass(): any;
            removeInvalidHandleId(): any;
            removeInvalidHandleType(): any;
            resetConstraints(): any;
            setDragElId(): any;
            setHandleElId(): any;
            setInitPosition(): any;
            setOuterHandleElId(): any;
            setPadding(): any;
            setStartPosition(): any;
            setXConstraint(): any;
            setXTicks(): any;
            setYConstraint(): any;
            setYTicks(): any;
            startDrag(): any;
            toString(): any;
            unlock(): any;
            unreg(): any;
        }
        export var DragDropMgr: {
            ElementWrapper: {
                _timeoutCount: any;
                css: any;
                el: any;
                id: any;
                _addListeners(): any;
                getPosX(): any;
                getPosY(): any;
                getScroll(): any;
                getScrollLeft(): any;
                getScrollTop(): any;
                getStyle(): any;
                handleWasClicked(): any;
                moveToEl(): any;
                numericSort(): any;
                swapNode(): any;
            };
            INTERSECT: any;
            POINT: any;
            clickPixelThresh: any;
            clickTimeThresh: any;
            clickTimeout: any;
            deltaX: any;
            deltaY: any;
            dragCurrent: any;
            dragOvers: any;
            dragThreshMet: any;
            elementCache: any;
            handleIds: any;
            ids: any;
            initialized: any;
            locationCache: any;
            locked: any;
            mode: any;
            notifyOccluded: any;
            preventDefault: any;
            startX: any;
            startY: any;
            stopPropagation: any;
            useCache: any;
            _execOnAll(): any;
            _onLoad(): any;
            _onResize(): any;
            _onUnload(): any;
            _remove(): any;
            byZIndex(): any;
            fireEvents(): any;
            getBestMatch(): any;
            getCss(): any;
            getDDById(): any;
            getElWrapper(): any;
            getElement(): any;
            getLocation(): any;
            getRelated(): any;
            getZIndex(): any;
            handleMouseDown(): any;
            handleMouseMove(): any;
            handleMouseUp(): any;
            init(): any;
            isDragDrop(): any;
            isHandle(): any;
            isLegalTarget(): any;
            isLocked(): any;
            isOverTarget(): any;
            isTypeOfDD(): any;
            lock(): any;
            refreshCache(): any;
            regDragDrop(): any;
            regHandle(): any;
            removeDDFromGroup(): any;
            startDrag(): any;
            stopDrag(): any;
            stopEvent(): any;
            unlock(): any;
            unregAll(): any;
            verifyEl(): any;
        }
        export interface DragSourceConfig {
            ddGroup?: any
            dropAllowed?: any
            dropNotAllowed?: any
        }
        export class DragSource extends dd.DDProxy {
            constructor(config: DragSourceConfig);
            afterDragDrop(): any;
            afterDragEnter(): any;
            afterDragOut(): any;
            afterDragOver(): any;
            afterInvalidDrop(): any;
            afterValidDrop(): any;
            beforeDragDrop(): any;
            beforeDragEnter(): any;
            beforeDragOut(): any;
            beforeDragOver(): any;
            beforeInvalidDrop(): any;
            getDragData(): any;
            getProxy(): any;
            hideProxy(): any;
            onBeforeDrag(): any;
            onStartDrag(): any;
        }
        export interface DragTrackerConfig extends util.ObservableConfig {
            active?: any
            autoStart?: any
            tolerance?: any
        }
        export class DragTracker extends util.Observable {
            constrainModes: any;
            constructor(config: DragTrackerConfig);
            clearStart(): any;
            destroy(): any;
            getDragCt(): any;
            getDragTarget(): any;
            getOffset(): any;
            getXY(): any;
            initEl(): any;
            onBeforeStart(): any;
            onDrag(): any;
            onEnd(): any;
            onMouseDown(): any;
            onMouseMove(): any;
            onMouseUp(): any;
            onStart(): any;
            stopSelect(): any;
            triggerStart(): any;
        }
        export interface DragZoneConfig extends dd.DragSourceConfig {
            containerScroll?: any
            hlColor?: any
        }
        export class DragZone extends dd.DragSource {
            dragData: any;
            constructor(config: DragZoneConfig);
            afterRepair(): any;
            destroy(): any;
            getDragData(): any;
            getRepairXY(): any;
            onInitDrag(): any;
        }
        export interface DropTargetConfig {
            ddGroup?: any
            dropAllowed?: any
            dropNotAllowed?: any
            overClass?: any
        }
        export class DropTarget extends dd.DDTarget {
            isNotifyTarget: any;
            isTarget: any;
            constructor(config: DropTargetConfig);
            destroy(): any;
            notifyDrop(): any;
            notifyEnter(): any;
            notifyOut(): any;
            notifyOver(): any;
        }
        export interface DropZoneConfig extends dd.DropTargetConfig {
        }
        export class DropZone extends dd.DropTarget {
            constructor(el: Element, config?: DropZoneConfig);
            getTargetFromEvent(): any;
            notifyDrop(): any;
            notifyEnter(): any;
            notifyOut(): any;
            notifyOver(): any;
            onContainerDrop(): any;
            onContainerOver(): any;
            onNodeDrop(): any;
            onNodeEnter(): any;
            onNodeOut(): any;
            onNodeOver(): any;
        }
        export interface PanelProxyConfig {
            insertProxy?: any
        }
        export class PanelProxy {
            constructor(config: PanelProxyConfig);
            getEl(): any;
            getGhost(): any;
            getProxy(): any;
            hide(): any;
            moveProxy(): any;
            repair(): any;
            reset(): any;
            setStatus(): any;
            show(): any;
            stop(): any;
            sync(): any;
            update(): any;
        }
        export var Registry: {
            getHandle(): any;
            getHandleFromEvent(): any;
            getTarget(): any;
            getTargetFromEvent(): any;
            register(): any;
            unregister(): any;
        }
        export var ScrollManager: {
            animDuration: any;
            animate: any;
            ddGroup: any;
            frequency: any;
            hthresh: any;
            increment: any;
            vthresh: any;
            refreshCache(): any;
            register(): any;
            unregister(): any;
        }
        export interface StatusProxyConfig {
            dropAllowed?: any
            dropNotAllowed?: any
        }
        export class StatusProxy {
            constructor(config: StatusProxyConfig);
            getEl(): any;
            getGhost(): any;
            hide(): any;
            repair(): any;
            reset(): any;
            setStatus(): any;
            show(): any;
            stop(): any;
            sync(): any;
            update(): any;
        }
    }
    export module direct {
        export class Direct extends util.Observable {
            eventTypes: any;
            exceptions: any;
            addProvider<T extends direct.Provider>(api: ProviderConfig): T;
            addTransaction(): any;
            createEvent(): any;
            getProvider(): any;
            getTransaction(): any;
            onProviderData(): any;
            removeProvider(): any;
            removeTransaction(): any;
        }
        export interface JsonProviderConfig extends direct.ProviderConfig {
        }
        export class JsonProvider extends direct.Provider {
            getEvents(): any;
            parseResponse(): any;
        }
        export interface PollingProviderConfig extends direct.JsonProviderConfig {
            baseParams?: any;
            interval?: any;
            priority?: any;
            url?: any;
        }
        export class PollingProvider extends direct.JsonProvider {
            constructor(config: PollingProviderConfig);
            connect(): any;
            disconnect(): any;
            isConnected(): any;
            onData(): any;
        }
        export interface ProviderConfig extends util.ObservableConfig {
            id?: any;
            priority?: number;
            type?: string;
        }
        export class Provider extends util.Observable {
            constructor(config: ProviderConfig);
            connect(): any;
            disconnect(): any;
            isConnected(): any;
        }
        export interface RemotingProviderConfig extends direct.JsonProviderConfig {
            actions?: any;
            enableBuffer?: boolean | number;
            enableUrlEncode?: boolean;
            maxRetries?: number;
            namespace?: string | any;
            timeout?: number;
            url?: string;
        }
        export class RemotingProvider extends direct.JsonProvider {
            constructor(config: RemotingProviderConfig);
            combineAndSend(): any;
            connect(): any;
            createMethod(): any;
            disconnect(): any;
            doCall(): any;
            doCallback(): any;
            doForm(): any;
            doSend(): any;
            getCallData(): any;
            getTransaction(): any;
            initAPI(): any;
            isConnected(): any;
            onData(): any;
            processForm(): any;
            queueTransaction(): any;
        }
        export class Transaction {
            constructor();
        }
    }
    export var Direct: direct.Direct;
    export interface IDomConfig {
        tag: string;
        cls?: string;
        html?: string;
        children?: IDomConfig[];
        cn?: IDomConfig[];
        [attr: string]: any;
    }
    export var DomHelper: {
        lastIndex: any;
        useDom: any;
        append(el, o: IDomConfig, returnElement?: boolean): any;
        // append( el, o: IDomConfig, returnElement?: boolean): HTMLElement;
        applyStyles(): any;
        createDom(dom: any): HTMLElement;
        createTemplate(): any;
        insertAfter(): any;
        insertBefore(): any;
        insertFirst(): any;
        insertHtml(): any;
        markup(): any;
        overwrite(): any;
    }
    export var DomQuery: {
        matchers: any;
        operators: any;
        pseudos: any;
        compile(selector: string, ctype?: string): Function;
        filter(els: any[], selector: string, nonMatches: boolean): any[];
        is(el: string | HTMLElement | any[], selector: string): boolean;
        jsSelect(selector: string, root?: Node | string): any[];
        selectNode(selector: string, root?: Node): Element;
        selectNumber(selector: string, root?: Node, defaultValue?: any): number;
        selectValue(selector: string, root?: Node, defaultValue?: boolean): string;
    }
    export interface EditorConfig extends ComponentConfig {
        alignment?: any
        allowBlur?: any
        autoSize?: any
        cancelOnEsc?: any
        completeOnEnter?: any
        constrain?: any
        field?: any
        hideEl?: any
        ignoreNoChange?: any
        offsets?: any
        revertInvalid?: any
        shadow?: any
        swallowKeys?: any
        updateEl?: any
        value?: any
    }
    export class Editor extends Component {
        constructor(config: EditorConfig);
        cancelEdit(): any;
        completeEdit(): any;
        getValue(): any;
        realign(): any;
        setSize(): any;
        setValue(): any;
        startEdit(): any;
    }
    export class Element {
        static VISIBILITY: string;
        static DISPLAY: string;
        autoBoxAdjust: any;
        defaultUnit: any;
        dom: HTMLElement;
        id: any;
        originalDisplay: any;
        addListener(event: string, cb: Function, scope?, options?): Element;
        removeListener(event: string, cb: Function, scope?): Element;
        on(event: string, cb: Function, scope?, options?): Element;
        un(event: string, cb: Function, scope?): Element;
        constructor();
        addClass(cls: string): any;
        addClassOnClick(cls: string): any;
        addClassOnFocus(cls: string): any;
        addClassOnOver(cls: string): any;
        addKeyListener(): any;
        addKeyMap(): any;
        private addUnits(): any;
        alignTo(el: Ext.Element, pos: string, offsets?: number[], animate?: any): this;
        anchorTo(el: Ext.Element, pos: string, offsets?: number[], animate?: any, monitorScroll?: boolean | number, callback?: Function): this;
        animate(): any;
        appendChild(el: any): any;
        appendTo(): any;
        applyStyles(): any;
        blur(): any;
        boxWrap(): any;
        center(): any;
        child(): any;
        clean(): any;
        clearOpacity(): any;
        clearPositioning(): any;
        clip(): any;
        contains(el: string | HTMLElement | Element): boolean;
        createChild(data: any): Element;
        createProxy(): any;
        createShim(): any;
        down(): any;
        enableDisplayMode(): any;
        findParent(): any;
        findParentNode(): any;
        first(): Element;
        fly(): any;
        focus(): any;
        getAlignToXY(): any;
        getAnchorXY(): any;
        getAttribute(): any;
        getAttributeNS(): any;
        getBorderWidth(): any;
        getBottom(): any;
        getBox(): any;
        getCenterXY(): any;
        getColor(): any;
        getComputedHeight(): any;
        getComputedWidth(): any;
        getFrameWidth(): any;
        getHeight(contentWidth?: boolean): number;
        getLeft(): any;
        getMargins(): any;
        getOffsetsTo(): any;
        getPadding(): any;
        getPositioning(): any;
        getRegion(): any;
        getRight(): any;
        getScroll(): any;
        getSize(): any;
        getStyle(): any;
        getStyleSize(): any;
        getStyles(): any;
        getTextWidth(): any;
        getTop(): any;
        getUpdater(): any;
        getValue(): any;
        getViewSize(): any;
        getWidth(contentWidth?: boolean): number;
        getX(): any;
        getXY(): any;
        getY(): any;
        hasClass(cls: string): boolean;
        hasMetrics(): any;
        hide(anim?: boolean): Element;
        hover(overFn: Function, outFn: Function, scope?, options?): Element;
        initDD(): any;
        initDDProxy(): any;
        initDDTarget(): any;
        insertAfter(): any;
        insertBefore(): any;
        insertFirst(): any;
        insertHtml(): any;
        insertSibling(): any;
        is(): any;
        isBorderBox(): any;
        isDisplayed(): any;
        isMasked(): any;
        isScrollable(): any;
        isVisible(): any;
        last(): any;
        load(): any;
        mask(): any;
        move(): any;
        moveTo(): any;
        next(): any;
        parent(selector?: string, returnDom?: boolean): Element;
        position(): any;
        prev(selector?: string, returnDom?: boolean): Element;
        purgeAllListeners(): any;
        query(): any;
        radioClass(): any;
        relayEvent(): any;
        remove(): any;
        removeAllListeners(): any;
        removeAnchor(): any;
        removeClass(clsname: string): this;
        repaint(): any;
        replace(): any;
        replaceClass(): any;
        replaceWith(): any;
        scroll(): any;
        scrollIntoView(): any;
        scrollTo(): any;
        select(selector: string): CompositeElement;
        set(): any;
        setBottom(): any;
        setBounds(): any;
        setBox(box: any, animation?: boolean): this;
        setDisplayed(): any;
        setHeight(): any;
        setLeft(): any;
        setLeftTop(): any;
        setLocation(): any;
        setOpacity(): any;
        setPositioning(): any;
        setRegion(): any;
        setRight(): any;
        setSize(size: any): any;
        setStyle(): any;
        setTop(): any;
        setVisibilityMode(mode: string): Element;
        setVisible(): any;
        setWidth(): any;
        setX(): any;
        setXY(): any;
        setY(): any;
        show(anim?: boolean): Element;
        swallowEvent(): any;
        toggle(anim?: boolean): Element;
        toggleClass(cls: string): Element;
        translatePoints(): any;
        unclip(): any;
        unmask(): any;
        unselectable(): any;
        up(): Element;
        update(): any;
        wrap(): any;
    }
    interface Error {
        getMessage(): any;
        getName(): any;
        toJson(): any;
    }
    export var Error: {
        new(): Error;
        prototype: Error;
    }
    export var EventManager: {
        A: any;
        ALT: any;
        B: any;
        BACKSPACE: any;
        C: any;
        CAPS_LOCK: any;
        CONTEXT_MENU: any;
        CTRL: any;
        D: any;
        DELETE: any;
        DOWN: any;
        E: any;
        EIGHT: any;
        END: any;
        ENTER: any;
        ESC: any;
        F: any;
        F1: any;
        F10: any;
        F11: any;
        F12: any;
        F2: any;
        F3: any;
        F4: any;
        F5: any;
        F6: any;
        F7: any;
        F8: any;
        F9: any;
        FIVE: any;
        FOUR: any;
        G: any;
        H: any;
        HOME: any;
        I: any;
        INSERT: any;
        J: any;
        K: any;
        L: any;
        LEFT: any;
        M: any;
        N: any;
        NINE: any;
        NUM_CENTER: any;
        NUM_DIVISION: any;
        NUM_EIGHT: any;
        NUM_FIVE: any;
        NUM_FOUR: any;
        NUM_MINUS: any;
        NUM_MULTIPLY: any;
        NUM_NINE: any;
        NUM_ONE: any;
        NUM_PERIOD: any;
        NUM_PLUS: any;
        NUM_SEVEN: any;
        NUM_SIX: any;
        NUM_THREE: any;
        NUM_TWO: any;
        NUM_ZERO: any;
        O: any;
        ONE: any;
        P: any;
        PAGE_DOWN: any;
        PAGE_UP: any;
        PAUSE: any;
        PRINT_SCREEN: any;
        Q: any;
        R: any;
        RETURN: any;
        RIGHT: any;
        S: any;
        SEVEN: any;
        SHIFT: any;
        SIX: any;
        SPACE: any;
        T: any;
        TAB: any;
        THREE: any;
        TWO: any;
        U: any;
        UP: any;
        V: any;
        W: any;
        X: any;
        Y: any;
        Z: any;
        ZERO: any;
        fireDocReady: any;
        ieDeferSrc: any;
        textResizeInterval: any;
        addListener(): any;
        checkReadyState(): any;
        hasModifier(): any;
        isNavKeyPress(): any;
        on(): any;
        onDocumentReady(): any;
        onTextResize(): any;
        onWindowResize(): any;
        removeAll(): any;
        removeListener(): any;
        removeResizeListener(): any;
        un(): any;
    }
    export interface EventObject {
        A: any;
        ALT: any;
        B: any;
        BACKSPACE: any;
        C: any;
        CAPS_LOCK: any;
        CONTEXT_MENU: any;
        CTRL: any;
        D: any;
        DELETE: any;
        DOWN: any;
        E: any;
        EIGHT: any;
        END: any;
        ENTER: any;
        ESC: any;
        F: any;
        F1: any;
        F10: any;
        F11: any;
        F12: any;
        F2: any;
        F3: any;
        F4: any;
        F5: any;
        F6: any;
        F7: any;
        F8: any;
        F9: any;
        FIVE: any;
        FOUR: any;
        G: any;
        H: any;
        HOME: any;
        I: any;
        INSERT: any;
        J: any;
        K: any;
        L: any;
        LEFT: any;
        M: any;
        N: any;
        NINE: any;
        NUM_CENTER: any;
        NUM_DIVISION: any;
        NUM_EIGHT: any;
        NUM_FIVE: any;
        NUM_FOUR: any;
        NUM_MINUS: any;
        NUM_MULTIPLY: any;
        NUM_NINE: any;
        NUM_ONE: any;
        NUM_PERIOD: any;
        NUM_PLUS: any;
        NUM_SEVEN: any;
        NUM_SIX: any;
        NUM_THREE: any;
        NUM_TWO: any;
        NUM_ZERO: any;
        O: any;
        ONE: any;
        P: any;
        PAGE_DOWN: any;
        PAGE_UP: any;
        PAUSE: any;
        PRINT_SCREEN: any;
        Q: any;
        R: any;
        RETURN: any;
        RIGHT: any;
        S: any;
        SEVEN: any;
        SHIFT: any;
        SIX: any;
        SPACE: any;
        T: any;
        TAB: any;
        THREE: any;
        TWO: any;
        U: any;
        UP: any;
        V: any;
        W: any;
        X: any;
        Y: any;
        Z: any;
        ZERO: any;
        getCharCode(): any;
        getKey(): any;
        getPageX(): any;
        getPageY(): any;
        getRelatedTarget(): any;
        getTarget(): HTMLElement;
        getWheelDelta(): any;
        getXY(): number[];
        preventDefault(): void;
        setEvent(): any;
        stopEvent(): any;
        stopPropagation(): any;
        within(): any;
    }
    export interface FlashComponentConfig extends BoxComponentConfig {
        backgroundColor?: any
        expressInstall?: any
        flashParams?: any
        flashVars?: any
        flashVersion?: any
        url?: any
        wmode?: any
    }
    export class FlashComponent extends BoxComponent {
        swfHeight: any;
        swfId: any;
        swfWidth: any;
        constructor(config: FlashComponentConfig);
        beforeDestroy(): any;
        getId(): any;
        getSwfId(): any;
        initComponent(): any;
        initSwf(): any;
        onFlashEvent(): any;
        onRender(): any;
        onSwfReady(): any;
    }
    export module form {
        export interface ActionConfig {
            failure?: any
            method?: any
            params?: any
            reset?: any
            scope?: any
            submitEmptyText?: any
            success?: any
            timeout?: any
            url?: any
            waitMsg?: any
            waitTitle?: any
        }
        export var Action: {
            failureType: any;
            response: any;
            result: any;
            type: any;
            prototype: ActionConfig;
        }
        export interface BasicFormConfig extends util.ObservableConfig {
            api?: any
            baseParams?: any
            errorReader?: any
            fileUpload?: any
            method?: any
            paramOrder?: any
            paramsAsHash?: any
            reader?: any
            standardSubmit?: any
            timeout?: any
            trackResetOnLoad?: any
            url?: any
            waitTitle?: any
        }
        export class BasicForm extends util.Observable {
            activeAction: any;
            items: any;
            waitMsgTarget: any;
            constructor(config: BasicFormConfig);
            add(): any;
            afterAction(): any;
            applyIfToFields(): any;
            applyToFields(): any;
            beforeAction(): any;
            callFieldMethod(): any;
            cleanDestroyed(): any;
            clearInvalid(): any;
            destroy(): any;
            doAction(): any;
            findField(id: string): form.Field;
            getEl(): any;
            getFieldValues<T>(): T;
            getValues<T>(): T;
            initEl(): any;
            isDirty(): any;
            isValid(): any;
            load(): any;
            loadRecord(rec: data.Record<any>): void;
            markInvalid(): any;
            onSubmit(): any;
            remove(): any;
            render(): any;
            reset(): any;
            setValues(values: any): void;
            submit(): any;
            updateRecord(rec: data.Record<any>): void;
        }
        export interface CheckboxConfig extends form.FieldConfig {
            autoCreate?: any
            boxLabel?: any
            checked?: any
            fieldClass?: any
            focusClass?: any
            handler?: any
            inputValue?: any
            scope?: any
        }
        export class Checkbox extends form.Field {
            actionMode: any;
            constructor(config: CheckboxConfig);
            getValue(): any;
            initComponent(): any;
            initEvents(): any;
            initValue(): any;
            onClick(): any;
            onDestroy(): any;
            onRender(): any;
            onResize(): any;
            setValue(val: boolean): void;
        }
        export interface CheckboxGroupConfig extends form.FieldConfig {
            allowBlank?: any
            blankText?: any
            columns?: any
            items?: any
            vertical?: any
        }
        export class CheckboxGroup extends form.Field {
            defaultType: any;
            groupCls: any;
            constructor(config: CheckboxGroupConfig);
            afterRender(): any;
            beforeDestroy(): any;
            doLayout(): any;
            eachItem(): any;
            fireChecked(): any;
            getBox(): any;
            getErrors(): any;
            getValue(): any;
            initComponent(): any;
            initValue(): any;
            isDirty(): any;
            onDisable(): any;
            onEnable(): any;
            onRender(): any;
            onResize(): any;
            onSetValue(): any;
            reset(): any;
            setReadOnly(): any;
            setValue(): any;
            setValueForItem(): any;
        }
        export interface ComboBoxConfig extends form.TriggerFieldConfig {
            allQuery?: any
            autoCreate?: any
            autoSelect?: any
            clearFilterOnReset?: any
            displayField?: any
            forceSelection?: any
            handleHeight?: any
            hiddenId?: any
            hiddenName?: any
            hiddenValue?: any
            itemSelector?: any
            lazyInit?: any
            lazyRender?: any
            listAlign?: any
            listClass?: any
            listEmptyText?: any
            listWidth?: any
            loadingText?: any
            maxHeight?: any
            minChars?: any
            minHeight?: any
            minListWidth?: any
            mode?: any
            pageSize?: any
            queryDelay?: any
            queryParam?: any
            resizable?: any
            selectOnFocus?: any
            selectedClass?: any
            shadow?: any
            store?: any
            submitValue?: any
            title?: any
            transform?: any
            triggerAction?: any
            triggerClass?: any
            typeAhead?: any
            typeAheadDelay?: any
            valueField?: any
            valueNotFoundText?: any
        }
        export class ComboBox extends form.TriggerField {
            defaultAutoCreate: any;
            keyNav: any;
            lastQuery: any;
            view: any;
            constructor(config?: ComboBoxConfig);
            assertValue(): any;
            beforeBlur(): any;
            bindStore<T>(store: data.Store<T>, initial?: boolean): void;
            clearValue(): any;
            collapse(): any;
            collapseIf(): any;
            doQuery(): any;
            doResize(): any;
            expand(): any;
            findRecord(): any;
            fireKey(): any;
            getListParent(): any;
            getName(): any;
            getParams(): any;
            getParentZIndex(): any;
            getStore(): data.Store<any>;
            getValue(): any;
            getZIndex(): any;
            initComponent(): any;
            initEvents(): any;
            initList(): any;
            initQuery(): any;
            initValue(): any;
            isExpanded(): any;
            onBeforeLoad(): any;
            onDestroy(): any;
            onDisable(): any;
            onEnable(): any;
            onKeyUp(): any;
            onLoad(): any;
            onRender(): any;
            onResize(): any;
            onSelect(): any;
            onTriggerClick(): any;
            onTypeAhead(): any;
            onViewClick(): any;
            onViewMove(): any;
            onViewOver(): any;
            postBlur(): any;
            reset(): any;
            restrictHeight(): any;
            select(): any;
            selectByValue(): any;
            selectNext(): any;
            selectPrev(): any;
            validateBlur(): any;
        }
        export interface CompositeFieldConfig extends form.FieldConfig {
            defaults?: any;
            labelConnector?: any;
            items?: any[];
        }
        export class CompositeField extends form.Field {
            combineErrors: any;
            defaultMargins: any;
            fieldErrors: any;
            innerCt: any;
            isComposite: any;
            items: util.MixedCollection<Component>;
            skipLastItemMargin: any;
            constructor(config?: CompositeFieldConfig);
            beforeDestroy(): any;
            buildCombinedErrorMessage(): any;
            buildLabel(): any;
            clearInvalidChildren(): any;
            doLayout(): any;
            eachItem(): any;
            initComponent(): any;
            isDirty(): any;
            onDisable(): any;
            onEnable(): any;
            onFieldClearInvalid(): any;
            onFieldMarkInvalid(): any;
            onRender(): any;
            onResize(): any;
            onShow(): any;
            reset(): any;
            setReadOnly(): any;
            sortErrors(): any;
            updateInvalidMark(): any;
            validateValue(): any;
        }
        export interface DateFieldConfig extends form.TriggerFieldConfig {
            altFormats?: any
            autoCreate?: any
            disabledDates?: any
            disabledDatesText?: any
            disabledDays?: any
            disabledDaysText?: any
            format?: any
            invalidText?: any
            maxText?: any
            maxValue?: any
            minText?: any
            minValue?: any
            showToday?: any
            startDay?: any
            triggerClass?: any
        }
        export class DateField extends form.TriggerField {
            altFormats: string;
            autoCreate: any;
            disabledDates: any;
            disabledDatesText: any;
            disabledDays: any;
            disabledDaysText: any;
            format: any;
            invalidText: any;
            maxText: any;
            maxValue: any;
            minText: any;
            minValue: any;
            showToday: any;
            startDay: any;
            triggerClass: any;
            defaultAutoCreate: any;
            initTime: any;
            initTimeFormat: any;
            constructor(config: DateFieldConfig);
            beforeBlur(): any;
            formatDate(): any;
            getErrors(): any;
            getValue(): Date;
            initComponent(): any;
            initDisabledDays(): any;
            initEvents(): any;
            menuEvents(): any;
            onDestroy(): any;
            onMenuHide(): any;
            onSelect(): any;
            onTriggerClick(): any;
            parseDate(value: string): Date;
            safeParse(): any;
            setDisabledDates(): any;
            setDisabledDays(): any;
            setMaxValue(): any;
            setMinValue(): any;
            setValue(value: string | Date): void;
            validateBlur(): any;
        }
        export interface DisplayFieldConfig extends form.FieldConfig {
            fieldClass?: any
            htmlEncode?: any
        }
        export class DisplayField extends form.Field {
            defaultAutoCreate: any;
            constructor(config: DisplayFieldConfig);
            getName(): any;
            getRawValue(): any;
            getValue(): any;
            initEvents(): any;
            isValid(): any;
            setRawValue(): any;
            setValue(): any;
            validate(): any;
        }
        export interface FieldConfig extends BoxComponentConfig {
            autoCreate?: any;
            fieldClass?: any;
            focusClass?: any;
            inputType?: any;
            invalidClass?: any;
            invalidText?: any;
            msgFx?: any;
            msgTarget?: any;
            name?: any;
            preventMark?: any;
            readOnly?: any;
            submitValue?: any;
            tabIndex?: any;
            validateOnBlur?: any;
            validationDelay?: any;
            validationEvent?: any;
            value?: any;
        }
        export class Field extends BoxComponent {
            autoCreate: any;
            fieldClass: any;
            focusClass: any;
            inputType: any;
            invalidClass: any;
            invalidText: any;
            msgFx: any;
            msgTarget: any;
            name: any;
            preventMark: any;
            readOnly: any;
            submitValue: any;
            tabIndex: any;
            validateOnBlur: any;
            validationDelay: any;
            validationEvent: any;
            value: any;
            hasFocus: any;
            isFormField: any;
            label: any;
            msgDisplay: any;
            originalValue: any;
            startValue: any;
            constructor(config?: FieldConfig);
            afterRender(): any;
            alignErrorEl(): any;
            alignErrorIcon(): any;
            append(): any;
            beforeBlur(): any;
            clearInvalid(): any;
            fireKey(): any;
            getActiveError(): any;
            getErrorCt(): any;
            getErrors(): any;
            getItemCt(): any;
            getMessageHandler(): any;
            getName(): any;
            getRawValue(): any;
            getValue(): any;
            initComponent(): any;
            initEvents(): any;
            initValue(): any;
            isDirty(): any;
            isValid(): any;
            markInvalid(msg?: string): void;
            onBlur(): any;
            onFocus(): any;
            postBlur(): any;
            preFocus(): any;
            processValue(): any;
            reset(): void;
            setActiveError(): any;
            setRawValue(value: string): void;
            setReadOnly(): any;
            setValue(value: any): void;
            unsetActiveError(): any;
            validate(): any;
            //            validateValue():any;
        }
        export interface FieldSetConfig extends PanelConfig {
            animCollapse?: any
            baseCls?: any
            checkboxName?: any
            checkboxToggle?: any
            collapsible?: any
            labelWidth?: any
            layout?: any
        }
        export class FieldSet extends Panel {
            constructor(config: FieldSetConfig);
            onCheckClick(): any;
            onCollapse(): any;
            onExpand(): any;
            onRender(): any;
        }
        export interface FormPanelConfig extends PanelConfig {
            buttons?: any
            formId?: any
            hideLabels?: any
            labelAlign?: any
            labelPad?: any
            labelWidth?: any
            layout?: any
            minButtonWidth?: any
            monitorPoll?: any
            monitorValid?: any
        }
        export class FormPanel extends Panel {
            constructor(config?: FormPanelConfig);
            applySettings(): any;
            beforeDestroy(): any;
            bindHandler(): any;
            createForm(): any;
            getForm(): BasicForm;
            getLayoutTarget(): any;
            initComponent(): any;
            initEvents(): any;
            initFields(): any;
            isField(): any;
            load(): any;
            onAdd(): any;
            onAddEvent(): any;
            onDisable(): any;
            onEnable(): any;
            onRemove(): any;
            onRemoveEvent(): any;
            onRender(): any;
            processAdd(): any;
            processRemove(): any;
            startMonitoring(): any;
            stopMonitoring(): any;
        }
        export interface HiddenConfig extends form.FieldConfig {
            inputType?: any
        }
        export class Hidden extends form.Field {
            shouldLayout: any;
            constructor(config: HiddenConfig);
            clearInvalid(): any;
            initEvents(): any;
            markInvalid(): any;
            onRender(): any;
            setHeight(): any;
            setPagePosition(): any;
            setPosition(): any;
            setSize(): any;
            setWidth(): any;
        }
        export interface HtmlEditorConfig extends form.FieldConfig {
            createLinkText?: any
            defaultLinkValue?: any
            defaultValue?: any
            enableAlignments?: any
            enableColors?: any
            enableFont?: any
            enableFontSize?: any
            enableFormat?: any
            enableLinks?: any
            enableLists?: any
            enableSourceEdit?: any
            fontFamilies?: any
            hideMode?: any
        }
        export class HtmlEditor extends form.Field {
            actionMode: any;
            activated: any;
            buttonTips: any;
            defaultAutoCreate: any;
            defaultFont: any;
            deferHeight: any;
            fixKeys: any;
            iframePad: any;
            initialized: any;
            sourceEditMode: any;
            constructor(config: HtmlEditorConfig);
            adjustFont(): any;
            applyCommand(): any;
            beforeDestroy(): any;
            checkDesignMode(): any;
            cleanHtml(): any;
            createFontOptions(): any;
            createIFrame(): any;
            createLink(): any;
            createToolbar(): any;
            deferFocus(): any;
            disableItems(): any;
            execCmd(): any;
            focus(): any;
            getDesignMode(): any;
            getDoc(): any;
            getDocMarkup(): any;
            getEditorBody(): any;
            getToolbar(): any;
            getValue(): any;
            getWin(): any;
            initComponent(): any;
            initEditor(): any;
            initEvents(): any;
            initFrame(): any;
            insertAtCursor(text: string): void;
            onDisable(): any;
            onEditorEvent(): any;
            onEnable(): any;
            onFirstFocus(): any;
            onFocus(): any;
            onRender(): any;
            onResize(): any;
            pushValue(): any;
            relayBtnCmd(): any;
            relayCmd(): any;
            setDesignMode(): any;
            setReadOnly(): any;
            setValue(val: string): any;
            syncValue(): any;
            toggleSourceEdit(): any;
            updateToolbar(): any;
        }
        export interface LabelConfig extends BoxComponentConfig {
            forId?: any
            text?: any
        }
        export class Label extends BoxComponent {
            constructor(config: LabelConfig);
            onRender(): any;
            setText(): any;
        }
        export interface NumberFieldConfig extends form.TextFieldConfig {
            allowDecimals?: any
            allowNegative?: any
            autoStripChars?: any
            baseChars?: any
            decimalPrecision?: any
            decimalSeparator?: any
            fieldClass?: any
            maxText?: any
            maxValue?: any
            minText?: any
            minValue?: any
            nanText?: any
        }
        export class NumberField extends form.TextField {
            constructor(config: NumberFieldConfig);
            beforeBlur(): any;
            fixPrecision(): any;
            getErrors(): any;
            getValue(): any;
            initEvents(): any;
            parseValue(): any;
            setMaxValue(val: number): void;
            setMinValue(val: number): void;
            setValue(val: number): void;
        }
        export interface RadioConfig extends form.CheckboxConfig {
            inputType?: any
        }
        export class Radio extends form.Checkbox {
            constructor(config: RadioConfig);
            getCheckEl(): any;
            getGroupValue(): any;
            setValue(): any;
        }
        export interface RadioGroupConfig extends form.CheckboxGroupConfig {
            allowBlank?: any
            blankText?: any
            items?: any
        }
        export class RadioGroup extends form.CheckboxGroup {
            defaultType: any;
            groupCls: any;
            constructor(config: RadioGroupConfig);
            bufferChecked(): any;
            fireChecked(): any;
            getValue(): any;
            onDestroy(): any;
            onSetValue(): any;
            setValueForItem(): any;
        }
        export interface SliderFieldConfig extends form.FieldConfig {
            tipText?: any
            useTips?: any
        }
        export class SliderField extends form.Field {
            actionMode: any;
            constructor(config: SliderFieldConfig);
            alignErrorIcon(): any;
            beforeDestroy(): any;
            getValue(): any;
            initComponent(): any;
            initEvents(): any;
            onChange(): any;
            onDisable(): any;
            onEnable(): any;
            onRender(): any;
            onResize(): any;
            setMaxValue(): any;
            setMinValue(): any;
            setValue(): any;
        }
        export interface TextAreaConfig extends form.TextFieldConfig {
            autoCreate?: any
            growMax?: any
            growMin?: any
            preventScrollbars?: any
        }
        export class TextArea extends form.TextField {
            enterIsSpecial: any;
            growAppend: any;
            constructor(config: TextAreaConfig);
            autoSize(): any;
            doAutoSize(): any;
            filterValidation(): any;
            fireKey(): any;
            onDestroy(): any;
            onRender(): any;
        }
        export interface TextFieldConfig extends form.FieldConfig {
            allowBlank?: any
            blankText?: any
            disableKeyFilter?: any
            emptyClass?: any
            emptyText?: any
            enableKeyEvents?: any
            grow?: any
            growMax?: any
            growMin?: any
            maskRe?: any
            maxLength?: any
            maxLengthText?: any
            minLength?: any
            minLengthText?: any
            regex?: any
            regexText?: any
            selectOnFocus?: any
            stripCharsRe?: any
            validator?: any
            vtype?: any
            vtypeText?: any
        }
        export class TextField extends form.Field {
            constructor(config?: TextFieldConfig);
            applyEmptyText(): any;
            autoSize(): any;
            doAutoSize(): any;
            filterKeys(): any;
            filterValidation(): any;
            getErrors(): any;
            initEvents(): any;
            onDestroy(): any;
            onDisable(): any;
            onEnable(): any;
            onKeyDown(): any;
            onKeyPress(): any;
            onKeyUp(): any;
            onKeyUpBuffered(): any;
            onMouseDown(): any;
            postBlur(): any;
            preFocus(): any;
            processValue(): any;
            reset(): any;
            selectText(): any;
        }
        export interface TimeFieldConfig extends form.ComboBoxConfig {
            altFormats?: any
            format?: any
            increment?: any
            invalidText?: any
            maxText?: any
            maxValue?: any
            minText?: any
            minValue?: any
            mode?: any
            triggerAction?: any
            typeAhead?: any
        }
        export class TimeField extends ComboBox {
            formatDate: any;
            initDate: any;
            initDateFormat: any;
            validateValue: any;
            constructor(config: TimeFieldConfig);
            generateStore(): any;
            getValue(): string;
            initComponent(): any;
            parseDate(): any;
            setLimit(): any;
            setMaxValue(): any;
            setMinValue(): any;
            setValue(value: string | Date): void;
        }
        export interface TriggerFieldConfig extends form.TextFieldConfig {
            autoCreate?: any
            editable?: any
            hideTrigger?: any
            readOnly?: any
            triggerClass?: any
            triggerConfig?: any
            wrapFocusClass?: any
        }
        export class TriggerField extends form.TextField {
            actionMode: any;
            defaultTriggerWidth: any;
            deferHeight: any;
            mimicing: any;
            monitorTab: any;
            constructor(config: TriggerFieldConfig);
            afterRender(): any;
            alignErrorIcon(): any;
            beforeBlur(): any;
            checkTab(): any;
            getTriggerWidth(): any;
            getWidth(): any;
            initTrigger(): any;
            mimicBlur(): any;
            onBlur(): any;
            onDestroy(): any;
            onFocus(): any;
            onRender(): any;
            onResize(): any;
            onTriggerClick(e: EventObject): any;
            setEditable(): any;
            setHideTrigger(): any;
            setReadOnly(): any;
            triggerBlur(): any;
            updateEditState(): any;
            validateBlur(): any;
        }
        export interface TwinTriggerFieldConfig extends form.TriggerFieldConfig {
            trigger1Class?: any
            trigger2Class?: any
            triggerConfig?: any
        }
        export class TwinTriggerField extends form.TriggerField {
            triggers: any;
            afterRender(): any;
            getTrigger(): any;
            getTriggerWidth(): any;
            initTrigger(): any;
            onDestroy(): any;
            onTrigger1Click(e: EventObject): any;
            onTrigger2Click(e: EventObject): any;
        }
        export var VTypes: {
            alphaMask: RegExp;
            alphaText: string;
            alphanumMask: RegExp;
            alphanumText: string;
            emailMask: RegExp;
            emailText: string;
            urlText: string;
            alpha(): boolean;
            alphanum(): boolean;
            email(): boolean;
            url(): boolean;
        }
        export class SpinnerField extends NumberField { }
    }
    export interface FxConfig {
        afterCls?: any
        afterStyle?: any;
        block?: any
        callback?: any
        concurrent?: any
        duration?: any
        easing?: any
        endOpacity?: any
        remove?: any
        scope?: any
        stopFx?: any
        useDisplay?: any
    }
    export interface Fx {
        afterFx(): any;
        beforeFx(): any;
        fadeIn(): any;
        fadeOut(): any;
        frame(): any;
        fxUnwrap(): any;
        fxWrap(): any;
        fxanim(): any;
        getFxRestore(): any;
        ghost(): any;
        hasActiveFx(): any;
        hasFxBlock(): any;
        highlight(): any;
        nextFx(): any;
        pause(): any;
        puff(): any;
        queueFx(): any;
        scale(): any;
        sequenceFx(): any;
        shift(): any;
        slideIn(): any;
        slideOut(): any;
        stopFx(): any;
        switchOff(): any;
        switchStatements(): any;
        syncFx(): any;
    }
    export module grid {
        export interface AbstractSelectionModelConfig extends util.ObservableConfig {
        }
        export class AbstractSelectionModel extends util.Observable {
            grid: grid.GridPanel;
            init(grid: grid.GridPanel);
            constructor(config?: AbstractSelectionModelConfig);
            destroy(): any;
            isLocked(): any;
            lock(): any;
            sortLock(): any;
            sortUnLock(): any;
            unlock(): any;
        }
        export interface ActionColumnConfig extends grid.ColumnConfig {
            altText?: any
            getClass?: any
            handler?: any
            icon?: any
            iconCls?: any
            items?: any
            scope?: any
            stopSelection?: any
            tooltip?: any
        }
        export class ActionColumn extends grid.Column {
            actionIdRe: any;
            constructor(config: ActionColumnConfig);
            destroy(): any;
            processEvent(): any;
        }
        export interface BooleanColumnConfig extends grid.ColumnConfig {
            falseText?: any
            trueText?: any
            undefinedText?: any
        }
        export class BooleanColumn extends grid.Column {
            constructor(config: BooleanColumnConfig);
        }
        export interface CellSelectionModelConfig extends grid.AbstractSelectionModelConfig {
        }
        export class CellSelectionModel extends grid.AbstractSelectionModel {
            selection: {
                cell: number[];
                record: data.Record<any>;
            };
            constructor(config?: CellSelectionModelConfig);
            acceptsNav(): any;
            beforeEdit(): any;
            clearSelections(): any;
            getSelectedCell(): number[];
            hasSelection(): boolean;
            isSelectable(): any;
            onEditorKey(): any;
            onRowUpdated(): any;
            onViewChange(): any;
            select(rowIndex: number, colIndex: number, preventViewNotify?: boolean, preventFocus?: boolean, r?: data.Record<any>): void;
        }
        export interface CheckboxSelectionModelConfig extends grid.RowSelectionModelConfig {
            checkOnly?: any
            header?: any
            sortable?: any
            width?: any
        }
        export class CheckboxSelectionModel extends grid.RowSelectionModel {
            dataIndex: any;
            fixed: any;
            hideable: any;
            id: any;
            isColumn: any;
            menuDisabled: any;
            constructor(config?: CheckboxSelectionModelConfig);
            initEvents(): any;
            onEditorSelect(): any;
            onHdMouseDown(): any;
            onMouseDown(): any;
            processEvent(): any;
            renderer(): any;
        }
        export interface ColumnConfig extends util.ObservableConfig {
            align?: string;
            css?: string;
            dataIndex?: string;
            editable?: boolean;
            editor?: form.FieldConfig;
            emptyGroupText?: string;
            fixed?: boolean;
            groupName?: string;
            groupRenderer?: Function | string;
            groupable?: boolean;
            header?: string;
            hidden?: boolean;
            hideable?: boolean;
            id?: any;
            isColumn?: boolean;
            menuDisabled?: boolean;
            renderer?: Function | string;
            resizable?: boolean;
            scope?: any;
            sortable?: boolean;
            tooltip?: string;
            width?: number;
            xtype?: string;
        }
        export class Column extends util.Observable {
            static types: any;
            dataIndex: string;
            renderer: any;
            constructor(config: ColumnConfig);
            destroy(): any;
            getCellEditor(): any;
            getEditor(): any;
            processEvent(): any;
            setEditor(): any;
        }
        export interface ColumnModelConfig extends util.ObservableConfig {
            columns?: any
            defaultSortable?: any
            defaultWidth?: any
            defaults?: any
        }
        export class ColumnModel extends util.Observable {
            config: any;
            constructor(config: ColumnModelConfig);
            destroy(): any;
            findColumnIndex(dataIndex: string): number;
            getCellEditor(): any;
            getColumnAt(idx: number): Column;
            getColumnById(): Column;
            getColumnCount(): number;
            getColumnHeader(): any;
            getColumnId(): any;
            getColumnTooltip(): any;
            getColumnWidth(): any;
            getColumnsBy(cb: Function, scope?: any): any;
            getDataIndex(): any;
            getIndexById(colId: any): number;
            getRenderer(): any;
            getRendererScope(): any;
            getTotalWidth(): any;
            isCellEditable(): any;
            isFixed(): any;
            isHidden(): any;
            isMenuDisabled(): any;
            isResizable(): any;
            isSortable(): any;
            moveColumn(): any;
            setColumnHeader(): any;
            setColumnTooltip(): any;
            setColumnWidth(): any;
            setConfig(cfg: any): void;
            setDataIndex(): any;
            setEditable(colIdx: number, editable: boolean): any;
            setEditor(): any;
            setHidden(colIdx: number, state: boolean): void;
            setRenderer(col: number, renderer: Function): void;
            setState(): any;
        }
        export interface DateColumnConfig extends grid.ColumnConfig {
            format?: any
        }
        export class DateColumn extends grid.Column {
            constructor(config: DateColumnConfig);
        }
        export interface EditorGridPanelConfig extends grid.GridPanelConfig {
            autoEncode?: any
            clicksToEdit?: any
            forceValidation?: any
            selModel?: any
            trackMouseOver?: any
        }
        export class EditorGridPanel extends grid.GridPanel {
            detectEdit: any;
            isEditor: any;
            constructor(config: EditorGridPanelConfig);
            initComponent(): any;
            initEvents(): any;
            onAutoEditClick(): any;
            onCellDblClick(): any;
            onCheckClick(): any;
            onEditComplete(): any;
            onResize(): any;
            postEditValue(): any;
            preEditValue(): any;
            setupCheckbox(): any;
            startEditing(row: number, col: number): any;
            stopEditing(): any;
        }
        export interface GridDragZoneConfig extends dd.DragZoneConfig {
        }
        export class GridDragZone extends dd.DragZone {
            afterRepair(): any;
            getDragData(): any;
            getRepairXY(): any;
            onInitDrag(): any;
        }
        export interface GridPanelConfig extends PanelConfig {
            autoExpandColumn?: string;
            autoExpandMax?: number;
            autoExpandMin?: number;
            cm?: ColumnModel;
            colModel?: ColumnModel;
            columnLines?: any
            columns?: ColumnConfig[]
            ddGroup?: string;
            ddText?: string;
            deferRowRender?: boolean;
            disableSelection?: boolean;
            dragCell?: boolean;
            enableColumnHide?: boolean;
            enableColumnMove?: boolean;
            enableColumnResize?: boolean;
            enableDragDrop?: boolean;
            enableHdMenu?: boolean;
            hideHeaders?: boolean;
            loadMask?: boolean;
            maxHeight?: number;
            minColumnWidth?: number;
            selModel?: AbstractSelectionModel | AbstractSelectionModelConfig;
            sm?: AbstractSelectionModel | AbstractSelectionModelConfig;
            stateEvents?: string[];
            store?: data.Store<any> | string;
            stripeRows?: boolean;
            trackMouseOver?: boolean;
            view?: GridView;
            viewConfig?: GridViewConfig;
        }
        export class GridPanel extends Panel {
            loadMask: LoadMask;
            viewReady: any;
            constructor(config?: GridPanelConfig);
            afterRender(): any;
            applyState(): any;
            getColumnModel(): grid.ColumnModel;
            getDragDropText(): any;
            getGridEl(): any;
            getSelectionModel(): grid.RowSelectionModel;
            getSelectionModel<T extends grid.AbstractSelectionModel>(): T;
            getState(): any;
            getStore<T extends data.Store<any>>(): T;
            getView<T extends grid.GridView>(): T;
            initComponent(): any;
            initEvents(): any;
            initStateEvents(): any;
            onClick(): any;
            onContextMenu(): any;
            onDblClick(): any;
            onDestroy(): any;
            onMouseDown(): any;
            onRender(): any;
            processEvent(): any;
            reconfigure(): any;
            stopEditing(): any;
            walkCells(): any;
        }
        export interface GridViewConfig extends util.ObservableConfig {
            autoFill?: any
            cellSelector?: any
            cellSelectorDepth?: any
            columnsText?: any
            deferEmptyText?: any
            emptyText?: any
            enableRowBody?: any
            forceFit?: any
            headerMenuOpenCls?: any
            headersDisabled?: any
            hideSortIcons?: any
            markDirty?: any
            rowBodySelector?: any
            rowBodySelectorDepth?: any
            rowOverCls?: any
            rowSelector?: any
            rowSelectorDepth?: any
            scrollOffset?: any
            selectedRowClass?: any
            sortAscText?: any
            sortClasses?: any
            sortDescText?: any
        }
        export class GridView extends util.Observable {
            bodyTpl: any;
            borderWidth: any;
            cellTpl: any;
            dragZone: any;
            firstRowCls: any;
            hdCls: any;
            headerTpl: any;
            lastRowCls: any;
            mainBody: any;
            rowClsRe: any;
            tdClass: any;
            hmenu: menu.Menu;
            scroller: Element;
            cellSelector: Element;
            constructor(config?: GridViewConfig);
            addRowClass(): any;
            afterMove(): any;
            afterRender(): any;
            afterRenderUI(): any;
            applyEmptyText(): any;
            autoExpand(): any;
            beforeColMenuShow(): any;
            beforeUpdate(): any;
            bind(): any;
            clearHeaderSortState(): any;
            deleteRows(): any;
            destroy(): any;
            doRender(): any;
            ensureVisible(): any;
            findCell(): any;
            findCellIndex(): any;
            findHeaderCell(): any;
            findHeaderIndex(): any;
            findRow(): any;
            findRowBody(): any;
            findRowIndex(): any;
            fitColumns(): any;
            fly(): any;
            focusCell(): any;
            focusRow(): any;
            getCell(): any;
            getCellIndex(): any;
            getColumnData(): any;
            getColumnId(): any;
            getColumnStyle(): any;
            getColumnTooltip(): any;
            getColumnWidth(): any;
            getEditorParent(): any;
            getGridInnerWidth(): any;
            getHeaderCell(): any;
            getOffsetWidth(): any;
            getPreviousVisible(): any;
            getResolvedXY(): any;
            getRow(): any;
            getRowClass<T>(record: data.Record<T>, idx: number, rowParams: { body: string; bodyStyle: string; tstyle: string }, store: data.Store<T>): string;
            getRows(): any;
            getScrollOffset(): any;
            getScrollState(): any;
            getTotalWidth(): any;
            handleHdDown(): any;
            handleHdMenuClick(): any;
            handleHdMenuClickDefault(): any;
            handleHdMove(): any;
            handleHdOut(): any;
            handleHdOver(): any;
            handleWheel(): any;
            hasRows(): any;
            init(): any;
            initData(): any;
            initElements(): any;
            initEvents(): any;
            initTemplates(): any;
            initUI(): any;
            insertRows(): any;
            isHideableColumn(): any;
            isMenuDisabled(): any;
            layout(): any;
            onAdd(): any;
            onAllColumnWidthsUpdated(): any;
            onCellDeselect(): any;
            onCellSelect(): any;
            onClear(): any;
            onColConfigChange(): any;
            onColWidthChange(): any;
            onColumnHiddenUpdated(): any;
            onColumnMove(): any;
            onColumnSplitterMoved(): any;
            onColumnWidthUpdated(): any;
            onDataChange(): any;
            onDenyColumnHide(): any;
            onHeaderChange(): any;
            onHeaderClick(): any;
            onHiddenChange(): any;
            onLayout(): any;
            onLoad(): any;
            onRemove(): any;
            onRowDeselect(): any;
            onRowOut(): any;
            onRowOver(): any;
            onRowSelect(): any;
            onUpdate(): any;
            processEvent(): any;
            processRows(): any;
            refresh(): any;
            refreshRow(): any;
            removeRow(): any;
            removeRowClass(): any;
            removeRows(): any;
            render(): any;
            renderBody(): any;
            renderHeaders(): any;
            renderRows(): any;
            renderUI(): any;
            resolveCell(): any;
            restoreScroll(): any;
            scrollToTop(): any;
            syncFocusEl(): any;
            syncHeaderScroll(): any;
            syncScroll(): any;
            updateAllColumnWidths(): any;
            updateColumnHidden(): any;
            updateColumnText(): any;
            updateColumnWidth(): any;
            updateHeaderSortState(): any;
            updateHeaderWidth(): any;
            updateHeaders(): any;
            updateSortIcon(): any;
        }
        export interface GroupingViewConfig extends grid.GridViewConfig {
            cancelEditOnToggle?: any
            emptyGroupText?: any
            enableGrouping?: any
            enableGroupingMenu?: any
            enableNoGroups?: any
            groupByText?: any
            groupMode?: any
            groupRenderer?: any
            groupTextTpl?: any
            hideGroupedColumn?: any
            ignoreAdd?: any
            showGroupName?: any
            showGroupsText?: any
            startCollapsed?: any
        }
        export class GroupingView extends grid.GridView {
            constructor(config?: GroupingViewConfig);
            afterRender(): any;
            afterRenderUI(): any;
            beforeMenuShow(): any;
            canGroup(): any;
            collapseAllGroups(): any;
            constructId(): any;
            doGroupEnd(): any;
            doGroupStart(): any;
            doRender(): any;
            expandAllGroups(): any;
            findGroup(): any;
            getGroup(): any;
            getGroupField(): any;
            getGroupId(): any;
            getGroups(): any;
            getPrefix(): any;
            getRows(): any;
            initTemplates(): any;
            onAdd(): any;
            onAllColumnWidthsUpdated(): any;
            onBeforeRowSelect(): any;
            onColumnHiddenUpdated(): any;
            onColumnWidthUpdated(): any;
            onGroupByClick(): any;
            onLayout(): any;
            onRemove(): any;
            onShowGroupsClick(): any;
            processEvent(): any;
            refreshRow(): any;
            renderRows(): any;
            renderUI(): any;
            toggleAllGroups(): any;
            toggleGroup(): any;
            toggleRowIndex(): any;
            updateGroupWidths(): any;
        }
        export interface NumberColumnConfig extends grid.ColumnConfig {
            format?: any
        }
        export class NumberColumn extends grid.Column {
            constructor(config: NumberColumnConfig);
        }
        export interface PivotAxisConfig extends ComponentConfig {
            defaultHeaderWidth?: any
            orientation?: any
            paddingWidth?: any
        }
        export class PivotAxis extends Component {
            buildHeaders(): any;
            getRecordInfo(): any;
            getTuples(): any;
            onRender(): any;
            renderHorizontalRows(): any;
            renderVerticalRows(): any;
            setDimensions(): any;
        }
        export interface PivotGridConfig extends grid.GridPanelConfig {
            aggregator?: any
            leftAxis?: any
            measure?: any
            renderer?: any
            topAxis?: any
        }
        export class PivotGrid extends grid.GridPanel {
            leftAxis: any;
            topAxis: any;
            extractData(): any;
            getAggregator(): any;
            getView(): any;
            initAxes(): any;
            initComponent(): any;
            setAggregator(): any;
            setLeftAxis(): any;
            setMeasure(): any;
            setTopAxis(): any;
        }
        export interface PivotGridViewConfig extends grid.GridViewConfig {
            getCellCls?: any
            title?: any
        }
        export class PivotGridView extends grid.GridView {
            colHeaderCellCls: any;
            headerTitleEl: any;
            rowHeadersEl: any;
            fitColumns(): any;
            getCellIndex(): any;
            getColumnHeaders(): any;
            getGridInnerWidth(): any;
            getRowHeaders(): any;
            getTotalColumnHeaderHeight(): any;
            getTotalRowHeaderWidth(): any;
            initElements(): any;
            initTemplates(): any;
            isMenuDisabled(): any;
            onLayout(): any;
            refresh(): any;
            renderGroupColumnHeaders(): any;
            renderGroupRowHeaders(): any;
            renderHeaders(): any;
            renderRows(): any;
            renderUI(): any;
            resizeAllRows(): any;
            resizeColumnHeaders(): any;
            resizeRowHeaders(): any;
            setTitle(): any;
            updateHeaders(): any;
        }
        export interface PropertyColumnModelConfig extends grid.ColumnModelConfig {
        }
        export class PropertyColumnModel extends grid.ColumnModel {
            dateFormat: any;
            falseText: any;
            nameText: any;
            trueText: any;
            valueText: any;
            constructor(config: PropertyColumnModelConfig);
            destroy(): any;
            destroyEditors(): any;
            getCellEditor(): any;
            getPropertyName(): any;
            getRenderer(): any;
            isCellEditable(): any;
            renderBool(): any;
            renderCell(): any;
            renderDate(): any;
            renderProp(): any;
        }
        export interface PropertyGridConfig extends grid.EditorGridPanelConfig {
            clicksToEdit?: any
            customEditors?: any
            customRenderers?: any
            enableColumnMove?: any
            enableHdMenu?: any
            propertyNames?: any
            source?: any
            stripeRows?: any
            trackMouseOver?: any
            viewConfig?: any
        }
        export class PropertyGrid extends grid.EditorGridPanel {
            constructor(config: PropertyGridConfig);
            getSource(): any;
            removeProperty(prop: string): void;
            setProperty(prop: string, val: any, create?: boolean): void;
            setSource(data: any): void;
        }
        export class PropertyRecord extends data.Record<{ name: string, value: any }> { }
        export class PropertyStore extends util.Observable {
            constructor(grid: Ext.grid.GridPanel, source?: any);
            getProperty(): any;
            getRec(): any;
            getSource(): any;
            isEditableValue(valye: any): boolean;
            onUpdate(): any;
            remove(): any;
            setSource(o: any): any;
            setValue(): any;
        }
        export interface RowNumbererConfig {
            header?: any
            width?: any
        }
        export class RowNumberer {
            dataIndex: any;
            fixed: any;
            hideable: any;
            id: any;
            menuDisabled: any;
            rowspan: any;
            constructor(config: RowNumbererConfig);
            renderer(): any;
        }
        export interface RowSelectionModelConfig extends grid.AbstractSelectionModelConfig {
            moveEditorOnEnter?: any
            singleSelect?: any
        }
        export class RowSelectionModel extends grid.AbstractSelectionModel {
            constructor(config: RowSelectionModelConfig);
            acceptsNav(): any;
            clearSelections(): any;
            deselectRange(): any;
            deselectRow(): any;
            destroy(): any;
            each(): any;
            getCount(): any;
            getSelected(): data.Record<any>;
            getSelected<T>(): data.Record<T>;
            getSelections(): data.Record<any>[];
            getSelections<T>(): data.Record<T>[];
            handleMouseDown(): any;
            hasNext(): any;
            hasPrevious(): any;
            hasSelection(): any;
            initEvents(): any;
            isIdSelected(): any;
            isSelected(): any;
            onEditorKey(): any;
            onEditorSelect(): any;
            onKeyPress(): any;
            onRefresh(): any;
            onRemove(): any;
            onRowUpdated(): any;
            selectAll(): any;
            selectFirstRow(): any;
            selectLastRow(): any;
            selectNext(): any;
            selectPrevious(): any;
            selectRange(): any;
            selectRecords(): any;
            selectRow(row: number, keepExisting?: boolean, preventViewNotify?: boolean): void;
            selectRows(): any;
        }
        export interface TemplateColumnConfig extends grid.ColumnConfig {
            tpl?: any
        }
        export class TemplateColumn extends grid.Column {
        }
        export class GridEditor extends Editor {
            constructor(field: form.Field, config?: EditorConfig);
        }
    }
    export var History: {
        fieldId: any;
        iframeId: any;
        add(): any;
        back(): any;
        forward(): any;
        getToken(): any;
        init(): any;
        prototype: util.Observable;
    }
    export var BLANK_IMAGE_URL: string;
    export var SSL_SECURE_URL: string;
    export var USE_NATIVE_JSON: boolean;
    export var emptyFn: Function;
    export var enableForcedBoxModel: boolean;
    export var enableFx: boolean;
    export var enableGarbageCollector: boolean;
    export var enableListenerCollection: boolean;
    export var enableNestedListenerRemoval: boolean;
    export var isAir: boolean;
    export var isBorderBox: boolean;
    export var isChrome: boolean;
    export var isGecko: boolean;
    export var isGecko2: boolean;
    export var isGecko3: boolean;
    export var isIE: boolean;
    export var isIE10: boolean;
    export var isIE10p: boolean;
    export var isIE6: boolean;
    export var isIE7: boolean;
    export var isIE8: boolean;
    export var isIE9: boolean;
    export var isIE9m: boolean;
    export var isLinux: boolean;
    export var isMac: boolean;
    export var isOpera: boolean;
    export var isReady: boolean;
    export var isSafari: boolean;
    export var isSafari2: boolean;
    export var isSafari3: boolean;
    export var isSafari4: boolean;
    export var isSecure: boolean;
    export var isStrict: boolean;
    export var isWebKit: boolean;
    export var isWindows: boolean;
    export var useShims: boolean;
    export var version: any;
    export var versionDetail: any;
    export function addBehaviors(config: { [name: string]: Function }): void;
    export function apply(dest: any, source: any, defaults?: any): any;
    export function applyIf(dest: any, source: any): any;
    export function clean(arr: any[]): any[];
    export function copyTo(dest: any, source: any, names: string[] | string): any;
    export function create<U extends ComponentConfig, T extends Component>(config: U, defaultType?: string): T;
    export function createDelegate(): Function;
    export function createInterceptor(): any;
    export function createSequence(): any;
    export function decode(value: string): any;
    export function defer(cb: Function, millis: number, scope?: any, args?: any[], appendArgs?: boolean): number;
    export function define(): any;
    export function destroy(): any;
    export function destroyMembers(): any;
    export function each<T>(a: T[], cb: (item: T) => void, scope?: any): void;
    export function encode(value: any): string;
    export function escapeRe(regext: string): string;
    export function extend(superclass: any, override: any): any;
    export function extend(subclass: any, superclass: any, override: any): any;
    export function flatten(): any;
    export function fly(e: string): Element;
    export function fly(e: HTMLElement): Element;
    export function fly(e: any): Element;
    export function get(e: string): Element;
    export function get(e: HTMLElement): Element;
    export function getBody(): Element;
    export function getCmp<T extends Component>(id: string): T;
    export function getDoc(): Element;
    export function getDom<T extends HTMLElement>(el: any): T;
    export function getHead(): Element;
    export function getScrollBarWidth(): number;
    export function handleError(): void;
    export function id(el?: any, prefix?: string): string;
    export function invoke(): any;
    export function isArray(value: any): boolean;
    export function isBoolean(value: any): boolean;
    export function isDate(value: any): boolean;
    export function isDefined(value: any): boolean;
    export function isElement(value: any): boolean;
    export function isEmpty(value: any): boolean;
    export function isFunction(value: any): boolean;
    export function isNumber(value: any): boolean;
    export function isObject(value: any): boolean;
    export function isPrimitive(value: any): boolean;
    export function isString(value: any): boolean;
    export function iterate(data: any, cb: (key: string, val: any, obj: any) => void, scope?: any): void;
    export function max(values: number[]): number;
    export function mean(): any;
    export function min(values: number[]): any;
    export function namespace(namespace: string): any;
    export function ns(namespace: string): any;
    export function num(): any;
    export function onReady(fn: () => void, scope?: any, options?: any): void;
    export function override(cl: any, proto: any): any;
    export function partition(): any;
    export function pluck(arr: any[], prop: string): any[];
    export function preg(ptype: string, cls: any): void;
    export function query(): any;
    export function reg(xtype: string, classConstr: Function): any;
    export function removeNode(el: any): void;
    export function select(selector: string, root?: HTMLElement | string): CompositeElement;
    export function sum(): any;
    export function toArray(): any;
    export function type(): any;
    export function unique(arr: any[]): any[];
    export function urlAppend(url: string, val: string): string;
    export function urlDecode(str: string, overwrite?: boolean): any;
    export function urlEncode(obj: any, prefix?: string): string;
    export function value<T>(value: T, defaultValue: T, allowBlank?: boolean): T;
    export function zip(): any;
    export interface KeyMapConfig {
        key: string | string[];  //A single keycode or an array of keycodes to handle
        shift?: boolean;          //True to handle key only when shift is pressed, False to handle the key only when shift is not pressed (defaults to undefined)
        ctrl?: boolean;          //True to handle key only when ctrl is pressed, False to handle the key only when ctrl is not pressed (defaults to undefined)
        alt?: boolean;          //True to handle key only when alt is pressed, False to handle the key only when alt is not pressed (defaults to undefined)
        handler: Function;
        scope?: any;              //The scope of the callback function
        stopEvent?: boolean;          //True to stop the event from bubbling and prevent the default browser action if the key was handled by the KeyMap (defaults to false)
    }
    export class KeyMap {
        stopEvent: boolean;
        constructor(el: string | Element, config: KeyMapConfig, eventName?: string);
        addBinding(map: KeyMapConfig): void;
        disable(): void;
        enable(): void;
        isEnabled(): boolean;
        on(): void;
        setDisabled(val: boolean): void;
    }
    export interface KeyNavConfig {
        defaultEventAction?: any
        disabled?: any
        forceKeyDown?: any
    }
    export class KeyNav {
        constructor(...confs: any[]);
        destroy(): any;
        disable(): any;
        enable(): any;
        setDisabled(): any;
    }
    export interface LayerConfig {
        cls?: any
        constrain?: any
        dh?: any
        shadow?: any
        shadowOffset?: any
        shim?: any
        useDisplay?: any
        zindex?: any
    }
    export class Layer extends Element {
        constructor(config: LayerConfig);
        setZIndex(): any;
    }
    export module layout {
        export interface AbsoluteLayoutConfig extends layout.AnchorLayoutConfig {
            extraCls?: any
        }
        export class AbsoluteLayout extends layout.AnchorLayout {
            type: any;
            adjustHeightAnchor(): any;
            adjustWidthAnchor(): any;
            onLayout(): any;
        }
        export interface AccordionLayoutConfig extends layout.FitLayoutConfig {
            activeOnTop?: any
            animate?: any
            autoWidth?: any
            collapseFirst?: any
            fill?: any
            hideCollapseTool?: any
            sequence?: any
            titleCollapse?: any
        }
        export class AccordionLayout extends layout.FitLayout {
            type: any;
            beforeExpand(): any;
            onRemove(): any;
            renderItem(): any;
            setActive(): any;
            setActiveItem(): any;
            setItemSize(): any;
        }
        export interface AnchorLayoutConfig extends layout.ContainerLayoutConfig {
            anchor?: any
            defaultAnchor?: any
        }
        export class AnchorLayout extends layout.ContainerLayout {
            monitorResize: any;
            parseAnchorRE: any;
            type: any;
            adjustHeightAnchor(): any;
            adjustWidthAnchor(): any;
            getLayoutTargetSize(): any;
            onLayout(): any;
            setActiveItem(): void;
            parseAnchor(): any;
        }
        export interface AutoLayoutConfig extends layout.ContainerLayoutConfig {
        }
        export class AutoLayout extends layout.ContainerLayout {
            monitorResize: any;
            type: any;
            onLayout(): any;
        }
        export interface BorderLayoutConfig extends layout.ContainerLayoutConfig {
        }
        export class BorderLayout extends layout.ContainerLayout {
            monitorResize: any;
            rendered: any;
            targetCls: any;
            type: any;
            destroy(): any;
            getLayoutTargetSize(): any;
            onLayout(): any;
        }
        //declare module layout.BorderLayout {
        //    export interface RegionConfig {
        //        animFloat?: any
        //        autoHide?: any
        //        cmargins?: any
        //        collapseMode?: any
        //        collapsible?: any
        //        floatable?: any
        //        margins?: any
        //        minHeight?: any
        //        minWidth?: any
        //        split?: any
        //    }
        //    export class Region {
        //        isCollapsed:any;
        //        layout:any;
        //        panel:any;
        //        position:any;
        //
        //        constructor(config:RegionConfig);
        //
        //        getMargins():any;
        //
        //        getMinHeight():any;
        //
        //        getMinWidth():any;
        //
        //        getSize():any;
        //
        //        isVisible():any;
        //
        //        setPanel():any;
        //
        //        slideIn():any;
        //
        //        slideOut():any;
        //    }
        //}
        //declare module layout.BorderLayout {
        //    export interface SplitRegionConfig extends layout.BorderLayout.RegionConfig {
        //        collapsibleSplitTip?: any
        //        splitTip?: any
        //        tickSize?: any
        //        useSplitTips?: any
        //    }
        //    export class SplitRegion extends layout.BorderLayout.Region {
        //        constructor(config:SplitRegionConfig);
        //
        //        getSplitBar():any;
        //    }
        //}
        export interface BoxLayoutConfig extends layout.ContainerLayoutConfig {
            defaultMargins?: any
            extraCls?: any
            padding?: any
        }
        export class BoxLayout extends layout.ContainerLayout {
            childBoxCache: any;
            innerCls: any;
            layoutTargetLastSize: any;
            monitorResize: any;
            pack: any;
            scrollOffset: any;
            targetCls: any;
            type: any;
            constructor(config: BoxLayoutConfig);
            destroy(): any;
            getLayoutTargetSize(): any;
            getVisibleItems(): any;
            handleTargetOverflow(): any;
            isValidParent(): any;
            onLayout(): any;
            renderAll(): any;
            renderItem(): any;
            updateChildBoxes(): any;
            updateInnerCtSize(): any;
        }
        //declare module layout.boxOverflow {
        //    export class HorizontalMenu extends layout.boxOverflow.Menu {
        //        constructor();
        //
        //        handleOverflow():any;
        //    }
        //}
        //declare module layout.boxOverflow {
        //    export class HorizontalScroller extends layout.boxOverflow.Scroller {
        //        atExtremeAfter():any;
        //
        //        createInnerElements():any;
        //
        //        getMaxScrollRight():any;
        //
        //        getScrollPosition():any;
        //
        //        handleOverflow():any;
        //
        //        scrollTo():any;
        //    }
        //}
        //declare module layout.boxOverflow {
        //    export class Menu extends layout.boxOverflow.None {
        //        afterCls:any;
        //        menu:any;
        //        menuItems:any;
        //        menuTrigger:any;
        //        noItemsMenuText:any;
        //
        //        constructor();
        //
        //        addComponentToMenu():any;
        //
        //        beforeMenuShow():any;
        //
        //        clearMenu():any;
        //
        //        clearOverflow():any;
        //
        //        createInnerElements():any;
        //
        //        createMenu():any;
        //
        //        createMenuConfig():any;
        //
        //        destroy():any;
        //
        //        hideTrigger():any;
        //
        //        showTrigger():any;
        //    }
        //}
        //declare module layout.boxOverflow {
        //    export class None {
        //        constructor();
        //
        //        clearOverflow():any;
        //
        //        handleOverflow():any;
        //    }
        //}
        //declare module layout.boxOverflow {
        //    export class Scroller extends layout.boxOverflow.None {
        //        afterCls:any;
        //        afterScroller:any;
        //        afterScrollerCls:any;
        //        animateScroll:any;
        //        beforeCls:any;
        //        beforeScroller:any;
        //        beforeScrollerCls:any;
        //        scrollDuration:any;
        //        scrollIncrement:any;
        //        scrollRepeatInterval:any;
        //        scrollerCls:any;
        //        wheelIncrement:any;
        //
        //        atExtremeBefore():any;
        //
        //        clearOverflow():any;
        //
        //        createScrollers():any;
        //
        //        createWheelListener():any;
        //
        //        destroy():any;
        //
        //        getItem():any;
        //
        //        getItemVisibility():any;
        //
        //        getScrollAnim():any;
        //
        //        handleOverflow():any;
        //
        //        hideScrollers():any;
        //
        //        scrollBy():any;
        //
        //        scrollLeft():any;
        //
        //        scrollRight():any;
        //
        //        scrollToItem():any;
        //
        //        showScrollers():any;
        //
        //        updateScrollButtons():any;
        //    }
        //}
        //declare module layout.boxOverflow {
        //    export class VerticalScroller extends layout.boxOverflow.Scroller {
        //        scrollIncrement:any;
        //        wheelIncrement:any;
        //
        //        atExtremeAfter():any;
        //
        //        createInnerElements():any;
        //
        //        getMaxScrollBottom():any;
        //
        //        getScrollPosition():any;
        //
        //        handleOverflow():any;
        //
        //        scrollTo():any;
        //    }
        //}
        //declare module layout {
        export interface CardLayoutConfig extends layout.FitLayoutConfig {
            deferredRender?: any
            layoutOnCardChange?: any
            renderHidden?: any
        }
        export class CardLayout extends layout.FitLayout {
            type: any;
            renderAll(): any;
            setActiveItem(item: number | string): void;
        }
        //}
        export interface ColumnLayoutConfig extends layout.ContainerLayoutConfig {
            extraCls?: any
        }
        export class ColumnLayout extends layout.ContainerLayout {
            monitorResize: any;
            scrollOffset: any;
            targetCls: any;
            type: any;
            getLayoutTargetSize(): any;
            isValidParent(): any;
            onLayout(): any;
            renderAll(): any;
        }
        export interface ContainerLayoutConfig {
            extraCls?: any
            renderHidden?: any
        }
        export class ContainerLayout {
            activeItem: any;
            fieldTpl: any;
            //            getLayoutTargetSize:any;
            monitorResize: any;
            type: any;
            constructor(config?: ContainerLayoutConfig);
            IEMeasureHack(): any;
            afterRemove(): any;
            configureItem(): any;
            destroy(): any;
            getRenderedItems(): any;
            isValidParent(): any;
            layout(): any;
            onLayout(): any;
            onRemove(): any;
            onResize(): any;
            parseMargins(): any;
            renderAll(): any;
            renderItem(): any;
            runLayout(): any;
            setContainer(): any;
        }
        export interface FitLayoutConfig extends layout.ContainerLayoutConfig {
        }
        export class FitLayout extends layout.ContainerLayout {
            monitorResize: any;
            type: any;
            getLayoutTargetSize(): any;
            onLayout(): any;
            setItemSize(): any;
        }
        export interface FormLayoutConfig extends layout.AnchorLayoutConfig {
            fieldTpl?: any
            labelSeparator?: any
            trackLabels?: any
        }
        export class FormLayout extends layout.AnchorLayout {
            labelStyle: any;
            type: any;
            adjustHeightAnchor(): any;
            adjustWidthAnchor(): any;
            getLabelStyle(): any;
            getTemplateArgs(): any;
            isHide(): any;
            isValidParent(): any;
            onFieldHide(): any;
            onFieldShow(): any;
            onRemove(): any;
            renderItem(): any;
            setContainer(): any;
        }
        export interface HBoxLayoutConfig extends layout.BoxLayoutConfig {
            align?: any
            flex?: any
            pack?: any
        }
        export class HBoxLayout extends layout.BoxLayout {
            type: any;
            calculateChildBoxes(): any;
        }
        export interface MenuLayoutConfig extends layout.ContainerLayoutConfig {
        }
        export class MenuLayout extends layout.ContainerLayout {
            monitorResize: any;
            type: any;
            doAutoSize(): any;
            getItemArgs(): any;
            isValidParent(): any;
            onLayout(): any;
            renderItem(): any;
            setContainer(): any;
        }
        export interface TableLayoutConfig extends layout.ContainerLayoutConfig {
            columns?: any
            tableAttrs?: any
        }
        export class TableLayout extends layout.ContainerLayout {
            monitorResize: any;
            targetCls: any;
            type: any;
            destroy(): any;
            getNextCell(): any;
            getNextNonSpan(): any;
            getRow(): any;
            isValidParent(): any;
            onLayout(): any;
            renderItem(): any;
            setContainer(): any;
        }
        export interface ToolbarLayoutConfig extends layout.ContainerLayoutConfig {
        }
        export class ToolbarLayout extends layout.ContainerLayout {
            hiddenItems: any;
            lastOverflow: any;
            monitorResize: any;
            more: any;
            moreMenu: any;
            noItemsMenuText: any;
            tableHTML: any;
            triggerWidth: any;
            type: any;
            addComponentToMenu(): any;
            beforeMoreShow(): any;
            cleanup(): any;
            clearMenu(): any;
            createMenuConfig(): any;
            destroy(): any;
            fitToSize(): any;
            getItemWidth(): any;
            hideItem(): any;
            initMore(): any;
            insertCell(): any;
            onLayout(): any;
            unhideItem(): any;
        }
        export interface VBoxLayoutConfig extends layout.BoxLayoutConfig {
            align?: any
            flex?: any
            pack?: any
        }
        export class VBoxLayout extends layout.BoxLayout {
            type: any;
            calculateChildBoxes(): any;
        }
    }
    export module list {
        export interface BooleanColumnConfig extends list.ColumnConfig {
            falseText?: any
            trueText?: any
            undefinedText?: any
        }
        export class BooleanColumn extends list.Column {
            constructor(config: BooleanColumnConfig);
        }
        export interface ColumnConfig {
            align?: any
            cls?: any
            dataIndex?: any
            header?: any
            isColumn?: any
            tpl?: any
            width?: any
        }
        export class Column {
        }
        export interface ColumnResizerConfig extends util.ObservableConfig {
            minPct?: any
        }
        export class ColumnResizer extends util.Observable {
            constructor(config: ColumnResizerConfig);
            handleHdMove(): any;
            init(): any;
            initEvents(): any;
            onBeforeStart(): any;
            onDrag(): any;
            onEnd(): any;
            onStart(): any;
            setBoundaries(): any;
        }
        export interface DateColumnConfig extends list.ColumnConfig {
        }
        export class DateColumn extends list.Column {
            format: any;
            constructor(config: DateColumnConfig);
        }
        export interface ListViewConfig extends DataViewConfig {
            columnResize?: any
            columnSort?: any
            columns?: any
            hideHeaders?: any
            internalTpl?: any
            itemSelector?: any
            overClass?: any
            reserveScrollOffset?: any
            scrollOffset?: any
            selectedClass?: any
        }
        export class ListView extends DataView {
            disableHeaders: any;
            maxColumnWidth: any;
            constructor(config: ListViewConfig);
            collectData(): any;
            findHeaderIndex(): any;
            getTemplateTarget(): any;
            initComponent(): any;
            onRender(): any;
            onResize(): any;
            setHdWidths(): any;
            updateIndexes(): any;
            verifyInternalSize(): any;
        }
        export interface NumberColumnConfig extends list.ColumnConfig {
            format?: any
        }
        export class NumberColumn extends list.Column {
            constructor(config: NumberColumnConfig);
        }
        export interface SorterConfig extends util.ObservableConfig {
            sortClasses?: any
        }
        export class Sorter extends util.Observable {
            constructor(config: SorterConfig);
            init(): any;
            initEvents(): any;
            onHdClick(): any;
            updateSortIcon(): any;
            updateSortState(): any;
        }
    }
    export var Loader: {
        load(fileList: string[], cb: Function, scope?: any, preserveOrder?: boolean): void;
        loadFileIndex(): any;
        onFileLoaded(): any;
    }
    export interface LoadMaskConfig {
        msg?: any
        msgCls?: any
        removeMask?: any
        store?: any
    }
    export class LoadMask {
        disabled: any;
        constructor(el: Element, config?: LoadMaskConfig);
        disable(): any;
        enable(): any;
        hide(): any;
        show(): any;
    }
    export module menu {
        export interface BaseItemConfig extends ComponentConfig {
            activeClass?: any
            canActivate?: any
            clickHideDelay?: any
            handler?: any
            hideOnClick?: any
            scope?: any
        }
        export class BaseItem extends Component {
            actionMode: any;
            ctype: any;
            parentMenu: Menu;
            constructor(config: BaseItemConfig);
            activate(): any;
            beforeDestroy(): any;
            deactivate(): any;
            expandMenu(): any;
            handleClick(): any;
            hideMenu(): any;
            initComponent(): any;
            onClick(): any;
            onRender(): any;
            setHandler(): any;
            shouldDeactivate(): any;
        }
        export interface CheckItemConfig extends menu.ItemConfig {
            checked?: any
            group?: any
            groupClass?: any
        }
        export class CheckItem extends menu.Item {
            ctype: any;
            constructor(config: CheckItemConfig);
            checkHandler(): any;
            destroy(): any;
            handleClick(): any;
            initComponent(): any;
            onRender(): any;
            setChecked(): any;
        }
        export interface ColorMenuConfig extends menu.MenuConfig {
            handler?: any
            hideOnClick?: any
            paletteId?: any
            scope?: any
        }
        export class ColorMenu extends menu.Menu {
            palette: any;
            menuHide(): any;
        }
        export interface DateMenuConfig extends menu.MenuConfig {
            handler?: any
            hideOnClick?: any
            pickerId?: any
            scope?: any
        }
        export class DateMenu extends menu.Menu {
            picker: any;
            menuHide(): any;
            onBeforeShow(): any;
            onShow(): any;
        }
        export interface ItemConfig extends menu.BaseItemConfig {
            altText?: any
            canActivate?: any
            href?: any
            hrefTarget?: any
            icon?: any
            iconCls?: any
            menu?: any
            showDelay?: any
            text?: any
        }
        export class Item extends menu.BaseItem {
            ctype: any;
            hideDelay: any;
            menu: Menu;
            constructor(config: ItemConfig);
            activate(): any;
            beforeDestroy(): any;
            deactivate(): any;
            deferExpand(): any;
            deferHide(): any;
            expandMenu(): any;
            getTemplateArgs(): any;
            handleClick(): any;
            hideMenu(): any;
            initComponent(): any;
            onRender(): any;
            setIconClass(): any;
            setText(): any;
            shouldDeactivate(): any;
        }
        export interface MenuConfig extends ContainerConfig {
            allowOtherMenus?: any
            bufferResize?: any
            defaultAlign?: any
            defaultOffsets?: any
            defaultType?: any
            defaults?: any
            enableScrolling?: any
            floating?: any
            hideMode?: any
            ignoreParentClicks?: any
            items?: any
            layout?: any
            maxHeight?: any
            minWidth?: any
            plain?: any
            scrollIncrement?: any
            shadow?: any
            showSeparator?: any
            subMenuAlign?: any
            zIndex?: any
        }
        export class Menu extends Container {
            constructor(config?: MenuConfig);
            allowOtherMenus: any;
            bufferResize: any;
            defaultAlign: any;
            defaultOffsets: any;
            defaultType: any;
            defaults: any;
            enableScrolling: any;
            floating: any;
            hideMode: any;
            ignoreParentClicks: any;
            items: any;
            layout: any;
            maxHeight: any;
            minWidth: any;
            plain: any;
            scrollIncrement: any;
            shadow: any;
            showSeparator: any;
            subMenuAlign: any;
            zIndex: any;
            autoLayout: any;
            hidden: any;
            scrollerHeight: any;
            addElement(): any;
            addItem(): any;
            addMenuItem(conf: any): any;
            addSeparator(): any;
            addText(): any;
            applyDefaults(): any;
            constrainScroll(): any;
            createScrollers(): any;
            deactivateActive(): any;
            doFocus(): any;
            findTargetItem(): any;
            focus(): any;
            getLayoutTarget(): any;
            getMenuItem(): any;
            hide(): any;
            initComponent(): any;
            lookupComponent(): any;
            onClick(): any;
            onDestroy(): any;
            onHide(): any;
            onLayout(): any;
            onMouseOut(): any;
            onMouseOver(): any;
            onRender(): any;
            onScroll(): any;
            onScrollerIn(): any;
            onScrollerOut(): any;
            setActiveItem(): any;
            show(): any;
            showAt(xyPos: number[], parentMenu?: Menu): void;
            tryActivate(): any;
        }
        export var MenuMgr: {
            get(): any;
            hideAll(): any;
        }
        export interface SeparatorConfig extends menu.BaseItemConfig {
            hideOnClick?: any
        }
        export class Separator extends menu.BaseItem {
            constructor(config: SeparatorConfig);
            onRender(): any;
        }
        export interface TextItemConfig extends menu.BaseItemConfig {
            hideOnClick?: any
            text?: any
        }
        export class TextItem extends menu.BaseItem {
            constructor(config: TextItemConfig);
            onRender(): any;
        }
    }
    export interface MessageBox {
        CANCEL: any;
        ERROR: any;
        INFO: any;
        OK: any;
        OKCANCEL: any;
        QUESTION: any;
        WARNING: any;
        YESNO: any;
        YESNOCANCEL: any;
        buttonText: any;
        defaultTextHeight: any;
        maxWidth: any;
        minProgressWidth: any;
        minPromptWidth: any;
        minWidth: any;
        alert(title: string, msg: string, fn?: Function, scope?: any): MessageBox;
        confirm(title: string, msg: string, fn?: Function, scope?: any): MessageBox;
        getDialog(): any;
        hide(): MessageBox;
        isVisible(): any;
        progress(): MessageBox;
        prompt(title: string, msg: string, cb: Function, scope?: any, prm?: number): MessageBox;
        setIcon(name: any): MessageBox;
        show(config: any): MessageBox;
        updateProgress(val: number, progressText?: string, msg?: string): MessageBox;
        updateText(): MessageBox;
        wait(msg: string, title?: string, config?: any): any;
    }
    export var MessageBox: MessageBox;
    export var Msg: MessageBox;
    export interface PagingToolbarConfig extends ToolbarConfig {
        afterPageText?: any
        beforePageText?: any
        displayInfo?: any
        displayMsg?: any
        emptyMsg?: any
        firstText?: any
        lastText?: any
        nextText?: any
        pageSize?: any
        prependButtons?: any
        prevText?: any
        refreshText?: any
        store?: any
    }
    export class PagingToolbar extends Toolbar {
        cursor: any;
        pageSize: any;
        paramNames: any;
        constructor(config?: PagingToolbarConfig);
        bind(): any;
        bindStore(): any;
        changePage(page: number): void;
        doRefresh(): any;
        moveFirst(): any;
        moveLast(): any;
        moveNext(): any;
        movePrevious(): any;
        unbind(): any;
    }
    export interface ToolConfig {
        id: string;
        handler: (event: string, toolEl: Element, panel: Panel, tc: ToolConfig) => void;
        stopEvent?: boolean;
        scope?: any;
        qtip?: string | any;
        hidden?: boolean;
        on?: any;
    }
    export interface PanelConfig extends ContainerConfig {
        animCollapse?: boolean;
        autoHeight?: boolean;
        autoLoad?: any | string | Function;
        baseCls?: string;
        // bbar?: ComponentConfig|ComponentConfig[]|Component[];
        bbar?: any;
        bbarCfg?: any;
        bodyBorder?: boolean;
        bodyCfg?: any;
        bodyCssClass?: string;
        bodyStyle?: any | string;
        border?: boolean;
        buttonAlign?: string;
        // buttons?: ButtonConfig[]|Button[];
        buttons?: any;
        bwrapCfg?: any;
        closable?: boolean;
        collapseFirst?: boolean;
        collapsed?: boolean;
        collapsedCls?: string;
        collapsible?: boolean;
        draggable?: boolean;
        elements?: string;
        // fbar?: ComponentConfig[]|Component[];
        fbar?: any;
        floating?: boolean;
        footer?: boolean;
        footerCfg?: any;
        frame?: boolean;
        header?: boolean;
        headerAsText?: boolean;
        headerCfg?: any;
        hideCollapseTool?: boolean;
        iconCls?: string;
        keys?: KeyMapConfig;
        maskDisabled?: boolean;
        minButtonWidth?: number;
        padding?: number | string;
        preventBodyReset?: boolean;
        resizeEvent?: string;
        shadow?: boolean | string;
        shadowOffset?: number;
        shim?: boolean;
        // tbar?: ComponentConfig[]|Component[];
        tbar?: ToolbarConfig | ComponentConfig[] | any;
        tbarCfg?: any;
        title?: string;
        titleCollapse?: boolean;
        toolTemplate?: Template | XTemplate;
        tools?: ToolConfig[];
        unstyled?: boolean;
    }
    export class Panel extends Container {
        initialConfig: PanelConfig;
        body: Element;
        buttons: Button[];
        bwrap: Element;
        collabsed: boolean;
        dd: dd.DragSource;
        footer: Element;
        header: Element;
        constructor(config?: PanelConfig);
        addButton(config: ButtonConfig): Button;
        addButton(button: Button): Button;
        addTool(): any;
        adjustBodyHeight(): any;
        adjustBodyWidth(): any;
        afterCollapse(): any;
        afterEffect(): any;
        afterExpand(): any;
        afterRender(): any;
        beforeDestroy(): any;
        beforeEffect(): any;
        collapse(animate?: boolean): void;
        createClasses(): any;
        createEffect(): any;
        createElement(): any;
        createFbar(): any;
        createGhost(): any;
        createToolHandler(): any;
        createToolbar(): any;
        doAutoLoad(): any;
        expand(animate?: boolean): void;
        getBottomToolbar(): any;
        getContentTarget(): any;
        getFooterToolbar(): any;
        getFrameHeight(): any;
        getFrameWidth(): any;
        getInnerHeight(): any;
        getInnerWidth(): any;
        getKeyMap(): any;
        getLayoutTarget(): any;
        getTool(): any;
        getToolbarHeight(): any;
        getTopToolbar(): Toolbar;
        getUpdater(): any;
        initComponent(): any;
        initDraggable(): any;
        initEvents(): any;
        load(): any;
        makeFloating(): any;
        onBodyResize(): any;
        onCollapse(): any;
        onDisable(): any;
        onEnable(): any;
        onExpand(): any;
        onHide(): any;
        onLayout(): any;
        onPosition(): any;
        onRender(): any;
        onResize(): any;
        onShow(): any;
        setIconClass(cls: string): void;
        setTitle(title: string): any;
        syncHeight(): any;
        syncShadow(): any;
        toggleCollapse(): any;
    }
    export interface ProgressBarConfig extends BoxComponentConfig {
        animate?: any
        baseCls?: any
        text?: any
        textEl?: any
        value?: any
    }
    export class ProgressBar extends BoxComponent {
        waitTimer: any;
        afterRender(): any;
        clearTimer(): any;
        initComponent(): any;
        isWaiting(): any;
        onDestroy(): any;
        onRender(): any;
        reset(): any;
        setSize(): any;
        syncProgressBar(): any;
        updateProgress(): any;
        updateText(): any;
        wait(): any;
    }
    export interface QuickTipConfig extends ToolTipConfig {
        interceptTitles?: any
        target?: any
    }
    export class QuickTip extends ToolTip {
        tagConfig: any;
        constructor(config: QuickTipConfig);
        cancelShow(): any;
        getTipCfg(): any;
        hide(): any;
        initComponent(): any;
        onTargetOut(): any;
        onTargetOver(): any;
        register(): any;
        showAt(): any;
        unregister(): any;
    }
    export var QuickTips: {
        disable(): any;
        enable(): any;
        getQuickTip(): any;
        init(): any;
        isEnabled(): any;
        register(): any;
        tips(): any;
        unregister(): any;
    }
    export interface ResizableConfig extends util.ObservableConfig {
        adjustments?: any
        animate?: any
        constrainTo?: any
        disableTrackOver?: any
        draggable?: any
        duration?: any
        dynamic?: any
        easing?: any
        enabled?: any
        handleCls?: any
        handles?: any
        height?: any
        heightIncrement?: any
        maxHeight?: any
        maxWidth?: any
        minHeight?: any
        minWidth?: any
        minX?: any
        minY?: any
        multiDirectional?: any
        pinned?: any
        preserveRatio?: any
        resizeChild?: any
        resizeRegion?: any
        transparent?: any
        width?: any
        widthIncrement?: any
        wrap?: any
    }
    export class Resizable extends util.Observable {
        enabled: any;
        proxy: any;
        constructor(config: ResizableConfig);
        constrain(): any;
        destroy(): any;
        getEl(): any;
        getResizeChild(): any;
        handleOut(): any;
        handleOver(): any;
        onMouseDown(): any;
        onMouseMove(): any;
        onMouseUp(): any;
        resizeElement(): any;
        resizeTo(): any;
        snap(): any;
        startSizing(): any;
        syncHandleHeight(): any;
        updateChildSize(): any;
    }
    export interface ShadowConfig {
        mode?: any
        offset?: any
    }
    export class Shadow {
        constructor(config: ShadowConfig);
        hide(): any;
        isVisible(): any;
        realign(): any;
        setZIndex(): any;
        show(): any;
    }
    export module slider {
        export interface MultiSliderConfig extends BoxComponentConfig {
            animate?: any
            clickToChange?: any
            constrainThumbs?: any
            decimalPrecision?: any
            increment?: any
            keyIncrement?: any
            maxValue?: any
            minValue?: any
            value?: any
            vertical?: any
        }
        export class MultiSlider extends BoxComponent {
            clickRange: any;
            thumbs: any;
            topThumbZIndex: any;
            values: any;
            addThumb(): any;
            afterRender(): any;
            beforeDestroy(): any;
            doSnap(): any;
            focus(): any;
            getNearest(): any;
            getRatio(): any;
            getValue(): any;
            getValues(): any;
            initComponent(): any;
            initEvents(): any;
            moveThumb(): any;
            normalizeValue(): any;
            onClickChange(): any;
            onDisable(): any;
            onEnable(): any;
            onKeyDown(): any;
            onMouseDown(): any;
            onRender(): any;
            onResize(): any;
            promoteThumb(): any;
            reverseValue(): any;
            setMaxValue(): any;
            setMinValue(): any;
            setValue(): any;
            syncThumb(): any;
            translateValue(): any;
        }
        export interface SingleSliderConfig extends slider.MultiSliderConfig {
        }
        export class SingleSlider extends slider.MultiSlider {
            constructor(config: SingleSliderConfig);
            getNearest(): any;
            getValue(): any;
            setValue(): any;
            syncThumb(): any;
        }
        export interface ThumbConfig {
            constrain?: any
            slider?: any
        }
        export class Thumb {
            dragging: any;
            slider: any;
            destroy(): any;
            disable(): any;
            enable(): any;
            getNewValue(): any;
            initEvents(): any;
            onBeforeDragStart(): any;
            onDrag(): any;
            onDragEnd(): any;
            onDragStart(): any;
            render(): any;
        }
        export interface TipConfig extends Ext.TipConfig {
            minWidth?: any
        }
        export class Tip extends Ext.Tip {
            offsets: any;
            getText(): any;
            init(): any;
            onSlide(): any;
        }
    }
    export interface SpacerConfig extends BoxComponentConfig {
        autoEl?: any
    }
    export class Spacer extends BoxComponent {
        constructor(config: SpacerConfig);
    }
    //declare module SplitBar {
    //    export class AbsoluteLayoutAdapter extends SplitBar.BasicLayoutAdapter {
    //    }
    //}
    //declare module SplitBar {
    //    export class BasicLayoutAdapter {
    //        getElementSize():any;
    //
    //        setElementSize():any;
    //    }
    //}
    export interface SplitBarConfig extends util.ObservableConfig {
    }
    export class SplitBar extends util.Observable {
        adapter: any;
        animate: any;
        b4StartDrag: any;
        dd: any;
        dragSpecs: any;
        el: any;
        endDrag: any;
        maxSize: any;
        minSize: any;
        orientation: any;
        proxy: any;
        resizingEl: any;
        shim: any;
        tickSize: any;
        useShim: any;
        constructor(config: SplitBarConfig);
        createProxy(): any;
        destroy(): any;
        getAdapter(): any;
        getMaximumSize(): any;
        getMinimumSize(): any;
        onEndProxyDrag(): any;
        setAdapter(): any;
        setCurrentSize(): any;
        setMaximumSize(): any;
        setMinimumSize(): any;
    }
    export interface SplitButtonConfig extends ButtonConfig {
        arrowHandler?: any
        arrowTooltip?: any
    }
    export class SplitButton extends Button {
        arrowSelector: any;
        split: any;
        constructor(config: SplitButtonConfig);
        getMenuClass(): any;
        initComponent(): any;
        isClickOnArrow(): any;
        isMenuTriggerOut(): any;
        isMenuTriggerOver(): any;
        onClick(): any;
        onRender(): any;
        setArrowHandler(): any;
    }
    export module state {
        export interface CookieProviderConfig extends state.ProviderConfig {
            domain?: any
            expires?: any
            path?: any
            secure?: any
        }
        export class CookieProvider extends state.Provider {
            constructor(config: CookieProviderConfig);
            clear(): any;
            clearCookie(): any;
            readCookies(): any;
            set(): any;
            setCookie(): any;
        }
        export var Manager: {
            clear(): any;
            get(): any;
            getProvider(): any;
            set(): any;
            setProvider(provider: Provider): any;
        }
        export interface ProviderConfig extends util.ObservableConfig {
        }
        export class Provider extends util.Observable {
            re: any;
            constructor(config?: ProviderConfig);
            clear(name: string): void;
            decodeValue(data): any;
            encodeValue(data): any;
            get(): any;
            set(name, value): void;
        }
    }
    export var StoreMgr: {
        lookup<T>(store: any): data.Store<T>;
        register(): any;
        unregister(): any;
        prototype: util.MixedCollection<data.Store<any>>;
    }
    export interface TabPanelConfig extends PanelConfig {
        activeTab?: any
        animScroll?: any
        autoTabSelector?: any
        autoTabs?: any
        baseCls?: any
        deferredRender?: any
        elements?: any
        enableTabScroll?: any
        frame?: any
        hideBorders?: any
        itemTpl?: any
        layoutConfig?: any
        layoutOnTabChange?: any
        minTabWidth?: any
        plain?: any
        resizeTabs?: any
        scrollDuration?: any
        scrollIncrement?: any
        scrollRepeatInterval?: any
        tabCls?: any
        tabMargin?: any
        tabPosition?: any
        tabWidth?: any
        wheelIncrement?: any
    }
    export class TabPanel extends Panel {
        idDelimiter: any;
        constructor(config?: TabPanelConfig);
        activate(tabId: string): any;
        activate(tab: Component): any;
        adjustBodyWidth(): any;
        afterRender(): any;
        autoScrollTabs(): any;
        autoSizeTabs(): any;
        beforeDestroy(): any;
        beginUpdate(): any;
        createScrollers(): any;
        delegateUpdates(): any;
        endUpdate(): any;
        findTargets(): any;
        getActiveTab(): any;
        getItem(): any;
        getScrollAnim(): any;
        getScrollArea(): any;
        getScrollIncrement(): any;
        getScrollPos(): any;
        getScrollWidth(): any;
        getTabEl(): any;
        getTemplateArgs(): any;
        hideTabStripItem(item: Panel): void;
        hideTabStripItem(item: string): void;
        hideTabStripItem(item: number): void;
        initComponent(): any;
        initEvents(): any;
        initTab(): any;
        onAdd(): any;
        onBeforeAdd(): any;
        onBeforeShowItem(): any;
        onItemDisabled(): any;
        onItemEnabled(): any;
        onItemIconChanged(): any;
        onItemTitleChanged(): any;
        onRemove(): any;
        onRender(): any;
        onResize(): any;
        onScrollLeft(): any;
        onScrollRight(): any;
        onStripContextMenu(): any;
        onStripMouseDown(): any;
        onWheel(): any;
        readTabs(): any;
        scrollTo(): any;
        scrollToTab(): any;
        setActiveTab(tab: any): void;
        unhideTabStripItem(): any;
        updateScrollButtons(): any;
    }
    export var TaskMgr: util.TaskRunner;
    export interface TemplateConfig {
        compiled?: any
        disableFormats?: any
        re?: any
    }
    export class Template {
        disableFormats: any;
        html: any;
        re: any;
        constructor(...arg: any[]);
        append(): any;
        apply(data: any): string;
        applyTemplate(): any;
        compile(): Template;
        insertAfter(): any;
        insertBefore(): any;
        insertFirst(): any;
        overwrite(el: Element, data: any): any;
        set(): any;
    }
    export interface TipConfig extends PanelConfig {
        autoHeight?: any
        baseCls?: any
        closable?: any
        defaultAlign?: any
        floating?: any
        frame?: any
        maxWidth?: any
        minWidth?: any
        shadow?: any
        width?: any
    }
    export class Tip extends Panel {
        autoRender: any;
        closeAction: any;
        hidden: any;
        quickShowInterval: any;
        constructor(config: TipConfig);
        afterRender(): any;
        doAutoWidth(): any;
        initComponent(): any;
        initDraggable(): any;
        showAt(): any;
        showBy(): any;
    }
    export interface ToolbarConfig extends ContainerConfig {
        buttonAlign?: any
        enableOverflow?: any
        layout?: any
    }
    export class Toolbar extends Container {
        constructor(config?: ToolbarConfig);
        add(): any;
        addButton(btnConfig: ButtonConfig): any;
        addDom(): any;
        addElement(): any;
        addField(): any;
        addFill(): any;
        addItem(): any;
        addSeparator(): any;
        addSpacer(): any;
        addText(): any;
        insertButton(): any;
    }
    export module Toolbar {
        export interface ItemConfig extends BoxComponentConfig {
            hideParent?: any
            overflowText?: any
        }
        export class Item extends BoxComponent {
            constructor(config?: ItemConfig);
            disable(): any;
            enable(): any;
            focus(): any;
        }
        export interface FillConfig extends Toolbar.SpacerConfig { }
        export class Fill extends Toolbar.Spacer {
            isFill: any;
            constructor(config?: FillConfig);
            render(): any;
        }
        export interface SpacerConfig extends Toolbar.ItemConfig {
            width?: number;
        }
        export class Spacer extends Toolbar.Item {
            constructor(config?: SpacerConfig);
        }
        export interface SeparatorConfig extends Toolbar.ItemConfig {
        }
        export class Separator extends Toolbar.Item {
            constructor(config?: SeparatorConfig);
            onRender(): any;
        }
        export interface TextItemConfig extends Toolbar.ItemConfig {
            text?: any
        }
        export class TextItem extends Toolbar.Item {
            constructor(config?: TextItemConfig);
            onRender(): any;
            setText(text: string): void;
        }
    }
    export interface ToolTipConfig extends TipConfig {
        anchorOffset?: any
        anchorToTarget?: any
        autoHide?: any
        delegate?: any
        dismissDelay?: any
        hideDelay?: any
        mouseOffset?: any
        showDelay?: any
        target?: any
        trackMouse?: any
    }
    export class ToolTip extends Tip {
        constrainPosition: any;
        targetCounter: any;
        triggerElement: any;
        constructor(config: ToolTipConfig);
        adjustPosition(): any;
        afterRender(): any;
        beforeDestroy(): any;
        clearTimer(): any;
        clearTimers(): any;
        delayHide(): any;
        delayShow(): any;
        doEnable(): any;
        getAnchorAlign(): any;
        getAnchorPosition(): any;
        getMouseOffset(): any;
        getOffsets(): any;
        getTargetXY(): any;
        hide(): any;
        initComponent(): any;
        initTarget(): any;
        onDestroy(): any;
        onDisable(): any;
        onDocMouseDown(): any;
        onHide(): any;
        onMouseMove(): any;
        onRender(): any;
        onShow(): any;
        onTargetOut(): any;
        onTargetOver(): any;
        setPagePosition(): any;
        show(): any;
        showAt(): any;
        syncAnchor(): any;
    }
    export module tree {
        export interface TreePanelNodeDropEvent {
            tree: TreePanel; // - The TreePanel
            target: TreeNode;// t - The node being targeted for the drop
            data: any;//  - The drag data from the drag source
            point: any; // - The point of the drop - append, above or below
            source: dd.DragSource;// - The drag source
            rawEvent: MouseEvent; // - Raw mouse event
            dropNode: TreeNode | TreeNode[];// - Drop node(s) provided by the source OR you can supply node(s) to be inserted by setting them on this object.
            cancel: boolean;// - Set this to true to cancel the drop.
            dropStatus: boolean; // - If the default drop action is cancelled but the drop is valid, setting this to true will prevent the animated 'repair' from appearing.
        }
        export interface AsyncTreeNodeConfig extends tree.TreeNodeConfig {
            loader?: any
        }
        export class AsyncTreeNode extends tree.TreeNode {
            loader: any;
            constructor(config: AsyncTreeNodeConfig);
            isLoaded(): any;
            isLoading(): any;
            reload(): any;
        }
        export interface DefaultSelectionModelConfig extends util.ObservableConfig {
        }
        export class DefaultSelectionModel extends util.Observable {
            constructor(config: DefaultSelectionModelConfig);
            clearSelections(): any;
            getSelectedNode(): TreeNode;
            init(): any;
            isSelected(): any;
            onKeyDown(): any;
            onNodeClick(): any;
            select(node: data.Node): void;
            selectNext(): any;
            selectPrevious(): any;
            unselect(): any;
        }
        export interface MultiSelectionModelConfig extends util.ObservableConfig {
        }
        export class MultiSelectionModel extends util.Observable {
            onKeyDown: any;
            selectNext: any;
            selectPrevious: any;
            constructor(config: MultiSelectionModelConfig);
            clearSelections(): any;
            getSelectedNodes(): any;
            init(): any;
            isSelected(): any;
            onNodeClick(): any;
            select(): any;
            unselect(): any;
        }
        export class RootTreeNodeUI extends tree.TreeNodeUI {
            collapse(): any;
            expand(): any;
            render(): any;
        }
        export interface TreeDragZoneConfig extends dd.DragZoneConfig {
            ddGroup?: any
        }
        export class TreeDragZone extends dd.DragZone {
            tree: any;
            constructor(config: TreeDragZoneConfig);
        }
        export interface TreeDropZoneConfig extends dd.DropZoneConfig {
            allowContainerDrop?: any
            allowParentInsert?: any
            appendOnly?: any
            ddGroup?: any
            expandDelay?: any
        }
        export class TreeDropZone extends dd.DropZone {
            dragOverData: any;
            tree: any;
            constructor(config: TreeDropZoneConfig);
        }
        export interface TreeEditorConfig extends EditorConfig {
            alignment?: any
            editDelay?: any
            hideEl?: any
            maxWidth?: any
            shim?: any
        }
        export class TreeEditor extends Editor {
            editNode: TreeNode;
            constructor(tree: TreePanel, fieldConfig?: Ext.form.FieldConfig, config?: TreeEditorConfig);
            triggerEdit(node: TreeNode): void;
        }
        export interface TreeFilterConfig {
            clearBlank?: boolean;
            reverse?: boolean;
            autoClear?: boolean;
            remove?: boolean;
        }
        export class TreeFilter {
            tree: tree.TreePanel;
            constructor(tree: tree.TreePanel, config?: TreeFilterConfig);
            clear(): void;
            filter(value: string | RegExp, attr?: string, startNode?: data.Node): void;
            filterBy(fn: Function, scope?: any, startNode?: data.Node): void;
        }
        export interface TreeLoaderConfig extends util.ObservableConfig {
            baseAttrs?: any
            baseParams?: any
            clearOnLoad?: any
            dataUrl?: any
            directFn?: any
            nodeParameter?: any
            paramOrder?: any
            paramsAsHash?: any
            preloadChildren?: any
            requestMethod?: any
            uiProviders?: any
            url?: any
        }
        export class TreeLoader extends util.Observable {
            baseAttrs: any;
            baseParams: any;
            clearOnLoad: boolean;
            dataUrl: string;
            directFn: Function;
            nodeParameter: string;
            paramOrder: string | string[];
            paramsAsHash: boolean;
            preloadChildren: boolean;
            requestMethod: string;
            uiProviders: any;
            url: string;
            constructor(config: TreeLoaderConfig);
            createNode(conf: TreeNodeConfig): TreeNode;
            load(node: TreeNode, cb?: Function, scope?: any): void;
        }
        export interface TreeNodeConfig extends data.NodeConfig {
            [customAttributes: string]: any;
            allowChildren?: boolean;
            allowDrag?: boolean;
            allowDrop?: boolean;
            checked?: boolean;
            cls?: string;
            disabled?: boolean;
            draggable?: boolean;
            editable?: boolean;
            expandable?: boolean;
            expanded?: boolean;
            hidden?: boolean;
            href?: string;
            hrefTarget?: any;
            icon?: string;
            iconCls?: string;
            isTarget?: boolean;
            qtip?: string;
            qtipCfg?: Ext.QuickTipConfig;
            singleClickExpand?: boolean;
            text?: string;
            uiProvider?: any;
        }
        export class TreeNode extends data.Node {
            disabled: boolean;
            hidden: boolean;
            preventHScroll: boolean;
            text: string;
            ui: any;
            constructor(config?: TreeNodeConfig);
            appendChild(nodeConfig: TreeNodeConfig): this;
            beginUpdate(): any;
            cancelExpand(): any;
            collapse(): any;
            collapseChildNodes(): any;
            delayedExpand(): any;
            destroy(): any;
            disable(): any;
            enable(): any;
            endUpdate(): any;
            ensureVisible(): any;
            expand(deep?: boolean, anim?: boolean, callback?: (node: this) => void, scope?: any): void;
            expandChildNodes(): any;
            getLoader(): any;
            getUI(): any;
            insertBefore(): any;
            isExpanded(): boolean;
            isHiddenRoot(): boolean;
            isSelected(): boolean;
            onIdChange(): any;
            render(): any;
            renderChildren(): any;
            renderIndent(): any;
            runCallback(): any;
            select(): void;
            setCls(): any;
            setFirstChild(): any;
            setHref(): any;
            setIcon(): any;
            setIconCls(iconCls: string): void;
            setLastChild(): any;
            setText(text: string): void;
            setTooltip(): any;
            sort(): any;
            toggle(): any;
            unselect(): any;
        }
        export class TreeNodeUI {
            constructor();
            addClass(): any;
            afterLoad(): any;
            animCollapse(): any;
            animExpand(): any;
            appendDDGhost(): any;
            beforeLoad(): any;
            blur(): any;
            collapse(): any;
            destroy(): any;
            ecClick(): any;
            endDrop(): any;
            expand(): any;
            fireEvent(): any;
            focus(): any;
            getAnchor(): any;
            getChildIndent(): any;
            getContainer(): any;
            getDDHandles(): any;
            getDDRepairXY(): any;
            getEl(): any;
            getHref(): any;
            getIconEl(): any;
            getTextEl(): any;
            hide(): any;
            highlight(): any;
            initEvents(): any;
            isChecked(): any;
            onCheckChange(): any;
            onClick(): any;
            onClsChange(): any;
            onContextMenu(): any;
            onDblClick(): any;
            onDisableChange(): any;
            onHrefChange(): any;
            onIconChange(): any;
            onIconClsChange(): any;
            onIdChange(): any;
            onMove(): any;
            onOut(): any;
            onOver(): any;
            onRender(): any;
            onSelectedChange(): any;
            onTextChange(): any;
            onTipChange(): any;
            remove(): any;
            removeChild(): any;
            removeClass(): any;
            render(): any;
            renderElements(): any;
            renderIndent(): any;
            show(): any;
            startDrop(): any;
            toggleCheck(): any;
            updateExpandIcon(): any;
        }
        export interface TreePanelConfig extends PanelConfig {
            animate?: any
            containerScroll?: any
            ddAppendOnly?: any
            ddGroup?: any
            ddScroll?: any
            dragConfig?: any
            dropConfig?: any
            enableDD?: any
            enableDrag?: any
            enableDrop?: any
            hlColor?: any
            hlDrop?: any
            lines?: any
            loader?: any
            pathSeparator?: any
            requestMethod?: any
            root?: any
            rootVisible?: any
            selModel?: any
            singleExpand?: any
            trackMouseOver?: any
            useArrows?: any
        }
        export class TreePanel extends Panel {
            animate: any;
            dragZone: any;
            dropZone: any;
            enableDD: any;
            hlDrop: any;
            lines: any;
            pathSeparator: any;
            root: any;
            rootVisible: any;
            constructor(config: TreePanelConfig);
            afterRender(): any;
            beforeDestroy(): any;
            clearInnerCt(): any;
            collapseAll(): any;
            destroyRoot(): any;
            expandAll(): any;
            expandPath(): any;
            getChecked(): any;
            getLoader(): TreeLoader;
            getNodeById(id: string): TreeNode;
            getRootNode(): TreeNode;
            getSelectionModel(): DefaultSelectionModel;
            getSelectionModel<T>(): T;
            getTreeEl(): any;
            initComponent(): any;
            initEvents(): any;
            onRender(): any;
            proxyNodeEvent(): any;
            registerNode(): any;
            renderRoot(): any;
            restrictExpand(): any;
            selectPath(): any;
            setRootNode<T extends TreeNode>(node: TreeNode | TreeNodeConfig | any): T;
            toString(): any;
            unregisterNode(): any;
        }
        export interface TreeSorterConfig {
            caseSensitive?: any
            dir?: any
            folderSort?: any
            leafAttr?: any
            property?: any
            sortType?: any
        }
        export class TreeSorter {
            constructor(tree: tree.TreePanel, config?: TreeSorterConfig);
            doSort(node: tree.TreeNode): void;
            updateSort(tree: tree.TreePanel, node: tree.TreeNode): void;
            updateSortParent(): void;
        }
    }
    //declare module Updater {
    //    export class BasicRenderer {
    //        render():any;
    //    }
    //}
    //declare module Updater {
    //    export class defaults {
    //        disableCaching:any;
    //        indicatorText:any;
    //        loadScripts:any;
    //        showLoadIndicator:any;
    //        sslBlankUrl:any;
    //        timeout:any;
    //    }
    //}
    export interface UpdaterConfig extends util.ObservableConfig {
    }
    export class Updater extends util.Observable {
        defaultUrl: any;
        disableCaching: any;
        el: any;
        formUpdateDelegate: any;
        indicatorText: any;
        loadScripts: any;
        refreshDelegate: any;
        renderer: any;
        showLoadIndicator: any;
        sslBlankUrl: any;
        timeout: any;
        transaction: any;
        updateDelegate: any;
        constructor(config: UpdaterConfig);
        abort(): any;
        formUpdate(): any;
        getDefaultRenderer(): any;
        getEl(): any;
        getRenderer(): any;
        isAutoRefreshing(): any;
        isUpdating(): any;
        refresh(): any;
        setDefaultUrl(): any;
        setRenderer(): any;
        showLoading(): any;
        startAutoRefresh(): any;
        stopAutoRefresh(): any;
        update(): any;
    }
    export module util {
        export interface ClickRepeaterConfig extends util.ObservableConfig {
            accelerate?: any
            delay?: any
            el?: any
            interval?: any
            pressClass?: any
            stopDefault?: any
        }
        export class ClickRepeater extends util.Observable {
            delay: any;
            interval: any;
            preventDefault: any;
            stopDefault: any;
            timer: any;
            constructor(config: ClickRepeaterConfig);
            click(): any;
            destroy(): any;
            disable(): any;
            easeOutExpo(): any;
            enable(): any;
            eventOptions(): any;
            handleDblClick(): any;
            handleMouseDown(): any;
            handleMouseOut(): any;
            handleMouseReturn(): any;
            handleMouseUp(): any;
            setDisabled(): any;
        }
        export var Cookies: {
            clear(): any;
            get(): any;
            getCookieVal(): any;
            set(): any;
        }
        export var CSS: {
            createStyleSheet(cssText: string, id?: string): CSSStyleSheet;
            getRule(selector: string, refreshCache?: boolean): CSSRule;
            getRules(refreshCache?: boolean): any;
            refreshCache(): any;
            removeStyleSheet(id: string): void;
            swapStyleSheet(id: string, url: string): void;
            updateRule(selector: string | string[], property: string, val: string): boolean;
        }
        export class DelayedTask {
            constructor(fn?: Function, scope?: any, args?: any[]);
            cancel(): any;
            delay(delay: number, newFn?: Function, newScope?: any, newArgs?: any[]): void;
        }
        export var Format: {
            capitalize(): any;
            date(): any;
            dateRenderer(): any;
            defaultValue(): any;
            ellipsis(): any;
            fileSize(): any;
            htmlDecode(): any;
            htmlEncode(): any;
            lowercase(): any;
            math(): any;
            nl2br(): any;
            number(): any;
            numberRenderer(): any;
            plural(): any;
            round(): any;
            stripScripts(): any;
            stripTags(v: string): any;
            substr(): any;
            trim(): any;
            undef(): any;
            uppercase(): any;
            usMoney(): any;
        }
        export var Functions: {
            createDelegate(): any;
            createInterceptor(): any;
            createSequence(): any;
            defer(): any;
            prototype: Function;
        }
        export var JSON: {
            decode(): any;
            encode(): any;
            encodeDate(): any;
        }
        export interface MixedCollectionConfig extends util.ObservableConfig {
            allowFunctions?: any
        }
        export class MixedCollection<T> extends util.Observable {
            constructor(config?: MixedCollectionConfig);
            add(key: any, item: T): T;
            add(item: T): T;
            addAll(items: T[]): void;
            clear(): void;
            clone(): MixedCollection<T>;
            contains(item: T): boolean;
            containsKey(key: any): boolean;
            createValueMatcher(): any;
            each(callback: (item: T, idx: number, len: number) => void, scope?: any): void;
            eachKey(callback: (key: any, item: T) => void, scope?: any): void;
            filter(prop: string, val: any, anyMatch?: boolean, caseSensitive?: boolean): MixedCollection<T>;
            filterBy(callback: (item: T, key: any) => boolean, scope?: any): MixedCollection<T>;
            find(callback: (item: T, key: any) => boolean, scope?: any): T;
            findIndex(prop: string, val: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean): number;
            findIndexBy(callback: (item: T, key: any) => boolean, scope?: any, start?: number): number;
            first(): T;
            get(index: number): T;
            get(key: any): T;
            getCount(): number;
            getKey(item: T): any;
            getRange(start?: number, end?: number): T[];
            indexOf(item: T): number;
            indexOfKey(key: any): number;
            insert(index: number, key: any, item: T): T;
            insert(index: number, item: T): T;
            item(key: any): T;
            item(index: number): T;
            itemAt(index: number): T;
            key(key: any): T;
            keySort(dir: string, fn?: Function): void;
            last(): T;
            remove(item: T): T;
            removeAt(index: number): T;
            removeKey(key: any): T;
            reorder(mapping: any): any;
            replace(key: any, item: T): T;
            replace(item: T): T;
            sort(): any;
        }
        export interface IOservableListenersOptions {
            fn?: Function;
            scope?: any;
            delay?: number;
            single?: boolean;
            buffer?: number;
            target?: Observable;
        }
        export interface ObservableListenerProperty {
            [event: string]: IOservableListenersOptions | Function;
            scope?: any;
        }
        export interface ObservableConfig {
            listeners?: ObservableListenerProperty;
        }
        export class Observable {
            addEvents(...events: string[]): void;
            addListener(opt: ObservableListenerProperty): void;
            addListener(event: string, cb: Function, scope?: any, opt?: IOservableListenersOptions): void;
            enableBubble(): void;
            fireEvent(event: string, ...args: any[]): boolean;
            hasListener(event: string): boolean;
            on(options: ObservableListenerProperty): void;
            on(event: string, callback: Function, scope?: any, options?: IOservableListenersOptions): void;
            purgeListeners(): void;
            relayEvents(o: any, e: string[]): any;
            removeListener(event: string, fn: Function, scope?: any): void;
            resumeEvents(): void;
            suspendEvents(queueSuspended?: boolean): any;
            un(event: string, fn: Function, scope?: any): void;
            static capture(): void;
        }
        export interface ITask {
            run: Function;
            interval: number;
            args?: any[];
            scope?: any;
            duration?: number;
            repeat?: number;
        }
        export class TaskRunner {
            constructor(interval?: number);
            start(task: ITask): ITask;
            stop(task: ITask): ITask;
            stopAll(): void;
        }
        export var TextMetrics: {
            bind(): any;
            createInstance(): any;
            getHeight(): any;
            getSize(): any;
            getWidth(): any;
            measure(): any;
            setFixedWidth(): any;
        }
    }
    export interface ViewportConfig extends ContainerConfig {
    }
    export class Viewport extends Container {
        constructor(config?: ViewportConfig);
        fireResize(): any;
    }
    export interface WindowConfig extends PanelConfig {
        animateTarget?: string | Element;
        baseCls?: string;
        closable?: boolean;
        closeAction?: string;
        collapsed?: boolean;
        collapsible?: boolean;
        constrain?: boolean;
        constrainHeader?: boolean;
        defaultButton?: string | number | Component;
        draggable?: boolean;
        expandOnShow?: boolean;
        hideAnimDuration?: number;
        initHidden?: boolean;
        manager?: WindowGroup;
        maximizable?: boolean;
        maximized?: boolean;
        minHeight?: number;
        minWidth?: number;
        minimizable?: boolean;
        modal?: boolean;
        onEsc?: Function;
        plain?: boolean;
        resizable?: boolean;
        resizeHandles?: string;
        showAnimDuration?: number;
        x?: number;
        y?: number;
    }
    export class Window extends Panel {
        dd: any;
        constructor(config?: WindowConfig);
        afterHide(): any;
        afterShow(): any;
        alignTo(): any;
        anchorTo(): any;
        animHide(): any;
        animShow(): any;
        beforeDestroy(): any;
        beforeResize(): any;
        beforeShow(): any;
        center(): any;
        clearAnchor(): any;
        close(): any;
        doAnchor(): any;
        doClose(): any;
        doConstrain(): any;
        fitContainer(): any;
        focus(): any;
        getState(): any;
        ghost(): any;
        handleResize(): any;
        hide(): any;
        initComponent(): any;
        initDraggable(): any;
        initEvents(): any;
        initTools(): any;
        maximize(): any;
        minimize(): any;
        onDestroy(): any;
        onEsc(): any;
        onHide(): any;
        onRender(): any;
        onShow(): any;
        onWindowResize(): any;
        resizerAction(): any;
        restore(): any;
        setActive(): any;
        setAnimateTarget(): any;
        setZIndex(): any;
        show(animateTarget?: string, callback?: Function, scope?: any): this;
        show(animateTarget?: Element, callback?: Function, scope?: any): this;
        toBack(): any;
        toFront(): any;
        toggleMaximize(): any;
        unghost(): any;
        updateHandles(): any;
    }
    export class WindowGroup {
        zseed: any;
        constructor();
        bringToFront(): any;
        each(): any;
        get(): any;
        getActive(): any;
        getBy(): any;
        hideAll(): any;
        register(): any;
        sendToBack(): any;
        unregister(): any;
    }
    export var WindowMgr: WindowGroup;
    export interface XTemplateConfig extends TemplateConfig {
    }
    export class XTemplate extends Template {
        constructor(...tpl: string[]);
        constructor(config: XTemplateConfig);
        constructor(...args: any[]);
        apply(data: any): string;
        applyTemplate(): any;
        compile(): XTemplate;
        static from(el: string): XTemplate;
        static from(el: HTMLElement): XTemplate;
    }
    export module ux {
        export module grid {
            export class BufferView extends Ext.grid.GridView { }
            export class GridFilters extends util.Observable {
                constructor(condifg: util.ObservableConfig);
            }
            export interface ColumnHeaderGroupConfig {
                row: any[];
            }
            export class ColumnHeaderGroup {
                constructor(config: ColumnHeaderGroupConfig);
                init(grid: Ext.grid.GridPanel): void;
            }
        }
        export module form {
            export interface FileUploadFieldConfig extends Ext.form.TextFieldConfig {
                buttonText?: string;
                buttonOnly?: boolean;
                buttonOffset?: number;
            }
            export class FileUploadField extends Ext.form.TextField {
                constructor(config?: FileUploadFieldConfig);
                fileInput: Element;
            }
        }
        export module tree {
            export class TreeGrid extends Ext.tree.TreePanel {
                columns: any[];
            }
            export class TreeGridLoader extends Ext.tree.TreeLoader {
            }
            export class TreeGridNodeUI extends Ext.tree.TreeNodeUI { }
        }
        export class TabScrollerMenu { }
    }
}

declare module "ext" {
    export = Ext;
}
//Done
