const firebase =require("firebase");
require("firebase/firestore");
const fs = require('fs');

const { resolve } =require('path');
const firebaseConfig = {
    apiKey: "AIzaSyCd1E81V2qfeOLVnEvcSvSU6CkyvBnfrTQ",
    authDomain: "firebse-auth-ead6e.firebaseapp.com",
    databaseURL: "https://firebse-auth-ead6e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firebse-auth-ead6e",
    storageBucket: "firebse-auth-ead6e.appspot.com",
    messagingSenderId: "291769193005",
    appId: "1:291769193005:web:06faf4b8712a0e9f3e1ea4"
  
  };
  class PopulateJasonFireStore{
    constructor() {
        console.time("time taken");
        this.db = firebase.firestore();
        const [,,filepath,type,collectionname] = process.argv;        
        this.absolutepath = resolve(process.cwd(), filepath);
        this.type = type;
        this.collectionname = collectionname;
        if ( this.type!== 'set' && this.type !=='add'){
            console.error('Wrong methon ${this.type}')
            console.log('Accepted method ');
            this.exit(1);
        }
        if(this.absolutepath==null || this.absolutepath.length<1){
            console.error('ass file path')
            this.exit(1);        }
        if(this.collectionname ==null || this.collectionname.length <1){
            console.error('specify firestore collection')
            this.exit(1);
        }
        console.log('ABS: filepath ${this.absolutepath}');
        console.log('type method ${this.type}');
        }
    async populate(){
        let data = [];
        try{
            data = JSON.parse(fs.readFileSync(this.absolutepath, {}),'utf8');
            } catch(e){
                console.error(e.message);
            }
            if(data.length<1){
                console.error('Make sure fiel contains ');
            }
            var i =0;
            for (var item of data){
                console.log(item);
                try{
                    this.type ==='set' ? await this.set(item) : await this.add(item);
                    } catch(e) {
                        console.log(e.message)
                        this.exit(1);
                    }

                    if (data.length -1 ===i){

                        console.log('********success upload******');
                        console.timeEnd("time taken");
                        this.exit(0);
                        }

                        i++;

                }
            }

    }

