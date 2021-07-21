require('colors')
const { InquireMenu, Pausa } = require('./helpers/inquirer')
console.clear()

const main = async() =>{
  
    let opt = ' '
   
    do{
        opt = await InquireMenu()
        console.log({opt})
        console.log('\n')
        await Pausa()
    }while(opt !== '0')  

}

main()