#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define bg_color vec3(1, 1, 1)
#define shape_color vec3(0.0, 0.3, 0.6)

void main(){
  vec2 coord = gl_FragCoord.xy / u_resolution;
  // vec3 color = vec3(1.0);
  float size = 5.0;
  float alpha = sin(floor(coord.x*size) - u_time*4.0);
  
  gl_FragColor = vec4(shape_color, alpha);
}
