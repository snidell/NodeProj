function DocumentReady()
{
		 //testing purposes verify jQuery is working
     //alert("document is ready");
     var Users=[];
     //loads users in the current system
     $.post("/loadUser",
            
            function(data, textStatus)
            {
               Users=data;
               for(var i=0;i<Users.length;i++){
                addRow(Users[i]);
            }              
      });
    //adds row to the users table
    function addRow(User){
      var table = document.getElementById("userTable");
      // Create an empty <tr> element and add it to the 1st position of the table:
      console.log(User);
      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);
      var cell1 = row.insertCell(0);//User ID cell
      var cell2 = row.insertCell(1);//Name Cell
      var cell3 = row.insertCell(2);//Phone Cell
      var cell4 = row.insertCell(3);//Check box

      // Add some text to the new cells:
      cell1.innerHTML = User.UserID;
      cell2.innerHTML = User.Name;
      cell3.innerHTML = User.Phone;
      var checkbox=document.createElement('input');
      checkbox.type="checkbox";
      cell4.appendChild(checkbox);
    }
    //removes row from user table
    function removeRow(row){
       document.getElementById("userTable").deleteRow(row);       
    }
    //shows the user details 
    $("#AddUser").click(function(){ 
          //grab the data from the textboxes    
          document.getElementById("userForm").style.visibility = "visible";
    });
    //removes user from the server/table being displayed
    $("#RemoveUser").click(function(){ 
          $('#userTable input[type=checkbox]:checked').each(function() {            
            var row = $(this).parent().parent();
            var rowcells = row.find('td');
            removeRow(row.index());             

            $.post("/deleteUser",
            {
              UserID:rowcells[0].innerHTML
            },
            function(data, textStatus)
            {             
                   window.location.reload(true); 
                   //have to reload because IE doesn;t show results immeadiately =/           
            });
          });
    });
    //sends user data to the server
    $("#SubmitUser").click(function(){ 
          var name=$("#Username").val();
          var phone=$("#UserPhone").val();
          if((phone=="")&&(name=="")){
            //handle textboxes
            document.getElementById('AddUserName').className='form-group has-error has-feedback';            
            document.getElementById('AddUserPhone').className='form-group has-error has-feedback';
            //handle glypi's
            document.getElementById('glyphiUsername').className='glyphicon glyphicon-remove form-control-feedback'; 
            document.getElementById('glyphiPhone').className='glyphicon glyphicon-remove form-control-feedback';
          }else if(phone==""){
            document.getElementById('AddUserPhone').className='form-group has-error has-feedback';
            document.getElementById('AddUserName').className='form-group';

            document.getElementById('glyphiUsername').className=''; 
            document.getElementById('glyphiPhone').className='glyphicon glyphicon-remove form-control-feedback';
          }else if(name==""){            
            document.getElementById('AddUserName').className='form-group has-error has-feedback';
            document.getElementById('AddUserPhone').className='form-group';
            document.getElementById('glyphiUsername').className='glyphicon glyphicon-remove form-control-feedback'; 
            document.getElementById('glyphiPhone').className='';
          }else{

          $.post("/addUser",
            {
              Name:name,
              Phone:phone
            },
            function(data, textStatus)
            {  
               if(data==false){
                alert("User already exists");
               }else{
                addRow(data); 
               alert("New User has been created:"+"\n"+"User ID: "+data.UserID+"\n"+"Name: "+data.Name+"\n"+"Phone: "+data.Phone);   
               }                          
            });
          $("#Username").val("");
          $("#UserPhone").val("");
        }
    });         
}//end of document ready