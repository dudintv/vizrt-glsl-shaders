#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

vec4 bkg_color = vec4(0.0);
float time;

void main(){
  vec2 coord = -1.0 + 2.0 * gl_FragCoord.xy/u_resolution;
  vec4 color = vec4(1.0);

  float r = sqrt(dot(coord,coord));
  if (r < 1.0)
  {
    vec2 uv;
    float f = (1.0-sqrt(1.0-r))/(r);
    uv.x = coord.x*f + u_time/10.0;
    uv.y = coord.y*f + u_time/10.0;
    gl_FragColor = texture2D(u_tex0,uv);
  }
  else
  {
    gl_FragColor = bkg_color;
  }
}
