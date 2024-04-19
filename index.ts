import inquirer from 'inquirer'
import chalk from 'chalk'
console.log(chalk.blue.bold(`\n\t\t" Wellcome To Currency Convertor "`));
console.log(chalk.blue.bold(`\n\t\t ------------------------------- \n`));


const currency:any = {
    USD:1,      //BASE CURRENCY
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    JYP:113,
    CAD:1.3,
    AUD:1.65,
    PKR:277.70
}

let user_answer = await inquirer.prompt(
    [
        {
    name:"from",
    message:"Select the Currency To Convert From: ",
    type:"list",
    choices:["USD","EUR","GBP","INR","CAD","AUD","JYP","PKR"]
     },
    {
    name:"to",                                              //1 INQUIRER MAIN MULTIPUL USER SAY INPUT
    message:"Select the Currency To Convert Into: ",
    type:"list",
    choices:["USD","EUR","GBP","INR","CAD","AUD","JYP","PKR"]
     },
     {                                                      //1 INQUIRER MAIN MULTIPUL USER SAY INPUT
        name:"amount",
        message:"Enter The Amount To Convert Into: ",
        type:"number"
     }
    ]
    )    


 let fromAmount = currency[user_answer.from] 
 let toAmount = currency[user_answer.to]  
 let amount = user_answer.amount
 let baseAmount = amount / fromAmount
 let convertedAmount = baseAmount * toAmount

 console.log(`Converted Amount : ${chalk.bgGreen(convertedAmount.toFixed(3))}`);
 

 