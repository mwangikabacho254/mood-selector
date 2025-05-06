const dropdown = document.getElementById("moodDropdown");
const result = document.getElementById("result");

dropdown.addEventListener("change", () => {
  const mood = dropdown.value;

  if (mood === "happy") {
    result.textContent = "Yay! Keep smiling 😊";
  } else if (mood === "sad") {
    result.textContent = "Sending virtual hugs 😢";
  } else if (mood === "excited") {
    result.textContent = "Wooo! Let’s go! 🤩";
  } else if (mood === "tired") {
    result.textContent = "Take a rest 😴";
  } else {
    result.textContent = "";
  }
});
