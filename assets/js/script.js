async function AlertLevel(){

           document.getElementById("DisplayLevel").addEventListener("click", AlertLevel());


     const list = document.createDocumentFragment(); // create a doc frag list for the appended list items

     const url = 'https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055660&parameterCd=00065&siteStatus=active'; // constant variable for api url

         fetch(url)
                .then((response)=>{ // create then method 
                    return response.json(); // add response parameter that takes the value of the object returned from the fetch(url)
                })
                 .then((data) => { // this processes the data
                        let WaterLevels = data; // Within this function, create a variable called authors that is set equal to data:

                        WaterLevels.map(function(Waterlevel) {
                                let li = document.createElement('li'); // argument to create li
                                let name = document.createElement('h2'); // river site name
                                let email = document.createElement('span'); // river level

                                name.innerHTML = '${siteName}'; // grab data from api
                                email.innerHTML = '${longitude}'; // grab data from api

                                li.appendChild(name); // connect the DOM elements to html
                                li.appendChild(email);
                                list.appendChild(li);

                        });
                 }).
                 catch(function(error) {
                        console.log(error);
                 });

                 ul.appendChild(list);

   


}