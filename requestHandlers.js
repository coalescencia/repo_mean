
// https://www.nodebeginner.org/index-es.html


 function iniciar(response) {
    console.log("Manipulador de peticiones 'iniciar' fue llamado.");
  
    var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/subir" method="post">'+
      '<textarea name="text" rows="20" cols="60"></textarea>'+
      '<input type="submit" value="Enviar texto" />'+
      '</form>'+
      '</body>'+
      '</html>';
  
      
      response.setHeader("Content-Type", "text/html; charset=utf-8"); 
      response.write(body);
      response.end();
  }
  
  function subir(response) {
    console.log("Manipulador de peticiones 'subir' fue llamado.");
    response.setHeader("Content-Type", "text/html; charset=utf-8");     
    response.write("Hola Subir");
    response.end();
  }
  
  exports.iniciar = iniciar;
  exports.subir = subir;