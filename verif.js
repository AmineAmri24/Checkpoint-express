let day = new Date().getDay();
let hours = new Date().getHours();

console.log(hours);

function verif(req,res,next){
    if (day > 0 && day < 6 && hours > 8 && hours < 18) next();
    else
        res.send(
            `<h1> Our service is closed now, we are available from 8h -- 17h / monday -- friday </h1>`
        );
};

module.exports =verif;