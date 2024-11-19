document.addEventListener("DOMContentLoaded", () => {
    const viewRulesBtn = document.getElementById("viewRulesBtn");
    const rulesOverlay = document.getElementById("rulesOverlay");
    const closeRulesBtn = document.getElementById("closeRulesBtn");
    const teamSizeSelect = document.getElementById("teamSize");
    const teamMembersContainer = document.getElementById("teamMembersContainer");
  
    const rulesData = {
      "Robo War": ["Rule 1 for Robo War", "Rule 2 for Robo War"],
      "Micro Mouse": ["Rule 1 for Micro Mouse", "Rule 2 for Micro Mouse"],
      "Circuitry": ["Rule 1 for Circuitry", "Rule 2 for Circuitry"],
    };
  
    // Display rules
    viewRulesBtn.addEventListener("click", () => {
      const selectedEvent = document.getElementById("event").value;
      if (!selectedEvent) return alert("Please select an event first!");
  
      const rulesTitle = document.getElementById("rulesTitle");
      const rulesList = document.getElementById("rulesList");
  
      rulesTitle.textContent = `Rules for ${selectedEvent}`;
      rulesList.innerHTML = rulesData[selectedEvent]
        .map((rule) => `<li>${rule}</li>`)
        .join("");
  
      rulesOverlay.classList.add("active");
    });
  
    // Close rules
    closeRulesBtn.addEventListener("click", () => {
      rulesOverlay.classList.remove("active");
    });
  
    // Handle team size change
    teamSizeSelect.addEventListener("change", (e) => {
      const size = parseInt(e.target.value);
      teamMembersContainer.innerHTML = "";
  
      if (size > 1) {
        for (let i = 1; i < size; i++) {
          const memberInput = `
            <div class="form-group">
              <label for="teamMember${i}">Team Member ${i} Name:</label>
              <input type="text" id="teamMember${i}" name="teamMember${i}" required>
            </div>
          `;
          teamMembersContainer.innerHTML += memberInput;
        }
      }
    });
  });
  