const { DOMParser } = require('xmldom');

const getRssFeed = async ()=> {
    try {
        let prom = await fetch( 'https://moxie.foxnews.com/google-publisher/latest.xml' );
        let text = await prom.text();

        console.log( text.substring(0, 100 ) );

        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(text, "text/xml");

        console.log( xmlDoc );

        if (xmlDoc.documentElement.nodeName == "parsererror") {
            throw new Error("XML parsing error");
        }

        const items = xmlDoc.getElementsByTagName("item");
        console.log('items:', items );
    } catch (error) {
        console.error(error);
    }
}

getRssFeed();

console.log( 'end')