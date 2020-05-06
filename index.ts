import * as CryptoJS from "crypto-js";
let text = 'eCMl38E/KLGSJOphNEDajA==,yKqhhRW1q6yGD3l4q54veb04gSvv7pWdLbNdIctAFtlwNMMi13iL5mhiGkNMh/xxHaZhUBUqIUcDSG473eW/MdA+OzfpFND1cd7URx314VAYAALXw5ItL52ZPz6DfwaSSkvBYQ0oj7KERoFTgyUsrLIXluNtjgKXKXbT5CVDPqQKmakq+eSoGbysuvAOrK+Uc9RJ/3aWg66hWcuWtuAAoa4Z3viiwsapQdZAygA3eKQkxVIDaPf5EUu6N3k1mbrPXQn+skRBZ+y8NNhx3tXGwFP+6wYOxbo0V4cV1hctsoCWVu8jzJ85mX8+wNsf5MYTEvMaLJm8W6gdD08rydZih2gCGW2JNxLwaz9u6wPaKsFu0hOrNKs7Q1I5PDCpBFHEP061F17Jn0s1CbclOm18z6duHFYXzMT1oPVyl598loZUFwkIfrLEcuv6xFaLG2U5lCC8Zd2IsaolULM/ZFxIl8sA3+t6pmoUmIZq0p2tJa6A8BkDs1pK+O8NZ2U2qOEoTOmnRuJVEzli4g5yLL43vA==';
let Crypto = CryptoJS.Crypto
function aesDecrypt(data) {
    let key = 'f23b1223092781fca6dc696ad1d9476b';    //length 32
    let arr = data.split(',');
    let iv = CryptoJS.enc.Base64.parse(arr[0]); 
    let jayson = CryptoJS.enc.Base64.parse(arr[1]);
    console.log(iv);
    console.log(jayson);
    let cipher = CryptoJS.AES.decrypt(jayson, key, {
        iv: iv,
        keySize: 256/32,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.NoPadding
    });
    
    return cipher.toString(CryptoJS.enc.Base64);
}

console.log(aesDecrypt(text));