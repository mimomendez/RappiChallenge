## Mi proyecto Rappi
Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.
Implemente algunos componentes de [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)

## Dependencias
Para poder correr el proyecto es necesario tener instalado nodeJS (https://nodejs.org/es/download/). Ya instalado node, tambien contamos con el paquete npm. Para corroborar que esten instalados podemos probar ejecutando: 'node -v' y 'npm -v' (https://www.ecodeup.com/como-instalar-node-js-y-su-gestor-de-paquetes-npm-en-windows/).
Luego debemos instalar angular-cli con este comando: 'npm install -g @angular/cli'. Tambien tenemos que instalar el paquete de npm 'json-server' con este comando: 'npm install -g json-server'. Por ultimo, debemos ubicarnos en la carpeta del proyecto en 'my-rappi' y ejecutar npm i (para instalar las dependencias del package.json).

## JSON-SERVER
Para trabajar con las estructuras JSON provistas por RAPPI, he decidido usar la libreria de npm llamada 'JSON-server'. Emula un servidor y crea funciones del tipo API/rest para trabajar con dicha informacion.
Es IMPORTANTISIMO aclarar que se creo un archivo db.json a 1er nivel del proyecto (al nivel de la carpeta node_modules para aclarar), el cual contiene la informacion de los archivos products.json y categories.json.
Pasos para levantar el json-server:
1- Abrir una terminal o consola a la altura 'my-rappi'
2- Ejecutar: json-server --watch db.json
3- Luego para corroborar que el server este funcionando, pueden ingresar a (http://localhost:3000) y observar el mensaje 'You're successfully running JSON Server', debajo de 'Resources' veran unos links con la data correspondiente.

## categories.json y categories-new.json
He creado un nuevo JSON categories-new, con el correspondiente aviso a mi recruiter Karen Osorio, debido a que observe que no estaban declarados todos los subleves correspondientes (del 1 al 13 faltaban el 8 y 11, debido a que esos eran niveles a 1er nivel de categoria como 1 y 2, y luego en productos si existian muchos elementos que hacian referencia a esos subleves faltantes).

## Servidor del proyecto
Pasos para levantar el server del proyecto:
1- Abrir una terminal o consola a la altura 'my-rappi'
2- Ejecutar: ng serve --open
3- Al agregar el comando '--open' se abrira automaticamente una nueva pestaña en su navegador predefinido como principal, con la url (http://localhost:4200/). Ahi ya se podra observar la pagina principal del proyecto.

## Aclaraciones del proyecto
Antes que nada, quiero aclarar que no he realizado consultas sobre la funcionalidad del proyecto pero considero que estan cumplidos todos los requerimientos que pedian en el challenge. Espero poder haber entendido cada una de las funcionalidades.
La pagina principal contiene un carousel con imagenes de las categorias mencionadas. Cada link de cada foto te redirecciona al buscador principal de productos. Tambien tenemos un enlace al carrito de compras, y en el header la imagen es un enlace a la home page.
El buscador principal, contiene un accordion con las cuatro categorias y dentro de ellas los subniveles de productos junto a una caja de texto para escribir un patron de nombre de producto. Cada boton es un enlace a la lista de productos de la categoria correspondiente.
Dentro de la lista de productos ya clasificados, tenemos un boton que muestra y oculta los filtros, los cuales se aplican si el usuario presiona el boton de aplicar filtros. Cada item tiene un boton de añadir al carrito de compras.
La ultima seccion, es la del carro de compras. Tenemos la lista de productos seleccionados previamente, los cuales se pueden modificar en la cantidad que se desean o se pueden remover definitivamente si confirma el modal. Al ejecutar cualquier de estas 2 acciones, el precio total se actualizara automaticamente. El boton de compra, tambien cuenta con un modal de confirmacion.