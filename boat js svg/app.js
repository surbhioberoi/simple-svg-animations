var animate = new Vivus('animate', {
  type: 'scenario',
  duration: 80,
  start: 'autostart'
});

document.getElementById("rerun").addEventListener("click", function(){
  animate.stop().reset().play(2);
});
