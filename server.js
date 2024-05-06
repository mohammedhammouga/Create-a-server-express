const express = require("express");
const app = express();

app.get("/semaine", (req, res) => {
  res.send(
    "<ul> <li>lundi</li> <li>mardi</li> <li>mercredi</li> <li>jeudi</li> <li>vendredi</li> <li>samedi</li> <li>dimanche</li> </ul>"
  );
});
/*  app.get('/fact', (req, res) => {
    for (var i = 1; i <= 10; i++) {
        n=10 *i;
    }
    res.send (n.toString());
});  */

 app.get('/fact', (req, res) => {
    let factorial = 1;
    for (let i = 1; i <= 10; i++) {
        factorial *= i;
    }
    res.send(factorial.toString());
}); 

app.listen(4000, () => {
    console.log('4000');
});
