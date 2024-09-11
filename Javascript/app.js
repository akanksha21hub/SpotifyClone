console.log("Hello apna college");
console.log("Apna College");
let a=5;
let b=3;
console.log("sum is:",a+b);
let pencilPrice=15;
let erasorPrice=45;
// output=" The total price is:",+(pencilPrice+erasorPrice)+"Rupees";
let output=`The total price is: ${pencilPrice+erasorPrice} Rupees`;
console.log(output);
//arithmetic operator
let p=5;
let q=7;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(p++);
console.log(++p);
console.log(p--);
console.log(--p);
console.log(p+=2);
console.log(p*=2);

let age=18;
console.log(age>20);
console.log(age==15);
console.log(age<=29);
console.log(age>=29);
console.log(age!=29);

let s=5;
let n="5";
console.log(s===n)

//conditional statement
console.log("before if statement");
let ages=17;
if(ages>18)
{
    console.log("we can vote");
    console.log("we can drive")
}else{
    console.log("we cannot vote")
}
console.log("after if statement");

let  firstname="aman";
if(firstname=="aki")
{
    console.log(`welcome $(fistname)`)
}

let color="green";
if(color=="red"){
    console.log("stop");
}
if(color=="yellow"){
    console.log("slow down");
}
if(color=="green"){
    console.log("go");
}

let aged=14
if(aged>18){
    console.log("you can vote")
}
else if(aged>=18){
    console.log("you can vote2")
}
else if(aged<18){
    console.log("you cannot vote")
}

let marks=80
if(marks>=90){
    console.log("A+");
}
else if(marks>=80){
    console.log("A");
}
else if(marks>=70){
    console.log("B");}
else if(marks>=60){
    console.log("C");
}

let month="january"
if(month=="march"){
    console.log("there is starting of summer is here");
}
else if(month=="january"){
    console.log("there is end of winter")
}

let week="sunday"
if(week=="monday")
{console.log("there is holiday")}
else{
    console.log("no holiday")
}

let size="L";
if(size=="XL"){
    console.log("price is 250");

}else if(size=="L"){
    console.log("price is 200");
}
else if(size=="M"){
    console.log("price is 100");
}else {
    console.log("price is 50");
}

marked=20
if(marked>=33){
    console.log("pass");
if(marked>=50){
    console.log("A+");
}else{console.log("A")}
}
else
{
    console.log("next time");
}


//string is  good or not
let str="amer"
if(str[0]=="a"&&str.length>3){
    console.log("string is good");
}else{
    console.log("string is not good")
}

//TRUTHY VALUES FALSY VALUE
if(2){
    console.log("it has true value")
}else{
    console.log("it  has false value")
}

//switch statement
let colors="red";
switch(colors){
    case"red":
    console.log("stop");
    break;
    case"yellow":
    console.log("slow down");
    break;
    case"green":
    console.log("go");
    break;
    default:
        console.log("light is broken")
}

let day=3;
switch(day){
    case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday");
    break;
    case 3:
    console.log("wednesday");
    break;
          
    case 4:
    console.log("thursday");
    break;
          
    case 5:
    console.log("Friday");
    break;
          
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("sunday");
    break;
    default:
        console.log("no days")
              
}  


//alert
// alert("something is wrong")
// alert("make sure ")
console.warn("this is not corrct");
console.error("this info is wrong");
//prompt
// prompt("enter your roll no")
//  let name=prompt("enter your name");
console.log(name)

//ASSIGNMENT QUESTION
let num=35
if(num%10==0){
    console.log("num is good")
}else{
    console.log("num is bad")
}

// let names=prompt("enter your names");
// let agee=prompt("enter your agee")
// alert{`$(names)is $(agee) years old`}

let quarter=3
switch(quarter){
    case 1:
        console.log("jan,feb,march");
        break;
        case 2:
            console.log("April,May,June");
            break;
            case 3:
                console.log("july,Aug,Sept");
                break;
                case 4:
                    console.log("Oct,Nov,Dec");
                    break;
                    default:
                        console.log("invalid")
}

//QUE
strs="Apples";
if(strs[0]=="a"||"A"  &&  strs.length>5){
    console.log("it is golden string")
}else{
    console.log("not golden string")
}

//QUE
let m=5;
let l=90;
let w=6;
if(m>=l&&m>=w){
    console.log("m is greater")
}else if(l>=m&&l>=w){
    console.log("l is greater")
}else{
    console.log("w is greater")
}

 
let num1=32
let num2=6542
if(num1[num.length-1]==num[num.length-1]){
    console.log("number have the same last digit")
}else{
    console.log("number have not the same digit")
}

//STRING METHOD
let msg="    hello"
console.log(msg.trim())

// let teamname=prompt("enter your teamname")
// {
//     console.log(teamname.trim())
// }

//lowercase uppercase
let namee="Apna collge";{
    console.log(namee.toUpperCase())
}


//METHOD ARGUMENT......INDEXOF())
let code="i love coding";
{
    console.log(code.indexOf("love"))
    console.log(code.indexOf("z"))
}


//method chainning
let msgs="  hello"
// let newmsg=msgs.trim()
// console.log(newmsg)
// newmsg=newmsg.toUpperCase()
// console.log(newmsg)

let newmsg=msgs.trim().toUpperCase()
console.log(newmsg)

//SLICE
let kim="apnacollege";
console.log(kim.slice(-2));
console.log(kim.replace("p","l"));
console.log(kim.replace("apna","my"));
console.log(kim.repeat(2));

//prcatice que
let me="  help"
console.log(me.trim().toUpperCase())


//ARRAY
let students=["aman",7,"aki"]
console.log(students[0])
console.log(students.length)
console.log(students)
console.log(typeof(students))
let empty=[]
console.log(empty)
console.log(students[0][0])


//array are mutable
let fruits=['appale','Mango','banana']
fruits[0]='orange'
fruits[5]='grapes'
console.log(fruits)