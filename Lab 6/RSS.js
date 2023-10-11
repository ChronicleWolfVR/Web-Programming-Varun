const { DOMParser } = require('xmldom');

const getRssFeed = async ()=> {
    let prom = await fetch( 'https://moxie.foxnews.com/google-publisher/latest.xml' );
    let text = await prom.text();
    
    console.log( text.substring(0, 100 ) );
    
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, "text/xml");
    
    console.log( xmlDoc );
    
    const items = xmlDoc.querySelectorAll("item");
    console.log('items:', items );

}

getRssFeed();

console.log( 'end')