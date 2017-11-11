function cargarDocumento() {
  alert("Creando la varible");
  var http=new XMLHttpRequest();
  http.onreadystatechange=function () {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("login").innerHTML=this.responseText;
    }
  }
  http.open("POST", "logines.json", true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send();
}
// ajax_info.txt
