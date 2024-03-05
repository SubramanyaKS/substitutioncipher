# Substitution Cipher

<img src="https://img.shields.io/npm/v/substitutioncipher-js" alt="substitutioncipher-js"/>

 Substitution cipher is the most commonly used cipher and includes an algorithm of substituting every plain text character for every cipher text character. In this process, alphabets are jumbled in comparison with Caesar cipher algorithm.

## Installation

you can install this package using npm command

```
npm i substitutioncipher-js
```

## Usage

`substitutioncipher-js` contains two function `encrypt` and `decrypt`. 
* encrypt function takes the plaintext and key as input or parameter and it returns the ciphertext based on substitution algorithm. 
* decrypt function takes the ciphertext and key as input or parameter  and it returns the plaintexttext based on substitution algorithm

## Example

```js
//import library
import {encrypt,decrypt} from ('substitutioncipher-js');

//declare plaintext
let plainText = "Hello World";
//declare key
let key=5;
//optional space default true if false give result ignoring space
let space=true

//encrypt function to get ciphertext
var cipherText = encrypt(plainText,key,space);

console.log("encryption",cipherText); //output : Mjqqt btwqi

//decrypt function to get plaintext 
let plaintext = decrypt(cipherText,key);

console.log("Decryption",plaintext); //output : Hello World

```

## LICENSE

This project is under MIT licence. please read `License` file.


**Note: the substitution cipher is easily decryptable**
