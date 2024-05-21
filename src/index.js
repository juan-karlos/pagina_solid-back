const app= require ("./app");

const puerto= process.env.PORT || 3600;

app.listen(app.get("port"), ()=>{
    console.log("Servidor arriva en el puerto " , puerto)
})