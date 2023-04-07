fetch("info.json")
.then(function(response){
    return response.json();
})
.then(function(info){

// ------------------------------------------------------CARD1------------------------------------

  let m1status=document.querySelector(".m1status");
  let performance1percent=document.querySelector(".performance1percent");
  let runningsince1time=document.querySelector(".runningsince1time");
  let partsproduced1time=document.querySelector(".partsproduced1time");

  

  
  let m1statusinfo='';
  let m1percentinfo='';
  let m1runninginfo='';
  let m1partsinfo='';

  const m1percentvalue=info[0].PERFORMANCE;
  const m1statusvalue=info[0].STATUS;
  const m1runningvalue=info[0].RUNNINGSINCE;
  const m1partsvalue=info[0].PARTSPRODUCED;


  let m1header=document.querySelector(".m1header");
  if(m1statusvalue=="RUNNING" ){
    m1header.style.backgroundColor ="rgba(0, 128, 0, 0.431)"
    m1status.style.backgroundColor="rgba(5, 153, 5, 0.402)"
}

  m1percentinfo+=` <b> ${m1percentvalue} </b>`;
  m1statusinfo+=`<b> ${m1statusvalue} </b>`;
  m1runninginfo+=`<b> ${m1runningvalue} </b>`;
  m1partsinfo+=`<b> ${m1partsvalue} </b>`;

  performance1percent.innerHTML= m1percentinfo;
  m1status.innerHTML=m1statusinfo;
  runningsince1time.innerHTML=m1runninginfo;
  partsproduced1time.innerHTML=m1partsinfo;

//   --------------------------------------------------------------CARD2------------------------------------
        
let m2status=document.querySelector(".m2status");
let performance2percent=document.querySelector(".performance2percent");
let pausedsince2time=document.querySelector(".pausedsince2time");
let partsproduced2time=document.querySelector(".partsproduced2time");

let m2statusinfo='';
let m2percentinfo='';
let m2pausedinfo='';
let m2partsinfo='';

const m2percentvalue=info[1].PERFORMANCE;
const m2statusvalue=info[1].STATUS;
const m2pausedvalue=info[1].RUNNINGSINCE;
const m2partsvalue=info[1].PARTSPRODUCED;

let m2header=document.querySelector(".m2header");
  if(m2statusvalue=="RUNNING"){
    m2header.style.backgroundColor ="rgba(0, 128, 0, 0.431)";
    m2status.style.backgroundColor="rgba(5, 153, 5, 0.402)"  }


m2percentinfo+=` <b> ${m2percentvalue} </b>`;
m2statusinfo+=`<b> ${m2statusvalue} </b>`;
m2pausedinfo+=`<b> ${m2pausedvalue} </b>`;
m2partsinfo+=`<b> ${m2partsvalue} </b>`;

performance2percent.innerHTML= m2percentinfo;
m2status.innerHTML=m2statusinfo;
pausedsince2time.innerHTML=m2pausedinfo;
partsproduced2time.innerHTML=m2partsinfo;

// ---------------------------------------------------------CARD3------------------------------------------

let m3status=document.querySelector(".m3status");
let performance3percent=document.querySelector(".performance3percent");
let stoppedsince3time=document.querySelector(".stoppedsince3time");
let partsproduced3time=document.querySelector(".partsproduced3time");

let m3statusinfo='';
let m3percentinfo='';
let m3stoppedinfo='';
let m3partsinfo='';

const m3percentvalue=info[2].PERFORMANCE;
const m3statusvalue=info[2].STATUS;
const m3stoppedvalue=info[2].STOPPEDSINCE;
const m3partsvalue=info[2].PARTSPRODUCED;

m3percentinfo+=` <b> ${m3percentvalue} </b>`;
m3statusinfo+=`<b> ${m3statusvalue} </b>`;
m3stoppedinfo+=`<b> ${m3stoppedvalue} </b>`;
m3partsinfo+=`<b> ${m3partsvalue} </b>`;


let m3header=document.querySelector(".m3header");
  if(m3statusvalue=="STOPPED"){
    m3header.style.backgroundColor ="rgba(255, 77, 0, 0.39)" ;
    m3status.style.backgroundColor="rgba(255, 77, 0, 0.622)";
    m3status.style.color="rgba(0, 0, 0, 0.611)"
 }
performance3percent.innerHTML= m3percentinfo;
m3status.innerHTML=m3statusinfo;
stoppedsince3time.innerHTML=m3stoppedinfo;
partsproduced3time.innerHTML=m3partsinfo;




// ---------------------------------------------------------CARD4------------------------------------------

let m4status=document.querySelector(".m4status");
let performance4percent=document.querySelector(".performance4percent");
let runningsince4time=document.querySelector(".runningsince4time");
let partsproduced4time=document.querySelector(".partsproduced4time");

let m4statusinfo='';
let m4percentinfo='';
let m4runninginfo='';
let m4partsinfo='';
const m4percentvalue=info[3].PERFORMANCE;
const m4statusvalue=info[3].STATUS;
const m4runningvalue=info[3].RUNNINGSINCE;
const m4partsvalue=info[3].PARTSPRODUCED;

let m4header=document.querySelector(".m4header");
  if(m4statusvalue=="RUNNING"){
    m4header.style.backgroundColor ="rgba(0, 128, 0, 0.431)" ;
    m4status.style.backgroundColor="rgba(5, 153, 5, 0.402)" }


m4percentinfo+=` <b> ${m4percentvalue} </b>`;
m4statusinfo+=`<b> ${m4statusvalue} </b>`;
m4runninginfo+=`<b> ${m4runningvalue} </b>`;
m4partsinfo+=`<b> ${m4partsvalue} </b>`;

performance4percent.innerHTML= m4percentinfo;
m4status.innerHTML=m4statusinfo;
runningsince4time.innerHTML=m4runninginfo;
partsproduced4time.innerHTML=m4partsinfo;

// ---------------------------------------------------------CARD5------------------------------------------

let m5status=document.querySelector(".m5status");
let performance5percent=document.querySelector(".performance5percent");
let runningsince5time=document.querySelector(".runningsince5time");
let partsproduced5time=document.querySelector(".partsproduced5time");

let m5statusinfo='';
let m5percentinfo='';
let m5runninginfo='';
let m5partsinfo='';
const m5percentvalue=info[4].PERFORMANCE;
const m5statusvalue=info[4].STATUS;
const m5runningvalue=info[4].RUNNINGSINCE;
const m5partsvalue=info[4].PARTSPRODUCED;

let m5header=document.querySelector(".m5header");
  if(m5statusvalue=="RUNNING"){
    m5header.style.backgroundColor ="rgba(0, 128, 0, 0.431)" ;
    m5status.style.backgroundColor="rgba(5, 153, 5, 0.402)";
    m5status.style.color="rgba(0, 0, 0, 0.611)"
 }


m5percentinfo+=` <b> ${m5percentvalue} </b>`;
m5statusinfo+=`<b> ${m5statusvalue} </b>`;
m5runninginfo+=`<b> ${m5runningvalue} </b>`;
m5partsinfo+=`<b> ${m5partsvalue} </b>`;

performance5percent.innerHTML= m5percentinfo;
m5status.innerHTML=m5statusinfo;
runningsince5time.innerHTML=m5runninginfo;
partsproduced5time.innerHTML=m5partsinfo;

// ---------------------------------------------------------CARD6------------------------------------------

let m6status=document.querySelector(".m6status");
let performance6percent=document.querySelector(".performance6percent");
let runningsince6time=document.querySelector(".runningsince6time");
let partsproduced6time=document.querySelector(".partsproduced6time");

let m6statusinfo='';
let m6percentinfo='';
let m6runninginfo='';
let m6partsinfo='';
const m6percentvalue=info[5].PERFORMANCE;
const m6statusvalue=info[5].STATUS;
const m6runningvalue=info[5].STOPPEDSINCE;
const m6partsvalue=info[5].PARTSPRODUCED;

m6percentinfo+=` <b> ${m6percentvalue} </b>`;
m6statusinfo+=`<b> ${m6statusvalue} </b>`;
m6runninginfo+=`<b> ${m6runningvalue} </b>`;
m6partsinfo+=`<b> ${m6partsvalue} </b>`;

let m6header=document.querySelector(".m6header");
  if(m6statusvalue=="STOPPED"){
    m6header.style.backgroundColor ="rgba(255, 77, 0, 0.39)" ;
    m6header.style.border ="2px solid rgba(255, 77, 0, 0.6)" ;
    m6status.style.backgroundColor="rgba(255, 77, 0, 0.622)";
    m6status.style.color="rgba(0, 0, 0, 0.611)"
 }

performance6percent.innerHTML= m6percentinfo;
m6status.innerHTML=m6statusinfo;
runningsince6time.innerHTML=m6runninginfo;
partsproduced6time.innerHTML=m6partsinfo;


  
})