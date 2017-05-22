$(document).ready(function(){
	var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
	$('select').material_select();
	$('#wait').hide();
	
	$('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 1,
            format: 'yyyy-mm-dd'
    });
	$('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
	$(document).ajaxStop(function (){
		$('#wait').hide();
	});
	$("form#inputForm").submit(function(){
		//console.log(startDate, startTime, endDate, endTime);
		if (true){
			var type, url, data, error, success;
			var params = {
				type: "POST",
				url: "/cgi-bin/getHealthResult.pl",
				beforeSend: function(){ $('#wait').show(); $('#whiteCard').show(); },
				data:"host_input=probe",
				cache: false,
				timeout: 30000
			}				
			params.error = function(){
							$('div#ProbeResult').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#ProbeResult').html(perl_data);			
			};
			console.log(params.data);
			$.ajax(params);

			params.data = "host_input=jmlcm";
			params.error = function(){
							$('div#JMLCMResult').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#JMLCMResult').html(perl_data);			
			};
			console.log(params.data);
			$.ajax(params);

			params.data = "host_input=psiu";
			params.error = function(){
							$('div#PSIUResult').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#PSIUResult').html(perl_data);			
			};
			console.log(params.data);
			$.ajax(params);

			params.data = "host_input=pslte";
			params.error = function(){
							$('div#PSLTEResult').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#PSLTEResult').html(perl_data);			
			};
			console.log(params.data);
			$.ajax(params);
			
			params.data = "host_input=etl";
			params.error = function(){
							$('div#ETLResult').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#ETLResult').html(perl_data);			
			};
			console.log(params.data);
			$.ajax(params);

			params.data = "host_input=etl-hist";
			params.error = function(){
							$('div#ETLHistLogResult').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#ETLHistLogResult').html(perl_data);			
			};
			console.log(params.data);
			$.ajax(params);

			params.data = "host_input=rpt";
			params.error = function(){
							$('div#RPTResult').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#RPTResult').html(perl_data);			
			};
			console.log(params.data);
			$.ajax(params);
			
		}

		$('div#ProbeResult').fadeIn();
		$('div#JMLCMResult').fadeIn();
		$('div#PSIUResult').fadeIn();
		$('div#PSLTEResult').fadeIn();
		$('div#ETLResult').fadeIn();
		$('div#ETLHistLogResult').fadeIn();
		$('div#RPTResult').fadeIn();
		return false;
		

	});
});

