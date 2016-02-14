define(['angular','uiGrid'], function(angular){
	'use strict';
	
	angular.module('ui.grid')
	.run(function ($templateCache) {
		  $templateCache.put('ui-grid/uiGridHeaderCell',
				    "<div role=\"columnheader\" ng-class=\"{ 'sortable': sortable }\" ui-grid-one-bind-aria-labelledby-grid=\"col.uid + '-header-text ' + col.uid + '-sortdir-text'\" "
						  +"aria-sort=\"{{col.sort.direction == asc ? 'ascending' : ( col.sort.direction == desc ? 'descending' : (!col.sort.direction ? 'none' : 'other'))}}\">"
						  +"<div role=\"button\" tabindex=\"0\" class=\"ui-grid-cell-contents ui-grid-header-cell-primary-focus\" col-index=\"renderIndex\" title=\"TOOLTIP\">"
						  +"<span ng-click=\"$log(col)\" ng-class=\"{'hide': col.colDef.enableSorting===false}\" style=\"margin-left:-3px;\" ui-grid-one-bind-id-grid=\"col.uid + '-sortdir-text'\" ui-grid-visible=\"col.sort.direction\" aria-label=\"{{getSortDirectionAriaLabel()}}\" ng-if=\"col.colDef.cellClass && col.colDef.cellClass.indexOf('text-left') == -1\">"
						  +"<i ng-class=\"{ 'fa-lg fa-sort-alpha-asc': col.sort.direction == asc && col.colDef.type=='string', 'fa-lg fa-sort-alpha-desc': col.sort.direction == desc && col.colDef.type=='string', 'fa-lg fa-sort-amount-asc': col.sort.direction == asc && col.colDef.type=='number', 'fa-lg fa-sort-amount-desc': col.sort.direction == desc && col.colDef.type=='number', 'fa-lg fa-long-arrow-up': col.sort.direction == asc && col.colDef.type!='number' && col.colDef.type!='string', 'fa-lg fa-long-arrow-down': col.sort.direction == desc && col.colDef.type!='number' && col.colDef.type!='string', 'ui-grid-icon-blank': !col.sort.direction }\" title=\"{{col.sort.priority ? i18n.headerCell.priority + ' ' + col.sort.priority : null}}\" aria-hidden=\"true\" class=\"fa col-sort-icon\"></i> "
						  +" <sub class=\"ui-grid-sort-priority-number\">{{col.sort.priority}}</sub>"
						  +"</span>"
						  +"<span class=\"ui-grid-header-cell-label\" ui-grid-one-bind-id-grid=\"col.uid + '-header-text'\">{{ col.displayName CUSTOM_FILTERS }}</span>"
						  +"<span ng-click=\"$log(col)\" ng-class=\"{'hide': col.colDef.enableSorting===false}\" style=\"margin-right:-3px;\" ui-grid-one-bind-id-grid=\"col.uid + '-sortdir-text'\" ui-grid-visible=\"col.sort.direction\" aria-label=\"{{getSortDirectionAriaLabel()}}\" ng-if=\"!col.colDef.cellClass || col.colDef.cellClass.indexOf('text-left') != -1\">"
						  +"<i ng-class=\"{ 'fa-lg fa-sort-alpha-asc': col.sort.direction == asc && col.colDef.type=='string', 'fa-lg fa-sort-alpha-desc': col.sort.direction == desc && col.colDef.type=='string', 'fa-lg fa-sort-amount-asc': col.sort.direction == asc && col.colDef.type=='number', 'fa-lg fa-sort-amount-desc': col.sort.direction == desc && col.colDef.type=='number', 'fa-lg fa-long-arrow-up': col.sort.direction == asc && col.colDef.type!='number' && col.colDef.type!='string', 'fa-lg fa-long-arrow-down': col.sort.direction == desc && col.colDef.type!='number' && col.colDef.type!='string', 'ui-grid-icon-blank': !col.sort.direction }\" title=\"{{col.sort.priority ? i18n.headerCell.priority + ' ' + col.sort.priority : null}}\" aria-hidden=\"true\" class=\"fa col-sort-icon\"></i> "
						  +" <sub class=\"ui-grid-sort-priority-number\">{{col.sort.priority}}</sub>"
						  +"</span> "
						  +"</div><div role=\"button\" tabindex=\"0\" ui-grid-one-bind-id-grid=\"col.uid + '-menu-button'\" class=\"ui-grid-column-menu-button\" ng-if=\"grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false\" ng-click=\"toggleMenu($event)\" ng-class=\"{'ui-grid-column-menu-button-last-col': isLastCol}\" ui-grid-one-bind-aria-label=\"i18n.headerCell.aria.columnMenuButtonLabel\" aria-haspopup=\"true\">"
						  +"<i class=\"ui-grid-icon-angle-down\" aria-hidden=\"true\">&nbsp;</i>"
						  +"</div><div ui-grid-filter></div></div>"
				  );
		  
		  $templateCache.put('ui-grid/ui-grid-row',
				    "<div ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.uid\" ui-grid-one-bind-id-grid=\"rowRenderIndex + '-' + col.uid + '-cell'\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" role=\"{{col.isRowHeader ? 'rowheader' : 'gridcell'}}\" ui-grid-cell></div>"
				  );		  
	});
	
	angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
		  $templateCache.put("template/datepicker/day.html",
		    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
		    "  <thead>\n" +
		    "    <tr>\n" +
		    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-left\"></i></button></th>\n" +
		    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
		    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-right\"></i></button></th>\n" +
		    "    </tr>\n" +
		    "    <tr>\n" +
		    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
		    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
		    "    </tr>\n" +
		    "  </thead>\n" +
		    "  <tbody>\n" +
		    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
		    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
		    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
		    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
		    "      </td>\n" +
		    "    </tr>\n" +
		    "  </tbody>\n" +
		    "</table>\n" +
		    "");
		}]);
	
	angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
		  $templateCache.put("template/datepicker/popup.html",
		    "<ul class=\"dropdown-menu\" dropdown-nested ng-if=\"isOpen\" style=\"display: block;padding: 7px 10px;\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
		    "	<li ng-transclude></li>\n" +
		    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 0px 2px\">\n" +
		    "		<span class=\"btn-group pull-left\">\n" +
		    "			<button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"select('today')\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
		    "			<button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
		    "		</span>\n" +
		    "		<button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
		    "       <div class=\"clearfix\"></div>\n"+
		    "	</li>\n" +
		    "</ul>\n" +
		    "");
		}]);
})