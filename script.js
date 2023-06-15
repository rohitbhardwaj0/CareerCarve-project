const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // Adding dragging class to item after a delay
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // Removing dragging class from item on dragend event
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    // Getting all items except currently dragging and making array of them
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // Finding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // Inserting the dragging item before the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());

// 
// 
// 


items.forEach(item => {
  const editButton = item.querySelector(".edit");
  const saveButton = item.querySelector(".save");
  const detailsSpan = item.querySelector(".details span");

  editButton.addEventListener("click", () => {
    detailsSpan.contentEditable = "true";
    detailsSpan.focus();

    editButton.style.display = "none";
    saveButton.style.display = "inline";
  });

  saveButton.addEventListener("click", () => {
    detailsSpan.contentEditable = "false";

    editButton.style.display = "inline";
    saveButton.style.display = "none";
  });
});


const switches = sortableList.querySelectorAll(".switch");

switches.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
        const item = event.target.closest(".item");
        if (checkbox.checked) {
            item.classList.remove("inactive");
        } else {
            item.classList.add("inactive");
        }
    });
});


// Add a click event listener to each info button
document.addEventListener('DOMContentLoaded', function() {
    var infoIcons = document.querySelectorAll('.info');
    var descriptionBoxes = document.querySelectorAll('.description-box');

    infoIcons.forEach(function(infoIcon, index) {
      infoIcon.addEventListener('click', function() {
        var descriptionBox = descriptionBoxes[index];
        if (descriptionBox.style.display === 'block') {
          descriptionBox.style.display = 'none';
        } else {
          descriptionBoxes.forEach(function(box) {
            box.style.display = 'none';
          });
          descriptionBox.style.display = 'block';
        }
      });
    });

    document.addEventListener('click', function(event) {
      var target = event.target;
      var isInfoIcon = target.classList.contains('info') || target.classList.contains('info-icon');
      var isDescriptionBox = target.classList.contains('description-box') || target.closest('.description-box');

      if (!isInfoIcon && !isDescriptionBox) {
        descriptionBoxes.forEach(function(box) {
          box.style.display = 'none';
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const switchButtons = document.querySelectorAll('.switch input');
  
    switchButtons.forEach((switchButton) => {
      switchButton.addEventListener('change', () => {
        const parentLi = switchButton.closest('.item');
        const detailsSpan = parentLi.querySelector('.details span');
        const toggleButton = parentLi.querySelector('.switch .slider');
  
        if (switchButton.checked) {
          detailsSpan.style.backgroundColor = 'darkgrey';
          toggleButton.style.backgroundColor = 'plum';
        }
      });
    });
  });
  
  
