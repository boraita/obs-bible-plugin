//  setttings for font family
const fontElement = document.getElementById("fontStyle");
const selectedFont = fontElement.options[fontElement.selectedIndex].value;

fontElement.addEventListener("change", function() {
    let selectedValue = fontElement.options[fontElement.selectedIndex].value;
    
    let sendSettingsChannel = new BroadcastChannel("settings");
    sendSettingsChannel.postMessage({ selectedFont: selectedValue });
    sendSettingsChannel .close();
});

//  Dealing with opacity color
const opacityRange = document.getElementById("opacity");

opacityRange.addEventListener("input", function () {
    let currentOpacity = opacityRange.value / 10;
    let bgColor = localStorage.getItem('bgColor');
    
    let rgbValues = bgColor.match(/\d+/g);
    let newColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${currentOpacity})`;

    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ opacityColor: newColor });
    settingsChannel.close();
});

//  handling rounded corner
const roundedCorner = document.getElementById("rounded-corner");

roundedCorner.addEventListener("input", function () {
    let currentRoundedCorner = roundedCorner.value;
    
    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ roundedCorner: currentRoundedCorner });
    settingsChannel.close();
});


// handle backgroundColor
const bgColorInput = document.getElementById("bgColor");
bgColorInput.addEventListener("input", function () {
    let selectedColor = bgColorInput.value;
    let collectdBgColor = localStorage.getItem('bgColor');

    const rgbaParts = collectdBgColor.split(",");
    const alphaValue = rgbaParts.length === 4 ? parseFloat(rgbaParts[3]) : 1;
    let newColor = hexToRgba(selectedColor, alphaValue);
    
    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ selectedBgColor: newColor });
    settingsChannel.close();
    
});


// handle Font Color
const fontColorInput = document.getElementById("fontColor");
fontColorInput.addEventListener("input", function () {
    let selectedColor = fontColorInput.value;
    
    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ selectedFontColor: selectedColor });
    settingsChannel.close();
});

// handle Title Color
const titleColorInput = document.getElementById("titleColor");
titleColorInput.addEventListener("input", function () {
    let selectedColor = titleColorInput.value;
    
    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ selectedTitleColor: selectedColor });
    settingsChannel.close();
});

// handle Title Color
const boldButton = document.getElementById("bold");
boldButton.addEventListener("click", function () {
    let currentBoldState = localStorage.getItem('boldState') || 'normal';
    const newBoldState = (currentBoldState === 'bold') ? 'normal' : 'bold';
    boldButton.style.fontWeight = currentBoldState;
    if (currentBoldState === 'bold'){
        boldButton.style.backgroundColor  = '#555';
    }else{
        boldButton.style.backgroundColor ='#55a' 
    }
    
    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ currentBoldState: newBoldState });
    settingsChannel.close();
    console.log("Bold button");
});

// handle italic state
const italicButton = document.getElementById("italic");
italicButton.addEventListener("click", function () {
    let currentItalicState = localStorage.getItem('italicState') || 'normal';
    const newItalicState = (currentItalicState === 'italic') ? 'normal' : 'italic';
    italicButton.style.fontWeight = newItalicState;
    if (currentItalicState === 'italic'){
        italicButton.style.backgroundColor  = '#555';
        italicButton.style.fontStyle  = 'normal';
    }else{
        italicButton.style.backgroundColor ='#55a'
        italicButton.style.fontStyle  = 'italic';
    }
    
    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ currentItalicState: newItalicState });
    settingsChannel.close();
});


// handle Underline state
const underlineButton = document.getElementById("underline");
underlineButton.addEventListener("click", function () {
    let currentUnderlineState = localStorage.getItem('underlineState') || 'none';
    const newUnderlineState = (currentUnderlineState === 'underline') ? 'none' : 'underline';
    underlineButton.style.fontWeight = newUnderlineState;
    if (currentUnderlineState === 'underline'){
        underlineButton.style.backgroundColor  = '#555';
        underlineButton.style.textDecoration  = 'none';
    }else{
        underlineButton.style.backgroundColor ='#55a' 
        underlineButton.style.textDecoration  = 'underline';
    }
    
    let settingsChannel = new BroadcastChannel("settings");
    settingsChannel.postMessage({ currentUnderlineState: newUnderlineState });
    settingsChannel.close();
});


//  setttings for font family
const textAlignElement = document.getElementById("textAlign");
const selectedAlignment = textAlignElement.options[textAlignElement.selectedIndex].value;

textAlignElement.addEventListener("change", function() {
    let selectedValue = textAlignElement.options[textAlignElement.selectedIndex].value;
    
    let sendSettingsChannel = new BroadcastChannel("settings");
    sendSettingsChannel.postMessage({ selectedTextAlignment: selectedValue });
    sendSettingsChannel.close();
    console.log("Text Align")
});

