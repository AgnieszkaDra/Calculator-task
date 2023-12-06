export class Calculator {
    constructor() {
        this.actions = ['+', '-', '*', '/', '**'];
        this.historyResults = {};
        this.operationHistory = {};
    }

    isCorrectAction(action) {
        return this.actions.includes(action);
    }

    getHistoryAsString(history) {
        return history.join('\n');
    }

    isCorrectNumber(val1, val2) {
        if (!(isNaN(val1)) && !(isNaN(val2))) {
            return true
        } else {
            return alert('Write number')
        }
    }

    result(num1, num2, operator) {
        num1 = parseInt(num1)
        num2 = parseInt(num2)
    
        switch (operator) {
            case '+':
              return num1 + num2;
            case '-':
              return num1 - num2;
            case '*':
              return num1 * num2;
            case '/':
              if (num2 !== 0) {
                return num1 / num2;
              } else {
                return "Division by zero is not allowed.";
              }
            case '**':
                let result;
                let i;
                if (num2 == 0) {
                    return 1;
                } else {
                    let temp = num1;
                    for (i = 0; i < num2 - 1; i++) {
                        num1 = num1 * temp;
                        result = num1
                        return result
                    }
                }
            default:
              return "Invalid operator";
        }
    }

    historyResult(num1, num2, action, type) {
        let result;
        result = parseFloat(num1) + (action) + parseFloat(num2) + ' = ' + this.result(num1,num2, action)
        this.historyResults[type] = []
        this.historyResults[type].push(result)
        const history = document.querySelector(`.main__history-${type}`)
        const liElem = document.createElement("li");
        liElem.innerText = this.getHistoryAsString(this.historyEfect[type])
        liElem.classList.add("operations__element");
        history.appendChild(liElem);
        return historyResult
    }
        
    add(num1, num2, type) {

        this.operationHistory[type] = []
        this.operationHistory[type].push(this.result(num1,num2, '+'))
        this.historyResult(num1, num2, '+', type)
  
    }

    subtract(num1, num2,type) {

        this.operationHistory[type] = []
        this.operationHistory[type].push(this.result(num1,num2, '-'))
        this.historyResult(num1, num2, '-', type)
    }


    multiply(num1, num2, type) {

        this.operationHistory[type] = []
        this.operationHistory[type].push(this.result(num1,num2, '*'))
        this.historyResult(num1, num2, '*', type)
    }


    divide(num1, num2, type) {

        this.operationHistory[type] = []
        this.operationHistory[type].push(this.result(num1,num2, '/'))
        this.historyResult(num1, num2, '/', type)
    }

    power(num1, num2,type) {

        this.operationHistory[type] = []
        this.operationHistory[type].push(this.result(num1,num2, '**'))
        this.historyResult(num1, num2, '**', type)
        
    }

    start(calc) {

        let action, isNumber

        do {

            const operations = ['+', '-', '*', '/', '**']
            const buttonSubmit = document.querySelector('.main__buttonSubmit')
       
            buttonSubmit.addEventListener('click', (event) => {
                event.preventDefault()

                const action = document.getElementById('operations-list').value
                let val1 = document.querySelector('.number1').value
                let val2 = document.querySelector('.number2').value
                isNumber = this.isCorrectNumber(val1, val2)

                if (operations.includes((action))) {
                    let type;
                    switch (action) {
                        case '+': if (isNumber) {
                            result = calc.add(val1, val2, type = 'add')
                        };
                            break;
                        case '-': if (isNumber) {
                            result = calc.subtract(val1, val2, type = 'subtract')
                        };
                            break;
                        case '*': if (isNumber) {
                            result = calc.multiply(val1, val2, type = 'multiply')
                        };
                            break;
                        case '/': if (isNumber) {
                            result = calc.divide(val1, val2, type = 'divide')
                        };
                            break
                        case '**': if (isNumber) {

                            result = calc.power(val1, val2, type = 'power')
                        };

                    }
                } else {
                    alert(`${action} is not in the array.`);
                }
            })

        } while (calc.isCorrectAction(action));
    }
}





