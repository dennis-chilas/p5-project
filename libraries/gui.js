let gui;

let vars = {
  x: 20,
  y: 40,
  r: 60,
  palette: 'Palette',
  color: "rgb(255,0,0)"
}; 

function prepareGUI(){
    gui.remember(vars);
    let pos = gui.addFolder("Position");
    pos.add(vars, "x", 0, width)
    pos.add(vars, "y", 0, height)
    pos.add(vars, "r", 2, 100)
    gui.addColor(vars, "color")

    let palettes = {};
    palette.forEach(
        (p, index) => {
            palettes[`${p.name}`] = index; 
        }
    )

     gui.add(vars, 'palette', palettes );

    let tm_btn = { add:function(){ location.href = '/timemachine'; }};
    gui.add(tm_btn,'add').name('Show Timemachine');
}
