# MercadoLibre FrontEnd Challenge

Challenge para puesto FrontEnd.

Nahuel Palacios.

## Instalación🔧

Clonar e installar dependencias.

```bash
$ git clone https://github.com/palaciosnahuel/fe-meli.git
npm install 
```

## Ejecución 🚀

**Run Server (en carpeta "back")**

```cmd
node index.js
```
**Run Client (en carpeta "front")**
```cmd
npm start.js
```


## Construido con 🛠️

#### Frontend
* [React](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
* [React-Router](https://reactrouter.com/) - Enrutamiento dinámico
* [Sass](https://sass-lang.com/) - CSS Preprocessors


#### Backend
* [NodeJs](https://es.reactjs.org/) - Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.  
* [Express](https://sass-lang.com/) - Express es una infraestructura de aplicaciones web Node.js mínima y flexible



## Arquitectura  🔩

_**Backend**_:

En nuestra arquitectura de back, **Express** funciona como middleware, haciendo de intermediario a las consultas de la api que nos provee **Mercadolibre**.

Generamos nuestros **endpoints** establecidos por el challenge, que consultan a travez de un método a las apis de Meli. Se utilizo un diseño de dos capas **index / service**, en el cual desde el index se establecen los endpoint y se ejecutan los metodos de service, esta misma es encargada de parsear datos y objetos según lo pedido por el challenge.

_**FrontEnd**_:

El front end está realizado con **ReactJs** para el renderizado y **Sass** para los estilos. Se utilizo flexbox para generar los layouts.

Se divide en 
* src
  * Assets **(Contenido propuesto por MercadoLibre).**
  * Components **(Componentes de la app).**
  * Services **(Llamadas a la api de MercadoLibre).**
  * Styles **(Estilos scss generales).**

## Mejoras a futuro 📋
* Migrar a TypeScript (TSX)
* Automatizar inicio con script de npm
* Validar el httpresponse del back, por ejemplo, en caso que el ID no exista.


## Notas 📄
No se utilizo ninguna libreria de CSS. Entiendo que el challenge buscaba el desarrollo del mismo de forma nativa. Caso contrario se podría implementar Bootstrap o Material.


En los specs no se contemplaban distintas vistas según viewport o dispositivo, de todas maneras se realizo un diseño responsive.
