function DocumentReady()
{  
          //testing purposes verify jQuery is working
         //alert("document is ready");
         var Users=[];//holds the users for dropdown select
          //loads the sorted users by ascending alphabetical order
          $.post("/loadSortedUser",
            
            function(data, textStatus)
            {
               Users=data;
               //dynamicaly populate user list
               var x=document.getElementById("name1");               
               for(var i=0;i<Users.length;i++){
                var option=document.createElement("option");
                option.text=Users[i].Name;
                x.add(option);
               }  
               var $options1 = $("#name1 > option").clone();
               $('#name2').append($options1);
               var $options2 = $("#name1 > option").clone();
               $('#name3').append($options2); 
               var $options3 = $("#name1 > option").clone();
               $('#name4').append($options3); 
               var $options4 = $("#name1 > option").clone();
               $('#name5').append($options4); 
               var $options5 = $("#name1 > option").clone();
               $('#name6').append($options5); 
               var $options6 = $("#name1 > option").clone();
               $('#name7').append($options6); 
               var $options7 = $("#name1 > option").clone();
               $('#name8').append($options7); 
               var $options8 = $("#name1 > option").clone();
               $('#name9').append($options8); 
               var $options9 = $("#name1 > option").clone();
               $('#name10').append($options9);           
            });
         

         //When user hits submit button..
         $("#submit1").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name1").val();
          var telephone=$("#Telephone1").val();
          var startDate=$("#startDate1").val();
          var endDate=$("#endDate1").val();
          var startTime=$("#startTime1").val();
          var endTime=$("#endTime1").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user1Lbl").css("color","red");            
            document.getElementById('AddStartDate1').className='form-group';
            document.getElementById('glyphiStD1').className=''; 
            document.getElementById('AddEndDate1').className='form-group';
            document.getElementById('glyphiEdD1').className=''; 
            $("#error1").css("color","red");
            $("#error1").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user1Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate1').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD1').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate1').className='form-group';
            document.getElementById('glyphiEdD1').className=''; 
            $("#error1").css("color","red");
            $("#error1").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user1Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate1').className='form-group';
            document.getElementById('glyphiStD1').className=''; 
            document.getElementById('AddEndDate1').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD1').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error1").css("color","red");
            $("#error1").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user1Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate1').className='form-group';
            document.getElementById('glyphiStD1').className=''; 
            document.getElementById('AddEndDate1').className='form-group';
            document.getElementById('glyphiEdD1').className=''; 
            $("#error1").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM1",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                console.log("overlap: "+data[0].overlap);
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
               
            });

        }
        }); 
         $("#submit2").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name2").val();
          var telephone=$("#Telephone2").val();
          var startDate=$("#startDate2").val();
          var endDate=$("#endDate2").val();
          var startTime=$("#startTime2").val();
          var endTime=$("#endTime2").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user2Lbl").css("color","red");            
            document.getElementById('AddStartDate2').className='form-group';
            document.getElementById('glyphiStD2').className=''; 
            document.getElementById('AddEndDate2').className='form-group';
            document.getElementById('glyphiEdD2').className=''; 
            $("#error2").css("color","red");
            $("#error2").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user2Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate2').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD2').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate2').className='form-group';
            document.getElementById('glyphiEdD2').className=''; 
            $("#error2").css("color","red");
            $("#error2").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user2Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate2').className='form-group';
            document.getElementById('glyphiStD2').className=''; 
            document.getElementById('AddEndDate2').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD2').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error2").css("color","red");
            $("#error2").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user2Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate2').className='form-group';
            document.getElementById('glyphiStD2').className=''; 
            document.getElementById('AddEndDate2').className='form-group';
            document.getElementById('glyphiEdD2').className=''; 
            $("#error2").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM2",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        });   


          $("#submit3").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name3").val();
          var telephone=$("#Telephone3").val();
          var startDate=$("#startDate3").val();
          var endDate=$("#endDate3").val();
          var startTime=$("#startTime3").val();
          var endTime=$("#endTime3").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user3Lbl").css("color","red");            
            document.getElementById('AddStartDate3').className='form-group';
            document.getElementById('glyphiStD3').className=''; 
            document.getElementById('AddEndDate3').className='form-group';
            document.getElementById('glyphiEdD3').className=''; 
            $("#error3").css("color","red");
            $("#error3").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user3Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate3').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD3').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate3').className='form-group';
            document.getElementById('glyphiEdD3').className=''; 
            $("#error3").css("color","red");
            $("#error3").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user3Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate3').className='form-group';
            document.getElementById('glyphiStD3').className=''; 
            document.getElementById('AddEndDate3').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD3').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error3").css("color","red");
            $("#error3").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user3Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate3').className='form-group';
            document.getElementById('glyphiStD3').className=''; 
            document.getElementById('AddEndDate3').className='form-group';
            document.getElementById('glyphiEdD3').className=''; 
            $("#error3").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM3",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        });

          $("#submit4").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name4").val();
          var telephone=$("#Telephone4").val();
          var startDate=$("#startDate4").val();
          var endDate=$("#endDate4").val();
          var startTime=$("#startTime4").val();
          var endTime=$("#endTime4").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user4Lbl").css("color","red");            
            document.getElementById('AddStartDate4').className='form-group';
            document.getElementById('glyphiStD4').className=''; 
            document.getElementById('AddEndDate4').className='form-group';
            document.getElementById('glyphiEdD4').className=''; 
            $("#error4").css("color","red");
            $("#error4").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user1Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate4').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD4').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate4').className='form-group';
            document.getElementById('glyphiEdD4').className=''; 
            $("#error4").css("color","red");
            $("#error4").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user4Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate4').className='form-group';
            document.getElementById('glyphiStD4').className=''; 
            document.getElementById('AddEndDate4').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD4').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error4").css("color","red");
            $("#error4").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user4Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate4').className='form-group';
            document.getElementById('glyphiStD4').className=''; 
            document.getElementById('AddEndDate4').className='form-group';
            document.getElementById('glyphiEdD4').className=''; 
            $("#error4").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM4",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        });
          $("#submit5").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name5").val();
          var telephone=$("#Telephone5").val();
          var startDate=$("#startDate5").val();
          var endDate=$("#endDate5").val();
          var startTime=$("#startTime5").val();
          var endTime=$("#endTime5").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user5Lbl").css("color","red");            
            document.getElementById('AddStartDate5').className='form-group';
            document.getElementById('glyphiStD5').className=''; 
            document.getElementById('AddEndDate5').className='form-group';
            document.getElementById('glyphiEdD5').className=''; 
            $("#error5").css("color","red");
            $("#error5").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user5Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate5').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD5').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate5').className='form-group';
            document.getElementById('glyphiEdD5').className=''; 
            $("#error5").css("color","red");
            $("#error5").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user5Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate5').className='form-group';
            document.getElementById('glyphiStD5').className=''; 
            document.getElementById('AddEndDate5').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD5').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error5").css("color","red");
            $("#error5").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user5Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate5').className='form-group';
            document.getElementById('glyphiStD5').className=''; 
            document.getElementById('AddEndDate5').className='form-group';
            document.getElementById('glyphiEdD5').className=''; 
            $("#error5").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM5",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        }); 

          $("#submit6").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name6").val();
          var telephone=$("#Telephone6").val();
          var startDate=$("#startDate6").val();
          var endDate=$("#endDate6").val();
          var startTime=$("#startTime6").val();
          var endTime=$("#endTime6").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user6Lbl").css("color","red");            
            document.getElementById('AddStartDate6').className='form-group';
            document.getElementById('glyphiStD6').className=''; 
            document.getElementById('AddEndDate6').className='form-group';
            document.getElementById('glyphiEdD6').className=''; 
            $("#error6").css("color","red");
            $("#error6").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user6Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate6').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD6').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate6').className='form-group';
            document.getElementById('glyphiEdD6').className=''; 
            $("#error6").css("color","red");
            $("#error6").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user6Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate6').className='form-group';
            document.getElementById('glyphiStD6').className=''; 
            document.getElementById('AddEndDate6').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD6').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error6").css("color","red");
            $("#error6").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user6Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate6').className='form-group';
            document.getElementById('glyphiStD6').className=''; 
            document.getElementById('AddEndDate6').className='form-group';
            document.getElementById('glyphiEdD6').className=''; 
            $("#error6").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM6",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        });

          $("#submit7").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name7").val();
          var telephone=$("#Telephone7").val();
          var startDate=$("#startDate7").val();
          var endDate=$("#endDate7").val();
          var startTime=$("#startTime7").val();
          var endTime=$("#endTime7").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user7Lbl").css("color","red");            
            document.getElementById('AddStartDate7').className='form-group';
            document.getElementById('glyphiStD7').className=''; 
            document.getElementById('AddEndDate7').className='form-group';
            document.getElementById('glyphiEdD7').className=''; 
            $("#error7").css("color","red");
            $("#error7").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user7Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate7').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD7').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate7').className='form-group';
            document.getElementById('glyphiEdD7').className=''; 
            $("#error7").css("color","red");
            $("#error7").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user7Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate7').className='form-group';
            document.getElementById('glyphiStD7').className=''; 
            document.getElementById('AddEndDate7').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD7').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error7").css("color","red");
            $("#error7").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user7Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate7').className='form-group';
            document.getElementById('glyphiStD7').className=''; 
            document.getElementById('AddEndDate7').className='form-group';
            document.getElementById('glyphiEdD7').className=''; 
            $("#error7").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM7",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        });
          $("#submit8").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name8").val();
          var telephone=$("#Telephone8").val();
          var startDate=$("#startDate8").val();
          var endDate=$("#endDate8").val();
          var startTime=$("#startTime8").val();
          var endTime=$("#endTime8").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user8Lbl").css("color","red");            
            document.getElementById('AddStartDate8').className='form-group';
            document.getElementById('glyphiStD8').className=''; 
            document.getElementById('AddEndDate8').className='form-group';
            document.getElementById('glyphiEdD8').className=''; 
            $("#error8").css("color","red");
            $("#error8").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user8Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate8').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD8').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate8').className='form-group';
            document.getElementById('glyphiEdD8').className=''; 
            $("#error8").css("color","red");
            $("#error8").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user8Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate8').className='form-group';
            document.getElementById('glyphiStD8').className=''; 
            document.getElementById('AddEndDate8').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD8').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error8").css("color","red");
            $("#error8").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user8Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate8').className='form-group';
            document.getElementById('glyphiStD8').className=''; 
            document.getElementById('AddEndDate8').className='form-group';
            document.getElementById('glyphiEdD8').className=''; 
            $("#error8").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM8",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        }); 
        $("#submit9").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name9").val();
          var telephone=$("#Telephone9").val();
          var startDate=$("#startDate9").val();
          var endDate=$("#endDate9").val();
          var startTime=$("#startTime9").val();
          var endTime=$("#endTime9").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user9Lbl").css("color","red");            
            document.getElementById('AddStartDate9').className='form-group';
            document.getElementById('glyphiStD9').className=''; 
            document.getElementById('AddEndDate9').className='form-group';
            document.getElementById('glyphiEdD9').className=''; 
            $("#error9").css("color","red");
            $("#error9").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user9Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate9').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD9').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate9').className='form-group';
            document.getElementById('glyphiEdD9').className=''; 
            $("#error9").css("color","red");
            $("#error9").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user9Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate9').className='form-group';
            document.getElementById('glyphiStD9').className=''; 
            document.getElementById('AddEndDate9').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD9').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error9").css("color","red");
            $("#error9").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user9Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate9').className='form-group';
            document.getElementById('glyphiStD9').className=''; 
            document.getElementById('AddEndDate9').className='form-group';
            document.getElementById('glyphiEdD9').className=''; 
            $("#error9").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM9",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        });

          $("#submit10").click(function(){ 
          //grab the data from the textboxes
          var user=$("#name10").val();
          var telephone=$("#Telephone10").val();
          var startDate=$("#startDate10").val();
          var endDate=$("#endDate10").val();
          var startTime=$("#startTime10").val();
          var endTime=$("#endTime10").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user10Lbl").css("color","red");            
            document.getElementById('AddStartDate10').className='form-group';
            document.getElementById('glyphiStD10').className=''; 
            document.getElementById('AddEndDate10').className='form-group';
            document.getElementById('glyphiEdD10').className=''; 
            $("#error10").css("color","red");
            $("#error10").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user10Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate10').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD10').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate10').className='form-group';
            document.getElementById('glyphiEdD10').className=''; 
            $("#error10").css("color","red");
            $("#error10").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user10Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate10').className='form-group';
            document.getElementById('glyphiStD10').className=''; 
            document.getElementById('AddEndDate10').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD10').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error10").css("color","red");
            $("#error10").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user10Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate10').className='form-group';
            document.getElementById('glyphiStD10').className=''; 
            document.getElementById('AddEndDate10').className='form-group';
            document.getElementById('glyphiEdD10').className=''; 
            $("#error10").text("");

            //Post is s method that talks to server. Delivers data to the /TM1 method
            //on server side code
            $.post("/TM10",
            {
              user: user,
              telephone:phone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {
                if(data[0].overlap==true){
                  alert("<b>Reservations "+ data[0].dateSide+" conflicts with current reservation\n</b>"+"Reservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }
            });

        }
        });

        
        var index;
        var global_TM;        

        $("#Search").click(function(){
          
          index=null;
          global_TM=null;
          document.getElementById("resultsDiv").style.display = "none";
          document.getElementById("Delete").style.visibility = "invisible";
          document.getElementById("Edit").style.visibility = "invisible";
          document.getElementById("editDetails").style.display = "none";
          $("#noResults").text("");
          $("#name1").val("");
          $("#startDate1").val("");
          $("#endDate1").val("");
          $("#Telephone1").val("");
          $("#error1").val("");
          $("#startTime1").val("");
          $("#endTime1").val(""); 

          var ResID=$("#ResID").val();
          var TM=$("#SelectTM").val();
          console.log("ResID is: "+ResID+" TM: "+ TM);
           
           $.post("/searchTM",
            {
              ResID:ResID,
              TM:TM
            },
            function(data, textStatus)
            {
                console.log(data);
                if(data=="No Results found"){
                  console.log("Its true!");
                }                
                if(data=="No Results found"){
                  document.getElementById("resultsDiv").style.display = "none"
                  document.getElementById("Delete").style.visibility = "hidden";
                  $("#noResults").css("color","red");
                  $("#noResults").text("No Results found");
                }else{
                  
                  $("#SearchName").text(data.TM.name);
                  $("#SearchStart").text(data.TM.startMonth+"/"+data.TM.startDay+"/"+data.TM.startYear);
                  $("#SearchEnd").text(data.TM.endMonth+"/"+data.TM.endDay+"/"+data.TM.endYear);
                  $("#SearchPhone").text(data.TM.phone);
                  $("#SearchStartTime").text(data.TM.startHour+":"+data.TM.startMin);
                  $("#SearchEndTime").text(data.TM.endHour+":"+data.TM.endMin);
                  index=data.index;
                  global_TM=TM;
                  document.getElementById("resultsDiv").style.display = "block";
                  document.getElementById("Delete").style.visibility = "visible";
                  document.getElementById("Edit").style.visibility = "visible";  
                  $("#noResults").text("");
                }
            });
        });
        

        $("#Delete").click(function(){
          console.log("Index taken:"+index);
           
           $.post("/deleteTM",
            {
              index:index,
              TM:global_TM
            },
            function(data, textStatus)
            {                
                alert("Your Reservation has been Deleted");
                index=null;
                global_TM=null;
                document.getElementById("resultsDiv").style.display = "none";
                document.getElementById("Delete").style.visibility = "invisible";
                document.getElementById("Edit").style.visibility = "invisible";
                document.getElementById("editDetails").style.display = "none";
                $("#noResults").text(""); 

                
            });
        });

        $("#Edit").click(function(){
          console.log("Index taken:"+index);
          document.getElementById("resultsDiv").style.display = "block";          
          document.getElementById("Delete").style.visibility = "visible";
          document.getElementById("editDetails").style.display = "block" ; 
          $("#noResults").text(""); 
          return false; 
        });

        $("#Update").click(function(){
          console.log("Index taken:"+index);
          var user=$("#name1").val();
          var telephone=getPhone(user);
          var startDate=$("#startDate1").val();
          var endDate=$("#endDate1").val();
          var startTime=$("#startTime1").val();
          var endTime=$("#endTime1").val();
          var phone=getPhone(user);
          //if time is not set allocate full day--set defaults
          //start 12am end 11:59pm
          if(startTime==""){
            startTime="12:00am";
          }
          if(endTime==""){
            endTime="11:59pm";
          }
          
          //if username is not provided prompt error
          if(user=="----"){
            //color text according to error and provide error message
            $("#user1Lbl").css("color","red");            
            document.getElementById('AddStartDate1').className='form-group';
            document.getElementById('glyphiStD1').className=''; 
            document.getElementById('AddEndDate1').className='form-group';
            document.getElementById('glyphiEdD1').className=''; 
            $("#error1").css("color","red");
            $("#error1").text("ERROR: Name is required");
          }else if(startDate===""){//if start date is not provided throw error
            $("#user1Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate1').className='form-group has-error has-feedback';
            document.getElementById('glyphiStD1').className='glyphicon glyphicon-remove form-control-feedback';
            document.getElementById('AddEndDate1').className='form-group';
            document.getElementById('glyphiEdD1').className=''; 
            $("#error1").css("color","red");
            $("#error1").text("ERROR: Start date required");
          }else if(endDate==""){//if end date is not provided throw error
            $("#user1Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate1').className='form-group';
            document.getElementById('glyphiStD1').className=''; 
            document.getElementById('AddEndDate1').className='form-group has-error has-feedback';
            document.getElementById('glyphiEdD1').className='glyphicon glyphicon-remove form-control-feedback'; 

            $("#error1").css("color","red");
            $("#error1").text("ERROR: End date required");
          }else{//else submit data to server and color text to default      
            $("#user1Lbl").css("color","#6B6B47");
            document.getElementById('AddStartDate1').className='form-group';
            document.getElementById('glyphiStD1').className=''; 
            document.getElementById('AddEndDate1').className='form-group';
            document.getElementById('glyphiEdD1').className=''; 
            $("#error1").text("");          
           
           $.post("/updateTM",
            {
              index:index,
              TM:global_TM,
              user: user,
              telephone:telephone,
              startDate:startDate,
              startTime:startTime,
              endDate: endDate,
              endTime:endTime
            },
            function(data, textStatus)
            {  
                
                
                if(data[0].overlap==true){
                  alert("Reservations "+ data[0].dateSide+" conflicts with current reservation\n"+"Name: "+data[0].TM.name+"\nReservation ID: "+data[0].TM.ResID+
                    "\nStart Date: "+data[0].TM.startMonth+"-"+data[0].TM.startDay+"-"+data[0].TM.startYear+" Time: "+data[0].TM.startHour+":"+data[0].TM.startMin+
                    "\nEnd Date: "+data[0].TM.endMonth+"-"+data[0].TM.endDay+"-"+data[0].TM.endYear+" Time: "+data[0].TM.endHour+":"+data[0].TM.endMin+"\n Contact #: "+data[0].TM.phone);                   
                }else{
                  index=null;
                global_TM=null;
                document.getElementById("resultsDiv").style.display = "none";
                document.getElementById("Delete").style.visibility = "invisible";
                document.getElementById("Edit").style.visibility = "invisible";
                document.getElementById("editDetails").style.display = "none";
                $("#noResults").text("");
                $("#name1").val("");
                $("#startDate1").val("");
                $("#endDate1").val("");
                $("#Telephone1").val("");
                $("#error1").val("");
                $("#startTime1").val("");
                $("#endTime1").val(""); 
                   alert("A reservation has been made: \nUser: "+user+"\nPhone: "+
                  phone+"\nStart: "+startDate+startTime+"\nEnd: "+endDate+endTime+ "\nReservation ID: "+data);
                }               
            });
          }
        });   
        
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.post( "/getFeatures", function() {          
        })
          .done(function(data) {
            loadQtips(data);            
        })
          .fail(function() {
            alert( "error on posting features" );
          })
          .always(function() {
        });
function loadQtips(features){
  $('#TM1Config').qtip({          
         content: {
                text: features[1]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM1Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });
  $('#TM2Config').qtip({          
         content: {
                text: features[2]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM2Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });
  $('#TM3Config').qtip({          
         content: {
                text: features[3]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM3Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });

  $('#TM4Config').qtip({          
         content: {
                text: features[4]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM4Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });
  $('#TM5Config').qtip({          
         content: {
                text: features[5]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM5Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });
  $('#TM6Config').qtip({          
         content: {
                text: features[6]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM6Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });

  $('#TM7Config').qtip({          
         content: {
                text: features[7]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM7Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });

  $('#TM8Config').qtip({          
         content: {
                text: features[8]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM8Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });

  $('#TM9Config').qtip({          
         content: {
                text: features[9]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM9Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });

  $('#TM10Config').qtip({          
         content: {
                text: features[10]
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'top center',
             at: 'bottom center',
             target: $("#TM10Config"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });

}

function getPhone(User){
  for(var i=0;i<Users.length;i++){
    if(User==Users[i].Name){
      return Users[i].Phone;
    }
  }
}



        

       



}