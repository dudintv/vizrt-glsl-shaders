#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define bg_color vec3(1, 1, 1)
#define shape_color vec3(0.0, 0.0, 0.4)

void main(){
  vec2 coord = gl_FragCoord.xy / u_resolution;

  float color = 0.0;
  
  color += sin(coord.x*50.0 + cos(u_time + coord.y*10.0 + sin(coord.x*50.0 + u_time*2.0)))*2.0;
  color += cos(coord.x*20.0 + sin(u_time + coord.y*10.0 + cos(coord.x*50.0 + u_time*2.0)))*2.0;
  color += sin(coord.x*30.0 + cos(u_time + coord.y*10.0 + sin(coord.x*50.0 + u_time*2.0)))*2.0;
  color += cos(coord.x*20.0 + sin(u_time + coord.y*10.0 + cos(coord.x*50.0 + u_time*2.0)))*2.0;

  vec3 mixed_color = mix(shape_color, bg_color, color);
  gl_FragColor = vec4(mixed_color, 1.0);
}
