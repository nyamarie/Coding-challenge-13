// Task 2: Function to Add Employee Cards
function addEmployee(name, position) {
    const employeeContainer = document.getElementById("employeeContainer");

    // Create employee card
    const card = document.createElement("div");
    card.classList.add("employee-card");

    // Create employee name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create employee position paragraph
    const positionPara = document.createElement("p");
    positionPara.textContent = position;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Append elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeBtn);

    // Append card to the container
    employeeContainer.appendChild(card);
}

// Task 3: Bulk Update on Employee Cards
function highlightEmployeeCards() {
    const cards = Array.from(document.querySelectorAll(".employee-card"));
    cards.forEach(card => {
        card.style.border = "2px solid blue";
        card.style.backgroundColor = "#f0f8ff";
    });
}

// Task 4: Employee Card Removal with Event Bubbling
document.getElementById("employeeContainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        event.stopPropagation();
        event.target.parentElement.remove();
    } else {
        console.log("Employee card clicked");
    }
});

// Task 5: Inline Editing of Employee Details
document.getElementById("employeeContainer").addEventListener("dblclick", function (event) {
    const card = event.target.closest(".employee-card");
    if (card) {
        const nameElem = card.querySelector("h3");
        const positionElem = card.querySelector("p");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = nameElem.textContent;

        const positionInput = document.createElement("input");
        positionInput.type = "text";
        positionInput.value = positionElem.textContent;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.addEventListener("click", function () {
            nameElem.textContent = nameInput.value;
            positionElem.textContent = positionInput.value;

            card.replaceChild(nameElem, nameInput);
            card.replaceChild(positionElem, positionInput);
            card.removeChild(saveBtn);
        });

        card.replaceChild(nameInput, nameElem);
        card.replaceChild(positionInput, positionElem);
        card.appendChild(saveBtn);
    }
});