const cds = require('@sap/cds')
const { data } = require('@sap/cds/lib/dbs/cds-deploy')

module.exports= cds.service.impl(async function (srv) {
    srv.on('printhelloworld',req=>{
        console.log(req.data.input)
        return `${req.data.input} World`
    })
    srv.on('Myfunction',req=>{
        let result={}
        if(req.data.categeory==1){
            result.product = 'BMW'
            result.price = "20000"
        }else{
            result.product = 'Audi'
            result.discount = '20%'
        }
        console.log(result)
        return result
    })
    
})

//Req object is haviving below format
// //req:{
//         data:{
//             input:'Hello'
//         }
// //}