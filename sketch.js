let pal_id;
let main_col;

async function setup() {
  let variables = await loadJSON('variables.json');
  gui = new dat.GUI({load: variables, preset: "Default"});
  
  createCanvas(800, 800);
  prepareGUI();
  setupEnv("rnd");

  pal_id = palette[vars.palette];
  print(pal_id);

  main_col = int(random(0,palette[vars.palette].f_colors.length-1));
  print("main color: "+ main_col)
  print("main color: "+ palette[vars.palette])
}

function draw() {
  background(250)
  fill(palette[vars.palette].f_colors[main_col])
  circle(vars.x, vars.y, vars.r)
}
