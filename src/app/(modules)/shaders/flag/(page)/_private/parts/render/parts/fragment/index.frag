precision mediump float;

uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 texture = texture2D(uTexture, vUv);
    texture.rgb *= vElevation * 10.0 + 1.5;
    gl_FragColor = texture;

    gl_FragColor = vec4(vUv, 0.0, 1.0);
}