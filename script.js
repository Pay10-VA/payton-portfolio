import AWS from 'aws-sdk';

document.getElementById("send").addEventListener("click", function(event) {
  event.preventDefault();

   let name = document.getElementById("senderName").value;
   let subject = document.getElementById("subject").value;
   let email = document.getElementById("senderEmail").value;
   let message = document.getElementById("message").value;

   if(name == "" || subject == "" || email == "" || message == "") {
     console.log("failed");
   }
   else {

    console.log("Succeeded");


    var ses = new AWS.SES();
     ses.cloneReceiptRuleSet(params, function (err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log(data);           // successful response
     });

      console.log("after");

   }

});
