function verificaEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function controlloForm() {
    let nome = document.forms["formmail"]["nome"].value;
    let email = document.forms["formmail"]["email"].value;
    let tel = document.forms["formmail"]["tel"].value;
    let msg = document.forms["formmail"]["msg"].value;
  
    if (nome == "" || email == "" || msg == "") {
      alert("I campi Nome, Email e Messaggio sono obbligatori!");
      return false;
    }
    else if (verificaEmail(email) !== true) {
      alert("L'indirizzo email non sembra corretto!");
      return false;  
    }else{
      return true;
    }
  }