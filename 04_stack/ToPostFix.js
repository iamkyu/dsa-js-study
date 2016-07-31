class Stack {
    constructor() {
        this.items = [];
        this.top = 0;
    }

    push(element) {
        this.items[this.top++] = element;
    }

    pop() {
        return this.items[--this.top];
    }

    length() {
        return this.top;
    }
}

// 중위표기식 -> 후위표기식 변환
function toPostFix(inFixNotation) {
    let postFixNotation = [];
    let index = 0;
    let signsStack = new Stack();
    
    for (let i=0, end=inFixNotation.length; i<end; ++i) {
        let ch = inFixNotation.charAt(i);

        switch(ch) {
            case '+':
            case '-': 
            case '/': 
            case '*':
                signsStack.push(ch);
                break;
            case ')':
                postFixNotation[index++] = signsStack.pop();
                break;
            case '(':
                break;
            default:
                postFixNotation[index++] = ch; 
                break;
        }
    }

    if (signsStack.length() != 0) postFixNotation[index] = signsStack.pop();
        
    return postFixNotation.join("");
}