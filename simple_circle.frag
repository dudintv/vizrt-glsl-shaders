#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

#define bg_color vec3(1, 1, 1)
#define shape_color vec3(0.3, 0.7, 0.3)

float circleshape(vec2 position, float radius){
  return step(radius, length(position - vec2(0.5)));
}

void main(){
  vec2 position = gl_FragCoord.xy / u_resolution;
  float circle = circleshape(position, 0.3);
  vec3 color = mix(shape_color, bg_color, circle);

  gl_FragColor = vec4(color, 1.0);
}
