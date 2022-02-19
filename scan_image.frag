#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

#define size 6.0
#define speed 10.0

void main(){
  vec2 coord = gl_FragCoord.xy/u_resolution;
  vec4 image = texture2D(u_tex0, coord);

  image.a = sin(floor(coord.x*size) - u_time*speed);

  gl_FragColor = image;
}