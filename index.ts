import * as CryptoJS from "crypto-js";
import * as aesJS from "aes-js";
let text = 'eCMl38E/KLGSJOphNEDajA==,yKqhhRW1q6yGD3l4q54veb04gSvv7pWdLbNdIctAFtlwNMMi13iL5mhiGkNMh/xxHaZhUBUqIUcDSG473eW/MdA+OzfpFND1cd7URx314VAYAALXw5ItL52ZPz6DfwaSSkvBYQ0oj7KERoFTgyUsrLIXluNtjgKXKXbT5CVDPqQKmakq+eSoGbysuvAOrK+Uc9RJ/3aWg66hWcuWtuAAoa4Z3viiwsapQdZAygA3eKQkxVIDaPf5EUu6N3k1mbrPXQn+skRBZ+y8NNhx3tXGwFP+6wYOxbo0V4cV1hctsoCWVu8jzJ85mX8+wNsf5MYTEvMaLJm8W6gdD08rydZih2gCGW2JNxLwaz9u6wPaKsFu0hOrNKs7Q1I5PDCpBFHEP061F17Jn0s1CbclOm18z6duHFYXzMT1oPVyl598loZUFwkIfrLEcuv6xFaLG2U5lCC8Zd2IsaolULM/ZFxIl8sA3+t6pmoUmIZq0p2tJa6A8BkDs1pK+O8NZ2U2qOEoTOmnRuJVEzli4g5yLL43vA==';
let Crypto = CryptoJS.Crypto
function aesDecrypt(data) {
    let key = 'f23b1223092781fca6dc696ad1d9476b';    //length 32
    let arr = data.split(',');
    let iv = aesJS.utils.Base64.toBytes(arr[0]); 
    let jayson = CryptoJS.enc.Base64.parse(arr[1]);
    let k = CryptoJS.enc.Utf8.parse(key);
    //console.log(iv);
    //console.log(jayson);
    //let cipher = CryptoJS.AES.decrypt(jayson, k, {
    //    iv: iv,
    //    keySize: 32,
    //    mode: CryptoJS.mode.CBC,
    //    format: CryptoJS.format.openssl
    //    //padding: CryptoJS.pad.NoPadding
    //});
    //console.log(cipher.toString(CryptoJS.enc.Utf16));
    var encryptedBytes = aesJS.utils.hex.toBytes(jayson);
    var aesCbc = new aesJS.ModeOfOperation.cbc(key, iv);
    var decryptedBytes = aesCbc.decrypt(jayson);
 
    // Convert our bytes back into text
    var decryptedText = aesJS.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText.toString(CryptoJS.enc.Utf8);
    //return cipher.toString(CryptoJS.enc.Utf8);
}

console.log(aesDecrypt(text));