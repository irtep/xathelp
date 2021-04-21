import { addNewEntry, copyToClipboardMsg, checkPass, showData } from './functions.js';
import { firebaseConfig } from './config.js';
const allDivs = document.getElementById('container');
const passInput = document.getElementById('passInput');
const passAsker = document.getElementById('passAsker');
const infoScreen = document.getElementById('infoScreen');
const downLeft = document.getElementById('downLeft');
const downRight = document.getElementById('downRight');
const checkingPass = document.getElementById('passInput').addEventListener("change", checkPass);
const sendNewEntry = document.getElementById('sendNew').addEventListener('click', addNewEntry);
const haste1Listen = document.getElementById('haste1').addEventListener('click', copyHaste);
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export let allData = [];

export function copyHaste(elem) {
  const targetDiv = document.getElementById(elem.target.id);
  // copy to clipboard
  copyToClipboardMsg(targetDiv, "msg");
  window.scrollTo(0, 0);
}
// this shows data of the clicked information
/*
function showData(clickedElement) {
  // find the data:
  allData.forEach( (dataEntry, idx) => {
    if (dataEntry._id === clickedElement.target.id) {
      // add data
      downRight.innerHTML = allData[idx].response;
      // copy to clipboard
      copyToClipboardMsg(downRight, "msg");
      window.scrollTo(0, 0);
    }
  });
}
*/
db.collection("xathelpFiles").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().question} => ${doc.data().response}`);
        // add entry to allData
        const newEntry = {id: doc.id, question: doc.data().question, response: doc.data().response};

        allData.push(newEntry);
        //console.log('allData: ', allData);
        // add question to page
        downLeft.innerHTML += `<p id= ${doc.id} class= "clickable">${doc.data().question}</p>`;
                      //      `<p id= ${data._id} class= "clickable">${data.question}</p>`
        // add event listener to this
        const elements = document.getElementsByClassName('clickable');
        for (var i = 0; i < elements.length; i++) {
          elements[i].addEventListener('click', showData, false);
        }
    });
    infoScreen.innerHTML = 'database valmis!'
});
/*
function checkPass(pass) {
  // correct password length
  if (pass.target.value.length === 7) {
    const passu = pass.target.value;
    const http = new XMLHttpRequest();
    const url = '/showAll';
    let params = 'MSG=' + passu;

    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = () => {
      if (http.readyState == 4 && http.status == 200) {
        const records = JSON.parse(http.responseText);
        //const records = http.responseText;
        console.log('got records', records);
        if (records === 'wrong password') {
          infoScreen.innerHTML = 'wrong password!';
        } else {
          // correct pw
          infoScreen.innerHTML = '';
          passAsker.classList.add('invis');
          allDivs.classList.remove('invis');
          allData = records;
          allData.forEach( data => {
            //Operation dataMove
            /*
            db.collection("xathelpFiles").doc().set({
              _id: data._id,
              question: data.question,
              response: data.response
            });
            //////// tässä oli tähti
            //data.question
            // add question to page
            downLeft.innerHTML += `<p id= ${data._id} class= "clickable">${data.question}</p>`;
            // add event listener to this
            const elements = document.getElementsByClassName('clickable');
            for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener('click', showData, false);
            }
            // haste buttons... maybe temporary "dumb" solution, but gotta do more dynamic someday...
            const haste1Listen = document.getElementById('haste1').addEventListener('click', copyHaste);
            const haste2Listen = document.getElementById('haste2').addEventListener('click', copyHaste);
            const haste3Listen = document.getElementById('haste3').addEventListener('click', copyHaste);
            const haste4Listen = document.getElementById('haste4').addEventListener('click', copyHaste);
          });
        }
      }
    }
    http.send(params);
  } else {
    infoScreen.innerHTML = 'wrong password!';
  }
}
*/
window.onload = (()=> {
  const allDivs = document.getElementById('container');
  allDivs.classList.add('invis');
  infoScreen.innerHTML = 'odota, että dataBase on valmis...'
  // even listeners for hastes
  /*
  const allHastes = document.getElementsByClassName('hastes')
  console.log('all hastes', allHastes);
  for (let i = 0; i < allHastes.length; i++) {
    allHastes[i].addEventListener('click', copyHaste);
  }
  */
  //allHastes.forEach( (aH, idx) => {
  //  aH.addEventListener('click', copyHaste);
  //});
});
