//you have to upload this code on live server, wont work on local host!
//contact form starts

// const form = document.querySelector("form"),
// statusTxt = form.querySelector(".button-area span");


// form.onsubmit = (e) =>{
//     e.preventDefault();
//     statusTxt.style.color = "#0D6EFD";
//     statusTxt.style.display = "block";

//     let xhr = new XMLHttpRequest(); //creating new xml object
//     xhr.open("POST", "message.php", true);
//     xhr.onload = () =>{
//         if(xhr.readyState == 4 && xhr.status == 200){
//             let response = xhr.response;
//             if(response.indexOf("Email and password field is required") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1 ){
//                 statusTxt.style.color = "red";
//             } else{
//                 form.reset();
//                 setTimeout(()=>{
//                     statusTxt.style.display = "none";
//                 }, 3000);
//             }
//             statusTxt.innerText = response;
//         }
//     }

//     let formData = new FormData(form);

//     xhr.send(formData);
// }

//contact form ends

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

  //alert boxes
  function myFunction() {
    alert("This website is not available");
  }