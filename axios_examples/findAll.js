// Ici nous voyons un client REST de javascript qui s'apelle axios. Axios est capable de faire des requettes vers des serveurs (En l'occurence vers un serveur PHP) et il est automatiquement capable par lui meme de parser le JSON que il va recevoir et de transformer ce JSON sous format d'objet javacript sans que nous avons besoin de le parser nous memes. Ici pas besoin d'envoyer des données au serveur car nous sommes en methode GET, donc nous n'allons que receuperer
axios.get("http://localhost:8080/php_api/api/users/all",{headers:"Content-Type:application/json"}).then((response)=>{
    console.log("get response");
    console.log(response);
    appendUsers(response)
}).catch((error)=>{
    console.log("get error");
    console.log(error);
})


function appendUsers(response){
    const usersTable=document.querySelector(".users-table");
    const tableBody=document.querySelector(".table-body");

    for(let i=0;i<response.data.length;i++){
        const tr=document.createElement("tr");
        const tdFirstname=document.createElement("td");
        const tdLastname=document.createElement("td");
        const tdEmail=document.createElement("td");
        const tdDescription=document.createElement("td");
        const tdLink=document.createElement("td");
        setTextContent(response,tdFirstname,tdLastname,tdEmail,tdDescription,i);
        appendChildTr(tr,tdFirstname,tdLastname,tdEmail,tdDescription);
        appendLink(tr,response,tdLink,i);
        tableBody.appendChild(tr);
        usersTable.appendChild(tableBody);
        
        
        
    }
}

function appendLink(tr,response,tdLink,index){
    const link=document.createElement("a");
    link.href=`http://localhost:5500/axios_examples/find.html?user_id=${response.data[index].id}`;
    link.textContent="Details de l'utilisateur";
    tdLink.appendChild(link);
    tr.appendChild(tdLink);
}

function setTextContent(response,tdFirstname,tdLastname,tdEmail,tdDescription,index){
    console.log(response.data)
    tdFirstname.textContent=response.data[index].firstname;
    tdLastname.textContent=response.data[index].lastname;
    tdEmail.textContent=response.data[index].email;
    tdDescription.textContent=response.data[index].description;
}

function appendChildTr(tr,tdFirstname,tdLastname,tdEmail,tdDescription){
    tr.appendChild(tdFirstname);
    tr.appendChild(tdLastname);
    tr.appendChild(tdEmail);
    tr.appendChild(tdDescription);
}

