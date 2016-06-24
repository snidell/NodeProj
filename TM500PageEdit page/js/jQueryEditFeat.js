function DocumentReady()
{
		 //testing purposes verify jQuery is working
         //alert("document is ready");
         var TM_Feat=[];//holds strings for the Features set of each TM
         var TM_Selected=null;//What TM is currently selected

        $.post("/getFeatures",
            
            function(data, textStatus)
            {
               TM_Feat=data;
        });

        $('#Tm_SelectDD').qtip({          
         content: {
                text: 'Select you TM you wish to view/Edit'
         },
         style: {
                classes: 'qtip-bootstrap'
         },
         position: {
             my: 'bottom centerht',
             at: 'top left',
             target: $("#Tm_SelectDD"), // Track the mouse as the positioning target
             adjust: { x:0, y: 0 } // Offset it slightly from under the mouse
         }
        });		

        $("#Submit_Feature").click(function(){
  			var data = CKEDITOR.instances.featureTA.getData();
  			if(TM_Selected==null){
  				console.log("ERROR"); 
  				$("#TMLabel_Editor").text("Unit: No Unit Selected"); 
  				$("#TMLabel_Editor").css("color","red");
  				alert("You must selected a valid TM from drop down menu");			
  			}else{
  			console.log("Submitting:"+TM_Selected+" "+"Data: "+data);
  			$.post("/submitFeatures",
            {
              Features:data,
              TM:TM_Selected
            },
            function(data, textStatus)
            {
               alert("Feature for "+TM_Selected+" has been updated");
            });
  			}
        });

        $("#TM1_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[1]);
  			$("#TMLabel_Editor").text("Unit: TM1 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM1";
        });
        $("#TM2_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[2]);
  			$("#TMLabel_Editor").text("Unit: TM2 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM2";
        });
        $("#TM3_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[3]);  			
  			$("#TMLabel_Editor").text("Unit: TM3 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM3";
        });
        $("#TM4_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[4]);
  			$("#TMLabel_Editor").text("Unit: TM4 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM4";
        });
        $("#TM5_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[5]);
  			$("#TMLabel_Editor").text("Unit: TM5 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM5";
        });
        $("#TM6_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[6]);
  			$("#TMLabel_Editor").text("Unit: TM6 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM6";
        });
        $("#TM7_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[7]);
  			CKEDITOR.instances.featureTA.setData();  
  			$("#TMLabel_Editor").text("Unit: TM7 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");	
  			TM_Selected="TM7";		
        });
        $("#TM8_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[8]);
  			$("#TMLabel_Editor").text("Unit: TM8 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM8";
        });
        $("#TM9_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[9]);
  			$("#TMLabel_Editor").text("Unit: TM9 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM9";
        });
        $("#TM10_Select").click(function(){
  			CKEDITOR.instances.featureTA.setData(TM_Feat[10]);
  			$("#TMLabel_Editor").text("Unit: TM10 Selected");
  			$("#TMLabel_Editor").css("color","#6B6B47");
  			TM_Selected="TM10";
        });
}