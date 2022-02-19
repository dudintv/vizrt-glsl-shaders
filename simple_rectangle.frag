#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

#define bg_color vec3(1, 1, 1)
#define shape_color vec3(0.3, 0.7, 0.3)

float rectshape(vec2 position, vec2 scale){
  scale = vec2(0.5) - scale*0.5;
  vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
  shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
  return shaper.x * shaper.y;
}

void main(){
  vec2 position = gl_FragCoord.xy / u_resolution;
  float form = rectshape(position, vec2(0.3, 0.6));
  vec3 color = mix(shape_color, bg_color, form);

  gl_FragColor = vec4(color, 1.0);
}
