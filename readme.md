### Linking external Js with HTML
-The js file should be in the same folder as the html file
-use `<script src="./script.js"></script>` to link the file
### Creating Variables
-let `variableName` = value(int or string)
### Declaring variable that wont change use CAPS
- e.g `let PI =3.1415`

###  Javascript Datatypes
#### 7 Primitive Datatypes
- Number : Floating point numbers.
- String : Always in quotes.
- Boolean : True or false.
- Undefined : value taken by a variable that is not yet defined ('Empty value') e.g `let children;`.
- Null : Also means 'empty value'.
- Symbol : defines value that is unique and cannot be changed.
- Bigint : Large integers that the Number type cannot hold
- `Javascript has dynamic typing: We do not have to manually define the datatype of the value stored in a variable, instead, data types are determined automatically.`
- `Strings are printed in console in white color`
### Ways of declaring variables
- `let` is used to declare variables that can change later.
- `const`  used for variables that will not change in future. You cannot declare empty variables using variables
- `var` -old way of defining variables prior to ES6. Works the same as `let` keyword.
### Template Literals
- const bensonNew = `I'm ${firstName}, a ${currentYear- birthYear} years old ${job}`;
- `console.log(bensonNew);`

### Backticks
-console.log(`I love javascript`);
### Creating multiline strings without ES6
`console.log('This is a \n\ string with \n\ multiple lines');`

### Creating multiline strings with backticks
- `console.log(`This is a 
  string with 
  multiple lines`);`

### If Else Control Structure
- The control structure is:
-   ` if(condition){
    //code to be executed if condition is true 
    }else{
        //code to be executed if condition is not true 
    } `