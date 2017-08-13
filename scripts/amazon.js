if (category == tools){
        category = newCat.tools
        console.log(price)
        const money =  `SELECT * FROM ${category} WHERE Price BETWEEN ${price}`;
        connection.query(money, (error,results)=>{
            // console.log(results)
            var randomRes = results[Math.floor(Math.random()*results.length)];
            console.log(randomRes)
            var randomAsin = randomRes.ASIN;
            var randomTit = randomRes.Title;
            var randomPrice = randomRes.Price;
            const insertProd = `INSERT INTO user (ASIN, Title, Price) VALUES (?,?,?)`
            connection.query(insertProd, [randomAsin, randomTit, randomPrice], (error2, results2) =>{
                console.log(results2)
            })
            // client.cartCreate({
            //   items:[{
            //     ASIN: randomAsin,
            //     Quantity: 1,
            //   }]
            // }).then(function(results){
            //     console.log('========================');
            //     console.log(results);
            //     console.log('========================');
            //   res.json(results);
            // }).catch(function(err){
            //   res.json(err);
            // });
        });
    }else if(category == games){
        category = newCat.games
        console.log(price)
        const money =  `SELECT * FROM ${category} WHERE Price BETWEEN ${price}`;
        connection.query(money, (error,results)=>{
            // console.log(results)
            var randomRes = results[Math.floor(Math.random()*results.length)];
            console.log(randomRes)
            var randomAsin = randomRes.ASIN
            var randomTit = randomRes.Title;
            var randomPrice = randomRes.Price;
            const insertProd = `INSERT INTO user (ASIN, Title, Price) VALUES (?,?,?)`
            connection.query(insertProd, [randomAsin, randomTit, randomPrice], (error2, results2) =>{
                console.log(results2)
            })
            // client.cartCreate({
            //   items:[{
            //     ASIN: randomAsin,
            //     Quantity: 1,
            //   }]
            // }).then(function(results){
            //     console.log('========================');
            //     console.log(results);
            //     console.log('========================');
            //   res.json(results);
            // }).catch(function(err){
            //   res.json(err);
            // });
        });
    }else if(category == kids){
        category = newCat.kids
        console.log(price)
        const money =  `SELECT * FROM ${category} WHERE Price BETWEEN ${price}`;
        connection.query(money, (error,results)=>{
            // console.log(results)
            var randomRes = results[Math.floor(Math.random()*results.length)];
            console.log(randomRes)
            var randomAsin = randomRes.ASIN
            var randomTit = randomRes.Title;
            var randomPrice = randomRes.Price;
            const insertProd = `INSERT INTO user (ASIN, Title, Price) VALUES (?,?,?)`
            connection.query(insertProd, [randomAsin, randomTit, randomPrice], (error2, results2) =>{
                console.log(results2)
            })
            // client.cartCreate({
            //   items:[{
            //     ASIN: randomAsin,
            //     Quantity: 1,
            //   }]
            // }).then(function(results){
            //     console.log('========================');
            //     console.log(results);
            //     console.log('========================');
            //   res.json(results);
            // }).catch(function(err){
            //   res.json(err);
            // });
        });
    }else{
        category = req.query.category
        console.log(price)
        const money =  `SELECT * FROM ${category} WHERE Price BETWEEN ${price}`;
        connection.query(money, (error,results)=>{
            // console.log(results)
            var randomRes = results[Math.floor(Math.random()*results.length)];
            console.log(randomRes)
            var randomAsin = randomRes.ASIN
            var randomTit = randomRes.Title;
            var randomPrice = randomRes.Price;
            const insertProd = `INSERT INTO user (ASIN, Title, Price) VALUES (?,?,?)`
            connection.query(insertProd, [randomAsin, randomTit, randomPrice], (error2, results2) =>{
                console.log(results2)
            })
            // client.cartCreate({
            //   items:[{
            //     ASIN: randomAsin,
            //     Quantity: 1,
            //   }]
            // }).then(function(results){
            //     console.log('========================');
            //     console.log(results);
            //     console.log('========================');
            //   res.json(results);
            // }).catch(function(err){
            //   res.json(err);
            // });
        });
    }