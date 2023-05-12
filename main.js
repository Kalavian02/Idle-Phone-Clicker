let cashcount = document.getElementById("cashcount");
let prestigestatus = document.getElementById("prestigestatus");
let clickbtn = document.getElementById("clickbtn");
let cpc = document.getElementById("cashperclick");

let rotarycellcount = document.getElementById("rotarycount");
let rotarycellcash = document.getElementById("rotarycash");
let rotarybtn = document.getElementById("rotarycost");
let pushbtncellcount = document.getElementById("pushbtncount");
let pushbtncellcash = document.getElementById("pushbtncash");
let pushbtnbtn = document.getElementById("pushbtncost");
let oldcellcellcount = document.getElementById("oldcellcount");
let oldcellcellcash = document.getElementById("oldcellcash");
let oldcellbtn = document.getElementById("oldcellcost");
let oldsmartcellcount = document.getElementById("oldsmartcount");
let oldsmartcellcash = document.getElementById("oldsmartcash");
let oldsmartbtn = document.getElementById("oldsmartcost");
let moderncellcount = document.getElementById("moderncount");
let moderncellcash = document.getElementById("moderncash");
let modernbtn = document.getElementById("moderncost");
let futurecellcount = document.getElementById("futurecount");
let futurecellcash = document.getElementById("futurecash");
let futurebtn = document.getElementById("futurecost");
let holocellcount = document.getElementById("holocount");
let holocellcash = document.getElementById("holocash");
let holobtn = document.getElementById("holocost");
let finalcellcount = document.getElementById("finalcount");
let finalcellcash = document.getElementById("finalcash");
let finalbtn = document.getElementById("finalcost");

let tpcash=0;
let currentcash=0;
let prestigepoints=0;
let possibleprestige=0;
let prestigemult=1;
let cashperclick=1;

let rotarycost=10;
let rotarycount=0;
let rotarysec=0;

let pushbtncost=75;
let pushbtncount=0;
let pushbtnsec=0;

let oldcellcost=200;
let oldcellcount=0;
let oldcellsec=0;

let oldsmartcost=600;
let oldsmartcount=0;
let oldsmartsec=0;

let moderncost=1000;
let moderncount=0;
let modernsec=0;

let futurecost=8000;
let futurecount=0;
let futuresec=0;

let holocost=100000;
let holocount=0;
let holosec=0;

let finalcost=9.99e99;
let finalcount=0;
let finalsec=0;

function clickBtn(){
	currentcash+=cashperclick*prestigemult;
	tpcash+=cashperclick*prestigemult;
	updateGame();
}
function buyRotary(){
	if(currentcash>=rotarycost){
		currentcash-=rotarycost;
		rotarycount++;
		rotarycost*=1.1;
		rotarysec+=0.1;
		updateGame();
		cashperclick+=0.01;
	}
}
function buyPushBtn(){
	if(currentcash>=pushbtncost){
		currentcash-=pushbtncost;
		pushbtncount++;
		pushbtncost*=1.15;
		pushbtnsec+=1;
		updateGame();
		cashperclick+=0.1;
	}
}
function buyOldCell(){
	if(currentcash>=oldcellcost){
		currentcash-=oldcellcost;
		oldcellcount++;
		oldcellcost*=1.1;
		oldcellsec+=4;
		updateGame();
		cashperclick+=1;
	}
}

function buyOldSmart(){
	if(currentcash>=oldsmartcost){
		currentcash-=oldsmartcost;
		oldsmartcount++;
		oldsmartcost*=1.35;
		oldsmartsec+=15;
		updateGame();
		cashperclick+=3;
	}
}

function buyModern(){
	if(currentcash>=moderncost){
		currentcash-=moderncost;
		moderncount++;
		moderncost*=2.4;
		modernsec+=60;
		updateGame();
		cashperclick+=12;
	}
}

function buyFuture(){
	if(currentcash>=futurecost){
		currentcash-=futurecost;
		futurecount++;
		futurecost*=1.15;
		futuresec+=100;
		updateGame();
		cashperclick+=100;
	}
}

function buyHolo(){
	if(currentcash>=holocost){
		currentcash-=holocost;
		holocount++;
		holocost*=1.1;
		holosec+=750;
		updateGame();
		cashperclick+=600;
	}
}

function buyFinal(){
	if(currentcash>=finalcost){
		currentcash-=finalcost;
		finalcount++;
		finalcost*=1000;
		finalsec+=1e120;
		updateGame();
		cashperclick+=2e119;
	}
}

updateGame();
setInterval(updateGame,100);
function updateGame(){
	//rotary
	tpcash+=rotarysec/10*prestigemult;
	currentcash+=rotarysec/10*prestigemult;
	rotarycellcount.innerHTML=rotarycount;
	rotarycellcash.innerHTML="$"+convMoney(rotarysec*prestigemult)+"/s";
	rotarybtn.innerHTML="$"+convMoney(rotarycost);
	
	//pushbtn
	tpcash+=pushbtnsec/10*prestigemult;
	currentcash+=pushbtnsec/10*prestigemult;
	pushbtncellcount.innerHTML=pushbtncount;
	pushbtncellcash.innerHTML="$"+convMoney(pushbtnsec*prestigemult)+"/s";
	pushbtnbtn.innerHTML="$"+convMoney(pushbtncost);
	
	//oldcell
	tpcash+=oldcellsec/10*prestigemult;
	currentcash+=oldcellsec/10*prestigemult;
	oldcellcellcount.innerHTML=oldcellcount;
	oldcellcellcash.innerHTML="$"+convMoney(oldcellsec*prestigemult)+"/s";
	oldcellbtn.innerHTML="$"+convMoney(oldcellcost);

	//oldsmart
	tpcash+=oldsmartsec/10*prestigemult;
	currentcash+=oldsmartsec/10*prestigemult;
	oldsmartcellcount.innerHTML=oldsmartcount;
	oldsmartcellcash.innerHTML="$"+convMoney(oldsmartsec*prestigemult)+"/s";
	oldsmartbtn.innerHTML="$"+convMoney(oldsmartcost);
	
	//modern
	tpcash+=modernsec/10*prestigemult;
	currentcash+=modernsec/10*prestigemult;
	moderncellcount.innerHTML=moderncount;
	moderncellcash.innerHTML="$"+convMoney(modernsec*prestigemult)+"/s";
	modernbtn.innerHTML="$"+convMoney(moderncost);
	
	//future
	tpcash+=futuresec/10*prestigemult;
	currentcash+=futuresec/10*prestigemult;
	futurecellcount.innerHTML=futurecount;
	futurecellcash.innerHTML="$"+convMoney(futuresec*prestigemult)+"/s";
	futurebtn.innerHTML="$"+convMoney(futurecost);
	
	//holo
	tpcash+=holosec/10*prestigemult;
	currentcash+=holosec/10*prestigemult;
	holocellcount.innerHTML=holocount;
	holocellcash.innerHTML="$"+convMoney(holosec*prestigemult)+"/s";
	holobtn.innerHTML="$"+convMoney(holocost);
	
	//final phone
	tpcash+=finalsec/10*prestigemult;
	currentcash+=finalsec/10*prestigemult;
	finalcellcount.innerHTML=finalcount;
	finalcellcash.innerHTML="$"+convMoney(finalsec*prestigemult)+"/s";
	finalbtn.innerHTML="$"+convMoney(finalcost);
	
	//calculate prestige
	if(tpcash>=10000){
		possibleprestige=Math.floor(Math.sqrt(tpcash)-99)+moderncount+futurecount*2+holocount*5+finalcount*100;
	}
	else {
		possibleprestige=0;
	}
	prestigemult=1+(prestigepoints/100);
	
	cashcount.innerHTML="$"+convMoney(currentcash);
	cpc.innerHTML="$"+convMoney(cashperclick*prestigemult)+" / click";
	prestigestatus.innerHTML=convRaw(prestigepoints)+" Prestige Points<br>+"+convRaw(possibleprestige)+" when you prestige";
	if(currentcash>1e300){
		currentcash=1e300;
	}
	if(cashperclick>1e300){
		cashperclick=1e300;
	}
}

function convMoney(xyz){
	let returnval=0;
	if(xyz<1e6){
		return xyz.toFixed(2);
	}
	else {
		return xyz.toExponential(2);
	}
}
function convRaw(xyz){
	let returnval=0;
	if(xyz<1e6){
		return xyz;
	}
	else {
		return xyz.toExponential(2);
	}
}
function prestige(){
	if(confirm("This will reset all progress and net you "+possibleprestige+" prestige points\nadding "+(possibleprestige/100)+"x to your multiplier. Are you sure?")==true&&confirm("THIS WILL DESTROY ALL PROGRESS")==true){
		prestigepoints+=possibleprestige;
		currentcash=0;
		rotarycost=10;
	rotarycount=0;
	rotarysec=0;

	pushbtncost=75;
	pushbtncount=0;
	pushbtnsec=0;

	oldcellcost=200;
	oldcellcount=0;
	oldcellsec=0;

	oldsmartcost=600;
	oldsmartcount=0;
	oldsmartsec=0;

	moderncost=1000;
	moderncount=0;
	modernsec=0;

	futurecost=8000;
	futurecount=0;
	futuresec=0;

	holocost=100000;
	holocount=0;
	holosec=0;

	finalcost=9.99e99;
	finalcount=0;
	finalsec=0;
	
	possibleprestige=0;
	cashperclick=1;
	}
}
function savegame(){
	let savestring="";
	savestring+=currentcash+",";
	savestring+=tpcash+",";
	savestring+=prestigepoints+",";
	savestring+=prestigemult+",";
	savestring+=cashperclick+",";
	
	savestring+=rotarycost+",";
	savestring+=rotarycount+",";
	savestring+=rotarysec+",";
	
	savestring+=pushbtncost+",";
	savestring+=pushbtncount+",";
	savestring+=pushbtnsec+",";
	
	savestring+=oldcellcost+",";
	savestring+=oldcellcount+",";
	savestring+=oldcellsec+",";

	savestring+=oldsmartcost+",";
	savestring+=oldsmartcount+",";
	savestring+=oldsmartsec+",";
	
	savestring+=moderncost+",";
	savestring+=moderncount+",";
	savestring+=modernsec+",";
	
	savestring+=futurecost+",";
	savestring+=futurecount+",";
	savestring+=futuresec+",";

	savestring+=holocost+",";
	savestring+=holocount+",";
	savestring+=holosec+",";
	
	savestring+=finalcost+",";
	savestring+=finalcount+",";
	savestring+=finalsec+",";
	
	savestring+=Date.now();
	let encodedSave = btoa(btoa(savestring));
	
	prompt("Copy this save data somewhere safe",encodedSave);
}
function loadsave(){
	let encodedSaveData=prompt("Import Save Data");
	if(encodedSaveData==""){
		alert("Paste encoded save data");
	}
	else{
	let loadData = atob(atob(encodedSaveData));
	let loadArray = loadData.split(',');
	loadArray = loadArray.map(Number);
	currentcash=loadArray[0];
	tpcash=loadArray[1];
	prestigepoints=loadArray[2];
	prestigemult=loadArray[3];
	cashperclick=loadArray[4];
	rotarycost=loadArray[5];
	rotarycount=loadArray[6];
	rotarysec=loadArray[7];
	pushbtncost=loadArray[8];
	pushbtncount=loadArray[9];
	pushbtnsec=loadArray[10];
	oldcellcost=loadArray[11];
	oldcellcount=loadArray[12];
	oldcellsec=loadArray[13];
	oldsmartcost=loadArray[14];
	oldsmartcount=loadArray[15];
	oldsmartsec=loadArray[16];
	moderncost=loadArray[17];
	moderncount=loadArray[18];
	modernsec=loadArray[19];
	futurecost=loadArray[20];
	futurecount=loadArray[21];
	futuresec=loadArray[22];
	holocost=loadArray[23];
	holocount=loadArray[24];
	holosec=loadArray[25];
	finalcost=loadArray[26];
	finalcount=loadArray[27];
	finalsec=loadArray[28];
	let lastSaveTime=loadArray[29];
	let secondsSinceSave=(Date.now()-lastSaveTime)/1000;
	let cashSinceSave=(rotarysec+pushbtnsec+oldcellsec+oldsmartsec+modernsec+futuresec+holosec+finalsec)*secondsSinceSave;
	currentcash+=cashSinceSave;
	tpcash+=cashSinceSave;
	alert("You have made $"+convMoney(cashSinceSave)+" since this save was created.");
	updateGame();
	}
}