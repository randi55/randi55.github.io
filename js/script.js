const contactform = document.getElementById("contact-form");

contactform.addEventListener("submit",function(e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactform);

    fetch(url,{
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then (() =>{
        //url thank you
    window.location.href = "./thankyou.html";
    })
    .catch((e) => alert("error occured"));
}); 
