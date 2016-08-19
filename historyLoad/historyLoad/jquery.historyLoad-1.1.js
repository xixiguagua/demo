(function($){
	var ajax;
	var currentState;
	$.fn.historyLoad = function(target){
		var obj = this;
		$(this).find('a').click(function(){
			var url = $(this).attr('href');
			if(ajax == null){
				currentState = {
					url: document.location.href,
					title: document.title,
					html: $(target).html()
				};
			}else{
				ajax.abort();
			}
			ajax = $.ajax({
				url: url,
				type: 'POST',
				beforeSend: function(){},
				error: function(request){},
				success: function(data){
					data = '<div>' + data + '</div>'
					var html = $(data).find(target).html();
					var title = data.substr(data.indexOf('<title>') + 7);
					title = title.substr(0, title.indexOf('</title>'));
					var state = {
						url: url,
						title: title,
						html: html
					};
					history.pushState(state, title, url);
					document.title = title;
					$(target).html(html);
					$(obj).historyLoad(target);
				}
			});
			return false;
		});
		window.onpopstate = function(event){
			if(ajax == null){
				return;
			}else if(event && event.state){
				document.title = event.state.title;
				$(target).html(event.state.html);
			}else{
				document.title = currentState.title;
				$(target).html(currentState.html);
			}
		}
	}
})(jQuery);