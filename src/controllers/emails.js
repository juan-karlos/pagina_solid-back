const transporter = require ("../emails/mailer");

const controladoremails={};

const gmail ="soliditconsultoria@gmail.com"

controladoremails.prueba = async(req,res)=>{
    console.log
}

controladoremails.envio = async(req,res)=>{
    const {nombre,empresa,correo,telefono,mensaje}=req.body
    const datos= await transporter.sendMail({
        from: ` "Empresa" <${gmail}>`,
        to: "juankyc179@gmail.com",
        subject:"Datos del cliente que necesita soporte",
        text: `Necesitan informacion este Cliente su nombre es : <${nombre} 
        la empresa es <${empresa}>,
        correo: ${correo},
        telefono: ${telefono},

        MENSAJE: ${mensaje}
        `
    })
    res.json({mensaje:"Se Envio el correo"})
}

module.exports = controladoremails;