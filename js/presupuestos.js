//el codigo del javascript no esta comentado porque no es obligatorio
//consta de unas funciones que bromean con la vulnerabilidad de los datos del usuario
//se pueden autocompletar los campos haciendo click en el checkbox, luego en el boton enviar y luego pulsando enter hasta el final de la cadena
function validarFormulario() {
    let politica = document.getElementById("politica_checkbox_id");
    let masinfo= document.getElementById("masinfo_id");
    let tel= document.getElementById("tel_id");
    let email = document.getElementById("email_id");
    let name = document.getElementById("name_id");
    
    if (!politica.checked) {
        alert("Debe de aceptar la politica de privacidad antes de enviar el formulario");
        return false;
    }
    if(name.value==""){
        alert("introduca su nombre para conocerle mejor")
        name.value="Usuario"
        return false;
    }
    if(masinfo.value==""){
        alert("Necesitamos conocer la informacion que usted requiere");
        masinfo.value="hola "+name.value+", escriba aqui sus datos para conocerle mejor";
        return false;
    }
    if(tel.value==""){
        alert("introduzca su numero de telefono para poder enviarle datos promocionales con cargo a contrarrembolso retroactivo");
        tel.value=name.value+", escriba aqui telefono";
        tel.value='+34 6'+(Math.random().toFixed(2)*100).toFixed(0).toString()+" "+(Math.random().toFixed(3)*1000).toFixed(0).toString()+" "+(Math.random().toFixed(3)*1000).toFixed(0).toString();
        return false;
    }
    if(email.value==""){
        alert("introduzca su correo electronico para poder enviarle 40 correoes electronicos al dia con promociones insignificantes en productos que usted no necesita");
        email.value=`${name.value}@gmail.com`
        return false;
    }
    
    let message=`hola ${name.value} el formulario no se ha podido por motivos de segruidad, contacte con nostros por correo electronico \n
    no se utiliza por desconocer funcion (algunas paginas web pescan enlaces perdidos) \n
    no se preocupe, sus datos estan a salvo con nosotros \n
    salvo que nosotros con sus datos -> sus \n
    estos son los datos que podriamos haberle robado:\n
    nombre = ${name.value}
    correo electronico = ${email.value}
    numero de telefono = ${tel.value}
    motivo de consulta = ${masinfo.value}
    ha aceptado la politica de privacidad = ${politica.checked}`;
    alert(message)
    if (politica.checked){
        alert(`si usted esta leyendo este mensaje, nos ha autorizado para robarle los datos, \n
            pero no lo vamos a hacer\n
            en keyday electronics la satisfaccion de nuestros clientes es muy importante por lo que le recomendamos comprar nuestros productos`);
    }
    masinfo.value=`${name.value}, ${email.value}, ${tel.value}\nha sido robado = ${politica.checked}\ndatos robados: ${masinfo.value}`
    tel.value='+34 6'+(Math.random().toFixed(2)*100).toFixed(0).toString()+" "+(Math.random().toFixed(3)*1000).toFixed(0).toString()+" "+(Math.random().toFixed(3)*1000).toFixed(0).toString();
    return false;
    //permite enviar el formulario (no se utiliza por desconocer funcion(algunas paginas web pescan enlaces perdidos)
    //return true; 
}