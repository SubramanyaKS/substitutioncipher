var allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encrypt(plaintext,key,space=true) {
    
    let hashMap = new Map([]);

    for (let index = 0; index < allCharacters.length; index++) {
        hashMap.set(allCharacters.charAt(index),allCharacters.charAt((index + key) % allCharacters.length))
        
    }
    // let splitCharacter =plaintext.split('');
    let cipherText ='';
    for (let index = 0; index < plaintext.length; index++) {
        if(plaintext[index]==" "){
            if(space){
            cipherText+=' ';
            }
            else{
                continue;
            }
        }
        else if(allCharacters[plaintext[index]]!=-1){
            cipherText+=hashMap.get(plaintext[index]);
        }
        
        else{
            cipherText+=plaintext[index];
        }
        

    }
    return cipherText;
}

// console.log(encrypt("I am studying Data Encryption",4));

function decrypt(cipherText,key,space=true){
    let hashMap = new Map([]);

    for (let index = 0; index < allCharacters.length; index++) {
        hashMap.set(allCharacters.charAt(index),allCharacters.charAt((index - key+ allCharacters.length) % allCharacters.length))
        
    }
    let plainText ='';
    for (let index = 0; index < cipherText.length; index++) {
        if(cipherText[index]==" "){
            if(space){
                plainText+=' ';
                }
                else{
                    continue;
                }
        }
        else if(allCharacters[cipherText[index]]!=-1){
            plainText+=hashMap.get(cipherText[index]);
        }
        
        else{
            plainText+=cipherText[index];
        }
        
    }
    return plainText;

}

module.exports ={encrypt,decrypt}