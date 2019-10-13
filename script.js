let money, time;

function start() {
     money = +prompt('Ваш бюджет на месяц?', '');
     time = prompt('Введите дату в формате YYYY-MM-DD', '');

     while(isNaN(money) || money =='' || money == null ) {
        money = +prompt('Ваш бюджет на месяц?', '');
     }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}


function chooseExpenses() {
    for (i = 0; i < 2; i++) {
        var firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', ''),
            secondQuestion = prompt('Во сколько обойдется?', '');  
        if ( (typeof(firstQuestion))=== 'string' && (typeof(firstQuestion))!= null && (typeof(secondQuestion))!=null && 
        firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
            appData.expenses[firstQuestion] = secondQuestion;
        } else {
            i = i - 1;
        }
    };
    
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();

    alert('Ежедневный бюджет: '+ appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let notNecessary = +prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i] = notNecessary;
         
    }
}
chooseOptExpenses();