const bgContainer = document.getElementById("bg-container");
const messageDisplay = document.getElementById("messageDisplay");
const channel = new BroadcastChannel("myChannel");
const settingsChannel = new BroadcastChannel("settings");
// const messageTitle = document.getElementById("messageTitle");

// Text channel
channel.onmessage = (event) => {
  const message = event.data;
  messageDisplay.innerHTML = message;
  localStorage.setItem('savedMessage', message);

  if (savedTitleColor) {
    const dspans = document.querySelectorAll("#messageDisplay span");
    dspans.forEach(dspan => dspan.style.color = savedTitleColor);
  }
};

// settings channel
settingsChannel.onmessage = (event) => {
  console.log(event.data);

  switch (event.data) {
    case 'selectedFont':
      bgContainer.style.fontFamily = event.data['selectedFont'];
      localStorage.setItem('fontFamily', selectedFont);
      break;
    case 'opacityColor':
      bgContainer.style.backgroundColor = event.data['opacityColor'];
      localStorage.setItem('bgColor', opacityColor);
      break;
    case 'roundedCorner':
      const roundedCorner = event.data['roundedCorner'];
      bgContainer.style.borderRadius = roundedCorner + "px";
      localStorage.setItem('borderRadius', roundedCorner);
      break;
    case 'selectedBgColor':
      const selectedBgColor = event.data['selectedBgColor'];
      bgContainer.style.backgroundColor = selectedBgColor;
      localStorage.setItem('bgColor', selectedBgColor);
      break;
    case 'selectedFontColor':
      const selectedFontColor = event.data['selectedFontColor'];
      bgContainer.style.color = selectedFontColor;
      localStorage.setItem('fontColor', selectedFontColor);
      break;
    case 'selectedTitleColor':
      const selectedTitleColor = event.data['selectedTitleColor'];
      const spans = document.querySelectorAll("#messageDisplay span");
      spans.forEach(span => span.style.color = selectedTitleColor);
      localStorage.setItem('titleColor', selectedTitleColor);
      break;
    case 'currentBoldState':
      messageDisplay.style.fontWeight = event.data['currentBoldState'];
      messageDisplay.style.fontWeight = currentBoldState;
      localStorage.setItem('boldState', currentBoldState);
      break;
    case 'currentItalicState':
      messageDisplay.style.fontStyle = event.data['currentItalicState'];
      messageDisplay.style.fontStyle = currentItalicState;
      localStorage.setItem('italicState', currentItalicState);
      break;
    case 'currentUnderlineState':
      messageDisplay.style.textDecoration = event.data['currentUnderlineState'];
      messageDisplay.style.textDecoration = currentUnderlineState;
      localStorage.setItem('underlineState', currentUnderlineState);
      break;
    case 'selectedTextAlignment':
      const selectedTextAlignment = event.data['selectedTextAlignment'];
      messageDisplay.style.textAlign = selectedTextAlignment;
      localStorage.setItem('textAlign', selectedTextAlignment);
      break;
  }
};

window.addEventListener('beforeunload', () => {
  settingsChannel.close();
});