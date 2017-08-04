// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var newData=req.body;
    newData.scores;
    console.log(newData);
    var result;
      var totalArray=[];
      var total=0;
      var newArray=[];
      var num1;
      var num2;
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    for(var i=0;i<friendData.length;i++) 
    {
      for(var j =0;j<10;j++){
      
      if((parseInt(friendData[i].scores[j]))<(parseInt(newData.scores[j])))
      {
        var temp=parseInt(newData.scores[j]);
         num1=parseInt(friendData[i].scores[j]);
         num2=temp;
        result=num2-num1;
      }
  else{

    num1=(parseInt(friendData[i].scores[j]));
    num2=(parseInt(newData.scores[j]));
   result=num1-num2;

  }
  total+=result;
}
  totalArray.push({total:total,name:friendData[i].name,photo:friendData[i].photo});
  newArray.push(total);
  total=0;

    }
    //console.log(newArray);
 var small=Math.min.apply(null, newArray);
 for(var i=0;i<totalArray.length;i++){
 if(small===totalArray[i].total){   
      

      friendData.push(newData);   
     return res.json(totalArray[i]);
    }
    
   
 }
 
  });

  

  }