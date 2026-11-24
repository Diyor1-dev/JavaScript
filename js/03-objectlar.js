//Bir narsaga tegishli malumotni bitta joyda saqlash usuli: har bir malumotda kalit:qiymat korinishda yoiladi 

const user = {
    ism:"Mathew",
    yosh: 30,
    shahar: "Busan",
    dasturch: true,
};
console.log(user.ism);
console.log(user["yosh"]);

//ozgartirish,qoshish,ochirish

user.yosh = 31;
user.email = "methew@mail.com";
delete user.dasturch;
console.log(user);

const agent = {
    ism:"Mathew",
    manzil:{
        shahar:"Busan",
        tuman:"Gwangali",
    },
};
console.log(agent.manzil.tuman);

const nom= {
    ism: "Mathew",
    salom(){
        console.log(`Salom, men ${this.ism}`);
    },
};
nom.salom();//Salom men Methew


//Obyekt boylab yurish

for(const kalit in user) {
    console.log(kalit,user[kalit]);
}
Object.keys(user); //["ism", "yosh", ...]
Object.values(user);//["Mathew",30,....]

const savat = { non:3000, sut:2500, tuxum:6000};
let jami =0;
for (const narx of Object.values(savat)){
    jami+= narx;
}
console.log(jami);

const baholar ={
    matematika: 5,
    fizika:4,
    tarix:3,
    ingiliz:2,
};
// for(const kalit in baholar) {
//     console.log(kalit, ":", baholar[kalit]);
//     console.log(Object.keys(baholar).lenght);
    
// }


let umumiy = 0;

for(const yigindi of  Object.values(baholar)){
    umumiy+=yigindi;
    
}
const soni = Object.keys(baholar).length;
    const ortacha = umumiy/ soni;

console.log(umumiy);
console.log(ortacha);


const gpa ={
    matematika: 5,
    fizika:4,
    tarix:3,
    ingiliz:2,
};
for(const[kalit, qiymat] of Object.entries(gpa)){
    if(qiymat===5){
    console.log(`${kalit}:${qiymat}`);
    }
}


//const b = a;
//console.log(b); //refrence error a is not defined

const talaba = {
ism:"Mathew",
baholar: {
    fizika:4,
},
tanishtir() {
    console.log(`Men${this.ism} fizika fanidan ${this.baholar.fizika}olganman`);
},
};
talaba.tanishtir();