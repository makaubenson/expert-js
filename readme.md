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

### Type Conversion and Coercion
- `Type Conversion` is when we manually convert from one type to another.
- `Type Coercion` is when javascript automatically converts types for us behind scenes.(Happens implicitily)

- `console.log(typeof NaN);//Output is Number`  NaN means an invalid number thus its value is somehow still a number.

### Note!!!
- Javascript can only convert to 3 types `string` , `number` and `boolean`

### Type Coercion
- Happens whenever an operator is dealing with two values of different types.
- `console.log("I am "+ 23 + "years old");` 'I am' is a string, 23 is a number and 'years old is a string'.
- js uses coercion to convert number to string.

### Truthy and Falsy Values
- `falsy values` are values that are not exactly false but will become false when we try to convert them to boolean.
##### 5 falsy values
- 0
- empty string ( '' )
- undefined
- null
- NaN

### Example 
`const money = 0;
if(money){
    console.log(`Don't spent it all`);
}{
    console.log(`You should get a job`);
}`
- The code above outputs "You should get a job". This is       because,money is assigned 0 which is a false value. Thus the else block is excecuted. 
### Logical Operators
- `===` is called Strict Operator because it doesnt do type coersion. 
- `==` - Loose Equality Operators. It does type coersion. 
### Prompt
- `const favorite = prompt("What's your favorite number ?");`
### Is Not Equal To Strict Operator (!==)
- `if(favorite !== 23) console.log('Why not 23?');`