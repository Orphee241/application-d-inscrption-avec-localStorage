var id = 0;
let ligne = document.getElementById("ligne"); 
var datas = [];

document.querySelector(".btn1").addEventListener("click", (e)=>{
    id = id + 1;
    e.preventDefault();
    let email = document.querySelector(".email").value;
    
    datas.push(email);

    localStorage.setItem("mail", JSON.stringify(datas));
    console.log(getDatas);


})

/* let getDatas = JSON.parse(localStorage.getItem("mail"))

if(localStorage.getItem("mail") != null){
    for(getData of getDatas){
        ligne.innerHTML += `
        <tr>
            <th scope="row">${id}</th>
            <td>${getData}</td>
        </tr>
    `    
    }
} */
