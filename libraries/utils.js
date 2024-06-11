const DEFAULT_HASH =
  '0x175adf5fc058830a6319b8238ecc911db6e1b8dd40965629b5f0c5bee655598f'

let hash
let seed = 0
let tmp_hash = makeid(64)


function setupEnv(mode){
    const params = getURLParams()
    if(!mode || mode == 'default'){
        hash = params.hash || DEFAULT_HASH
    }
    else if(mode == 'rnd') {
        hash = params.hash || tmp_hash
    }
    seed = hashToSeed(hash)
    randomSeed(seed);
    noiseSeed(seed);
    console.log(hash, seed)
    
}

function keyPressed() {

  if(key === 'e'){
    let tmp = JSON.stringify(gui.getSaveObject());
    console.log(tmp);
  }
    if (keyIsDown(CONTROL) && key === 's') {
        saveCanvasToServer();
    }
  }
  
  function saveCanvasToServer() {
    // capture canvas
    let canvas = document.querySelector('canvas');
    let dataURL = canvas.toDataURL('image/png');
    let guiData = gui.getSaveObject();
  
    // send post request to server
    fetch('/save-canvas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: dataURL, hash: hash, gui: guiData })
    }).then(response => response.json())
      .then(data => {
        console.log('Saving was successful:', data);
    }).catch(error => {
        console.error('Error while saving:', error);
    });
  }


  function hashToSeed(hash) {
    let _seed = 0
    for (let hl = 0; hl < 60; hl = hl + 12) {
      _seed += parseInt(hash.substring(hl, hl + 12), 16)
    }
    return _seed
  }


  function makeid(length) {
    let result = '';
    const characters = 'abcdef0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return "0x"+result;
}

