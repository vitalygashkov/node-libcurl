const { LibCurl, fetch } = require('../index.js');

async function main() {
    /* const curl = new LibCurl();
    curl.open('GET', 'http://127.0.0.1:51053/unittest/getJsonp')
    curl.setProxy('127.0.0.1:10512')
    curl.setRequestHeader('user-Agent', 'chrome')
    await curl.send();
    // console.log(curl.getResponseString());
    console.log(curl.getResponseJsonp());
    return
    curl.open('GET', 'http://127.0.0.1:51053/unittest/getRawHeaders')
    curl.setRequestHeader('user-Agent', 'chrome')
    curl.removeCookie("a", "127.0.0.1")
    await curl.send();
    console.log(curl.getCookies());
    console.log(curl.getResponseString());
    return */
    fetch('https://juejin.cn/post/', {
        cookies: 'a=b;c=d;e=f',
        headers: {
        }
    }).then(e => e.json()).then(e => {
        console.log(e);
    }).catch((e) => {
        console.log(e);
    })
}
main()