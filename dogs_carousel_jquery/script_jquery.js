
$(function(){
	$('#l1').click(function(){
		$('#imagem1').show();
		$('#imagem2').hide();
		$('#imagem3').hide();
	});
	
	$('#l2').click(function(){
		$('#imagem1').hide();
		$('#imagem2').show();
		$('#imagem3').hide();
	});
	
	$('#l3').click(function(){
		$('#imagem1').hide();
		$('#imagem2').hide();
		$('#imagem3').show();
	});
	
});