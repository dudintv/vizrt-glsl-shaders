#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
  vec2 coord = gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);

  color += fract(sin(coord.x*30.0)*0.5 + 0.5 + u_time/3.0);

  gl_FragColor = vec4(color, 1.0);
}