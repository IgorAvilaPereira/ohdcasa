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
      alert("ok");    
      
      /*
      const response = await fetch("/")
      const json = await response.json()
      document.querySelector("#div_clientes").innerHTML = ""
      json.forEach(({ id, nome }) => {
          document.querySelector("#div_clientes").innerHTML += `<button class="btn btn-danger" onclick='editar(${id})'>Editar</button> <button class="btn btn-danger" onclick='deletar(${id})'>Deletar  </button> ${nome} <br>`;
      });*/
  
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
