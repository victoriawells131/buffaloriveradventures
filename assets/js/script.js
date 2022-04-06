async function ShowLevel(){

           document.getElementById("DisplayLevel").addEventListener("click", ShowLevel());

      // constant variable for api url
     const myUrl1 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055660&parameterCd=00065&siteStatus=active'; 

         //make the AJAX Call
         var msg1Object = await fetch(myUrl1);

         //Check the Staus
         if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
              var msg1JSONText = await msg1Object.text();
              // Parse the JSON string into an object
              var msg1 = JSON.parse(msg1JSONText);
              /* Your code to process the result goes here - 
                 display the returned message */
             
              
          }
   
              // set variables to pull certain values from returned data

              var sitename = [];
              var agencycode = [];
              var numdays = msg1.results.length;
              if (numdays > 0){
                     for (var i = 0; i < numdays; i++) {
                            /* sitename value */
                            sitename[i] = msg1.results[i].siteName;
                            /* agency code value */
                            agencycode[i] = msg1.results[i].agencyCode;
                            /* date is in Unix milleseconds - create a temporary date variable */
                            var numdays = new Date(msg1.results[i].t);
                            /* extract the date string from the value */
                            currencydate[i] = msg1.results[i].dateTime;
                        }
              }

               /* convert these tables to currency conversion */
               var sitenametable = "";
               if (numdays > 0) {
                     sitenametable = sitenametable + "<table><caption>sitename</caption><tr><th>Date</th><th>agencycode</th></tr>";
                   for (var i = 0; i < numdays; i++) {
                     sitenametable = sitename[i] + "<tr><td>" + numdays[i] + "</td><td>" + agencycode[i] + "</td></tr>";
                   }
                   sitenametable = sitenametable + "</table>"
                   document.getElementById("sitenametable").innerHTML = sitenametable;
               }

}