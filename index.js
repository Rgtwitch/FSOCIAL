const osmosis = require('osmosis');
let jojo = 'bohemian rhapsody'
osmosis
   .get('https://www.google.co.in/search?q=' + jojo)
   .paginate('#navcnt table tr > td a[href]', 1)
   .find('#botstuff')
   .set({'related': ['.card-section .brs_col p a']})
   .data(console.log)
   .log(console.log)
   .error(console.error) 