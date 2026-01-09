import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function reduceImageQuality(inputFile, outputFile, quality = 75) {
  const inputPath = path.join(__dirname, '../public', inputFile);
  const tempPath = path.join(__dirname, '../public', `temp-${Date.now()}-${outputFile}`);
  const outputPath = path.join(__dirname, '../public', outputFile);
  
  try {
    if (!fs.existsSync(inputPath)) {
      console.error('Input file not found:', inputPath);
      return false;
    }

    console.log(`Processing ${inputFile}...`);
    
    await sharp(inputPath)
      .jpeg({
        quality: quality,
        progressive: true,
        mozjpeg: true
      })
      .toFile(tempPath);
    
    // Delete old output if exists
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
    
    // Rename temp to final output
    fs.renameSync(tempPath, outputPath);
    
    console.log(`✅ ${outputFile} processed successfully!`);
    return true;
  } catch (error) {
    console.error(`Error processing ${inputFile}:`, error);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    return false;
  }
}

async function processImages() {
  // Process Managing Partner 1 (JPG to JPG with reduced quality)
  await reduceImageQuality('managing-partner-1-source.jpg', 'managing-partner-1.jpg', 75);
  
  // Process Managing Partner 2 (WEBP to JPG with reduced quality)
  // First copy the webp file if needed
  const webpSource = path.join(__dirname, '../../Resources/Managing Partner 2.webp');
  const webpDest = path.join(__dirname, '../public/managing-partner-2-source.webp');
  if (fs.existsSync(webpSource) && !fs.existsSync(webpDest)) {
    fs.copyFileSync(webpSource, webpDest);
  }
  await reduceImageQuality('managing-partner-2-source.webp', 'managing-partner-2.jpg', 75);
  
  console.log('✅ All images processed!');
}

processImages();

