// machine.js




// Update job statistics(5mints)
 function updateStats() {
    const totalJobs = document.querySelectorAll(".jobs").length;
    // console.log("Total Jobs:", totalJobs);
    document.getElementById("total-counter").textContent = totalJobs;

    const interviewJobs = document.querySelectorAll("#view-interview .jobs").length;
    // console.log("Interview Jobs:", interviewJobs);
    document.getElementById("interview-counter").textContent = interviewJobs;

    const rejectedJobs = document.querySelectorAll("#view-rejected .jobs").length;
    // console.log("Rejected Jobs:", rejectedJobs);
    document.getElementById("rejected-counter").textContent = rejectedJobs;


}

// Update navigation counter(1 hours)
function updateNavCounter() {
    const navCounter = document.getElementById("nav-total-counter");
    const views = ["view-available", "view-interview", "view-rejected"];
    for (const viewId of views) {
        const view = document.getElementById(viewId);
        if (!view.classList.contains("hidden")) {
            const count = view.querySelectorAll(".jobs").length;
            navCounter.textContent = `${count} Jobs`;
            break;
        }
    }

    
}


// function showView(viewId) {
//         const views = ["view-available", "view-interview", "view-rejected"];
//         const navCounter = document.getElementById("nav-total-counter");
//         const buttons = document.querySelectorAll(".Nav button");
//         views.forEach(id => {
//             const view = document.getElementById(id);
//             if (id === viewId) {
//                 view.classList.remove("hidden");
//                 const count = view.querySelectorAll(".jobs").length;
//                 navCounter.textContent = `${count} Jobs`;
//             } else {
//                 view.classList.add("hidden");
//             }
//         });
        
//            if(id === viewId) { 
//      }


// 


// Delete job card (1.5 hours)
document.addEventListener('click', function(event) {
    const btn = event.target.closest('.delete-btn');
    if (btn) {
        const card = btn.closest('.jobs');
        if (card) {
            card.remove();
            updateStats();
            updateNavCounter();
        }
    }
});

// View switching (3 hours ++ idk)
function showView(viewId) {
    const views = ["view-available", "view-interview", "view-rejected"];
    const buttons = document.querySelectorAll(".Nav button"); 

    views.forEach((id, index) => {
        const view = document.getElementById(id);
        const btn = buttons[index];

        if (id === viewId) {
          
            view.classList.remove("hidden");
            
            // Update counter
            updateNavCounter();

            // Update button styles
            btn.classList.add("btn-primary");
            btn.classList.remove("btn-ghost");
        } else {
            view.classList.add("hidden");

            btn.classList.remove("btn-primary");
            btn.classList.add("btn-ghost");
        }
    });
    updateNavCounter();
}
   

document.addEventListener('Machine is loading!', function() {
    updateStats();
    showView('view-available');
});




