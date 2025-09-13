# TypeScript Support

This library is fully TypeScript-compatible and exports all necessary types for a great developer experience.

## Exported Types

### Main Component Types

- `LiquidGlassProps` - Props interface for the main LiquidGlass component
- `LiquidGlassMode` - Union type for available effect modes: `"standard" | "polar" | "prominent" | "shader"`

### Shader Utility Types

- `Vec2` - 2D vector interface with x and y coordinates
- `ShaderOptions` - Configuration interface for custom shaders
- `FragmentShaderType` - Type for available fragment shaders
- `ShaderDisplacementGenerator` - Class for generating displacement maps
- `fragmentShaders` - Object containing built-in fragment shaders

## Usage Examples

```typescript
import LiquidGlass, { 
  LiquidGlassProps, 
  LiquidGlassMode,
  Vec2,
  ShaderOptions 
} from 'liquid-glass-react';

// Basic usage with type safety
const props: LiquidGlassProps = {
  children: "Hello World",
  mode: "standard",
  displacementScale: 50,
  cornerRadius: 16
};

// Working with modes
const mode: LiquidGlassMode = "shader";

// Custom shader development
const customShader: ShaderOptions = {
  width: 256,
  height: 256,
  fragment: (uv: Vec2, mouse?: Vec2) => ({
    x: uv.x + 0.1 * Math.sin(uv.y * Math.PI),
    y: uv.y + 0.1 * Math.cos(uv.x * Math.PI)
  })
};
```

## IDE Support

All exported types include comprehensive JSDoc comments for excellent IDE support with:
- Auto-completion
- Inline documentation
- Type checking
- Parameter hints

## Type Declaration Files

The library generates complete TypeScript declaration files (`*.d.ts`) that are automatically included when you install the package.