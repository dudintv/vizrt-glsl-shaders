#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

void main(){
  vec2 coord = gl_FragCoord.xy/u_resolution;

  vec4 image = texture2D(u_tex0, coord);
  image.r += sin(coord.x*90.0);
  image.g += cos(coord.y*90.0);

  gl_FragColor = vec4(image);
} 