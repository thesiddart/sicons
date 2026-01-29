import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories
const ICONS_DIR = path.join(__dirname, '..', 'icons');
const SRC_DIR = path.join(__dirname, '..', 'src');
const STYLES = ['bold', 'outline'];

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
    .replace(/[()]/g, '') // Remove parentheses
    .replace(/&/g, 'And') // Replace & with And
    .replace(/^(\d)/, 'Icon$1'); // Prefix with Icon if starts with a number
}

// Read SVG and extract path data
function processSVG(svgPath) {
  const content = fs.readFileSync(svgPath, 'utf-8');
  
  // Extract everything inside the <svg> tag (excluding the svg element itself)
  const svgMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgMatch) {
    console.warn(`Could not parse SVG: ${svgPath}`);
    return null;
  }
  
  let svgContent = svgMatch[1].trim();
  
  // Replace hardcoded colors with currentColor
  svgContent = svgContent.replace(/fill="[^"]*"/g, 'fill="currentColor"');
  svgContent = svgContent.replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
  
  return svgContent;
}

// Generate React component
function generateComponent(iconName, style, svgContent) {
  const componentName = toPascalCase(iconName) + toPascalCase(style);
  
  return `import React from 'react';
import { IconProps } from '../IconWrapper';

export const ${componentName}: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${svgContent}
    </svg>
  );
};
`;
}

// Process all icons
function generateComponents() {
  const exportsByStyle = {
    bold: [],
    outline: []
  };

  STYLES.forEach(style => {
    const styleDir = path.join(ICONS_DIR, style);
    const outputDir = path.join(SRC_DIR, style);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read all SVG files
    const items = fs.readdirSync(styleDir);
    
    items.forEach(item => {
      const itemPath = path.join(styleDir, item);
      const stat = fs.statSync(itemPath);
      
      // Skip directories (like battery-2/)
      if (stat.isDirectory()) {
        return;
      }
      
      // Process only .svg files
      if (item.endsWith('.svg')) {
        const iconName = item.replace('.svg', '');
        const svgContent = processSVG(itemPath);
        
        if (svgContent) {
          const componentCode = generateComponent(iconName, style, svgContent);
          const componentName = toPascalCase(iconName) + toPascalCase(style);
          const outputFile = path.join(outputDir, `${componentName}.tsx`);
          
          fs.writeFileSync(outputFile, componentCode);
          exportsByStyle[style].push(componentName);
          
          console.log(`Generated: ${style}/${componentName}`);
        }
      }
    });

    // Generate index file for each style
    const indexContent = exportsByStyle[style]
      .map(name => `export { ${name} } from './${name}';`)
      .join('\n') + '\n';
    
    fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
  });

  // Generate main index file
  const mainIndexContent = `export { IconProps } from './IconWrapper';
export * from './bold';
export * from './outline';
`;
  
  fs.writeFileSync(path.join(SRC_DIR, 'index.ts'), mainIndexContent);
  
  console.log('\n✅ Component generation complete!');
  console.log(`   Bold icons: ${exportsByStyle.bold.length}`);
  console.log(`   Outline icons: ${exportsByStyle.outline.length}`);
}

// Run the script
generateComponents();
