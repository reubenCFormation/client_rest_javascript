const urlParams=new URLSearchParams(window.location.search);
const userId=urlParams.get('user_id');

axios.get(`http://localhost:8080/php_api/api/users/find/${userId}`,{headers:"Content-Type:application/json"}).then((response)=>{
    console.log("get response data");
    console.log(response);
}).catch((error)=>{
    console.log("get error");
    console.log(error);
})