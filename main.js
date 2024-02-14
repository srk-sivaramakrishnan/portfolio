

// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 100
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
      // active sections for animate on scroll
      sec.classList.add('show-animate')
    }
    // if want to use animation that repeat on scroll use this
    else {
      sec.classList.remove('show-animate')
    }
  })

  // sticky header
  let header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100)

  // remove toggle and navbar click links (scroll)
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')

  // animation footer on scroll
  let footer = document.querySelector('footer')

  footer.classList.toggle(
    'show-animate',
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  )
};

//Typing Section

var typed = new Typed(".text", {
  strings:["B.E. Computer Science and Engineering"], 
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop: true
});

//------------- Email JS -------------
function sendMail() {
  var params = {
    full_name: document.getElementById("full_name").value,
    email_id: document.getElementById("email_id").value,
    phone_number: document.getElementById("phone_number").value,
    email_subject: document.getElementById("email_subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_k04wqlk";
  const templateID = "template_y84lunj";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("full_name").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("phone_number").value = "";
      document.getElementById("email_subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", function () {
  // Your other code that depends on the DOM being fully loaded
});


