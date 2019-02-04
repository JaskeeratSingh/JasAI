#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require('ora');
const { exec } = require('child_process');
let program = require('commander');
const inquirer = require("./lib/inquirer");
const shell = require("shelljs");
let count = 0;
var choice;
var pick;
var str = "Server is running..../";
var express = require('express');
var app = express();
clear();
myFont();
function myFont(){
    var rand = Math.floor((Math.random() * 4));
    var fonts = ['Doom', 'rounded', 'univers', 'standard'];
    choice = fonts[rand];
}
console.log(
    chalk.magenta.bold(
        figlet.textSync('   -JasAI-', { font: choice, horizontalLayout: 'full' })//Doom, rounded,univers, standard
    )
);
console.log(chalk.green.bold("A Simple ML application with ready to use neural-nets and models."));

const spinner = new ora({
    text: 'Getting things ready for you...',
    spinner: "dots",
    color: 'white'
});

const spinnerr = new ora({
    text: 'Setting up your environment...',
    spinner: "dots",
    color: 'white'
});

const spinnerrr = new ora({
    text: 'Loading resources...',
    spinner: "dots",
    color: 'white'
});


spinner.start();
setTimeout(()=>{done(0)}, 2000);

function done(x){
    switch(x){
        case 2:
            spinnerrr.succeed(["...Done"]);
            switch(pick.pick){
                case 'r':
                    console.log("Here's an example of recurrent neural network being used in tensorflow.js!");
                    openFile(pick.pick);
                    break;
                case 'd':
                    console.log("Here's an example of deep neural network being used in tensorflow.js for a variety of purposes. We have 3 examples!");
                    break;
                    openFile(pick.pick);
                case 'c':
                    console.log("Here's an example of convolutional neural network(mobilenet) being used in tensorflow.js.");
                    openFile(pick.pick);
                    break;
                case 's':
                    console.log("Here's an example of style transfer implemented in tensorflow.js!");
                    openFile(pick.pick);
                    break;
            }
            break;
        case 0:
            spinner.succeed(["...Done"]);
            spinnerr.start();
            setTimeout(()=>{done(1)}, 3000);
            break;
        case 1:
            spinnerr.succeed(["...Done"]);
            console.log(chalk.white.bgGreen.bold('All set!\n'));
            display();
            run();
    }
}

function display(){
    program
        .version('1.0.0')
        .option(' ')
        .option('-p, --programs', 'list of availible models and nets')
        .parse(process.argv)
}

function fail(spin){
    spin.fail(["...Failed Resource"]);
}

const run = async () => {
    const expo = await inquirer.askLang();
    if(expo.lang == 'py'){
        console.log(chalk.yellow("Hi there! JasAI is setting things up for you to work in Python!"));
        setTimeout(runPy, 1500);
    }else{
        console.log(chalk.yellow("Hi there! JasAI is setting things up for you in Javascript!"));
        setTimeout(runJs, 1500);
    }
}

function runPy(){
    exec('code C:/Users/sarin/Desktop/Stuff/PythonAI', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });

}

function runJs(){
    exec('code C:/Users/sarin/Desktop/Stuff/JavascriptAI', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });

}