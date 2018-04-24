// app.route('/data')
//     .get((req, res) => {
//         const { query } = req
//         console.log("query", query)
//         const queriedData = db.filter(obj => {
//             for(let key in query) {
//                 if(query[key] === "") {
//                     continue;
//                 }
//                 if(!obj.hasOwnProperty(key) || String(obj[key]).toLowerCase() !== query[key].toLowerCase()) {
//                     return false;
//                 }
//             }
//             return true;
//         })
//         res.status(200).send(queriedData);        
//     })