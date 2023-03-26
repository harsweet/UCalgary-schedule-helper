function modifyInstructorDivs() {
    const instructorDivs = document.querySelectorAll('[title="Instructor(s)"]');

    instructorDivs.forEach((prevElement) => {
        var profName = prevElement.innerText;
        if(profName==="Staff"){
            return;
        }

        profNameList = profName.split(" ");
        var rateMyProfURL = "https://www.ratemyprofessors.com/search/teachers?query=" + profNameList[0] + '%20' + profNameList.slice(-1);
        
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
    const termInfo = document.querySelector('[title="Change term"]').innerText.split(" ");

    const year = termInfo[0];
    const term = termInfo[1];

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

function triggerFunctions() {
    modifyCourseDivs();
    modifyInstructorDivs();
}


let interval = setInterval(triggerFunctions, 500);