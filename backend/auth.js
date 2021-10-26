import CryptoJS from 'crypto-js'
import dotenv from 'dotenv'

dotenv.config();

const bspSharedKey; //removed key, but can assign new key here
const bspOrganization; //removed key, but can assign new key here
const bspSecretKey; //removed key, but can assign new key here

const signableContent = function(path, method) {
    const params = [
        method,
        path,
        'application/json',
        undefined,
        bspOrganization
    ];
    return params.filter(p => p && p.length > 0).join('\n');
}

const calculateSignature = function (path, method) {
    const date = new Date();
    const key = uniqueKey(date);
    const sc = signableContent(path, method);
    const hmac = CryptoJS.HmacSHA512(sc, key);
    return CryptoJS.enc.Base64.stringify(hmac);
}

const uniqueKey = function(date) {
    const nonce = date.toISOString().slice(0, 19) + '.000Z';
    return bspSecretKey + nonce;
}

const getAccessKey = function (path, method) {
    const signature = calculateSignature(path, method);
    return `AccessKey ${bspSharedKey}:${signature}`;
}

export default getAccessKey;