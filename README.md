Solución

En el siguiente código se desarrollaron varios componentes para la renderización de la aplicación, se utilizó Bootstrap como libreria de Css y HTML.

En el archivo de servicios se realizó el llamado de los endPoints necesarios para la implementación de los componentes, se obtuvo la data mediante el módulo de http Client, así mismo con base a esta se realizó el filtrado de los posts mediante una función que recibe el termino escrito en la caja de texto de búsqueda y retornaba los elementos que tuvieran el índice mayor o igual a 0, en caso contrario, se mostrará una alerta que nos permite saber que no existen resultados.

Adicionalmente se agregó navegación en la aplicación con la que se agregaron funcionalidades como obtención de comentarios de cada post y detalles del usuario principal de cada uno de ellos.