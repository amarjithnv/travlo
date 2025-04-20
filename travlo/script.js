let currentIndex = 0;

function updateCarousel() {
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = items[0].offsetWidth + 50; // Including gap
  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function nextSlide() {
  const totalItems = document.querySelectorAll(".carousel-item").length;
  if (currentIndex < totalItems - 4) {
    // Show only 4 items at a time
    currentIndex++;
  } else {
    currentIndex = 0; // Reset to first item
  }
  updateCarousel();
}

function prevSlide() {
  const totalItems = document.querySelectorAll(".carousel-item").length;
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 4; // Go to last batch
  }
  updateCarousel();
}

function loginValidate() {
  const email = document.getElementById("EmailId").value;
  const password = document.getElementById("password").value;
  if (email === "admin@gmail.com" && password === "admin") {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid credentials. Please try again.");
    return false;
  }
}

function signUpValidate() {
  const susername = document.getElementById("username").value;
  const semail = document.getElementById("email").value;
  const spassword = document.getElementById("spassword").value;
  if (semail === "" || spassword === "" || susername === "") {
    alert("All fields are required.");
    return false;
  }

  emailpat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailpat.test(semail)) {
    alert("Invalid email format.");
    return false;
  } else if (spassword.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  } else if (susername.length < 3) {
    alert("Username must be at least 3 characters long.");
    return false;
  } else {
    alert("Sign up successful!");
    return true;
  }
}

function contactValidate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("cemail").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    return false;
  }

  emailpat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailpat.test(email)) {
    alert("Invalid email format.");
    return false;
  } else {
    alert("Message sent successfully!");
    return true;
  }
}

// Attach event listeners
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);
