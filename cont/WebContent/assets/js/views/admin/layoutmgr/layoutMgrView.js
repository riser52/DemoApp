define([
    'jqueryUI',
    'underscore',
    'baseview',
    'handlebars',
    //'js/views/home/adminnotifier',
    'text!templates/views/home/layoutMgrView.html',
    'text!templates/views/home/layoutMgrViewPref.html'
], function(jQUI, _, BaseView, 
			Handlebars,
			//AdminNotifier,
			LayoutViewTemplate,
			LayoutPrefTemplate){
	
	$.ajaxSetup({
		cache: false,
		dataFilter: function(data, type){
			if(this.dataType == 'json'){
				if(this.expects){
					var parsedResp = null;
					try{
						parsedResp = this.converters["text json"](data);
					}catch(e){
						
					}
					if(!parsedResp || parsedResp.error){
						if(this.expects == 'list'){
							data = "[]";
						}
					}
				}
				return data;
			}
			return data;
		}
	});
	
	var WidgetCollection = Backbone.Collection.extend({
		url: 'services/home/widgets',
		model: Backbone.Model.extend({
			idAttribute: "widget_id"
		})
	});
	var widgetCollection = new WidgetCollection();

	var GroupProfileCollection = Backbone.Collection.extend({
		url: 'services/home/groupWidgets/',
		model: Backbone.Model.extend({
			idAttribute: "group_id",
			parse: function(data){
				try{
					data.group_profile = $.parseJSON(data.group_profile)||{}; 
				}catch(e){
					data.group_profile = {};
				}
				var widgets = data.group_profile.widgets, ln, m, rmList=[],i=0;
				if(widgets && widgets.length){
					ln = widgets.length;
					for(i=0; i < ln; i++){
						m = widgetCollection.get(widgets[i].widget_id);
						if(m){
							widgets[i].widget_name = m.get('widget_name');
							widgets[i].widget_js = m.get('widget_js');
							widgets[i].widget_style = m.get('widget_style');
						}else
							rmList.push(i);
					}
					if(rmList.length){
						for(i=0; i < rmList.length; i++){
							delete widgets[ rmList[i] ];
						}
					}
				}
				widgets = ln = m = rmList = null;
				return data;
			}
		})
	});
	var groupProfileCollection = new GroupProfileCollection();
	
	var View = BaseView.View.extend({
    	el: 'main',
    	css: ['css/common/jquery-ui.min','css/layoutMgr','css/common/perfect-scrollbar'],
    	initDeferred: null,
        events: {   
        	'click .admin-notifier': 'openAdminNotifier'
        },
        
        initialize: function(attrs){
        	
        	var self = this;
        	
        	self.initDeferred = $.Deferred();
        	
        	widgetCollection.fetch().done(function(){
        		groupProfileCollection.fetch().done(function(){
        			self.initDeferred.resolve();
        		});
        	});
        },
        
        render: function(){
        	var self = this;
        	self.initDeferred.done(function(){
        		self.renderView();
        	});
        },
        
        renderView: function(){
            var self = this,
                compiledTemplate = Handlebars.compile(LayoutViewTemplate),
                html = compiledTemplate({groupProfileList: groupProfileCollection.toJSON()}),
                prefTemplate = Handlebars.compile(LayoutPrefTemplate);
            
            self.$el.empty().append( html );
         
            self.$el.on('click', '.btn-collapse', function(){
                if( $(this).hasClass('fa-chevron-left') ){
                    $(this).closest('.widgets-list').addClass('min');
                    $(this).removeClass('fa-chevron-left').addClass('fa-chevron-right');
                } else {
                    $(this).closest('.widgets-list').removeClass('min');        
                    $(this).removeClass('fa-chevron-right').addClass('fa-chevron-left');    
                }
            });
            
            self.$el.on('click', '.group-item', function(){
            	var gid = parseInt($(this).attr('data-id')),
            		list = groupProfileCollection.toJSON();
            		
            	for(var i=0; i < list.length; i++){
            		if( list[i].group_id == gid){
            			self.group = list[i];
            			break;
            		}
            	}
            	list = null;
            	self.$el.find('.message').hide().removeClass('success error').empty();
            	self.$el.find('.layout-box').empty().hide().append(prefTemplate( {widgets: widgetCollection.toJSON(), group : self.group} )).slideDown();

            	//if(self.group.group_profile && self.group.group_profile.widgets){
            	//	for(var i=0; i < self.group.group_profile.widgets.length; i++){
            	//		$('#chk_widget_'+ self.group.group_profile.widgets[i].widget_js).attr('checked','checked');
            	//	}
            	//}
            	self.$el.find('.layout-checkbox[type="checkbox"]:checked').each(function(){
            		self.addPrefWidgetBlock($(this).attr('data-id'), $(this).attr('data-js'), $(this).attr('data-style'), $(this).attr('data-label'));
            	});
            	
            	self.$el.find('.widgets-layout').sortable({placeholder: "ui-state-highlight",
					tolerance: "pointer",
					opacity: 0.5,
					start: function(event, ui){
						$(ui.placeholder).css({width: ui.item.width()+'px', height: ui.item.height()+'px' });
					}}).disableSelection();
            	
            });
            
            self.$el.on('click', '.group-create-new', function(){
            	self.group = {group_name:"", group_profile:{widgets:[]}};
            	self.$el.find('.layout-box').empty().append(prefTemplate( {widgets: widgetCollection.toJSON(), group : self.group} ));
            });
            
        	self.$el.on('click', '.layout-checkbox[type="checkbox"]', function(){
        		var id = $(this).attr('data-id');
        		if($(this).is(':checked')){
        			self.addPrefWidgetBlock(id, $(this).attr('data-js'), $(this).attr('data-style'), $(this).attr('data-label'));
        		} else {
        			self.$el.find('.layout-block.'+ $(this).attr('data-js') +'-wrap').remove();
            	}
        	});
            
        	self.$el.on('click', '.add-more-widget', function(e, data){
        		var list = [], allList = widgetCollection.toJSON();
        		for(var i=0; i < allList.length; i++){
        			if( $('#chk_widget_'+ allList[i].widget_id).length == 0)
        				list.push('<li><i class="fa fa-plus select-widget pull-right" data-id="'+ allList[i].widget_id +'" data-js="'+ allList[i].widget_js +'" data-style="'+ allList[i].widget_style +'"></i><label>'+ allList[i].widget_name +'</label></li>');
        		}
        		if(list.length == 0)
        			list.push('<li class="txt12">No more available</li>');
        		self.$el.find('.available-list').find('ul').empty().append(list.join(''));
        		if(!data || data.silent === false){
	        		self.$el.find('.available-list').slideDown();
	        		$(this).hide();
        		}
        	});
        	
        	self.$el.on('click', '.select-widget', function(){
        		var name = $(this).siblings('label').html(),
        			id = $(this).attr('data-id'),
        			js = $(this).attr('data-js'),
        			style = $(this).attr('data-style');
        		$(this).closest('li').remove();
        		self.$el.find('.selected-list ul').append('<li><i class="fa fa-times deselect-widget pull-right" data-id="'+ id +'" data-js="'+ js +'" data-style="'+ style +'"></i><label><input type="checkbox" class="layout-checkbox" data-id="'+ id +'" data-label="'+ name +'" data-js="'+ js +'" data-style="'+ style +'" id="chk_widget_'+ id +'" /> '+ name +'</label></li>');
        		self.$el.find('.add-more-widget').trigger('click');
        	});
        	
        	self.$el.on('click', '.deselect-widget', function(){
        		self.$el.find('.layout-block.'+ $(this).attr('data-js') +'-wrap').remove();
        		$(this).closest('li').remove();
        		self.$el.find('.add-more-widget').trigger('click',{silent: true});
        	});
        	
        	self.$el.on('click', '.add-more-widget-done', function(){
        		self.$el.find('.add-more-widget').show();
        		self.$el.find('.available-list').slideUp();
        	});
        	
        	self.$el.on('click', '#btn_save_pref', function(){
	        	var group = { group_name: $('#group_name').val(), group_profile: {}}, 
	        		$layoutBox = self.$el.find('.layout-box'),
            		$widgets = $layoutBox.find('.widget-block'),
            		$chkBoxes = $layoutBox.find('.layout-checkbox[type="checkbox"]:not(:checked)');
          	
            	var widgetList = [];
            	$widgets.each(function(){
            		widgetList.push({ "widget_id": $(this).attr('data-id'), 
            							"widget_js": $(this).attr('data-js'),
            							//"widget_style": $(this).attr('data-style'), 
            							enabled: true,
            							visible: true}); 
            	});
            	
            	$chkBoxes.each(function(){
            		widgetList.push({ "widget_id": $(this).attr('data-id'), 
            							"widget_js": $(this).attr('data-js'), 
            							//"widget_style": $(this).attr('data-style'),
            							enabled: true, 
            							visible: false});
            	});
            	
            	group.group_profile = $.extend(group.group_profile, self.group.group_profile, {widgets : widgetList} );
            	
            	var updatedGroup = {};
            	updatedGroup.groupName = group.group_name;
            	updatedGroup.groupProfile = JSON.stringify(group.group_profile);
            	
            	//console.log(updatedGroup);
            	
            	//return;
            	$.ajax({
            		url: 'services/home/saveGroupWidgets',
            		type: 'post',
            		data: JSON.stringify(updatedGroup),
            		contentType: 'application/json',
            		dataType: 'json',
            		success: function(resp){
            			if(resp === true){
	            			groupProfileCollection.fetch({reset: true});
	            			self.$el.find('.message').removeClass('error').addClass('success').html('Saved the Group Profile "'+ updatedGroup.groupName +'"').fadeIn();
	            			self.$el.find('.layout-box').empty();
            			}else{
                			self.$el.find('.message').removeClass('success').addClass('error').html('Failed to save the Group Profile "'+ updatedGroup.groupName +'"').fadeIn();
                			$('#layout-top-bar .dropdown-toggle').focus();
            			}
            			$("html, body").animate({ scrollTop: "0px" },300);            			
                    	$layoutBox = $chkBoxes = group = updatedGroup = $widgets = widgetList = null;
            		},
            		error: function(){
            			self.$el.find('.message').removeClass('success').addClass('error').html('Failed to save the Group Profile "'+ updatedGroup.groupName +'"').fadeIn();
            			$("html, body").animate({ scrollTop: "0px" },300);
                    	$layoutBox = $chkBoxes = group = updatedGroup = $widgets = widgetList = null;
            		}
            	});
            	
            });
        
            self.$el.on('click', '#btn_cancel_pref', function(){
            	self.$el.find('.message').hide().removeClass('success error').empty();
            	self.$el.find('.layout-box').empty();
            	self.group = null;
            });
            
            return this;
        },
        
        showFeatureTooltip: function(){
        	var self = this, counter = 1;

        	for(var el in self.views){
        		if( self.views[el].showFeatureTooltip ){
        			self.views[el].showFeatureTooltip( counter++ * 1000);
        		}
        	}
        },
        
        addPrefWidgetBlock: function(id, js, style, caption){
        	var self = this, ratio = ($('.widgets-layout').width()/$(document).width()),
        		$block, $layout = self.$el.find('.widgets-layout');
			
        	//$widgetBlock = $('#home-content > .'+ name +'-wrap');
			$block = $('<div class="layout-block widget-block" data-id="'+id+'" data-js="'+js+'" data-style="'+style+'" style="'+style+'"><div class="widget-content">'+ caption +'</div></div>');
			$block.addClass(js +'-wrap');
			$layout.append($block);

			$block.width( $block.width() * ratio );
			//$block.css({height: Math.floor($block.height()*ratio)+'px'});
			
			$block = $widgetBlock = null;
        },
        
        openAdminNotifier: function(){
        	require(['js/views/home/adminnotifier'], function(AdminNotifier){
        		var notifier = (new AdminNotifier({groups: groupProfileCollection}));
        		notifier.show();
        	});
        },
        
        cleanup: function(){
        	for(var name in this.views){
        		if(this.views[name].cleanup)
        			this.views[name].cleanup();
        	}
        	this.$el.empty();
        }
    });
    return View;
});

//$('#home-content').height($('main').height()-25);

/*  
  //added for fall animation
            animate = function($elm, top, dh){
                // animate drop
		        $elm.css({
		                top: $(window).scrollTop() - dh,
		                opacity: 0,
		                display: 'block'
		            }).animate({
		                top: top,
		                opacity: 1
		        }, 400, 'easeOutBounce');
		        
		        if($elm.prev('.widget-block').length){
		            setTimeout(function(){
			                dh = $elm.prev('.widget-block').outerHeight();
			                animate($elm.prev('.widget-block'), top, dh);
			            }, 100);
		            }
            };

            var $leftLast = self.$el.find('.split-left >.widget-block').last();
            var $rightLast = self.$el.find('.split-right >.widget-block').last();
            var top = 0;
            //$dropDiv.each(function(){
            //    top += $(this).outerHeight();
            //});
            animate($leftLast, 0, 0, $leftLast.outerHeight());
            animate($rightLast, 0, 0, $rightLast.outerHeight());
*/ 


/*
                def, childDef, name,
                getDef = function(name, childDef){
            		var def = $.Deferred();
            		def.done( function(){
		                requirejs(['js/views/home/'+ name], function(Widget){
		                	self.setView(new Widget());
		                	if(childDef)
		                		childDef.resolve();
		                });
            		});
            		return def;
                };
            
            self.$el.empty().append( html );
            
            for(var i=self.widgets.length-1; i >= 0; i--){
            	
            	if(!self.widgets[i].enabled || !self.widgets[i].visible)
            		continue;
            	
            	def = getDef( self.widgets[i].name, def);
            }
            def.resolve();
            
*/