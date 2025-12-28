const $ = (el) => document.querySelector(el);

function nameCheck() {
  const username = $("#username").value.trim();
  const usernameRegex = /^[A-Za-z0-9_]{3,20}$/;

  if (!username || !usernameRegex.test(username)) {
    alert(
      "Invalid username: must be 3–20 characters, letters/numbers/underscores only."
    );
    return false;
  }
  return true;
}

function emailCheck() {
  const email = $("#email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert("Email is empty or invalid email formate");
    return false;
  }
  return true;
}

function passwordCheck() {
  const password = $("#password").value;
  const passwordCheck = $("#check-password").value;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (password !== passwordCheck) {
    alert("Passwords do not match");
    return false;
  }
  if (!password || !passwordRegex.test(password)) {
    alert(
      "Invalid password: must be at least 8 characters and include both letters and numbers."
    );
    return false;
  }
  return true;
}

function onSubmit() {
  if (!nameCheck()) return;
  if (!emailCheck()) return;
  if (!passwordCheck()) return;
  alert("Form is submited")
  return;
}

$("#submit-btn").addEventListener("click", onSubmit);
