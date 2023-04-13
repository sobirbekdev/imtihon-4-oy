let elUserList = document.querySelector("#user__list");
let elIdList = document.querySelector("#id__list");
let elZipList = document.querySelector("#zip__list");
let elUsernameList = document.querySelector("#Username");
let elCityList = document.querySelector("#City");
let elContactList = document.querySelector("#Contact");
let elGradeList = document.querySelector("#Grade");
let elPhone = document.querySelector("#phone");
let elLogout = document.querySelector("#logout");



let tokin = localStorage.getItem("token") || false;
if(!tokin){
    window.location.replace("login.html")
}

elLogout.addEventListener("click",() =>{
    localStorage.removeItem("token")
    window.location.replace("login.html")
});



// userRenderFanc

async function userRenderFanc(elment){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
    console.log(data);
    
    
    
    if(data){
        data.forEach(user =>{
            let newLi = document.createElement("li");
            let p = document.createElement("p");
            
            p.textContent = user.name;
            p.setAttribute("style", "pointer-events: none; color:#4D44B5");
            newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5;");
            newLi.dataset.id = user.id;
            newLi.append(p);
            
            elment.appendChild(newLi)
            
        });
    }
}
userRenderFanc(elUserList);



async function IdRenderFanc(elment){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
    console.log(data);
    
    
    if(data){
        data.forEach(user =>{
            let newLi = document.createElement("li");
            let p = document.createElement("p");
            
            p.textContent = user.id;
            p.setAttribute("style", "pointer-events: none; color:#4D44B5");
            newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5;");
            newLi.dataset.id = user.id;
            newLi.append(p);
            
            elment.appendChild(newLi)
            
        });
    }
}
IdRenderFanc(elIdList);


// Zipcode

async function ZipcodeRenderFanc(elment){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
    console.log(data);
    
    
    if(data){
        data.forEach(user =>{
            let newLi = document.createElement("li");
            let p = document.createElement("p");
            
            p.textContent = user.address.zipcode;
            p.setAttribute("style", "pointer-events: none; color:#4D44B5");
            newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5;");
            newLi.dataset.id = user.id;
            newLi.append(p);
            
            elment.appendChild(newLi)
            
        });
    }
}
ZipcodeRenderFanc(zip__list);




async function UsernameRenderFanc(elment){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
    console.log(data);
    
    
    if(data){
        data.forEach(user =>{
            let newLi = document.createElement("li");
            let p = document.createElement("p");
            
            p.textContent = user.username;
            p.setAttribute("style", "pointer-events: none; color:#4D44B5");
            newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5;");
            newLi.dataset.id = user.id;
            newLi.append(p);
            
            elment.appendChild(newLi)
            
        });
    }
}
UsernameRenderFanc(elUsernameList);



// Citiy 


async function CitiyRenderFanc(elment){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
    console.log(data);
    
    
    if(data){
        data.forEach(user =>{
            let newLi = document.createElement("li");
            let p = document.createElement("p");
            
            p.textContent = user.address.city;
            p.setAttribute("style", "pointer-events: none; color:#4D44B5");
            newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5;");
            newLi.dataset.id = user.id;
            newLi.append(p);
            
            elment.appendChild(newLi)
            
        });
    }
}
CitiyRenderFanc(elCityList);






async function ContactRenderFanc(elment){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
    console.log(data);
    
    
    if(data){
        data.forEach(user =>{
            let newLi = document.createElement("li");
            let img1 = document.createElement("img");
            let img2 = document.createElement("img");
            let a= document.createElement("a");
            
            img1.src="https://icons.veryicon.com/png/o/phone/phone-phone/phone-106.png" ;
            src = user.phone;
            img2.src="https://icons.veryicon.com/png/o/object/finding-life/message-28.png" ;
            src = user.email;
            a.href =   `mailto: `;
            console.log(a.href);
            img1.setAttribute("style", "pointer-events: none; width: 24px; " );
            img2.setAttribute("style", "pointer-events: none; width: 24px; " );
            newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; display: flex; gap:10px;");
            newLi.dataset.id = user.id;
            newLi.append(img1,img2,a);
            
            
            elment.appendChild(newLi)
            console.log(a.href = user.email);
        });
    }
}
ContactRenderFanc(elContactList);


// Suite 

async function GradeRenderFanc(elment){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
    console.log(data);
    
    
    if(data){
        data.forEach(user =>{
            let newLi = document.createElement("li");
            let btn = document.createElement("button");
            
            btn.textContent = user.address.suite;
            btn.setAttribute("style", "pointer-events: none;");
            newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; background-color: #FB7D5B; color: #fff ; ");
            newLi.dataset.id = user.id;
            newLi.append(btn);
            
            elment.appendChild(newLi)
        });
    }
}
GradeRenderFanc(elGradeList);



let Body = document.querySelector("body");
let elForm =document.querySelector("#modal__form");
let elSelect = document.querySelector("select");
let elOption = document.querySelector("option");


Body.addEventListener("click", (evt) =>{
    if (evt.target.tagName = "BUTTON") {
        let elem = evt.target
        if(elem.textContent == "+New Student"){
            elForm.classList.add("class", "flex");
            elForm.classList.remove("class", "hidden");
        }else if(elem.textContent == "Canel"){
            elForm.classList.remove("class", "flex");
            elForm.classList.add("class", "hidden");
        }else if(elem.textContent== "SERCH"){
            console.log(evt);
            elForm.classList.remove("class", "flex");
            elForm.classList.add("class", "hidden");
        }
    }
    
})

elForm.addEventListener("submit",async (evt) =>{
    evt.preventDefault();
    
    let {name,id,zipcode,usename,contentPhone,contentMail,suite}=evt.target.elements
    
    
    let object = {
        name: `${name.value.trim()}`,
        id: `${id.value.trim()}`,
        address: {
            zipcode:`${zipcode.value.trim()}`,
            suite: `${suite.value.trim()}`,
            city: `${suite.value.trim()}`
        },
        username: `${usename.value.trim()}`,
        phone: `${contentPhone.value.trim()}`,
        email: `${contentMail.value.trim()}`,
    };
    
    let respons = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(object),
        }
        )
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => console.log(err));
        console.log(respons  );
        
        
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));
        console.log(data);
        let Newdata = [respons,...data];
        
        let responss = await fetch(
            `https://jsonplaceholder.typicode.com/users`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
            )
            .then((res) => res.json())
            .then((json) => json)
            .catch((err) => console.log(err));
            
            elGradeList.innerHTML=null      
            elUserList.innerHTML=null  
            console.log(Newdata);
            
            
            
            // user  
            Newdata.forEach(user =>{
                
                let newLi = document.createElement("li");
                let p = document.createElement("p");
                
                p.setAttribute("style", "pointer-events: none;");
                newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; color: #4D44B5 ; ");
                p.textContent = user.name;
                newLi.append(p);
                
                elUserList.appendChild(newLi)
            });
            
            // id   
            elIdList.innerHTML=null
            
            Newdata.forEach(user =>{
                
                let newLi = document.createElement("li");
                let p = document.createElement("p");
                
                p.setAttribute("style", "pointer-events: none;");
                newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; color: #4D44B5 ; ");
                p.textContent = user.id;
                newLi.append(p);
                
                elIdList.appendChild(newLi);
            });
            
            // zip 
            elZipList.innerHTML=null
            Newdata.forEach(user =>{
                
                let newLi = document.createElement("li");
                let p = document.createElement("p");
                
                p.setAttribute("style", "pointer-events: none;");
                newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; color: #4D44B5 ; ");
                p.textContent = user.address.zipcode;
                newLi.append(p);
                
                elZipList.appendChild(newLi);
            });
            
            // usename
            
            elUsernameList.innerHTML=null
            Newdata.forEach(user =>{
                
                let newLi = document.createElement("li");
                let p = document.createElement("p");
                
                p.setAttribute("style", "pointer-events: none;");
                newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; color: #4D44B5 ; ");
                p.textContent = user.username;
                newLi.append(p);
                
                elUsernameList.appendChild(newLi)
            });
            
            
            
            // City 
            
            elCityList.innerHTML=null
            Newdata.forEach(user =>{
                
                let newLi = document.createElement("li");
                let p = document.createElement("p");
                
                p.setAttribute("style", "pointer-events: none;");
                newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; color: #4D44B5 ; ");
                p.textContent = user.address.city;
                newLi.append(p);
                
                elCityList.appendChild(newLi);
            });

            // contakt

            elContactList.innerHTML=null

            Newdata.forEach(user =>{


                
                let newLi = document.createElement("li");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                
                p1.setAttribute("style", "pointer-events: none;");
                p2.setAttribute("style", "pointer-events: none;");
                newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; color: #4D44B5 ; ");
                p1.textContent = user.email;
                newLi.append(p1,p2);
                
                elContactList.appendChild(newLi);
            });
            
            
            
            Newdata.forEach(user =>{
                
                let newLi = document.createElement("li");
                let btn = document.createElement("button");
                let p = document.createElement("p");
                
                
                btn.textContent = user.address.suite;
                btn.setAttribute("style", "pointer-events: none;");
                newLi.setAttribute("style","padding: 10px; border: 2px solid #4D44B5; background-color: #FB7D5B; color: #fff ; ");
                newLi.dataset.id = user.id;
                newLi.append(btn);
                
                elGradeList.appendChild(newLi)
            });
            
            
            
        });
        
        
        
        
        
        
        
        
        
        
        