#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define bg_color vec3(0, 0, 0)
#define shape_color vec3(0.0, 0.3, 0.6)

float random2d(vec2 coord){
  return fract(sin(dot(coord.xy, vec2(12.9898, 78.233)))*43758.5453);
}

void main(){
  vec2 coord = gl_FragCoord.xy*0.02;
  coord -= u_time + vec2(sin(coord.y), cos(coord.x));
  vec3 color = vec3(0.0);

  // color += abs(cos(coord.x/20.0) + sin(coord.y/20.0) - cos(u_time));
  float rand01 = fract(random2d(floor(coord)) + u_time/20.0);
  float rand02 = fract(random2d(floor(coord)) + u_time/10.0);

  rand01 *= 0.4 - length(fract(coord));
  
  // vec3 mix_color = mix(bg_color, shape_color, rand01);
  gl_FragColor = vec4(vec3(rand01*4.0, rand01* rand02*4.0, 0.0), 1.0);
}
