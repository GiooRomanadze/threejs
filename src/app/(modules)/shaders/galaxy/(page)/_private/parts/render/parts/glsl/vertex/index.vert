uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute vec3 color;
attribute float aScale;
attribute vec3 aRandom;

uniform float uSize;
uniform float uTime;

varying vec3 vColor;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceFromCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distanceFromCenter) * uTime * 0.2;
    angle += angleOffset;

    modelPosition.x = cos(angle) * distanceFromCenter;
    modelPosition.z = sin(angle) * distanceFromCenter;

    modelPosition.xyz += aRandom;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    gl_PointSize = uSize * aScale * (1.0 / -viewPosition.z);

    vColor = color;

}
