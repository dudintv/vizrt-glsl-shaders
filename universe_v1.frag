#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float dist_line(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p-a;
  vec2 ba = b-a;
  float t = clamp(dot(pa, ba)/dot(ba, ba), 0.0, 1.0);
  return length(pa - ba*t);
}

float random2d(vec2 coord){
  return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 randomVec2(vec2 coord){
  float n = random2d(coord);
  return vec2(n,random2d(coord+n));
}

vec2 getPos(vec2 id){
  vec2 rand = randomVec2(id)*u_time;
  return sin(rand)*0.4;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution)/u_resolution.y;

  // float d = dist_line(uv, vec2(0.0), vec2(1.0));
  float m = 0.0;

  uv *= 10.0;
  vec2 gv = fract(uv)-0.5;
  vec2 id = floor(uv);
  vec2 pos = getPos(id);

  // vec2 point = randomVec2(id) - 0.5;
  float d = length(gv-pos);
  m = smoothstep(0.1, 0.05, d);

  vec3 color = vec3(m);
  // color.rg = id/5.0; // id DEBUG
  // color.rg = point; // random point DEBUG
  // if(gv.x>0.48 || gv.y>0.48) color = vec3(1,0,1); // grid DEBUG

  gl_FragColor = vec4(color, 1.0);
}