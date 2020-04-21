let empleados = [{
    id: 1,
    nombre: 'Wensllei'
}, {
    id: 2,
    nombre: 'Saul'
}, {
    id: 3,
    nombre: 'Iliana'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID: ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let SalarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!SalarioDB) {
            reject(`No se encontro un salario perteneciente al empleado: ${ empleado.nombre }`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: SalarioDB.salario,
                id: empleado.id
            });
        }

    });

}

getEmpleado(30).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })
    .catch(err => {
        console.log(err);
    })