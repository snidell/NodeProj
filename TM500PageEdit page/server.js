var express        = require("express");//for middleware
var bodyParser     = require("body-parser");//parses HTMl DIV/ID tags
var app            = express();//Start express
var fs 			   = require("fs");//For reading writing files
var q              = require('q');//required for promises
/**Holds reservations in a data manipulative format**/
var globalNum;
//holds results of a date that is overlapping for date boundary check
var results=[];
var reservationID;
var userID;
var TM1_Reservations=[];
var temp_TM1_Reservations=[];
var TM2_Reservations=[];
var TM3_Reservations=[];
var TM4_Reservations=[];
var TM5_Reservations=[];
var TM6_Reservations=[];
var TM7_Reservations=[];
var TM8_Reservations=[];
var TM9_Reservations=[];
var TM10_Reservations=[];
var TM_Features=[];// holds features string for each TM tool tip
var Users=[];//Holds users of the system
var SortedUsers=[];
readID();


/**Holds reservations in JSON format for calendar**/
var TM1_Reservations_calendar=[];
var TM2_Reservations_calendar=[];
var TM3_Reservations_calendar=[];
var TM4_Reservations_calendar=[];
var TM5_Reservations_calendar=[];
var TM6_Reservations_calendar=[];
var TM7_Reservations_calendar=[];
var TM8_Reservations_calendar=[];
var TM9_Reservations_calendar=[];
var TM10_Reservations_calendar=[];
//Load reservations from files on server start
readReservations();
//sortUsers in system for pulldown menus
sortUsers();




/** Sending Home page to user**/
 app.use(bodyParser.urlencoded({ extended: false }));
 app.get('/',function(req,res){
 	//Needed for CSS styles and date picker to work on GET
 	app.use(express.static(__dirname));
   res.sendFile(__dirname + '/Index.html');
});
 //sending page to reserve TM500
 app.get('/Reserve',function(req,res){
  //Needed for CSS styles and date picker to work on GET
  app.use(express.static(__dirname));
   res.sendFile(__dirname + '/Tm500Res.html');
});
//Calendar view of reservations
 app.get('/Overview',function(req,res){
 	//Needed for CSS styles and date picker to work on GET
 	app.use(express.static(__dirname));
   res.sendFile(__dirname + '/TM500--Overview.html');
});
 //send edit reservation page
 app.get('/editReservation',function(req,res){
  //Needed for CSS styles and date picker to work on GET
  app.use(express.static(__dirname));
   res.sendFile(__dirname + '/EditReservation.html');
});
//send edit features page
 app.get('/editFeatures',function(req,res){
  app.use(express.static(__dirname));
  res.sendFile(__dirname + '/editFeatures.html');
});
//sends manage users page
  app.get('/manageUsers',function(req,res){
  app.use(express.static(__dirname));
  res.sendFile(__dirname + '/manageUsers.html');
});
//send reservations in calendar format to TM1
 app.post('/TM1data',function(req,res){ 	
 	res.send(TM1_Reservations_calendar);
 });
//send reservations in calendar format to TM2
 app.post('/TM2data',function(req,res){ 	
 	res.send(TM2_Reservations_calendar);
 });
//send reservations in calendar format to TM3
 app.post('/TM3data',function(req,res){ 	
 	res.send(TM3_Reservations_calendar);
 });
//send reservations in calendar format to TM4
 app.post('/TM4data',function(req,res){ 	
 	res.send(TM4_Reservations_calendar);
 });
//send reservations in calendar format to TM5
 app.post('/TM5data',function(req,res){ 	
 	res.send(TM5_Reservations_calendar);
 });
//send reservations in calendar format to TM6
 app.post('/TM6data',function(req,res){ 	
 	res.send(TM6_Reservations_calendar);
 });
//send reservations in calendar format to TM7
 app.post('/TM7data',function(req,res){ 	
 	res.send(TM7_Reservations_calendar);
 });
//send reservations in calendar format to TM8
 app.post('/TM8data',function(req,res){ 	
 	res.send(TM8_Reservations_calendar);
 });
//send reservations in calendar format to TM9
 app.post('/TM9data',function(req,res){ 	
 	res.send(TM9_Reservations_calendar);
 });
//send reservations in calendar format to TM10
 app.post('/TM10data',function(req,res){ 	
 	res.send(TM10_Reservations_calendar);
 });
 //sends an array of strings that deatils the features of each TM module for Tooltips
 app.post('/getFeatures',function(req,res){  
  res.send(TM_Features);
 });
 //edits the "feature portion" of the Popup menu on "Create reservations" page
 app.post('/submitFeatures',function(req,res){ 
   editFeatures(req.body.TM,req.body.Features);
   res.end("yes");
 });

// Getting Data from from reservation form
 app.post('/TM1',function(req,res){
    sortUsers();
   var pathName="data/TM1data.json";   
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;
   //parse the time into date objects
   parseTime(startTime,startDate);
   parseTime(endTime,endDate);
   //adds the new reservation to the system
   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM1_Reservations,pathName,TM1_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   }  
   
});

 app.post('/TM2',function(req,res){
   var pathName="data/TM2data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   //console.log("User name = "+user_name+" Telephone: "+user_tele+" startDate is "+startDate+
    //" start Time: "+ startTime+" End Date is: "+ endDate+" end time: "+endTime);
   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM2_Reservations,pathName,TM2_Reservations_calendar);
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   }  
});

 app.post('/TM3',function(req,res){
   var pathName="data/TM3data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM3_Reservations,pathName,TM3_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/TM4',function(req,res){
   var pathName="data/TM4data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM4_Reservations,pathName,TM4_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/TM5',function(req,res){
   var pathName="data/TM5data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM5_Reservations,pathName,TM5_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/TM6',function(req,res){
   var pathName="data/TM6data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM6_Reservations,pathName,TM6_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/TM7',function(req,res){
   var pathName="data/TM7data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM7_Reservations,pathName,TM7_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/TM8',function(req,res){
   var pathName="data/TM8data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM8_Reservations,pathName,TM8_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/TM9',function(req,res){
   var pathName="data/TM9data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM9_Reservations,pathName,TM9_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/TM10',function(req,res){
   var pathName="data/TM10data.json";
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var ResID=reservationID;
   var dateTaken;

   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM10_Reservations,pathName,TM10_Reservations_calendar);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){    
    res.send(results);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   } 
});

 app.post('/searchTM',function(req,res){     
   
   console.log("posted");
   function doSomethingAsync() {
      var deferred = q.defer();
      setTimeout(function() {
        do{
        deferred.resolve(searchID(req.body.TM,req.body.ResID));
      }while(deferred.promise==undefined);
      }, 500);

      return deferred.promise;
    }

    doSomethingAsync().then(function(val) {
      if(val==null){
        console.log("Sending null");
        res.send("No Results found");
      }
      console.log('Promise Resolved!'+ val);      
      res.send(val); 
    });
   
});

  app.post('/deleteTM',function(req,res){     
   console.log("posted");
   console.log("TM: "+req.body.TM+" index: "+req.body.index);
   deleteID(req.body.TM,req.body.index);
   res.end("yes");
   
});

  app.post('/updateTM',function(req,res){     
   var ResID=reservationID;
   var dateTaken;
   var resDet=[];
   var tempResults=[];


   //delete current one delete ID returns deleted reservation and the TM it was deleted on
   resDet=deleteID(req.body.TM,req.body.index);
   //add new edited version
   dateTaken=editReservation(req,ResID); 
   tempResults=results.slice(0);
   //if the date is taken send the date that takes up current time period
   if(dateTaken==true){
    TM1Add(resDet[0].reservation.ResID,resDet[0].reservation.name,resDet[0].reservation.startDate,resDet[0].reservation.endDate,resDet[0].reservation.phone,resDet[0].TM,resDet[0].path,resDet[0].TM_Calendar);
    console.log("TempResults in TM update after TM1Add "+tempResults[0].overlap+"\n Results TM: "+tempResults[0].TM.name);
    res.send(tempResults);
   }else{
    //else send the Reservation ID to user
    res.send(ResID.toString());
   }



});
/***** User posts*********/
app.post('/deleteUser',function(req,res){
   console.log("Removing user:"+ req.body.UserID); 
   removeUser(req.body.UserID);   
   res.send("yes"); 

});

app.post('/addUser',function(req,res){    
   res.send(createUser(req.body.Name,req.body.Phone));  
});

app.post('/loadUser',function(req,res){    
   res.send(Users); 
});

app.post('/loadSortedUser',function(req,res){
   sortUsers();
   res.send(SortedUsers); 
});

 app.listen(3001,'127.0.0.1'function(){
   console.log("Started on PORT 3001");
})


/**
 *Description: splits time string 00:00pm or 00:00am to a hour and minute integers
 *then sets those times to the date being passed to it.
 **/

function parseTime(timeString,date) {
          //if no time string is passed return   
          if (timeString == '') return null;
          //split the string
          var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i); 
          if (time == null) return null;
          //get hours and format
          var hours = parseInt(time[1],10);    
          if (hours == 12 && !time[4]) {
          hours = 0;
          }
          else {
          hours += (hours < 12 && time[4])? 12 : 0;
          }   
                      
          date.setHours(hours);
          date.setMinutes(parseInt(time[3],10) || 0);
          date.setSeconds(0, 0);           
}

 // Saving data to array
function TM1Add(ResID,name,startDate,endDate,phone,TM_Reservation,pathName,TM_Reservation_Calendar){	
	//check to see if reservation exists first
  var dateOverlap;
  dateOverlap=dateRangeIsTaken(startDate,endDate,TM_Reservation);
  //console.log(results);
  //if current date overlaps return what reservation overlaps
  //console.log("dateOverlap="+dateOverlap);
  if(dateOverlap==true){
    console.log("Overlap==true in TM1add");
    return dateOverlap;
  }


	var startMonth=(startDate.getMonth()+1);
	var startDay=startDate.getDate();
	var startYear=startDate.getFullYear();
	var startHour=startDate.getHours();
	var startMin=startDate.getMinutes();
	var endMonth=(endDate.getMonth()+1);
	var endDay=endDate.getDate();
	var endYear=endDate.getFullYear();
	var endHour=endDate.getHours();
	var endMin=endDate.getMinutes();
  
  //push new JSON data to array that was passed in.
	TM_Reservation.push({ResID: ResID,name:name,startDate:startDate,startMonth:startMonth,startDay:startDay,startYear:startYear,startHour:startHour,startMin:startMin,
		endDate:endDate,endMonth:endMonth,endDay:endDay,endYear:endYear,endHour:endHour,endMin:endMin,phone:phone});
	reservationID++;
  //store that data to a file
  writeReservations(TM_Reservation,pathName);	
	//get last element in reservations and translate to calendar for view	
	translateSingleToCalendar(TM_Reservation[(TM_Reservation.length-1)],TM_Reservation_Calendar);
}

/** a Method that writes reservation data to a file  for long term storage**/
function writeReservations(TM_Reservations,pathName){
	var JSON_String= JSON.stringify(TM_Reservations,null,"\t");
	JSON_Sring=JSON.stringify(TM_Reservations,null,4);
	fs.writeFile(pathName, JSON_String, function (err) {
  	
  	if (err) return console.log(err+"path not found: "+pathName);
  	
});
  //save current reservation ID to file
  fs.writeFile("data/config.txt", reservationID, function (err) {    
    if (err) return console.log(err+"path not found: "+pathName);    
});
  fs.writeFile("data/usersID.txt", userID, function (err) {    
    if (err) return console.log(err+"path not found: "+pathName);    
});

}
//Method is called on server up to read all data files and update TM_Reservation 
//and calendar arrays
function readReservations(){	

  //Load config file that contains the reservation ID
  fs.readFile('data/config.txt', handleFile0);
  
  // Callback function for Async file read
  function handleFile0(err, data) {
     if (err) throw err
     reservationID = parseInt(data);     
    }
  //Load from file for TM1 stored in the folder "data" and in file TM1data.json
	fs.readFile('data/TM1data.json', handleFile1);
	
	// Callback function for Async file read
	function handleFile1(err, data) {
     if (err) throw err
     TM1_Reservations = JSON.parse(data);//create JSON structure
     translateToCalendar(TM1_Reservations,TM1_Reservations_calendar);//translate all to calendar format
     translateToObjects(TM1_Reservations);
    }

  //Load from file for TM2
  fs.readFile('data/TM2data.json', handleFile2);
	
	// Callback function for Async file read
	function handleFile2(err, data){
     if (err) throw err
     TM2_Reservations = JSON.parse(data);      
     translateToCalendar(TM2_Reservations,TM2_Reservations_calendar); 
     translateToObjects(TM2_Reservations);
    }
   
  //Load from file for TM3
  fs.readFile('data/TM3data.json', handleFile3);
	
	// Callback function for Async file read
	function handleFile3(err, data){
     if (err) throw err
     TM3_Reservations = JSON.parse(data);    
     translateToCalendar(TM3_Reservations,TM3_Reservations_calendar);
     translateToObjects(TM3_Reservations);
    }
 	
  //Load from file for TM4
  fs.readFile('data/TM4data.json', handleFile4);
	
	// Callback function for Async file read
	function handleFile4(err, data){
     if (err) throw err
     TM4_Reservations = JSON.parse(data);    
     translateToCalendar(TM4_Reservations,TM4_Reservations_calendar);
     translateToObjects(TM4_Reservations);
    }

  //Load from file for TM5
  fs.readFile('data/TM5data.json', handleFile5);
	
	// Callback function for Async file read
	function handleFile5(err, data){
     if (err) throw err
     TM5_Reservations = JSON.parse(data);    
     translateToCalendar(TM5_Reservations,TM5_Reservations_calendar);
     translateToObjects(TM5_Reservations);
    }
    
  //Load from file for TM6
  fs.readFile('data/TM6data.json', handleFile6);
	
	// Callback function for Async file read
	function handleFile6(err, data){
     if (err) throw err
     TM6_Reservations = JSON.parse(data);    
     translateToCalendar(TM6_Reservations,TM6_Reservations_calendar);
     translateToObjects(TM6_Reservations);
    }
   
  //Load from file for TM7
  fs.readFile('data/TM7data.json', handleFile7);
	
	// Callback function for Async file read
	function handleFile7(err, data){
     if (err) throw err
     TM7_Reservations = JSON.parse(data);
     translateToCalendar(TM7_Reservations,TM7_Reservations_calendar);
     translateToObjects(TM7_Reservations);
    }

  //Load from file for TM8
  fs.readFile('data/TM8data.json', handleFile8);
	
	// Callback function for Async file read
	function handleFile8(err, data){
     if (err) throw err
     TM8_Reservations = JSON.parse(data);
     translateToCalendar(TM8_Reservations,TM8_Reservations_calendar);
     translateToObjects(TM8_Reservations);
    }

  //Load from file for TM9
  fs.readFile('data/TM9data.json', handleFile9);
	
	// Callback function for Async file read
	function handleFile9(err, data){
     if (err) throw err
     TM9_Reservations = JSON.parse(data);
     translateToCalendar(TM9_Reservations,TM9_Reservations_calendar);
     translateToObjects(TM9_Reservations);
    }

  //Load from file for TM10
  fs.readFile('data/TM10data.json', handleFile10);
	
	// Callback function for Async file read
	function handleFile10(err, data){
     if (err) throw err
     TM10_Reservations = JSON.parse(data);
     translateToCalendar(TM10_Reservations,TM10_Reservations_calendar);
     translateToObjects(TM10_Reservations);
    }

  fs.readFile('data/Features.json', handleFile11);
  
  // Callback function for Async file read
  function handleFile11(err, data){
     if (err) throw err
     TM_Features = JSON.parse(data);
    }

  fs.readFile('data/usersID.txt', handleFile12);
  
  // Callback function for Async file read
  function handleFile12(err, data){
     if (err) throw err
     userID = parseInt(data);    
    }

  fs.readFile('data/users.json', handleFile13);  
  // Callback function for Async file read
  function handleFile13(err, data){
     if (err) throw err
     Users= JSON.parse(data);
    }
    //data saved and stored currently as strings this function will convert Dates to objects
    
}


//Full Calendar requires a particular string format to allow dates to be added via array
//this function does that translation for a whole array of reservations at a time
function translateToCalendar(TM_Reservation,TM_Reservation_Calendar,mode){
  if(mode=="delete"){
    console.log("Deleting");
    TM_Reservation_Calendar.length=0;//delete anything that maybe in there
  }
  
  for( var i=0;i<TM_Reservation.length;i++){
	//have to do it this way as we need to add leading zeros to months/days no built in JS way to do it		
    	var tempElement={title: "",startYear:"",startMonth:"",startDay:"",endYear:"",endMonth:"",endDay:"",start:"",end:"",color:""}
    	var startHour;
    	var startMind;
    	var endHour;
    	var endMinute;
    	//console.log("startHour: "+TM_Reservation[i].startHour+" startMin: "+TM_Reservation[i].startMin+" endHour: "+TM_Reservation[i].endHour+" endMin: "+TM_Reservation[i].endMin);
    	tempElement.title=TM_Reservation[i].name+" Phone: "+TM_Reservation[i].phone+" ID: "+TM_Reservation[i].ResID;
    	tempElement.startYear=TM_Reservation[i].startYear;
    	/**START DATE**/
    	if(TM_Reservation[i].startMonth<=9){
    		tempElement.startMonth=("0"+TM_Reservation[i].startMonth);
    	}else{
    		tempElement.startMonth=TM_Reservation[i].startMonth;
    	}
    	if(TM_Reservation[i].startDay<=9){
    		tempElement.startDay=("0"+TM_Reservation[i].startDay);
    	}else{
    		tempElement.startDay=TM_Reservation[i].startDay;
    	}
    	/**END DATE**/
    	tempElement.endYear=TM_Reservation[i].endYear;
    	if(TM_Reservation[i].endMonth<=9){
    		tempElement.endMonth=("0"+TM_Reservation[i].endMonth);
    	}else{
    		tempElement.endMonth=TM_Reservation[i].endMonth;
    	}
    	if(TM_Reservation[i].endDay<=9){
    		tempElement.endDay=("0"+TM_Reservation[i].endDay);
    	}else{
    		tempElement.endDay=TM_Reservation[i].endDay;
    	}
    	/**TIME HANDLING HOUR/MINUTES**/
    	if(TM_Reservation[i].startHour<=9){
    		startHour="0"+TM_Reservation[i].startHour;
    	}else{
    		startHour=TM_Reservation[i].startHour;
    	}if(TM_Reservation[i].startMin<=9){
    		startMin="0"+TM_Reservation[i].startMin;
    	}else{
    		startMin=TM_Reservation[i].startMin;
    	}
    	//End Time
    	if(TM_Reservation[i].endHour<=9){
    		endHour="0"+TM_Reservation[i].endHour;
    	}else{
    		endHour=TM_Reservation[i].endHour;
    	}if(TM_Reservation[i].endMin<=9){
    		endMin="0"+TM_Reservation[i].endMin;
    	}else{
    		endMin=TM_Reservation[i].endMin;
    	}
    	tempElement.start=(tempElement.startYear+"-"+tempElement.startMonth+"-"+tempElement.startDay+"T"+startHour+":"+startMin+":00");
    	//needed to add "T23:59:00 so the whole day of the end day will show to calendar"
    	tempElement.end=(tempElement.endYear+"-"+tempElement.endMonth+"-"+tempElement.endDay+"T"+endHour+":"+endMin+":00");
    	TM_Reservation_Calendar.push(tempElement);
    } 
}

function translateToObjects(TM_Reservation){   
  for(var i=0;i<TM_Reservation.length;i++){
  TM_Reservation[i].startDate=new Date(TM_Reservation[i].startDate);
  TM_Reservation[i].endDate=new Date(TM_Reservation[i].endDate);
  }
}


//Full Calendar requires a particular string format to allow dates to be added via array
//this function does that translation one reservation at a time
function translateSingleToCalendar(Reservation,TM_Reservation_Calendar){
			//have to do it this way as we need to add leading zeros to months/days no built in JS way to do it		
    	var tempElement={title: "",startYear:"",startMonth:"",startDay:"",endYear:"",endMonth:"",endDay:"",start:"",end:"",color:""}
    	var startHour;
    	var startMind;
    	var endHour;
    	var endMinute;
    	
    	
    	tempElement.title=Reservation.name+" Phone: "+Reservation.phone+" ID: "+Reservation.ResID;
    	tempElement.startYear=Reservation.startYear;
    	/**START DATE**/
    	if(Reservation.startMonth<=9){
    		tempElement.startMonth=("0"+Reservation.startMonth);
    	}else{
    		tempElement.startMonth=Reservation.startMonth;
    	}
    	if(Reservation.startDay<=9){
    		tempElement.startDay=("0"+Reservation.startDay);
    	}else{
    		tempElement.startDay=Reservation.startDay;
    	}
    	/**END DATE**/
    	tempElement.endYear=Reservation.endYear;
    	if(Reservation.endMonth<=9){
    		tempElement.endMonth=("0"+Reservation.endMonth);
    	}else{
    		tempElement.endMonth=Reservation.endMonth;
    	}
    	if(Reservation.endDay<=9){
    		tempElement.endDay=("0"+Reservation.endDay);
    	}else{
    		tempElement.endDay=Reservation.endDay;
    	}
    	
    	if(Reservation.startHour<=9){
    		startHour="0"+Reservation.startHour;
    	}else{
    		startHour=Reservation.startHour;
    	}if(Reservation.startMin<=9){
    		startMin="0"+Reservation.startMin;
    	}else{
    		startMin=Reservation.startMin;
    	}
    	//End Time
    	if(Reservation.endHour<=9){
    		endHour="0"+Reservation.endHour;
    	}else{
    		endHour=Reservation.endHour;
    	}if(Reservation.endMin<=9){
    		endMin="0"+Reservation.endMin;
    	}else{
    		endMin=Reservation.endMin;
    	}
    	tempElement.start=(tempElement.startYear+"-"+tempElement.startMonth+"-"+tempElement.startDay+"T"+startHour+":"+startMin+":00");
    	//needed to add "T23:59:00 so the whole day of the end day will show to calendar"
    	tempElement.end=(tempElement.endYear+"-"+tempElement.endMonth+"-"+tempElement.endDay+"T"+endHour+":"+endMin+":00");
    	TM_Reservation_Calendar.push(tempElement);    
}

function readID(){
fs.readFile('data/testTM1data.json', handleFile1);
  
    // Callback function for Async file read
    function handleFile1(err, data) {
     if (err) throw err
     temp_TM1_Reservations = JSON.parse(data);//create JSON structure     
    }
}

//Given a array to search will return an index of the matching element. if not
//found will return null
function searchID(TM,id){   
   var ResID=id;

   console.log("I got: "+ResID+" and i got: " +TM);
   console.log ("TM1==TM1?"+("TM1"==TM));

   switch(TM){

    case "TM1":
        for (var i =0;i<TM1_Reservations.length;i++){          
          if(ResID==TM1_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM1_Reservations[i],index:i});     
            }
        }
        return null;

    break;
    case "TM2":
    for (var i =0;i<TM2_Reservations.length;i++){          
          if(ResID==TM2_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM2_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM3":
    for (var i =0;i<TM3_Reservations.length;i++){          
          if(ResID==TM3_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM3_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM4":
    for (var i =0;i<TM4_Reservations.length;i++){          
          if(ResID==TM4_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM4_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM5":
    for (var i =0;i<TM5_Reservations.length;i++){          
          if(ResID==TM5_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM5_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM6":
    for (var i =0;i<TM6_Reservations.length;i++){          
          if(ResID==TM6_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM6_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM7":
    for (var i =0;i<TM7_Reservations.length;i++){          
          if(ResID==TM7_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM7_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM8":
    for (var i =0;i<TM8_Reservations.length;i++){          
          if(ResID==TM8_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM8_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM9":
    for (var i =0;i<TM9_Reservations.length;i++){          
          if(ResID==TM9_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM9_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    case "TM10":
    for (var i =0;i<TM10_Reservations.length;i++){          
          if(ResID==TM10_Reservations[i].ResID){
            console.log("found ID");
            return ({TM:TM10_Reservations[i],index:i});     
            }
        }
        return null;
    break;
    default:
    console.log("invalid TM");
    break;
   }   
}

//deletes the given index from the given TM returns reservation that was deleted
function deleteID(TM,index){   
   var reservationDetails=[{reservation:null,TM:null,path:null,TM_Calendar:null}];
   switch(TM){
    case "TM1":
    reservationDetails[0].reservation=TM1_Reservations[index];
    reservationDetails[0].TM=TM1_Reservations;
    reservationDetails[0].path="data/TM1data.json";
    reservationDetails[0].TM_Calendar=TM1_Reservations_calendar;
    TM1_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM1_Reservations,TM1_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM1_Reservations,"data/TM1data.json");
    return reservationDetails;
    break;
    case "TM2":
    reservationDetails[0].reservation=TM2_Reservations[index];
    reservationDetails[0].TM=TM2_Reservations;
    reservationDetails[0].path="data/TM2data.json";
    reservationDetails[0].TM_Calendar=TM2_Reservations_calendar;
    TM2_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM2_Reservations,TM2_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM2_Reservations,"data/TM2data.json");
    return reservationDetails;
    break;
    case "TM3":
    reservationDetails[0].reservation=TM3_Reservations[index];
    reservationDetails[0].TM=TM3_Reservations;
    reservationDetails[0].path="data/TM3data.json";
    reservationDetails[0].TM_Calendar=TM3_Reservations_calendar;
    TM3_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM3_Reservations,TM3_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM3_Reservations,"data/TM3data.json");
    return reservationDetails;
    break;
    case "TM4":
    reservationDetails[0].reservation=TM4_Reservations[index];
    reservationDetails[0].TM=TM4_Reservations;
    reservationDetails[0].path="data/TM4data.json";
    reservationDetails[0].TM_Calendar=TM4_Reservations_calendar;
    TM4_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM4_Reservations,TM4_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM4_Reservations,"data/TM4data.json");
    return reservationDetails;
    break;
    case "TM5":
    reservationDetails[0].reservation=TM5_Reservations[index];
    reservationDetails[0].TM=TM5_Reservations;
    reservationDetails[0].path="data/TM5data.json";
    reservationDetails[0].TM_Calendar=TM5_Reservations_calendar;
    TM5_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM5_Reservations,TM5_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM5_Reservations,"data/TM5data.json");  
    return reservationDetails;  
    break;
    case "TM6":
    reservationDetails[0].reservation=TM6_Reservations[index];
    reservationDetails[0].TM=TM6_Reservations;
    reservationDetails[0].path="data/TM6data.json";
    reservationDetails[0].TM_Calendar=TM6_Reservations_calendar;
    TM6_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM6_Reservations,TM6_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM6_Reservations,"data/TM6data.json");
    return reservationDetails;
    break;
    case "TM7":
    reservationDetails[0].reservation=TM7_Reservations[index];
    reservationDetails[0].TM=TM7_Reservations;
    reservationDetails[0].path="data/TM7data.json";
    reservationDetails[0].TM_Calendar=TM7_Reservations_calendar;
    TM7_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM7_Reservations,TM7_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM7_Reservations,"data/TM7data.json");
    return reservationDetails;
    break;
    case "TM8":
    reservationDetails[0].reservation=TM8_Reservations[index];
    reservationDetails[0].TM=TM8_Reservations;
    reservationDetails[0].path="data/TM8data.json";
    reservationDetails[0].TM_Calendar=TM8_Reservations_calendar;
    TM8_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM8_Reservations,TM8_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM8_Reservations,"data/TM8data.json");
    return reservationDetails;
    break;
    case "TM9":
    reservationDetails[0].reservation=TM9_Reservations[index];
    reservationDetails[0].TM=TM9_Reservations;
    reservationDetails[0].path="data/TM9data.json";
    reservationDetails[0].TM_Calendar=TM9_Reservations_calendar;
    TM9_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM9_Reservations,TM9_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM9_Reservations,"data/TM9data.json");
    return reservationDetails;
    break;
    
    case "TM10":
    reservationDetails[0].reservation=TM10_Reservations[index];
    reservationDetails[0].TM=TM10_Reservations;
    reservationDetails[0].path="data/TM10data.json";
    reservationDetails[0].TM_Calendar=TM10_Reservations_calendar;
    TM10_Reservations.splice(index,1);
    //translate into calendar format
    translateToCalendar(TM10_Reservations,TM10_Reservations_calendar,"delete");
    //update file 
    writeReservations(TM10_Reservations,"data/TM10data.json");
    return reservationDetails;
    break;
    default:
    console.log("invalid TM");
    break;
   }   
}

function editReservation(req,ResID){
   console.log(req.body.TM+"|"+req.body.user);
   var TM=req.body.TM; 
   var user_name=req.body.user;
   var user_tele=req.body.telephone;
   var startDate=new Date(req.body.startDate);
   var startTime=req.body.startTime;
   var endDate =new Date(req.body.endDate);
   var endTime=req.body.endTime;
   var dateTaken;
   parseTime(startTime,startDate);
   parseTime(endTime,endDate);

   //commented out test purpose only
   //console.log("User name = "+user_name+" Telephone: "+user_tele+" startDate is "+startDate+
   //" start Time: "+ startTime+" End Date is: "+ endDate+" end time: "+endTime);
   
   switch(TM){
    case "TM1":
    var pathName="data/TM1data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM1_Reservations,pathName,TM1_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM2":
    var pathName="data/TM2data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM2_Reservations,pathName,TM2_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM3":
    var pathName="data/TM3data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM3_Reservations,pathName,TM3_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM4":
    var pathName="data/TM4data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM4_Reservations,pathName,TM4_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM5":
    var pathName="data/TM5data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM5_Reservations,pathName,TM5_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM6":
    var pathName="data/TM6data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM6_Reservations,pathName,TM6_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM7":
    var pathName="data/TM7data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM7_Reservations,pathName,TM7_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM8":
    var pathName="data/TM8data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM8_Reservations,pathName,TM8_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM9":
    var pathName="data/TM9data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM9_Reservations,pathName,TM9_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    case "TM10":
    var pathName="data/TM10data.json";
    dateTaken=TM1Add(ResID,user_name,startDate,endDate,user_tele,TM10_Reservations,pathName,TM10_Reservations_calendar);    
    return dateTaken;//return new ID to edited reservation
    break;
    default:
    console.log("invalid TM");
    break;
   }
}

function editFeatures(TM,features){
    switch(TM){
    case "TM1":
    TM_Features[1]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM2":
    TM_Features[2]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM3":
    TM_Features[3]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM4":
    TM_Features[4]=features;
    writeReservations(TM_Features,"data/Features.json");    
    break;
    case "TM5":
    TM_Features[5]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM6":
    TM_Features[6]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM7":
    TM_Features[7]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM8":
    TM_Features[8]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM9":
    TM_Features[9]=features;    
    writeReservations(TM_Features,"data/Features.json");
    break;
    case "TM10":
    TM_Features[10]=features;
    writeReservations(TM_Features,"data/Features.json");
    break;
    default:
    console.log("invalid TM");
    break;
    }
}

function createUser(name,phone){
    if(userExists(name)){
      return false;
    }

    userID++;
    Users.push({UserID:userID,Name:name,Phone:phone});
    writeReservations(Users,"data/Users.json");
    return Users[(Users.length-1)];    
}
function userExists(name){
  for(var i=0;i<Users.length;i++){
    if(name==Users[i].Name){
      return true;
    }
  }
}

function removeUser(UserID){
  for(var i=0;i<Users.length;i++){
    if(Users[i].UserID==UserID){
      Users.splice(i,1);
    }
  }
  writeReservations(Users,"data/Users.json");
}

function sortUsers(){
  SortedUsers.length=0;
  SortedUsers=Users.slice();

  SortedUsers.sort(function(a,b){
    var nameA=a.Name.toLowerCase();
    var nameB=b.Name.toLowerCase();
    if(nameA<nameB){
      return -1;
    }
    if(nameA>nameB){
      return 1;
    }
    return 0;
  });
  
}
//Checks date ranges of Current TM to see if range is taken already
//returns true with the reservation conflicting with
//returns false otherwise
function dateRangeIsTaken(start,end,TM){
  results.length=0;//delete results
  results.push({overlap:false,TM:null,dateSide:""});//push default
   for(var i=0;i<TM.length;i++){
      //check if start date overlaps with anything
      //console.log("checkign startTM<startPassed"+(TM[i].startDate<start)+" startPassed<endTM "+(start<TM[i].endDate));
      if((TM[i].startDate<=start) && (start<=TM[i].endDate)){
          console.log("start overlaps with: "+TM[i]);
          results[0].overlap=true;
          results[0].TM=TM[i];
          results[0].dateSide="start Date";
          globalNum=10000000;
          return true;
      }
      //check if end date overlaps with anything
      //console.log("checkign startTM<end"+(TM[i].startDate<end)+" endTM>end "+(end<TM[i].endDate));
      if(TM[i].startDate<=end && end<= TM[i].endDate){
          console.log("end overlaps with: "+TM[i]);
          results[0].overlap=true;
          results[0].TM=TM[i];
          results[0].dateSide="end Date";
          return true;
      }
    }
    results[0].overlap=false;
    results[0].TM=null;
    results[0].dateSide="";
    return false;    
}






