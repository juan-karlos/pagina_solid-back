const transporter = require ("../emails/mailer");

const controladoremails={};

const gmail ="soliditconsultoria@gmail.com"

controladoremails.prueba = async(req,res)=>{
    console.log("Esto es una prueba de respuesta")
    res.json({mesage:"Esto es una prueba de una respuesta "})
}

controladoremails.envio = async(req,res)=>{
    const {nombre,empresa,correo,telefono,mensaje}=req.body

//    const correos = ["juankyc179@gmail.com", "devsolidit@gmail.com","soliditconsultoria@gmail.com"];
const correos = ["rojas.varela.roberto@solid-it.net"];
const corre = correos.map(correoo => correoo);
console.log(corre);

    const datos= await transporter.sendMail({
        from: ` "Pagina-Solid-it" <${gmail}>`,
        to: corre,
        subject:"Datos del cliente que necesita soporte",
        text: `Necesitan informacion este Cliente su nombre es : ${nombre} 
        la empresa es ${empresa},
        correo: ${correo},
        telefono: ${telefono},

        MENSAJE: ${mensaje}
        `
    })
    res.json({mensaje:"Se Envio el correo"})
}

module.exports = controladoremails;