const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());


app.get('/usuario',function(req,res){
    res.json({
        primernombre:"Jaime",
        segundonombre:"Jeovanny",
        primerapellido:"Cortez",
        segundoapellido:"Flores",
        fechanacimiento: "1985-09-02",
        estadofamiliar: "Casado",
        residencia: "San Salvador",
        profesion: "Ingeniero en Ciencias de la Computación",
        estatura: 1.67,
        peso: 175.5,
        colorpiel: "trigueño",
        colorojos: "cafe",
        colorcabello: "negro",
        ultimosempleos:[{
            empresa: "Hidroexpo S.A. de C.V.",
            departamento: "Informática",
            direccion: "La Libertad",
            cargo: "Coordinador de tecnología",
            desde: "2009-01-01",
            hasta: "2009-12-31"
        },{
            empresa: "Presidencia de la República",
            departamento: "Secretaría Privada de la Presidencia",
            direccion: "San Salvador",
            cargo: "Desarrollador de Sistemas",
            desde: "2011-01-01",
            hasta: "2011-12-31"
        },{
            empresa: "Ministerio de Justicia y Seguridad Pública",
            departamento: "Unidad de Tecnología y Desarrollo Informático",
            direccion: "San Salvador",
            cargo: "Desarrollador, Analista, Administrador de sistemas, servidores y bases de datos",
            desde: "2010-01-01",
            hasta: "2022-07-31"
        },{
            empresa: "Órgano Judicial",
            departamento: "Dirección de Desarrollo Tecnológico e Información",
            direccion: "San Salvador",
            cargo: "Desarrollador, Aministrador de Bases de Datos",
            desde: "2022-08-08",
            hasta: "2025-04-25"
        }]
    });
});

app.get('/genero',function(req,res){
    res.json([
        {id:1, genero:'Masculino'},
        {id:2, genero:'Femenino'}
    ]);
});

app.get('/tipo_documento',function(req,res){
    res.json([
        {id:1,tipo_documento:'DUI'},
        {id:2,tipo_documento:'NIT'},
        {id:3,tipo_documento:'ISSS'},
        {id:4,tipo_documento:'PASAPORTE'}
    ]);
});

app.get('/departamento',function(req,res){
    res.json([
        {id:1,departamento:"Ahuachapán"},
        {id:2,departamento:"Santa Ana"},
        {id:3,departamento:"Sonsonate"},
        {id:4,departamento:"La Libertad"},
        {id:5,departamento:"San Salvador"},
        {id:6,departamento:"Chalatenango"},
        {id:7,departamento:"Cuscatlán"},
        {id:8,departamento:"Cabañas"},
        {id:9,departamento:"La Paz"},
        {id:10,departamento:"San Vicente"},
        {id:11,departamento:"Usulután"},
        {id:12,departamento:"San Miguel"},
        {id:13,departamento:"Morazán"},
        {id:14,departamento:"La Unión"}
    ]);
});

app.get('/municipio',function(req,res){
    res.json([
        {id:1,municipio:"Ahuachapán"},
        {id:2,municipio:"Santa Ana"},
        {id:3,municipio:"Izalco"},
        {id:4,municipio:"Santa Tecla"},
        {id:5,municipio:"Soyapango"},
        {id:6,municipio:"Las Pilas"},
        {id:7,municipio:"Cojutepeque"},
        {id:8,municipio:"Ilobasco"},
        {id:9,municipio:"Olocuilta"},
        {id:10,municipio:"Apastepeque"},
        {id:11,municipio:"Jucuapa"},
        {id:12,municipio:"El triunfo"},
        {id:13,municipio:"Sociedad"},
        {id:14,municipio:"San Alejo"},
    ]);
});

//GET http://www.algo.com/sumar?campo1=3.56&campo2=9.13
app.get('/sumar',function(req,res){
    let resultado = parseFloat(req.query.campo1)+parseFloat(req.query.campo2);
    res.json({
        respuesta:resultado
    });
});

app.get('/login',function(req,res){
    console.log(req.query.email);
    console.log(req.query.password);
});

app.listen(puerto,function(req,res){
    console.log("EL SERVIDOR ESTÁ CORRIENDO EN EL PUERTO NO.3000");
});