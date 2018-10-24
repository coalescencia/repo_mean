/* function route(handle, pathname) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("No se encontro manipulador para " + pathname);
    return "404 No Encontrado";
  }
}
  
  exports.route = route; */

  function route(handle, pathname, response) {
    console.log("A punto de rutear una peticion para " + pathname);
    if (typeof handle[pathname] === 'function') {
      handle[pathname](response);
    } else {
      console.log("No hay manipulador de peticion para " + pathname);
     // response.writeHead(404, {"Content-Type": "text/html"});
      response.setHeader("Content-Type", "text/html; charset=utf-8"); 
      response.write("404 No Encontrado");
      response.end();
    }
  }

  exports.route = route;