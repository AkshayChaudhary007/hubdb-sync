const fs=require("fs");

function saveJson(data){

    fs.writeFileSync(

        "./data/resources.json",

        JSON.stringify(data,null,2)

    );

    console.log("resources.json created");

}

module.exports=saveJson;