
const detailButtons = document.querySelectorAll(".details-button");
const detailsText = document.getElementById("details-text");
const registerButton = document.getElementById("register-program");
const programDropdown = document.getElementById("program");
const selectionMessage = document.getElementById("selection-message");

let selectedProgram = "";

// Display the selected program's details.
detailButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    selectedProgram = button.dataset.program;

    detailButtons.forEach(function(otherButton) {
      otherButton.classList.remove("selected");
      otherButton.setAttribute("aria-pressed", "false");
    });
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    if (selectedProgram === "bookclub") {
      detailsText.textContent = "Community Book Club: Join fellow readers for a discussion of this month's book. Intended for adults.";
    } else if (selectedProgram === "storytime") {
      detailsText.textContent = "Family Story Time: Enjoy stories, songs, and activities for the whole family.";
    } else if (selectedProgram === "genealogy") {
      detailsText.textContent = "Genealogy Workshop: Learn how to research your family history using library resources.";
    } else if (selectedProgram === "printing") {
      detailsText.textContent = "Intro to 3D Printing: Discover the basics of 3D printing and explore the library's Makerspace.";
    } else if (selectedProgram === "history") {
      detailsText.textContent = "Local History Talk: Explore fascinating stories from our community's past.";
    }
  });
});

// Select the program in the registration form.
registerButton.addEventListener("click", function() {
  if (selectedProgram === "") {
    detailsText.textContent = "Please select a program above before registering.";
    return;
  }

  programDropdown.value = selectedProgram;
  const selectedName = programDropdown.options[programDropdown.selectedIndex].text;
  selectionMessage.textContent = selectedName + " has been selected for registration.";
  selectionMessage.hidden = false;
  programDropdown.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
  programDropdown.focus({ preventScroll: true });
});
