

document.getElementById("allAplication").addEventListener("click", function (event) {
  

  const card = event.target.closest(".jobs");
  if (card === null) {
    return;
  }
  const buttonText = event.target.innerText;
  const statusText = card.querySelector("[data-status]");

  if (buttonText === "Interview") {

    const interviewContainer = document.getElementById("view-interview");
    
    statusText.innerText = "Interviewing";
    statusText.dataset.status = "interviewing";
    statusText.className = "btn btn-success btn-xs rounded-full uppercase font-bold mt-1";

  
   const placeholder = interviewContainer.querySelector("p");
    if (placeholder) {
      placeholder.remove();
    }

    
    interviewContainer.appendChild(card);

  } else if (buttonText === "Rejected") {
    
    const rejectedContainer = document.getElementById("view-rejected");

    
    statusText.innerText = "Rejected";
    statusText.dataset.status = "rejected";
    statusText.className = "btn btn-error btn-xs rounded-full uppercase font-bold mt-1";

    const placeholder = rejectedContainer.querySelector("p");
    if (placeholder) {
      placeholder.remove();
    }
    

    rejectedContainer.appendChild(card);
  }

  updateStats();
  updateNavCounter();
});
    
   

    
    



