precision mediump float;

varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    // Pattern 1
    // vec3 color = vec3(vUv.x, vUv.y, 1.0);

    // Pattern 2
    // vec3 color = vec3(vUv.x, vUv.y, 0.0);

    // Pattern 3
    // vec3 color = vec3(vUv.x);

    // Pattern 4
    // vec3 color = vec3(vUv.y);

    // Pattern 5
    // vec3 color = 1.0 -  vec3(vUv.y) ;

    // Pattern 6
    // vec3 color = vec3(vUv.y) * 10.0;

    // Pattern 7
    // float strength = mod(vUv.y * 10.0, 1.0);
    // vec3 color = vec3(y);

    // pattern 8
    // float strength = step(0.5, mod(vUv.y * 10.0, 1.0));
    // vec3 color = vec3(strength);

    // Pattern 9
    // float strength = step(0.8, mod(vUv.y * 10.0, 1.0));
    // vec3 color = vec3(strength);

    // Pattern 10
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // vec3 color = vec3(strength);

    // Pattern 11
    // float x = step(0.8, mod(vUv.x * 10.0, 1.0));
    // float y = step(0.8, mod(vUv.y * 10.0, 1.0));
    // float strength = x + y;
    // vec3 color = vec3(strength);

    // Pattern 12
    // float x = step(0.8, mod(vUv.x * 10.0, 1.0));
    // float y = step(0.8, mod(vUv.y * 10.0, 1.0));
    // float strength = x * y;
    // vec3 color = vec3(strength);

    // Pattern 13
    // float x = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0));
    // float y = step(0.8, mod(vUv.y * 10.0, 1.0));
    // float strength = x * y;
    // vec3 color = vec3(strength);

    // Pattern 14
    // float x1 = step(0.4, mod(vUv.x * 10.0, 1.0));
    // float y2 = step(0.8, mod(vUv.y * 10.0, 1.0));
    // float strength1 = x1 * y2;
    // float x2 = step(0.8, mod(vUv.x * 10.0, 1.0));
    // float y1 = step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength2 = x2 * y1;
    // float strength = strength1 + strength2;
    // vec3 color = vec3(strength);

    // Pattern 15
    // float x1 = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0));
    // float y2 = step(0.8, mod(vUv.y * 10.0, 1.0));
    // float strength1 = x1 * y2;
    // float x2 = step(0.8, mod(vUv.x * 10.0, 1.0));
    // float y1 = step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
    // float strength2 = x2 * y1;
    // float strength = strength1 + strength2;
    // vec3 color = vec3(strength);

    // Pattern 16
    // float strength = abs(vUv.x - 0.5);
    // vec3 color = vec3(strength);

    // Pattern 17
    // float x = abs(vUv.x - 0.5);
    // float y = abs(vUv.y - 0.5);
    // float strength = min(x, y);
    // vec3 color = vec3(strength);

    // Pattern 18
    // float x = abs(vUv.x - 0.5);
    // float y = abs(vUv.y - 0.5);
    // float strength = max(x, y);
    // vec3 color = vec3(strength);

    // Pattern 19
    // float x = abs(vUv.x - 0.5);
    // float y = abs(vUv.y - 0.5);
    // float strength = step(0.2, max(x, y));
    // vec3 color = vec3(strength);

    // Pattern 20
    // float x1 = abs(vUv.x - 0.5);
    // float y1 = abs(vUv.y - 0.5);
    // float strength1 = step(0.4, max(x1, y1));
    // float x2 = abs(vUv.x - 0.5);
    // float y2 = abs(vUv.y - 0.5);
    // float strength2 = step(0.35, max(x2, y2));
    // float strength = strength2 - strength1;
    // vec3 color = vec3(strength);

    // Pattern 21
    // float strength = floor(vUv.x * 10.0) * 0.1;
    // vec3 color = vec3(strength);

    // Pattern 22
    // float x = floor(vUv.x * 10.0) * 0.1;
    // float y = floor(vUv.y * 10.0) * 0.1;
    // float strength = x * y;
    // vec3 color = vec3(strength);

    // Pattern 23
    // float strength = random(vUv);
    // vec3 color = vec3(strength);

    // Pattern 24
    // float strength = random(floor(vUv * 10.0) * 0.1);
    // vec3 color = vec3(strength);

    // Pattern 25
    vec2 gridUv = vec2(floor(vUv.x * 10.0) * 0.1, floor((vUv.y + vUv.x * 0.5) * 10.0) * 0.1);
    float strength = random(gridUv);
    vec3 color = vec3(strength);

    gl_FragColor = vec4(color, 1.0);
}