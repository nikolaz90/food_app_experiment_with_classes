import Client from './modules/Client.js'
import clientData from './modules/clientData.js'
import help from './modules/helper.js';

console.log(clientData);

function addClient(name, ...args){
    clientData[name] = new Client(name, ...args)
    return clientData
}

addClient('amanda', 'mands', 8989, 'am@am.com')
addClient('arthur', 'arth', 8349, 'aR@am.com')
addClient('Shanon', 'Shans', 1219, 'sh@am.com')

let output = document.getElementById('output')
output.innerText = `clients: ${Object.values(clientData).map((item)=> {
    return `  ${item.name}`
})} `

help()

clientData['adam'].changeVeggieStatus(true)

clientData['adam'].addRecipeKeyWord('pie', 'grapes', 'cake')
clientData['adam'].removeRecipeKeyWord('grapes')

clientData['adam'].changeWFHStatus()
clientData['adam'].changeWFHStatus()
clientData['Shanon'].changeWFHStatus()
