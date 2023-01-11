import Configstore from "configstore";
import pkg from "../package.json" assert { type: "json" };

class keyManager{
    constructor(){
        this.conf=new Configstore(pkg.name);
    }
    setKey(key){
        this.conf.set('apiKey',key);
        return key;
    }
    getKey(){
       const key= this.conf.get('apiKey');
       if(!key){
        throw new Error("No api key found, get at https://nomics.com")
       }
       return key;
    }
    deleteKey(){
        const key= this.conf.get('apiKey');
        if(!key){
            throw new Error("No api key found, get at https://nomics.com")
           }
        this.conf.delete('apiKey')
           return 
    }
}
module.exports=keyManager;