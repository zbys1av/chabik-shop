let in1 = document.getElementById("client-name");
let in2 = document.getElementById("client-email");
let in3 = document.getElementById("full-info");
// let productName = document.querySelector(".col-5-t");

// let b = document.getElementById("div");
document.getElementById("order-form").style.visibility = "hidden";

document.getElementById('confirm-file').addEventListener('click', confirm);
// document.getElementById('order-form').addEventListener('click', read);

function pressBtn(){
  if (in3.length > 0){
    document.getElementById('order-form').click();
    form.reset();
  }
}

function confirm()  
{  
     let txtFile = new XMLHttpRequest();
     let a = txtFile.responseText;
     txtFile.open("GET", "./orders.txt", true);
     txtFile.onreadystatechange = function()
     {
        a = txtFile.responseText;
        a = a.replaceAll('"', "").split("\n");
        in3.value = a[a.length-1];
        pressBtn();
     }
    // console.log(b.value);
    txtFile.send(null);
    // transferinfo();
}

// document.getElementById('order-form').addEventListener('click', read);

// function transferinfo(){
//   in3.value += in3.value;
// }




/* <form action="https://formspree.io/xbjzppro" method="POST" class="form-contacts">
<div class="form-group row">
  <label for="client-name" class="col-4 col-form-label">Ваше ім'я:</label>
      <input class="form-control col-8" type="text" id="client-name" required>
</div>
<div class="form-group row">
  <label for="client-email" class="col-4 col-form-label">Ваш емейл:</label>
      <input class="form-control col-8" type="email" id="client-email" required>
</div>
<div class="form-group row">
  <label for="full-info" class="col-4 col-form-label"></label>
    <input class="form-control col-8" name="full-info" type="email" id="full-info">
</div>
</form>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary btn-close" data-dismiss="modal">Закрити</button>
<button type="submit" class="btn btn-primary order">Замовити</button>
</div> */