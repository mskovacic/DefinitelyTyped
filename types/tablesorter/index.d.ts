// Type definitions for tablesorter v2.29.0
// Project: https://github.com/Mottie/tablesorter/
// Definitions by: Martin Sven Kovačić <https://github.com/mskovacic/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module TableSorter {
    export class tablesorter{
        constructor(options: TablesorterOptions);
    }

    export class tablesorterPager {
        constructor(options: TablesorterPagerOptions);
    }

    export interface TablesorterOptions {
        cancelSelection?: boolean;
        cssAsc?: string;
        cssChildRow?: string;
        cssDesc?: string;
        cssHeader?: string;
        cssHeaderRow?: string;
        cssIcon?: string;
        cssIconASc?: string;
        cssIconDesc?: string;
        cssIconDisabled?: string;
        cssIconNone?: string;
        cssIgnoreRow?: string;
        cssInfoBlock?: string;
        cssNone?: string;
        cssNoSort?: string;
        cssProcessing?: string;
        dateFormat?: string;
        debug?: boolean;
        delayInit?: false;
        duplicateSpan?: boolean;
        emptyTo?: string;
        headers?: { [columnNumber: number]: HeaderOptions };
        headerTemplate?: string;
        ignoreCase?: boolean;
        initialized?: any;
        initWidgets?: boolean;
        namespace?: string;
        numberSorter?: any;
        onRenderHeader?: any;
        onRenderTemplate?: any;
        pointerClick?: string;
        pointerDown?: string;
        pointerUp?: string;
        resort?: boolean;
        selectorHeaders?: string;
        selectorRemove?: string;
        selectorSort?: string;
        serverSideSorting?: boolean;
        showProcessing?: boolean;
        sortAppend?: number[][] | any;
        sortForce?: number[][];
        sortInitialOrder?: SortOrder;
        sortList?: number[][];
        sortLocaleCompare?: boolean;
        sortMultiSortKey?: "altKey" | "shiftKey" | string;
        sortReset?: boolean;
        sortResetKey?: "ctrlKey" | "altKey" | "shiftKey";
        sortRestart?: boolean;
        sortStable?: boolean;
        stringTo?: StringOptions;
        tabIndex?: boolean;
        tableClass?: string;
        textAttribute?: "data-text" | string;
        textExtraction?: { [columnNumber: number]: (node: any, table: any, cellIndex: any) => string };
        textSorter?: { [columnNumber: number]: (a: any, b: any, direction?: any, column?: any, table?: any) => number };
        theme?: "deafult" | string;
        usNumberFormat?: boolean;
        widgetClass?: string;
        widgetOptions?: WidgetOptions;
        widgets?: string[];
        widthFixed?: true;
    }

    export type SortOrder = "asc" | "desc";
    export type StringOptions = "max" | "min" | "top" | "bottom" | "none" | "zero";

    export interface HeaderOptions {
        sorter?: boolean | "digit";
        parser?: boolean;
        sortInitialOrder?: SortOrder;
        lockedOrder?: SortOrder;
        empty?: StringOptions;
        string?: StringOptions;
    }

    export interface WidgetOptions {
        columns?: string[];
        columns_tfoot?: boolean;
        columns_thead?: boolean;
        filter_cellFilter?: string | string[];
        filter_childByColumn?: boolean;
        filter_childRows?: boolean;
        filter_childWithSibs?: boolean;
        filter_columnAnyMatch?: boolean;
        filter_columnFilters?: boolean;
        filter_cssFilter?: string | string[];
        filter_defaultAttrib?: string | "data-value";
        filter_defaultFilter?: any;
        filter_excludeFilter?: any;
        filter_external?: string;	
        filter_filteredRow?: string | "filtered";
        filter_formatter?: any;
        filter_functions?: any;
        filter_hideEmpty?: boolean;
        filter_hideFilters?: boolean | any;	
        filter_ignoreCase?:	boolean;
        filter_liveSearch?:	boolean | number | any;
        filter_matchType?:	any;
        filter_onlyAvail?: string | "filter-onlyAvail";
        filter_placeholder?: any;
        filter_reset?: string | any;
        filter_resetOnEsc?: boolean;
        filter_saveFilters?: boolean;
        filter_searchDelay?: number;
        filter_searchFiltered?: boolean;
        filter_selectSource?: any;
        filter_selectSourceSeparator?: string;
        filter_serversideFiltering?: boolean;
        fileter_startsWith?: boolean;
        filter_useParsedData?: boolean;
        resizable?: boolean;
        resizable_addLastColumn?: boolean;
        resizable_includeFooter?: boolean;
        resizable_targetLast?: boolean;
        resizable_throttle?: boolean;
        resizable_widths?: string[];
        output_separator?: ";" | "," | "json" | "array" | string;
        output_ignoreColumns?: number[];
        output_hiddenColumns?: boolean;
        output_includeFooter?: boolean;
        output_includeHeader?: boolean;
        output_headerRows?: boolean;
        output_dataAttrib?: string;
        output_delivery?: "p" | "d";
        output_saveRows?: "f" | "a" | "v";
        output_duplicateSpans?: boolean;
        output_replaceQuote?: string;
        output_includeHTML?: boolean;
        output_trimSpaces?: boolean;
        output_wrapQuotes?: boolean;
        output_popupStyle?: string;
        output_saveFileName?: string;
        output_callbackJSON?: (cell: any, txt: any, cellIndex: any) => string;
        output_callback?: (config: any, data: any, url: any) => boolean | any;
        output_encoding?: string;
        output_savePlugin?: (config: any, widgetOptions: WidgetOptions, data: any) => any;
        saveSort?: boolean;
        stickyHeaders?: string;
        stickyHeaders_addResizeEvent?: boolean;
        stickyHeaders_appendTo?: string | any;
        stickyHeaders_attachTo?: string | any;
        stickyHeaders_cloneId?: string;
        stickyHeaders_filteredToTop?: boolean;
        stickyHeaders_includeCaption?: boolean;
        stickyHeaders_offset?: any;
        stickyHeaders_xScroll?: string | any;
        stickyHeaders_yScroll?: string | any;
        stickyHeaders_zIndex?: number;
        storage_fixedUrl?: string;
        storage_group?: string;
        storage_page?: string;
        storage_storageType?: string;
        storage_tableId?: string;
        storage_useSessionStorage?: boolean;		
        zebra?: string[];
    }

    export interface TablesorterPagerOptions {
        container?: HTMLElement | HTMLElement[];
        cssGoto?: string;
        cssPrev?: string;
        cssFirst?: string;
        cssLast?: string;
        cssDisabled?: string;
        removeRows?: boolean;
        output?: string;
        processAjaxOnInit?: boolean;
        ajaxUrl?: string;
        ajaxProcessing?: (data: string, html: any, xhr: Xhr) => [number, string[], string[]];
        size?: number;
    }

    export interface Xhr {
        url: string;
        xmlData: string;
        mode: boolean;
        response: string;
        objHttpReq: any;
        readyState: number;
        status: number;
        responseText: string;
    }
}