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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID: ${id}`);
    } else {
        return empleadoDB;
    }

}

let getSalario = async(empleado) => {

    let SalarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!SalarioDB) {
        throw new Error(`No se encontro un salario perteneciente al empleado: ${ empleado.nombre }`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: SalarioDB.salario,
            id: empleado.id
        };
    }

}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));