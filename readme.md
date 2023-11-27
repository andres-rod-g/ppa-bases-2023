# PPA BASES DE DATOS 2023-2.
## Por Andrés Rodríguez y Julianna Eraso

# Descripción del Proyecto.
El proyecto, trata de una API que permite crear usuario, obtener usuarios y eliminarlos.
Al mismo tiempo, lleva un control de las periciones (Logs) para poder saber la última vez en que acciones consideradas importantes fueron ejecutadas.

Dentro de los requerimientos del proyecto, estaba usar 2 bases de datos. En este caso, este fue el uso que se hizo:
1. MongoDB -> Usuarios
2. MySQL -> Logs

# Pasos para instalación y despliegue en modo desarrollo
1. Instalar NodeJS
2. Instalar XAMPP
3. Ejecutar XAMPP -> Apache y MySQL (IMPORTANTE: La base de datos MySQL debe estar en el puerto 3306, de lo contrario no funcionará)
4. Entrar a la carpeta del proyecto por medio de consola
5. Ejecutar en consola "npm i"
5. Ejecutar en consola "npm run dev" (IMPORTANTE: Tiene que estar libre el puerto 3000.)

# Pruebas con PostMan
Dentro de este repositorio, se encuentra la carpeta `postman/`, donde de encuentra el JSON que puede ser importado en POSTMAN para su uso.