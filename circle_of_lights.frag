#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define bg_color vec3(0, 0, 0)
#define shape_color vec3(0.0, 0.3, 0.6)
#define count 12

void main(){
  vec2 coord = (gl_FragCoord.xy*2.0 - u_resolution)/min(u_resolution.x, u_resolution.y);
  vec3 color = vec3(0.0);

  for(int i = 0; i < count; i++){
    float radius = 0.3;
    float rad = radians(360.0/float(count))*float(i);
    color += 0.005/length(coord + vec2(radius*cos(rad), radius*sin(rad)));
  }
  
  vec3 mix_color = mix(bg_color, shape_color, color);
  gl_FragColor = vec4(mix_color, 1.0);
}
