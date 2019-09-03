
   
let HTMLgenerator = (name, address) => {
    return `
    <section>
        <h1>${name}</h1>
        <div>${address}</div>
    </section>
`
}

document.getElementById("saveEntry").addEventListener("click" , event => { 
    let container = document.getElementById("addressList")
    let personName = document.getElementById("fullName").value
    let personAddress = document.getElementById("address").value
   container.innerHTML += HTMLgenerator(personName, personAddress)
   
}) 

//  input.addEventListener("keyup", () => {
 //       articles.innerHTML = event.target.value  
 //   })

