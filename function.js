/*1- objede bulunan elemanlardan olusan bir alisveris listesi olusturulacak
        -listede bilgiler ve bir buton bir satir olarak bulunacak
        -butonlara id verilecek ve bu id ler vasitasiyla sonra bu satirlara ulasilacak

 2-  Butona tiklandiginda o gurupta bulunan bilgiler bir obje olarak bir listeye push lanacak.
        -buraya eklenen bir fonksiyon ile objdeki bilgiler ile de buy kismi olusturulacak.
        buraya da bir buton ve butona bir id verilecek
        butona tiklandiginda listeden bulundugu gurubu cikaracak.

  3- listenin guncel halinden fiyat degerlerini toplayan bir fonksiyon ile ise total fiyat bilgisi olusturulacak 
 
 */


let buyList = [];

//butun urunleri bir liste halinde yazdiralim

function createList() {

    let table1 = document.querySelector("#product")

    productList.map((element, index) => {
        table1.innerHTML += ` <tr>
        <td>${element.productName}</td>
        <td>${element.price}</td>
        <td>${element.expireDate.toDateString()}</td>
       <td><img src="${element.productImage}" alt="photo"></td>
         <td>$${element.totalCalories}</td>
        <td> <button id="${index}">Add</button> </td>
    </tr>`
    })

}
createList();


function addBuyList() {

    productList.map((elementList, index) => {
        document.getElementById(`${index}`).addEventListener("click", function () {
            buyList.push({
                "productName": elementList.productName,
                "price": elementList.price,
                "image": elementList.productImage,

            })
            createBuyList();
        })
    })
}

addBuyList();

function createBuyList() {

    let table2 = document.querySelector("#list")

    let result = buyList.map((element, index) => {
        return ` <tr>
                   <td>${element.productName}</td>
                   <td>${element.price}</td>
                  <td><img src="${element.image}" alt="photo"></td>
                  <td> <button id="${index}">Remove</button> </td>
                </tr>
                ${findTotal()}
                `
                
    }).join("");
    table2.innerHTML = result
}


function findTotal(){
    let total=0;
    buyList.forEach(p=>total+=p.price);

    return `<tr>
                 <td colspan="2">Total Price</td>
                 <td colspan="2">${total.toFixed(1)} Fr</td>
            </tr>`
}

document.querySelector("#list").addEventListener("click",removeElement);

function removeElement(pEvent){
    let clickedElement= pEvent.target;
    if(clickedElement.tagName.toLowerCase()==="button"){
        let index= Number(clickedElement.id);
        buyList.splice(index,1)

        createBuyList();
    }

}

removeElement();