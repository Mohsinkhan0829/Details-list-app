let form = document.querySelector("form")
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let address = document.querySelector("#address");
let contact = document.querySelector("#contact");
let relationship = document.querySelector("#relationship");
let savebtn = document.querySelector(".savebtn");
let resultdiv = document.querySelector(".newbox")

const savetodo=(e)=>{
e.preventDefault();
let newdiv = document.createElement("div");
newdiv.className=("listgroup rounded-0 card p-5 my-2 shadow-lg bg-dark text-light");


newdiv.innerText = `
name:${name.value};
contact:${contact.value};
address:${address.value};
email:${email.value};
relationship:${relationship.value}`
resultdiv.appendChild(newdiv);
form.reset();


let dltbtn = document.createElement("button");
dltbtn.className= ("btn btn-sm btn-danger rounde-0 float-end Delete");
dltbtn.innerText= "Delete list";
newdiv.appendChild(dltbtn);

}

const deletetodo =(e)=>{
   console.log(e.target.className.includes("btn-danger"))
   let li = e.target.parentElement;
   if(window.confirm("are you sure?")){
   resultdiv.removeChild(li)
}
}

savebtn.addEventListener("click" , savetodo);
resultdiv.addEventListener("click", deletetodo);


