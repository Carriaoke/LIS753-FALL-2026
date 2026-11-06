const detailsText = document.getElementById("details-text");
const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    const selectedProgram = button.dataset.program;

    if (selectedProgram === "bookclub") {
  detailsText.textContent = "Community Book Club: Join fellow readers for a discussion of this month's book. Intended for adults.";
}
    else if (selectedProgram === "storytime") {
  detailsText.textContent = "Family Story Time: Enjoy stories, songs, and activities designed for children and their families.";
}
    else if (selectedProgram === "genealogy") {
  detailsText.textContent = "Genealogy Workshop: Learn how to research your family history using library resources. Intended for adults.";
}
else if (selectedProgram === "printing") {
  detailsText.textContent = "Intro to 3D Printing: Discover the basics of 3D printing and learn how to create simple designs. Intended for teens and adults.";
}
else if (selectedProgram === "history") {
  detailsText.textContent = "Local History Talk: Explore fascinating stories and historical events from our community. Open to everyone.";
}

  });
});
