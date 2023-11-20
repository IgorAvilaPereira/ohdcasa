// function script(conteudo) {
//   var linhas = document.querySelector("#form > fieldset > table").rows.length;
//   var i = 1;
//   var resultado = "";
//   // var resultado = document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br>================<br>";
//   // i++;
//   while (i < linhas) {
//     resultado += document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br>================<br>";
//     i++;
//   }  
//   newpopupWindow = window.open('', 'pagina', "width=400 height=400");
//   newpopupWindow.document.write("");
//   newpopupWindow.document.write(document.querySelector("#form > fieldset > div:nth-child(3)").innerText + "<br><br>"+ resultado);  
// }

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").addEventListener("click", async function () {
    // document.addEventListener("load", async function () {

    // alert("ok");         
    const response = await fetch("https://ohdcasa.com.br/collections/destaques", {
      method: 'GET',
      headers: { 'Content-Type': 'application/text' }
    });
    const html = await response.text()
    // document.querySelector("#conteudo_extensao").innerHTML = html;   
    
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var produtos = doc.getElementsByClassName("product-item__primary-image lazyload image--fade-in");   
    for (let index = 0; index < produtos.length; index++) {
       document.querySelector("#conteudo_extensao").innerHTML += produtos[index].alt + "<br><br>";
    }
    // var produtos = doc.getElementsByClassName("product-item__title text--strong link");
    // var precos = doc.getElementsByClassName("price price--highlight");
    // // <button id="btn1">Buscar</button>
    // for (let index = 0; index < produtos.length; index++) {
    //   document.querySelector("#conteudo_extensao").innerHTML += produtos[index].innerText + ":" + precos[index].innerText + "<br><br>";
    // }
    
    // (async () => {
    //   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //   chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     func: script/*,*/
    //     // args: [conteudo]
    //   });
    // })()
  });
});   
