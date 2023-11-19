class Calc_1{
    constructor(outputTextElement,inputTextElement)
    {
        this.outputTextElement = outputTextElement
        this.inputTextElement = inputTextElement
        this.all_clear()
    }

    all_clear()
    {
        this.input = ''
        this.output = ''
        this.operation = undefined
        // this.output=''
        // this.input=''
        // this.operation=undefined;
    }
    
    delete()
    {
        this.input = this.input.toString().slice(0,-1)
    }
    append_number(number)
    {
        if (number === ('.') && this.input.includes('.')) return
        this.input = this.input.toString() + number.toString()
    }

    operations(operation)
    {
        if (this.input === '') return
        if(this.output !== '')
        {
            this.calco()
        }
        this.operation = operation
        this.output = this.input
        this.input = ''

    }
    
    calco()
    {
        let calc_result
        const out = parseFloat(this.output)
        const inp = parseFloat(this.input)
        if(isNaN(out) || isNaN(inp)) return
        switch(this.operation)
        {
            case '+' :
                calc_result = out + inp
                break
            case '-' :
                calc_result = out - inp
                break
            case '/' :
                calc_result = out / inp
                break
            case '*' :
                calc_result = out * inp
                break
            default:
                return

        }

        this.input = calc_result
        this.operation = undefined
        this.output = ''

    }

    update_result()
    {
        this.inputTextElement.innerText = this.input
        if(this.operation != null)
        {
            this.outputTextElement.innerText = this.output.toString() + this.operation.toString()
        }
        else
        {
            this.outputTextElement.innerText = ''
        }
    }
}



const operationbutton = document.querySelectorAll('[data-operation]')
const numberbutton = document.querySelectorAll('[data-number]')
const allclearbutton = document.querySelector('[data-all-clear]')
const deletebutton = document.querySelector('[data-delete]')
const equalsbutton = document.querySelector('[data-equals]')
const outputTextElement = document.querySelector('[data-disp-output]')
const inputTextElement = document.querySelector('[data-disp-input]')

const calc = new Calc_1(outputTextElement,inputTextElement)

numberbutton.forEach(button=>{
    button.addEventListener('click', ()=>{
        calc.append_number(button.innerText)
        calc.update_result()
    })
})

operationbutton.forEach(button=>{
    button.addEventListener('click', ()=>{
        calc.operations(button.innerText)
        calc.update_result()
    })
})

equalsbutton.addEventListener('click', button =>{
    calc.calco()
    calc.update_result()
})

allclearbutton.addEventListener('click', button =>{
    calc.all_clear()
    calc.update_result()
})

deletebutton.addEventListener('click', button =>{
    calc.delete()
    calc.update_result()
})