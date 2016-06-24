//Picker for TM-1

$(function() {
     var dateSel= new Date();
    $( "#startDate1" ).datepicker({
      defaultDate: "+0",//sets default date of picker to today
      minDate: +0,//sets in date to today
      changeMonth: true,  //allows month to be changed on start date    
      numberOfMonths: 2, //shows two months at a time
      onClose: function( selectedDate) {
        $( "#endDate1" ).datepicker( "option", "minDate", selectedDate);
        //need for the +60days window for enddate
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);//set max for endDate
        dateSel.setYear(year);
      }
    });

    $( "#endDate1" ).datepicker({
      defaultDate: "+0",//default date to today
      changeMonth: true,//change month 
      maxDate : dateSel,//set max date to 2months + selected date of start
      numberOfMonths: 2,//shwow two months at a time
      onClose: function( selectedDate ) {
        $( "#startDate1" ).datepicker( "option", "maxDate", selectedDate );
      }
    });


  });
  //implments timepicker for start time
 $(function() {
      $('#startTime1').timepicker();
  });
 //implements time pickeer for end time
 $(function() {
      $('#endTime1').timepicker();
  });

//Picker for TM-2

$(function() {
     var dateSel= new Date();
    $( "#startDate2" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate2" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate2" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate2" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });
 $(function() {
      $('#startTime2').timepicker();
  });

 $(function() {
      $('#endTime2').timepicker();
  });
//Picker for TM-3

$(function() {
     var dateSel= new Date();
    $( "#startDate3" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate3" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate3" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate3" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });
 $(function() {
      $('#startTime3').timepicker();
  });

 $(function() {
      $('#endTime3').timepicker();
  });

//Picker for TM-4

$(function() {
     var dateSel= new Date();
    $( "#startDate4" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate4" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate4" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate4" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

 $(function() {
      $('#startTime4').timepicker();
  });

 $(function() {
      $('#endTime4').timepicker();
  });

//Picker for TM-5

$(function() {
     var dateSel= new Date();
    $( "#startDate5" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate5" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate5" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate5" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

 $(function() {
      $('#startTime5').timepicker();
  });

 $(function() {
      $('#endTime5').timepicker();
  });

//Picker for TM-6

$(function() {
     var dateSel= new Date();
    $( "#startDate6" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate6" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate6" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate6" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

 $(function() {
      $('#startTime6').timepicker();
  });

 $(function() {
      $('#endTime6').timepicker();
  });

//Picker for TM-7

$(function() {
     var dateSel= new Date();
    $( "#startDate7" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate7" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate7" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate7" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

 $(function() {
      $('#startTime7').timepicker();
  });

 $(function() {
      $('#endTime7').timepicker();
  });

//Picker for TM-8

$(function() {
     var dateSel= new Date();
    $( "#startDate8" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate8" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate8" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate8" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

 $(function() {
      $('#startTime8').timepicker();
  });

 $(function() {
      $('#endTime8').timepicker();
  });

//Picker for TM-9

$(function() {
     var dateSel= new Date();
    $( "#startDate9" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate9" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate9" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate9" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

 $(function() {
      $('#startTime9').timepicker();
  });

 $(function() {
      $('#endTime9').timepicker();
  });

//Picker for TM-10

$(function() {
     var dateSel= new Date();
    $( "#startDate10" ).datepicker({
      defaultDate: "+0",
      minDate: +0,
      changeMonth: true,      
      numberOfMonths: 2,
      onClose: function( selectedDate) {
        $( "#endDate10" ).datepicker( "option", "minDate", selectedDate);
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth(),              
            year =  date.getFullYear();
        dateSel.setDate(day);
        dateSel.setMonth(month+2);
        dateSel.setYear(year);
      }
    });

    $( "#endDate10" ).datepicker({
      defaultDate: "+0",
      changeMonth: true,
      maxDate : dateSel,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#startDate10" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

 $(function() {
      $('#startTime10').timepicker();
  });

 $(function() {
      $('#endTime10').timepicker();
  });
