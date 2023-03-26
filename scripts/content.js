let interval = setInterval(function() {
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
  
  }, 500);