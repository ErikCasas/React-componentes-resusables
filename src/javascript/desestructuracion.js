/**
 * La desestructuracion de los objetos en js es una forma de extraer
 * valores especificos y asignarlos en sus propiad variables, para hacer
 * mas facil su uso y no estar repitiendo la notacion del "."
 * @example
 *
 *
 * const objeto = { nombre: 'Erik', edad: 21, ciudad: 'Bogotá' };
 *
 * Desestructuración del objeto ════╗
 *                                  ║
 *                                  ║
 *                    ╔═════════════╝
 *╔═══════════════════╩════════════════════╗
 * const { nombre, edad, ciudad } = objeto;
 *        ╚═════════╦═══════════╝   ╚══╦══╝
 *        Los valores que necesito     ╚════ de donde los voy a sacar
 *
 *          ¡RESULTADO!
 * console.log(nombre); ===> 'Erik
 * console.log(edad);   ===> 21
 * console.log(ciudad); ===> 'Bogotá'
 *
 * INTENTALO TU!!
 */

const stack = {
  M: 'Mongo',
  E: 'Express',
  R: 'React',
  N: 'Node',
};

console.log(/** aqui pones los valores ya desestructurados*/);

/**
 * para hacer funcionar nuestro codigo js, pones en la consola el siguiente comando 
 * 
 *  ==> node src\javascript\desestructuracion.js
 * 
 * Recordemos que node es un entorno de ejecucion y con este comando 
 * le decimos que queremos que ejecute el codigo que esta en esa direccion
 * (o ruta de acceso)
 */
