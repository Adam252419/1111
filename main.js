const focimElem = document.getElementById("focim")
focimElem.textContent="Mátrix rendszer"
const statuszElemek = document.getElementsByClassName("statusz-szoveg")
console.log(statuszElemek.length)
statuszElemek[0].textContent="Rendszer Ellenörzés folyamatbam..."
statuszElemek[1].textContent="Rendszer Ellenörzés folyamatbam..."
const listaElemek =document.querySelectorAll(".lista-elem")
console.log(listaElemek[0].textContent)
listaElemek[1].textContent="Szerver állapot: ONLINE"
const nevInput =document.querySelector("#jatekos-nem-input")
const inditoGomb =document.querySelector("#indito-gomb")
const eredmenyDiv =document.getElementById("eredmeny")
inditoGomb.addEventListener("click",fveny)
function fveny(){
    const gombFelirat =inditoGomb.textContent
    const jatekosNev =nevInput.value

    eredmenyDiv.insertAdjacentElement("beforeend",`<span> ${jatekosnev}, ${gombfelirat}</span>`)
    eredmenyDiv.textContent=`${jatekosNev}, ${gombFelirat}`
}