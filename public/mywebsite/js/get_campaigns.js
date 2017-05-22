
$(document).ready(function(){
	$('.time').keyup(function() {
		if (/\D/g.test(this.value)){
			// Filter non-digits from input value.
			this.value = this.value.replace(/\D/g, '');
		}
		var foo = $(this).val().split(":").join(""); // remove hyphens
		if (foo.length > 0 && foo.length < 5) {
			foo = foo.match(new RegExp('.{1,2}', 'g')).join(":");
		}else{

		}
		$(this).val(foo);
	});
	//setTimeout(function() {
	//	window.location.href = 'http://user:user@10.254.99.61/cgi-bin/logout.cgi'; 
	//	console.log("timeout");
	//}, 3000);
	$('select').material_select();
	$('#wait').hide();
	
	$('.datepicker').pickadate({
            selectMonths: true,
            selectYears: true,
            format: 'yyyy-mm-dd',
			min: new Date(2015,01,01)
    });

	$("form#inputForm").submit(function(){
		var active = $('select[name=selector]').val();
		var sort = $('select[name=selector2]').val();
		var startTimeStartD = $('#startTimeStartD').val();
		var startTimeStartT = $('#startTimeStartT').val();
		var startTimeEndD = $('#startTimeEndD').val();
		var startTimeEndT = $('#startTimeEndT').val();

		var stopTimeStartD = $('#stopTimeStartD').val();
		var stopTimeStartT = $('#stopTimeStartT').val();
		var stopTimeEndD = $('#stopTimeEndD').val();
		var stopTimeEndT = $('#stopTimeEndT').val();

		var createdStartD = $('#createdStartD').val();
		var createdStartT = $('#createdStartT').val();
		var createdEndD = $('#createdEndD').val();
		var createdEndT = $('#createdEndT').val();

		var clientIdent = $('#clientIdent').val();
		

		//console.log(startDate, startTime, endDate, endTime);
		console.log(active);
		console.log(clientIdent);
		console.log(startTimeStartD);
		console.log(startTimeStartT);
		if(startTimeStartT == ""){
			console.log('hello');
		}
		if(active == null && sort == null){
			//$('div#select1').attr("style", "background-color: #FFCCCC; -webkit-transition: opacity 3s ease-in-out; opacity: 1;");
			$('div#select1').append('<span id="invlaid_tooltip1" class="tooltiptext">Please select a field</span>');
			$('div#select2').append('<span id="invlaid_tooltip2" class="tooltiptext">Please select a field</span>');
			return false;
		}else if(sort == null){
			$('div#select2').append('<span id="invlaid_tooltip2" class="tooltiptext">Please select a field</span>');
			$('span#invlaid_tooltip1').remove();
			return false;
		}else if (active == null){
			$('div#select1').append('<span id="invlaid_tooltip1" class="tooltiptext">Please select a field</span>');
			$('span#invlaid_tooltip2').remove();
			return false;
		}else{
			$('span#invlaid_tooltip1').remove();
			$('span#invlaid_tooltip2').remove();
		}
		if ((startTimeStartD != "") && (startTimeStartT == "" || startTimeEndD == "" || startTimeEndT == "")){
			console.log('hello2');
			$('div#stsd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (startTimeStartT != "") && (startTimeStartD == "" || startTimeEndD == "" || startTimeEndT == "") ){
			$('div#stsd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (startTimeEndD != "") && (startTimeStartD == "" || startTimeStartT == "" || startTimeEndT == "") ){
			$('div#stsd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (startTimeEndT != "") && (startTimeStartD == "" || startTimeStartT == "" || startTimeEndD == "") ){
			$('div#stsd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else{
			$('span#invlaid_tooltip1').remove();
		}
		if ((stopTimeStartD != "") && (stopTimeStartT == "" || stopTimeEndD == "" || stopTimeEndT == "")){
			console.log('hello2');
			$('div#sosd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (stopTimeStartT != "") && (stopTimeStartD == "" || stopTimeEndD == "" || stopTimeEndT == "") ){
			$('div#sosd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (stopTimeEndD != "") && (stopTimeStartD == "" || stopTimeStartT == "" || stopTimeEndT == "") ){
			$('div#sosd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (stopTimeEndT != "") && (stopTimeStartD == "" || stopTimeStartT == "" || stopTimeEndD == "") ){
			$('div#sosd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else{
			$('span#invlaid_tooltip1').remove();
		}
		if ((createdStartD != "") && (createdStartT == "" || createdEndD == "" || createdEndT == "")){
			console.log('hello2');
			$('div#crsd').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (createdStartT != "") && (createdStartD == "" || createdEndD == "" || createdEndT == "") ){
			$('div#crst').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (createdEndD != "") && (createdStartD == "" || createdStartT == "" || createdEndT == "") ){
			$('div#cred').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else if( (createdEndT != "") && (createdStartD == "" || createdStartT == "" || createdEndD == "") ){
			$('div#cret').append('<span id="invlaid_tooltip1" class="tooltiptextleft">Please enter Start and End time range</span>');
			return false;
		}else{
			$('span#invlaid_tooltip1').remove();
		}

		if (true){
			var type, url, data, error, success;
			var params = {
				type: "POST",
				url: "/cgi-bin/getCampaignResult.pl",
				beforeSend: function(){ $('#wait').show(); $('#whiteCard').show(); },
				complete: function(){ $('#wait').hide(); },
				cache: false,
				timeout: 30000
			}				
			params.data = "active=" + active + "&startTimeStartD="+ startTimeStartD + "&startTimeStartT=" + startTimeStartT + "&startTimeEndD=" + startTimeEndD + "&startTimeEndT=" + startTimeEndT + "&stopTimeStartD=" + stopTimeStartD + "&stopTimeStartT=" + stopTimeStartT + "&stopTimeEndD=" + stopTimeEndD + "&stopTimeEndT=" + stopTimeEndT + "&createdStartD=" + createdStartD + "&createdStartT=" + createdStartT + "&createdEndD=" + createdEndD + "&createdEndT=" + createdEndT + "&clientIdent=" + clientIdent + "&sort=" + sort;
			params.error = function(){
							$('div#Result').text("script call was not successful");
			};
			params.success = function(perl_data){
							$('div#Result').html(perl_data);
							$(".export").on('click', function (event) {
								// CSV
								exportTableToCSV.apply(this, [$('#Result>table'), 'export.csv']);
								// IF CSV, don't do event.preventDefault() or return false
								// We actually need this to be a typical hyperlink
							});			
			};
			console.log(params.data);
			$.ajax(params);

		}
		$('div#Result').fadeIn();
		return false;
	});
	function exportTableToCSV($table, filename) {

        var $headers = $table.find('tr:has(th)'), $rows = $table.find('tr:has(td)'),

            // Temporary delimiter characters unlikely to be typed by keyboard
            // This is to avoid accidentally splitting the actual contents
            tmpColDelim = String.fromCharCode(11), // vertical tab character
            tmpRowDelim = String.fromCharCode(0), // null character

            // actual delimiter characters for CSV format
            colDelim = '","',
            rowDelim = '"\r\n"';
			// Grab text from table into CSV formatted string
			var csv = '"';
			csv += formatRows($headers.map(grabRow));
			csv += rowDelim;
			csv += formatRows($rows.map(grabRow)) + '"'; 
            
            // Data URI
            csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

        $(this)
            .attr({
            'download': filename,
                'href': csvData,
                'target': '_blank'
        });
		function formatRows(rows){
            return rows.get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim);
		}
		function grabRow(i,row){
			var $row = $(row),
				$cols = $row.find('td');
				if(!$cols.length) $cols = $row.find('th');
				return $cols.map(grabCol)
					.get().join(tmpColDelim);
		}
		function grabCol(j,col){
			var $col = $(col),
				$text = $col.text();
				return $text.replace('"', '""');
		}

    }

});

