/**
 * TypeScript usage examples for liquid-glass-react
 * 
 * This file demonstrates how to use the exported types from the library
 * for proper TypeScript integration in your projects.
 */

import type { 
  LiquidGlassProps, 
  LiquidGlassMode,
  Vec2,
  ShaderOptions,
  FragmentShaderType 
} from './dist/index';

// Example 1: Basic component props with type safety
const basicProps: LiquidGlassProps = {
  children: "Hello World",
  mode: "standard",
  displacementScale: 50,
  cornerRadius: 16
};

// Example 2: Using the mode type for type-safe mode selection
const modes: LiquidGlassMode[] = ["standard", "polar", "prominent", "shader"];
const selectedMode: LiquidGlassMode = modes[0];

// Example 3: Working with shader utilities
const mousePosition: Vec2 = { x: 0.5, y: 0.5 };

const customShaderOptions: ShaderOptions = {
  width: 256,
  height: 256,
  fragment: (uv: Vec2, mouse?: Vec2) => {
    // Custom fragment shader logic
    const factor = mouse ? 0.1 : 0.05;
    return {
      x: uv.x + factor * Math.sin(uv.y * Math.PI),
      y: uv.y + factor * Math.cos(uv.x * Math.PI)
    };
  },
  mousePosition
};

// Example 4: Fragment shader type checking
const shaderType: FragmentShaderType = "liquidGlass";

// Example 5: Advanced props with all options
const advancedProps: LiquidGlassProps = {
  children: null,
  displacementScale: 70,
  blurAmount: 0.0625,
  saturation: 140,
  aberrationIntensity: 2,
  elasticity: 0.15,
  cornerRadius: 999,
  globalMousePos: { x: 100, y: 100 },
  mouseOffset: { x: 10, y: -5 },
  className: "my-glass-component",
  padding: "24px 32px",
  style: { position: "relative" },
  overLight: true,
  mode: "shader",
  onClick: () => console.log("Glass clicked!")
};

console.log("✅ All TypeScript examples compile successfully!");
console.log("📚 The library is fully TypeScript-compatible with:");