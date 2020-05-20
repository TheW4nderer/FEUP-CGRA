#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;

uniform int nSupplies;


void main(){
    float limit_x =( float(nSupplies)/ 5.0) - 0.5;
    
    if (coords.x > limit_x){
        gl_FragColor = vec4(0.5, 0.5, 0.5, 1);
    }
    else{
        gl_FragColor =  vec4(1.0 - (0.5 + coords.x / 0.5), 0.5 + coords.x / 0.5, 0,1.0);
    }
}