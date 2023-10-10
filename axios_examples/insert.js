const getForm=document.getElementById("form");
getForm.addEventListener("submit",onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    
    const firstnameEntered=document.querySelector(".firstname-input").value;
    const lastnameEntered=document.querySelector(".lastname-input").value;
    const emailEntered=document.querySelector(".email-input").value;
    const descriptionEntered=document.querySelector(".description-input").value;
    const passwordEntered=document.querySelector(".password-input").value;

    const dataToSend={firstname:firstnameEntered,lastname:lastnameEntered,email:emailEntered,description:descriptionEntered,password:passwordEntered};

    handleRequest(dataToSend)
}


function handleRequest(data){

    if(data.firstname && data.lastname && data.email && data.description && data.password){
        // Ici nous sommes en train d'envoyer des données a un serveur (Nous sommes donc en methode POST). Axios va pouvoir automatiquement transformer notre objet data en format JSON sans que nous avons besoin de le faire nous memes ! Notre serveur PHP va donc pouvoir traiter ce JSON et le transformer en tableau associatif PHP
        axios.post("http://localhost:8080/php_api/api/user/insert",data,{headers:"Content-type:application/json"}).then((response)=>{
            console.log("GET RESPONSE");
            console.log(response);
        }).catch((error)=>{
            console.log("Get Error");
            console.log(error);
        })
    }

    else{
        const warningMsg=document.querySelector(".warning-msg");
        warningMsg.textContent="Viullez remplir tous les champs !";
    }
}
    