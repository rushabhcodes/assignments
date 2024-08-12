class Calculator {

  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove all spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Check for invalid characters
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error("Invalid characters in expression");
    }

    // Validate parentheses
    if (!this.areParenthesesBalanced(expression)) {
      throw new Error("Invalid parentheses in expression");
    }

    const regex = /(\d+(\.\d+)?|\+|\-|\*|\/|\(|\))/g;
    const tokens = expression.match(regex);
    let i = 0;

    const evaluate = () => {
      const values = [];
      const operators = [];

      const applyOperator = () => {
        const b = values.pop();
        const a = values.pop();
        const op = operators.pop();
        values.push(this.applyOperator(a, b, op));
      };

      while (i < tokens.length) {
        const token = tokens[i];
        if (token === '(') {
          i++;
          values.push(evaluate());
        } else if (token === ')') {
          break;
        } else if (token === '+' || token === '-' || token === '*' || token === '/') {
          while (operators.length && this.precedence(operators[operators.length - 1]) >= this.precedence(token)) {
            applyOperator();
          }
          operators.push(token);
        } else {
          values.push(parseFloat(token));
        }
        i++;
      }

      while (operators.length) {
        applyOperator();
      }

      return values[0];
    };

    this.result = evaluate();
    return this.result;
  }

  applyOperator(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) {
          throw new Error("Division by zero is not allowed");
        }
        return a / b;
      default:
        return a;
    }
  }

  precedence(operator) {
    switch (operator) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      default:
        return 0;
    }
  }

  areParenthesesBalanced(expression) {
    let stack = [];
    for (let char of expression) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
}

module.exports = Calculator;