const allDivs = document.getElementById('container');
const passInput = document.getElementById('passInput');
const passAsker = document.getElementById('passAsker');
const infoScreen = document.getElementById('infoScreen');
const newQuestion = document.getElementById('newQuestion');
const newResponse = document.getElementById('newResponse');

export function addNewEntry() {
  if (newQuestion.value !== '' && newResponse.value !== '') {
    const newEntry = {question: newQuestion.value, response: newResponse.value}
    const pack = JSON.stringify(newEntry);
    const http = new XMLHttpRequest();
    const url = '/addNew';
    let params = 'MSG=' + pack;
    
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = () => {
      //console.log('sending champ: ', params);
    }
    http.send(params);
    newQuestion.value = '';
    newResponse.value = '';
  }
}
