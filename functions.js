$(document).ready(function(){
	
	var num = 0;
	
		
		$('button').on('click', function(){
			
			num = num + 1;
		$('li:last-child').before('<li><label>Item '+ num +'</label><span><input type="number" value=""><div class="x"></div></span></li>');
	});
	
	$('html').on('click', '.x', function(){
		
		var thisParent = $(this).parent();
		
		$(thisParent.parent()).remove();
			
			if($('input').length === 0){
				$('#total').text('0');
			}else {
				var sum = 0;
				$('input').each(function() {
        			sum += Number($(this).val());
					$('#total').text(sum);
				});
				if(sum > 0){
				$('#total').css('opacity', '1');
				}else {
				$('#total').css('opacity', '0');
			}
	
			}		
	});
	

		$('html').on('input', function(e) {		
			var sum = 0;
			$('input').each(function() {
        		sum += Number($(this).val());
				$('#total').text(sum);	
			});
			
			if(sum > 0){
				$('#total').css('opacity', '1');
			}else {
				$('#total').css('opacity', '0');
			}
			
		});
		
	
});


