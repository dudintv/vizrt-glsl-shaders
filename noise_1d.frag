#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float niose1d(float value){
  return cos(value + cos(value*90.0)*100.0)*0.5 + 0.5;
}

void main(){
  vec2 coord = gl_FragCoord.xy;
  vec3 color = vec3(0.0);

  color.r += niose1d(u_time);

  gl_FragColor = vec4(color, 1.0);
}