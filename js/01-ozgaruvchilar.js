let age = 25;
console.log(age);

let ball =10;
ball = 20;  // ball qiymati ozgaradi

//const ism ="Ali";
//ism = "Vali"; //const verible ozgarmaydi   

//malu,ot turlari datatype

const matn = "salom"; //string, matn 
const son = 29;// number: son
const rost = true; // boolean, true yoki false
let bosh; //undefined,  qiymat berilmagan
const hech= null; //null, ataylab bosh qoldirilgan
console.log(typeof son);



//Template string ``ichida ${} ozgaruvchi nomini qoshamiz

const ism = "Mathew";
const yosh = 30;
console.log(`${ism} ${yosh} yshda`);


const nom = "Mathew";
const yil = 30;
const city = "Busan";
const dasturchi = true;
console.log(`${nom}, hozirda ${yil} yoshda, u ${city}da yashaydiva u dasturchi${dasturchi}`);
console.log(typeof nom);
console.log(typeof yil);


let narx = 10000;
narx +=2500;
console.log(narx);//narx 12500 ga ozgaradi;

//const PI = 3.14; //3.14 bu number 
//PI = 5; //xatoni tekshirib korish   //Assigmant to constant variable


const a ="5";
const b = 3;
console.log("5" + 3); // natija 53  string hamda number yonma yon qoshadi 
console.log("5" - 3); // natija 2 Nega?
console.log(typeof null); // null natija beradi //null bu object ekan 
