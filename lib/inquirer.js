const inquirer = require('inquirer');


module.exports = {
    askLang: ()=>{
        const questions = [
            {
                name: 'lang',
                type: 'input',
                message: 'Would you like to work in Python[py] or Javascript[js]?\n',
                validate: function(value){
                    if(value == 'js'|| value == 'py'){
                        return true;
                    }else{
                        return 'Please enter \'js\' for Javascript,\'py\' for Python.'
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
    
    askChoice: ()=>{
        const questions = [
            {
                name: 'pick',
                type: 'input',
                message: 'What type of neural network do you need? [r]Recurrent [d]DeepNeuralNet(dense)[c]ConvolutionalOperation [s]StyleTransfer\n',
                validate: function(value){
                    if(value == 'r'|| value == 'd' || value == 'c' || value == 's'){
                        return true;
                    }else{
                        return 'Please enter [r] for Recurrent [d] for DeepNeuralNet(dense)[c] for ConvolutionalOperation [s] for StyleTransfer'
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    }
}
