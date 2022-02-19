#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define bg_color vec3(0, 0, 0)
#define shape_color vec3(0.0, 0.3, 0.6)

void main(){
  vec2 coord = gl_FragCoord.xy - u_resolution;
  vec3 color = vec3(0.0);

  color += abs(cos(coord.x/20.0) + sin(coord.y/20.0) - cos(u_time));
  
  vec3 mix_color = mix(bg_color, shape_color, color);
  gl_FragColor = vec4(mix_color, 1.0);
}
