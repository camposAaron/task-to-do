require('colors')
const { InquireMenu } = require('./helpers/inquirer')
console.clear()

const main = async() =>{
  
    let opt = ' '
   
    do{
        opt = await InquireMenu()
    

    }while(opt !== '0')    

}

main()