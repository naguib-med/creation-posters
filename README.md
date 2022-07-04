# posters-app

## Project setup
``` npm install ```

### Compiles and hot-reloads for development
``` npm run serve ```

### Compiles and minifies for production
``` npm run build ```

### Lints and fixes files
``` npm run lint ```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue3-swatches (couleurs)

``` npm install --save vue-swatches ```
Pour plus détails : https://github.com/wobsoriano/vue3-swatches

### Pour ajouter firebase dans notre projet : 
``` npm install --save firebase ```


### Deploiement avec firebase hosting 


1. Installer firebase cli : ``` npm install -g firebase-tools ```
2. Configuration du projet Vue 
    - Pour ce faire, dans le dossier racine de votre projet, exécutez la commande suivante : ``` npm run build ```
    - Créer un fichier .firebaserc et rajouter firebase project id.
    - Ensuite créer un fichier firebase.json et rajouter le code suivant : 
    ```json
	{
	"hosting":{
		"public":"dist",
		"ignore": [
			"firebase.json",
			"**/.*",
			"**/node_modules/**"
		],
		"rewrites":[
			{
				"source":"**",
				"destination":"/index.html"
			}
		]

	}
	}

3. Pour déployer votre application, vous devez d'abord connecter votre machine locale à votre compte Firebase et obtenir l'accès à vos projets Firebase. Pour ce faire, exécutez :  ` firebase login `
4. Déployer avec cette commande : ` firebase deploy `


URL de l'application : [Application](https://posters-app-3eb45.web.app/)
 
 
