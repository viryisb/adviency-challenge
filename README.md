# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Consignas:

# Adviency

???? Record?? que la idea es empezar la app de 0 cada d??a, no editar la del d??a anterior, si no te dan los tiempos o te parece mucho, edit?? la anterior, mejor poco que nada! ????

- D??a 1: Para calentar motores vamos a mantener las cosas simples, mostremos una lista de regalos, 3 elementos, fijos, sin nada m??s.

- D??a 2: Nuestra app se ve muy poco navide??a, demosle unos colores m??s lindos, rojo, verde, amarillo! Podemos ponernos creativos con lo que queramos!

- D??a 3: Est??mos generosos, vamos a agregar un formulario con un input para escribir nuestro regalo y un bot??n para agregarlo a nuestra lista, todav??a no los podemos borrar, pero... es navidad! Por que querr??amos borrar regalos?

- D??a 4: Papa noel no estuvo muy contento con la demanda de regalos, vamos a tener que agregar un bot??n de eliminar a cada elemento para poder borrarlos individualmente.

- D??a 5: La gente est?? muy indecisa y agrega muchos regalos y despu??s los debe borrar de a uno! Agreguemos un bot??n para eliminar todos los regalos a la vez!

- D??a 6: Nuestra aplicaci??n no se ve muy bien cuando no hay regalos, agreguemos un mensaje alentando a agregar regalos cuando no haya ninguno!

- D??a 7: Tuvimos algunos reportes de regalos vac??os o repetidos, asegurmosnos que la gente solo pueda agregar un regalo si escribi?? algo y si ese regalo no est?? ya en la lista!

- D??a 8: Cometimos un error el d??a anterior, la gente quiere agregar regalos repetidos para regalarselos a diferentes personas, agreguemos un campo al lado del input de texto para poner la cantidad de unidades del regalo que deber??amos comprar.

- D??a 9: La gente est?? triste por que al cerrar la aplicaci??n pierde todos sus regalos ????. Usemos `localStorage` para guardar los regalos en el dispositivo del usuario y cargarlos cuando vuelve!

- D??a 10: Las palabras dicen mucho pero las im??genes m??s! Agreguemos un campo donde podamos pegar un link de im??gen para cada regalo y mostremoslo en la lista.

- D??a 11: Nuestro formulario tiene muchas cosas y molesta a la vista de los usuarios, pasemoslo a un modal / drawer o lo que quieras y pongamos un bot??n de "Agregar regalo" que lo muestre.

- D??a 12: La gente no recuerda que regalo corresponde a cada quien, agreguemos un campo para destinatario y mostremoslo.

- D??a 13: Nuestros usuarios se ponen muy contentos y se equivocan al cargar regalos, agreguemos un bot??n editar que nos permita cambiar regalos ya agregados.

- D??a 14: Nuestra aplicaci??n no es muy accesible, hagamos que podamos agregar, borrar y editar regalos sin tocar el mouse.

- D??a 15: Pronto tendremos que preparar una api para nuestra aplicaci??n, preparemos un m??todo para traernos nuestros regalos que use promesas o async await.

- D??a 16: La gente est?? perdiendo la creatividad y necesita una ayuda, agreguemos un bot??n para obtener un regalo aleatorio para el campo "regalo", pod??s tener una lista fija de regalos, no es necesario que sean generados.

- D??a 17: Nos olvidamos de agregar un campo de precio para nuestros regalos! Aseguremosnos de mostrar el precio correcto tomando en cuenta la cantidad de unidades del regalo.

- D??a 18: La gente agrega muchos regalos y necesita saber el total de lo que gastar??a, pongamos el total.

- D??a 19: La gente quiere hacer el mismo regalo pero a diferentes personas o en diferentes cantidades, agreguemos un bot??n de duplicar que abra el modal precargado.

- D??a 20: Queremos tener una lista de regalos para ir a comprar pero no queremos que tenga los botones o precios, agreguemos un bot??n de previsualizar que nos abra un modal.

- D??a 21: Fuimos a comprar los regalos pero no teniamos datos en el celular, no queremos que le pase a alguien m??s, agreguemos un bot??n de imprimir a esa lista.

- D??a 22: Levantemos el esp??ritu navide??o agregando un sonido navide??o de fondo. No tan alto, tiene que estar deshabilitado por defecto y el usuario puede habilitarlo.

- D??a 23: Ya casi es navidad! Agreguemos unos copitos de nieve a nuestra app para darle el ??ltimo toque navide??o ???
