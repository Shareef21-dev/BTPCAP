const cds = require('@sap/cds')
const { data } = require('@sap/cds/lib/dbs/cds-deploy')

module.exports= cds.service.impl(async function (srv) {
    srv.on('printhelloworld',req=>{
        console.log(req.data.input)
        return `${req.data.input} World`
    })
    
})

//Req object is haviving below format
// //req:{
//         data:{
//             input:'Hello'
//         }
// //}