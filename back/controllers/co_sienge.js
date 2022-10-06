const Recurso = require('../models/mo_recurso')
const axios = require('axios').default;
var base64 = require('base-64');



exports.getAllClientes = (req, res, next) => {

  const encodedToken = base64.encode('cotaemp-api:O5n3fO1Qi9HTm5JJgShjauNe53isi0s9')

  axios.get('https://api.sienge.com.br/cotaemp/public/api/v1/customers', 
            {
                headers: {
                  'Authorization': `Basic ${encodedToken}` 
                          }
                        })
                .then(resposta => {
                    console.log('sim', resposta.data)
                    res.status(200).json(resposta.data.results)
                    
    
                })

                .catch(err => {

                  console.log('nao', err)
                })
}




