![](https://imagizer.imageshack.com/v2/280x200q90/922/eH8oYH.png)
![](https://imagizer.imageshack.com/v2/280x200q90/922/g4Nx3D.png)

**Tecnológico Nacional de México ** 
**Campus Ensenada**
**Ingeniería en sistemas computacionales**
**Programación de dispositivos móviles IOS**
**Docente: Xenia Padilla Madrid**

**Equipo de desarrollo**
* **Aylin Gallegos**
* **Karen Meza**
* **Efrain Ruiz**
* **Rosario Ramirez**
* **Esteban Martinez**

![](https://imageshack.com/i/pnLFzzF6p)
<h1 align="center"> CFEProyect </h1>
![-----------------------------------------------------](https://imageshack.com/i/po0dJpTCg)
<h3 align="center"> Sistema de gestion de mantenimiento </h3>  

![](https://imageshack.com/i/pnLFzzF6p)

**Tabla de Contenidos**

[TOC]

![-----------------------------------------------------](https://imageshack.com/i/pnLFzzF6p)
<h1 align="center"> Definiciones y especificacion de procedimientos </h1>  
##Definicion General
<p align="justify">Este es un proyecto creado con Next.Js.
Consiste en un sistema gestión que facilita el control establecido del mantenimiento de cómputo asi como las ya realizadas y sus futuros mantenimientos. Un solo usuario será el encargado de utilizar el sistema para dar gestión a las otras unidades dentro de la empresa. Cada unidad de cómputo estará relacionada con un empleado con un id especifico, también cada mantenimiento genera plantillas ya prestablecidas y tendrá  la opción de agregar, modificar y dar de baja equipos.</p>

<p align="justify">El objetivo de este proyecto es solventar la problemática dada dentro de la empresa dando una mayor facilitación de tiempo ya que anteriormente se realizaba a mano por lo que resultaba de pérdida de tiempo importante de la misma</p>
##Especificaciones de requerimientos
<p align="justify">Los alcances del proyecto están definidos por el tiempo de desarrollo del mismo, se limita a cumplir con el objetivo general de este proyecto con posibilidad de realizar algún extra o mejora dependiendo de las solicitudes de la empresa</p>
###Acerca del proyecto
<p align="justify">El proyecto es original desarrollado desde cero,  fue diseñado con el propósito de proveerlo a la empresa solicitante para con esto ayudarles en la solución de la problemática con la que contaban</p>
##Procedimiento de instalacion y prueba
<p align="justify">Este proyecto será instalado en una unidad de cómputo dentro de la empresa solicitante el cual será exclusivamente para un solo usuario el cual es el encargado de gestionar los mantenimientos dentro de la misma. El software tendrá una base de datos lo cual facilitara la obtención de información de los trabajadores y de los equipos para poder guardar la informacion de estos mismos y asi poder  realizar las altas y bajas del sistema asi como alguna modificacion posterior.</p>
![](https://imageshack.com/i/pnLFzzF6p)

#Inicio de Sesión
<p align="justify">Es la primera pagina que se encuentra con el usuario una vez accediendo al sistema el cual tiene proposito que solo el administrador tenga acceso al software para su uso posterior</p>
![](https://imageshack.com/i/pnBe01Iop)
> Imagen del login .

Una vez ingresado los datos del usuario tendra acceso al sistema

##Navegacion
<p align="justify">Al ingreso satisfactorio el administrador tendra acceso al menu que contiene las secciones de manejo del software el cual cada seccion tiene una funcion en especifico el cual ayuda a realizar las necesidades que se requieran completar</p>
![](https://imagizer.imageshack.com/v2/640x480q90/924/rqNAf0.png)
> Imagen del Menu .

###Inicio
<p align="justify">Esta seccion es la pagina principal que se muestra una vez ingresado al sistema una lista de las maquinarias que ocupan de mantenimiento durante el dia, esto facilita para llevar un orden y manejo de los mantenimientos de los equipos de la empresa </p>
![](https://imageshack.com/i/poVacfprp)
> Imagen del Inicio.

###Personal
<p align="justify">Esta seccion ayuda a agregar al personal dentro de la empresa y su rol dentro de esta, tambien muestra un listado de las personas dadas de alta y tambien se puede realizar alguna modificacion en caso de ser necesario</p>
![](https://imageshack.com/i/pm0Hv8nbp)
> Imagen de Personal .

Para agregar a un personal, se debe ingresar los datos del mismo y seleccionar el el boton a la derecha como se muestra en la siguiente imagen
![](https://imageshack.com/i/pmlXfEKjp)
>Imagen de boton para agregar personal.

Una vez agregada aparecera en la parte inferior con su informacion personal
###Maquinas
<p align="justify">Esta seccion ayuda a dar de alta la maquinaria con sus respectivas caracteristicas, tambien muestra un listado de las maquinarias agregadas con sus datos y la opcion de eliminar alguna de esta</p>
![](https://imageshack.com/i/pno2qWQfp)
> Imagen de Máquinas.

Para agregar una maquinaria, se debera ingresar los datos solicitantes del mismo que estan marcadas con punto rojo y seleccionar el boton de la derecha para poder dar de alta la maquinaria
![](https://imageshack.com/i/pmRDEvSzp)
> Imagen de boton de Máquina 

Una vez agregada la maquinaria, esta aparecera con todos sus datos en la parte inferior 
###Mantenimiento
<p align="justify">Esta seccion ayuda a tener un control de los mantenimientos de la maquinaria, mostrando las fechas de aplicacion de la misma</p>
![](https://imageshack.com/i/poTAUnwHp)
> Imagen del Mantenimiento .

Para agregar a un mantenimiento a una maquinaria se busca con el numero de inventario esta misma, arrojando asi sus datos y se le asigna una fecha para realizar el mantenimiento, posteriormente se selecciona el boton de agregarla

![](https://imageshack.com/i/pm1IdM18p)
> Imagen de seccion y boton de mantenimiento

Una vez ingresada a la lista de mantenimiento sus datos aparecera en la parte inferior asi como su estatus de si ya fue realizado el mantenimiento o no
###AF13
<p align="justify">Este seccion contiene un buscador de inventario, donde se ingresa  numero de inventario para posteriormente genere una plantilla </p>
![](https://imageshack.com/i/pomGZJt9p)
> Imagen de AF13 .

![](https://imageshack.com/i/pon3rP7Kp)
> Imagen de buscador y seccion de plantilla

Una vez buscado el inventario y generada la plantilla del inventario en la parte inferior derecha tendra la opcion de imprimir esta misma
#Tecnologias usadas
* NextJs
* NodeJs
* xampp
* MySQL
* JavaScript
* Apache
* Strapi
* Mantine
