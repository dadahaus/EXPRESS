const express = require('express')
const app = express()
// const cors = require('cors')
const PORT = 8000

// let rappers = {

//     '21 Savage': {
//         'age': 28,
//         'birthName': 'Jkasjbkjasc akscjbk',
//         'birthLocation': 'London, England'
//     },
//     'Whatevs': {
//         'age': 59,
//         'birthName': 'Jkasjbkjasc akscjbk',
//         'birthLocation': 'London, England'
//     },
//     'WHatevs twooo': {
//         'age': 25,
//         'birthName': 'Jkasjbkjasc akscjbk',
//         'birthLocation': 'London, England'
//     }
// }


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)

})


// app.get('/api/rappers/:rapperName', (request, response) => {
//     const rapName = request.params.rapperName
//     console.log(rapName)
//     response.json(rappers[rapName])

// })