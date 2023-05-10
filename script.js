//you have to upload this code on live server, wont work on local host!

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");


form.onsubmit = (e) =>{
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true);
    xhr.onload = () =>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            if(response.indexOf("Email and password field is required") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1 ){
                statusTxt.style.color = "red";
            } else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
        }
    }

    let formData = new FormData(form);

    xhr.send(formData);
}


// the header JS


var loader = document.getElementById('loader');
window.addEventListener("load", function(event) {
    loader.classList.remove('loading');
    loader.classList.add('loaded');
    document.body.classList.add('imgloaded');
});

