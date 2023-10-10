//pop up function 




//reload
function gototab(reload)
   {
    window.location.href = 'index.html#Home';
    window.location.reload(true);
   } 
// the header JS


var loader = document.getElementById('loader');
window.addEventListener("load", function(event) {
    loader.classList.remove('loading');
    loader.classList.add('loaded');
    document.body.classList.add('imgloaded');
});

// alert
function showCustomAlert() {
  var message = "Welcome to my old Portfolio website! Would you like to visit my new Portfolio website? If yes click the Ok.";
  var confirmation = confirm(message);

  if (confirmation) {
      // Redirect to the new website
      window.location.href = "https://lively-maamoul-d85ea1.netlify.app";
  }
}

// Call the showCustomAlert function when the page loads (you can call it on any event)
showCustomAlert();

//send email
function sendEmail(){
  
    Email.send({
      SecureToken: "e8a05f1d-b858-4d2e-a5b0-ed78a4aa223e",
      To : 'nyitrai100@gmail.com',
      From : 'nyitrai100@gmail.com',
      Subject : "inquiry From my portfolio website ",
      Body : "Name: " + document.getElementById("name").value 
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Mobile: " + document.getElementById("mobile").value
            +"<br> Location: " + document.getElementById("location").value
            +"<br> Message: " + document.getElementById("message").value
            
            
    }).then(
    alert( "Message sent. Thank you for your inquiry! I will contact you soon!")
                            
    );
  
  };

  //alert box for the first project
  function myFunction() {
    alert("This website is not available");
  }




  /*arrow*/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});
