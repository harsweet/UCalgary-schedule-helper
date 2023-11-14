function modifyInstructorDivs() {
    const instructorDivs = document.querySelectorAll('[title="Instructor(s)"]');

    if (instructorDivs.length === 0){
        return;
    }
    
    instructorDivs.forEach((prevElement) => {
        var profName = prevElement.innerText;
        if(profName==="Staff"){
            return;
        }

        profNameList = profName.split(" ");
        var rateMyProfURL = "https://www.ratemyprofessors.com/search/professors?q=" + profNameList[0] + '%20' + profNameList.slice(-1);
        
        const anchorElement = document.createElement('a');
        anchorElement.href = rateMyProfURL;

        anchorElement.innerHTML = prevElement.innerHTML;
        anchorElement.setAttribute("target", "_blank");

        prevElement.innerText = '';
        prevElement.appendChild(anchorElement);
    }); 
}


function modifyCourseDivs() {
    const courseDivs = document.querySelectorAll('.course_title');
    
    if (courseDivs.length===0){
        return;
    }

    const termInfo = document.querySelector('[title="Change term"]')
    const termInfoList = termInfo.innerText.split(" ");

    const year = termInfoList[0];
    const term = termInfoList[1];

    let termMap = new Map([
        ["Fall", "f"],
        ["Winter", "w"],
        ["Spring", "p"],
        ["Summer", "s"]
    ]);

    courseDivs.forEach((prevElement) => {
        var courseName = prevElement.innerText;
        const courseNameList = courseName.split(" ");

        const facultyName = (courseNameList[0]).toLowerCase();
        const courseNumber = (courseNameList[1]).toLowerCase();

        const specificUrl = facultyName + "/courses/" + termMap.get(term) + year.slice(2) + "/" + facultyName + courseNumber;
        const courseUrl = "https://contacts.ucalgary.ca/info/" + specificUrl;
        
        const anchorElement = document.createElement('a');
        anchorElement.href = courseUrl;

        anchorElement.innerHTML = prevElement.innerHTML;
        anchorElement.setAttribute("target", "_blank");

        prevElement.innerText = '';
        prevElement.appendChild(anchorElement);
    });
}

function modifyAddressDivs() {
    const addressDivs = document.querySelectorAll('[title="Building and Room Number"]');

    if (addressDivs.length === 0){
        return;
    }
    
    addressDivs.forEach((prevElement) => {
        var addressInfo = prevElement.innerText;
        if(addressInfo.includes("OFF-SITE") || addressInfo.includes("WEB-BASED")){
            return;
        }

        const searchTerm = addressInfo.replace(" ", "+");
        var mapsURL = "https://www.google.com/maps/search/" + searchTerm + ',+University+of+Calgary';
        
        const anchorElement = document.createElement('a');
        anchorElement.href = mapsURL;

        anchorElement.innerHTML = prevElement.innerHTML;
        anchorElement.setAttribute("target", "_blank");

        prevElement.innerText = '';
        prevElement.appendChild(anchorElement);
    });
}

function triggerFunctions() {
    modifyCourseDivs();
    modifyInstructorDivs();
    modifyAddressDivs();
}


let interval = setInterval(triggerFunctions, 500);