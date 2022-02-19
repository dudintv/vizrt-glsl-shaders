#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

#define PI 3.1415926535
#define bg_color vec3(1, 1, 1)
#define shape_color vec3(0.3, 0.5, 0.3)

float polyshape(vec2 position, float radius, float sides){
  float angle = atan(position.x, position.y);
  float slice = PI*2.0/sides;
  // return step(radius, cos(floor(0.5+angle/slice)*slice-angle/2.)*length(position)); // batman-shape
  return step(radius, cos(floor(0.5+angle/slice)*slice-angle)*length(position));
}

void main(){
  vec2 position = gl_FragCoord.xy / u_resolution - vec2(0.5);

  float form = polyshape(position, 0.3, 5.0);
  vec3 color = mix(shape_color, bg_color, form);

  gl_FragColor = vec4(color, 1.0);
}
