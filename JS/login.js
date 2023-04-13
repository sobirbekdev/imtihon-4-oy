let elForm = document.querySelector("#form");

elForm.addEventListener("submit", async (e) =>{
    e.preventDefault();
    let {email,password} = e.target.elements
    console.log(email.value,password.value);
    
    let data = await fetch("https://reqres.in/api/login",{
    method: "POST",
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
    }),
}).then(Response => Response.json())
.then(json => json)
.catch( error => console.log(error));




if(data.token){
    localStorage.setItem("token", JSON.stringify(data.token))
    window.location.replace("index.html")

    elForm.innerHTML=null
}
});