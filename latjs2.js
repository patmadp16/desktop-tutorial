var a=1;
let b=22;

if(a == 1){
    var a=11;
    const b=3;
    console.log(a);
    console.log(b); 
}
console.log(a);
console.log(b);

//percabangan
var suhu =33;
if (suhu >=33){
    console.log("Suhu Tubuh Anda Tinggi")
}else{
    console.log("Suhu tubuh anda Rendah")
}

//percabangan multi
var suhu2 =33;
if (suhu2 >=37){
    console.log("Anda Gejala Corona")
}else if(suhu2>=35){
    console.log("Anda dalam keadaan Sehat")
}else{
    console.log("Anda kena Malaria")
}

//percabangan swithc
var day;
switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break;
    case 1:
        day ="Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6 :
        day="Saturday";
        break;
}
console.log(day);

//latihan array

var txt ="";
var mahasiswa ={2:"Jhon",1:"Doe",0:25};
var y;
for (y in mahasiswa){
    txt +=mahasiswa[y] +" ";
}
console.log(txt);

//latihan array2
var javtxt="Javascript"
var z;
for(z of javtxt){
    console.log(z);   
}

//perulanga while
d=1;
while(d<5){
    console.log(d);
    d++
}
//perulangan do while
f=1;
do {
    console.log(f);
    f++
}while(f<4)