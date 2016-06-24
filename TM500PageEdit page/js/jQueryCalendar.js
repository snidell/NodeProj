function DocumentReady()
{
	//when the document is loaded make scripts available to run
	$(document).ready(function(){
		//send data to the server for TM1 Reservation
		$.post('/TM1data',function(data){
			var today=new Date();   
			//adds todays date to the calendar     
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});
        	//launches calendar
     		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});		
		});
		

		$.post('/TM2data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar2').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM3data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar3').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM4data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar4').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM5data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar5').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM6data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar6').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM7data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar7').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM8data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar8').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM9data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar9').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});

		$.post('/TM10data',function(data){
			var today=new Date();        
        	data.push({title:'Today',start:today,end:today,color:'#257e4a'});

     		$('#calendar10').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: today,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			eventSources:[data]
			});
     		
			
		});
	});
}