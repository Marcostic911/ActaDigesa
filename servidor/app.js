const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT?process.env.PORT:3000;

app.use(express.json());
app.use(cors());

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
}

const uri = 'mongodb+srv://primerBaseDeDatos:Passw0rd@cluster0.8j4xv.mongodb.net/actaDigesaretryWrites=true&w=majority';

//const uri = 'mongodb+srv://primerBaseDeDatos:Passw0rd@cluster0.8j4xv.mongodb.net/ActadigesaretryWrites=true&w=majority';

//me conecto a la base de datos

async function conectar() {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado a la base de datos metodo: mongoodb - async-await");
    }
    catch(e){
        console.log(e);
    }
};

conectar();

//creo los esquemas y  modelos

const EmpresaSchema = new mongoose.Schema({
  nombre: String,
  responsable: String,
  tipo: {
      type: mongoose.Schema.Types.ObjectId,
       ref: 'tipo'
    }
});
const EmpresaModel = mongoose.model("empresa", EmpresaSchema);


const TiposDeEmpresaSchema = new mongoose.Schema({
  nombre: String,
});

const TiposDeEmpresaModel = mongoose.model("tipo", TiposDeEmpresaSchema);




//creo la apiRest

// ************** API DE EMPRESA ************/

app.get('/empresa', async (req, res, next) => {
  try{
    const empresas = await EmpresaModel.find();

    console.log(empresas);

    res.status(200).send(empresas);
  }

  catch(error){
    console.log(error);
    res.status(413).send({error: "algo fallo"});
  }
});

app.post('/empresa',async (req, res, next) => {

  try {
      if(!req.body.nombre  || !req.body.responsable ) {
        throw new Error('No me enviaste todos los datos necesarios');
      }

      let aNewEmpresa = {
        id: EmpresaSchema.length + 1,
        nombre: req.body.nombre,
        responsable: req.body.responsable,
        tipo: req.body.tipo
      }

      const newEmpresa = await EmpresaModel.create(aNewEmpresa);

      res.status(201).send(aNewEmpresa);

      console.log(newEmpresa);

    }
    catch(error){
      console.log(error);
      res.status(413).send({error: "algo fallo"});
    }
});

// ************** API DE TIPOS DE EMPRESA ************/

//cargo un tipo de empresa

app.post('/tipo', async (req, res, next) => {
    try{
      if(!req.body.nombre){
        throw new Error("No enviaste un nombre de un tipo de empresa");
      }

      const tipo = {
        nombre : req.body.nombre
      }

      const newTipo = await TiposDeEmpresaModel.create(tipo);

      res.status(200).send(newTipo);

    }
    catch(e){
      console.log(e);
      res.status(413).send({error: "algo fallo"});
    }
});

//ver todos los tipos de empresa

app.get('/tipo', async (req, res, next) => {
    try{
      const tipo = await TiposDeEmpresaModel.find();

      res.status(200).send(tipo);
    }
    catch(e){
      console.log(e);
      res.status(413).send(e);
    }
});

app.delete('/tipo/delete/:id', async (req, res) => {
  try {
      const tipo = await TiposDeEmpresaModel.findById(req.params.id);
      if (!tipo) {
          res.status(200)
          throw new Error('El tipo no existe.');
      }
      const deleted = await TiposDeEmpresaModel.findByIdAndDelete(req.params.id);
      res.status(200).send({
          message: 'Borrado',
          data: deleted
      });
  } catch (error) {
      console.log(error)
      res.send({ Error: error.message })
  }
});



















app.listen(port, () => {
    console.log('servidor escuchado en el puerto' , port);
})