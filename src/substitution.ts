const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encrypt(plaintext: string, key: number, space: boolean = true): string {
    const hashMap = new Map<string, string>();

    for (let index = 0; index < allCharacters.length; index++) {
        hashMap.set(allCharacters.charAt(index), allCharacters.charAt((index + key) % allCharacters.length));
    }

    let cipherText = '';
    for (let index = 0; index < plaintext.length; index++) {
        if (plaintext[index] === " ") {
            if (space) {
                cipherText += ' ';
            } else {
                continue;
            }
        } else if (allCharacters.indexOf(plaintext[index]) !== -1) {
            cipherText += hashMap.get(plaintext[index]);
        } else {
            cipherText += plaintext[index];
        }
    }

    return cipherText;
}

function decrypt(cipherText: string, key: number, space: boolean = true): string {
    const hashMap = new Map<string, string>();

    for (let index = 0; index < allCharacters.length; index++) {
        hashMap.set(allCharacters.charAt(index), allCharacters.charAt((index - key + allCharacters.length) % allCharacters.length));
    }

    let plainText = '';
    for (let index = 0; index < cipherText.length; index++) {
        if (cipherText[index] === " ") {
            if (space) {
                plainText += ' ';
            } else {
                continue;
            }
        } else if (allCharacters.indexOf(cipherText[index]) !== -1) {
            plainText += hashMap.get(cipherText[index]);
        } else {
            plainText += cipherText[index];
        }
    }

    return plainText;
}

export { encrypt, decrypt };
