function getAge() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const userBirthYear = parseInt(
    document.getElementById("userBirthYear").value
  );
  const userAge = currentYear - userBirthYear;
  document.getElementById("ageResult").value = userAge;
}

window.onload = function () {
  document.getElementById("ageResult").onclick = getAge;
};
