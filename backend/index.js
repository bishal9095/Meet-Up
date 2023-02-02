const express = require ('express');
const cors = require ('cors');
const path= require('path');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());



// app.set('views', '../frontend/App.tsx');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

// Backend Routes
// app.use('/',require('./Routes/events'))



// app.get('/',(req,res,err)=>{
//     res.render();
// })
// Front End
//app.use(express.static('../Frontend/Screens/index.ts'));
app.use('/', express.static(path.join('../frontend/', 'node_modules/expo/AppEntry.js')));

app.listen(port, ()=>{
    console.log("HEllo");
});
