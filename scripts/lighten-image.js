import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function lightenImage() {
  const inputPath = path.join(__dirname, '../public/team-light.jpg');
  const tempPath = path.join(__dirname, '../public/team-light-temp.jpg');
  const outputPath = path.join(__dirname, '../public/team-light.jpg');
  
  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('Input file not found:', inputPath);
      process.exit(1);
    }

    console.log('Processing image to lighten...');
    console.log('Input:', inputPath);
    
    // Process image: lighten by adjusting brightness and maintaining quality
    await sharp(inputPath)
      .modulate({
        brightness: 1.3,  // Increase brightness by 30%
        saturation: 0.95,  // Slightly reduce saturation to maintain natural look
      })
      .normalise()  // Normalize the image (stretch contrast to full dynamic range)
      .sharpen()    // Apply subtle sharpening to maintain quality
      .jpeg({
        quality: 90,      // High quality JPEG
        progressive: true, // Progressive JPEG for better web performance
        mozjpeg: true     // Use mozjpeg for better compression
      })
      .toFile(tempPath);
    
    // Replace original with processed version
    fs.renameSync(tempPath, outputPath);
    
    console.log('✅ Image processed successfully!');
    console.log('Output:', outputPath);
  } catch (error) {
    console.error('Error processing image:', error);
    // Clean up temp file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    process.exit(1);
  }
}

lightenImage();

