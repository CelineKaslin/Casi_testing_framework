# Casi-testingFramework #

## Project ##

Building our own JavaScript testing framework from scratch.<br/>

## Our approach ##

This project was undertaken by a team of 3 people.<br/>
We decided to name the framework from a combination of our 3 names.</br>
To build it we used a simple class *square.js* which was already provided.<br/>
We decided to start by the simplest test possible (the *area()* function in this case) and to build the matchers needed for it.<br/>
We then made the matchers for the *throw error* case.<br/>
We also implemented error messages in case of failing tests and made the passing test showing in green and the failing on in red.<br/>
The framework is still very simplistic.<br/>
Our next step is to add a *beforeBlock* matcher and matchers to have the possibility to mock and stub.<br/>
We would also like, in case of a failing test, to add a better stack trace with the line where the error is coming from.<br/>
Also for now the results are not displayed on the page itself, instead appearing on the console. As a result of this, users have to inspect the page to see the results.<br/>

### Our matchers ###

1. `describe` : Should be at the top of the file. Made to *describe* the class tested.<br/>
Inside of its block will be included the different *summary* and *it*.

2. `summary` : Can be use to group tests depending on the same function.<br/>
It allows to make a general description about the function tested.<br/>
Inside of its block will be included the different *it*.
This *grouping description* is optional, the developer might not use it they do not find it useful.

3. `it` : Allows the description of what the code tested should do.<br/>
Inside its block will be written the test itself<br/>

4. `expectEquality` : Allows to test equality between a function called on an object and the output it should have.<br/>

5. `expectError` : Allows to test that the code throw error regarding some case.

### Our files ###

* The source code of the testingFramework is living inside of the *casi.js* file.<br/>

* The class example is build in the *square.js* file.<br/>

* The tests example are written in the *squareSpec.js* file.<br/>

* The test may be run with the *casiRunner.js* file.<br/>

## How to use ##

### Set up ###

1. clone the repo<br/>
Under the repo name click *clone or download*<br/>
Click on *use HTTPs*, copy the clone URL of the repo<br/>
In the terminal go on the working directory where you want to clone the project<br/>
Use the `git clone` command and paste the clone URL then press enter :

```shell
$ git clone https://github.com/your-username/your-repositary.git
```

2. On your local machine go inside of the *Casi_testing_framework* directory :

```shell
$ cd Casi_testing_framework
```

3. You can see the different files, with the `ls` command, in the command line.

```shell
$ ls
```

4. You can open the *.js* file that you want to read and change the code in your text editor or using `vim` :

```shell
$ vim wanted_file.js
```
Or you can just read the contains of it from the command line with `cat` :

```shell
$ cat wanted_file.js
```

### Writing tests ###

You can use the *squareSpec.js* file as a guide to help you understand the syntax to build your own test for your own classes.<br/>

### Run the tests ###

1. Check that the codes are passing the test. From the root *Casi_testing_framework* directory, on the command line, use the `open casiRunner.html` command :

```shell
$ open casiRunner.html
```
This will open the page with the test results directly on your browser.

3. If you use google chrome you can also open the page on your browser directly from your command line from your root directory, by using the command `open -a “Google Chrome” casiRunner.html` :

```shell
$ open -a “Google Chrome” SpecRunner.html
```

This will open the page with the test results directly on your Google Chrome browser.

4. To see the results of the tests, right click on the opened page on your browser and click on *inspect*.<br/>
On the inspection panel, go onto the *console* tab, and the results of the test will be displayed.
We made one test fail on purpose for the user to be able to see how it looks like when a test is failing.<br/>

![testResults](https://user-images.githubusercontent.com/43742795/51687169-e7e69480-1fe9-11e9-8bec-c8c398e6566e.png)

The user is free to debug it and fix the test to make it pass :wink: .<br/>

## Authors ##

Our 3 fabulous team members who collaborated to build this testingFramework :<br/>
* [**C**eline Kaslin](https://github.com/CelineKaslin)
* [**A**n-Hui Yang](https://github.com/anhuiyang)
* [**Si**mon Cass](https://github.com/scass91)
