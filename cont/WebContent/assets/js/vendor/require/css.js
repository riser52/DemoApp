/**	`css` is a requirejs plugin
	that loads a css file and inject it into a page.
	note that this loader will return immediately,
	regardless of whether the browser had finished parsing the stylesheet.
	this css loader is implemented for file optimization and depedency managment
 */
define({
	load: function (name, req, onLoad, config) {
		var cls = null, cssName;
		
		if(typeof document != "undefined" && typeof $ != "undefined"){
			if(name.indexOf('#') != -1){
				cls = name.substring(0, name.indexOf('#'));
				cssName = name.substring(name.indexOf('#')+1);
			}
			filename = req.toUrl(cssName+ '.css');
			cls = cls || 'page_css_link';
			var head = document.getElementsByTagName('head')[0];
			
			var found = false, 
				links = $("."+cls);
			$(links).each(function() {
			    if( $(this).attr('href') == filename ){
			    	found = true;
			    }
			    return !found;
			});
			
			if(found === false){
				link = document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.setAttribute('class', cls); 
				head.appendChild(link);
				link.href = filename;
				
				link.onload = function(){
					onLoad(true);
					require.undef('cssLoader!'+name);
				};
				link.onerror = function(){
					onLoad.error("Unable to load css "+ filename);
					require.undef('cssLoader!'+name);
				};
			} else{
				onLoad(true);
			}
		} else{
			onLoad(true);
		}
	},

	unload: function(cls){
		if(typeof document != "undefined" && typeof $ != "undefined"){
			cls = cls || 'page_css_link'; 
			var i=0;
			var head = document.getElementsByTagName('head')[0];
			var links = $("."+cls);
			$(links).each(function(){
	    		head.removeChild(this);
			});
		}
	}
});
