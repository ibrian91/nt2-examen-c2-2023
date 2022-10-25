# PROGRAMACIÓN EN NUEVAS TECNOLOGIAS 2

## Instrucciones de resolución del examen recuperatorio

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador frontend con React.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegaras, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de react que ya tiene codigo base del front con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone del presente repositorio
> 3. Instalar las dependencias
> 4. Solicitar el proyecto de backend y las variables de entorno que contiene la conexion string a mongodb
> 5. Ejecutar el servidor web (backend) con la api REST se puede ejecutar con npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo, también funciona.
>    El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_analytics** con las collections llamadas **accounts**, **customers** y **transactions** que contienen las transacciones de 5000 clientes. Por ahora trabajaremos con **customers**
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/customers debería retornar un json con los 5000 clientes. Esta implementado el paginado, aunque es totalmente opcional. Sí por algun motivo no llegase a funcionar, solicita asistencia.

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Necesitamos conectar el proyecto de React con el backend, mostrar un listado de los usuarios (no te preocupes por el diseño estético)
> 2. Una vez realizado el punto anterior necesitamos crear un componente llamado **Customer** que muestre los siguientes datos del cliente:
>    > "username", "name", "address", "birthdate", "email", "accounts"
>    > No te preocupes por el diseño estético, pero si por la "prolijidad"
> 3. Hay algunos clientes que tienen un determinado nivel (por ejemplo "Silver", "Gold", etc). Necesitamos un componente que muestre un listado de los que tienen nivel **Gold** con sus correspondientes beneficios.

> ### SI TE DA EL TIEMPO DAME UN MANO TAMBIEN EN...
>
> 5. Darle al punto 1 formato de tabla, y agregar un link en username para que lleve a una pagina donde muestre los datos de ese cliente.
> 6. Darle a los componentes un diseño estético, podrías usar algun framework de React para controles.
>
> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, no me gusta mucho las cosas rebuscadas y complicadas y codigo dificil de leer, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega

Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Poner cualquier nota aclaratoria de algun paso que sea necesario para probar, mas abajo en este mismo archivo (notas para la ejecución)
2. Realizar un commit a tu repo con un mensaje con tu **nombre completo**
3. Realizar un push a tu repositorio
4. Realizar un pull request a mi repositorio

## Listado de endpoint

-GET /api/customers?pageSize=[pageSize]&page=[page]

## Notas para la ejecución
