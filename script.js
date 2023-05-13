
// when refresh go up to the top of the page

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }
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

