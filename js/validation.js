$(function() {

	$("#register-form").validade({
		rules:{
			ccpf:{
				required:true,
				ccpf:true
			}
		}
	});
});