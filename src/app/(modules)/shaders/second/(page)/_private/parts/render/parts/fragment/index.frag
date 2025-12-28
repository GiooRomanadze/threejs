precision mediump float;

varying vec2 vUv;

void main() {
    // mod
    float color = mod(vUv.y * 10.0, 1.0);
    color = step(0.5, color);

    gl_FragColor = vec4(vec3(color), 1.0);
}