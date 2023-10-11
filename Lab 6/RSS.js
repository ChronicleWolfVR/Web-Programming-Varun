
const getRssFeed = async ()=> {
    let prom = await fetch( 'https://moxie.foxnews.com/google-publisher/latest.xml' );  
let text = await prom.text();
console.log( text.substring(0, 100 ) );

}

getRssFeed();

console.log('end of script');