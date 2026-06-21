
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATALOGS_DIR = path.join(__dirname, '../public/catalogs');

const META_MAP = {
    'Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf': {
        title: 'İş Güvenliği ve El Bıçakları Kataloğu - Alya Bıçak',
        keywords: ['Safety Knives', 'Utility Knives', 'İş Güvenliği Bıçağı', 'Maket Bıçağı', 'Alya Bıçak', 'Industrial Blades']
    },
    'Makine-Bicaklari-Urun-Katalogu.pdf': {
        title: 'Makine Bıçakları Kataloğu - Alya Bıçak',
        keywords: ['Machine Blades', 'Guillotine Blades', 'Slitting Knives', 'Giyotin Bıçağı', 'Dilme Bıçağı', 'Industrial Blades', 'Alya Bıçak']
    },
    'Sanayi-Jiletleri-Urun-Katalogu.pdf': {
        title: 'Sanayi Jiletleri Kataloğu - Alya Bıçak',
        keywords: ['Industrial Razor Blades', 'Slitting Razor', 'Trapezoid Blades', 'Sanayi Jileti', 'Trapez Jilet', 'Alya Bıçak', 'Premium Quality']
    },
    'Vakum-PaketlemeBicaklari-Katalugu.pdf': {
        title: 'Vakum Paketleme Bıçakları Kataloğu - Alya Bıçak',
        keywords: ['Vacuum Packaging Knives', 'Thermoforming Blades', 'Vakum Paketleme', 'Gıda Bıçakları', 'Packaging Knives', 'Alya Bıçak']
    }
};

const COMMON_META = {
    author: 'Alya Bıçak (Alya Blade)',
    subject: 'Industrial Blades & Cutting Tools Catalog',
    creator: 'Alya Bıçak Technical Documentation',
    producer: 'Alya Bıçak Engine'
};

async function injectMetadata() {
    console.log('🚀 Starting PDF Metadata Injection...');

    try {
        const files = fs.readdirSync(CATALOGS_DIR).filter(file => file.endsWith('.pdf'));

        for (const file of files) {
            console.log(`Processing: ${file}`);
            const filePath = path.join(CATALOGS_DIR, file);

            try {
                const existingPdfBytes = fs.readFileSync(filePath);
                const pdfDoc = await PDFDocument.load(existingPdfBytes, { ignoreEncryption: true });

                const meta = META_MAP[file] || { title: file.replace('.pdf', ''), keywords: ['Industrial Blades'] };

                pdfDoc.setTitle(meta.title);
                pdfDoc.setAuthor(COMMON_META.author);
                pdfDoc.setSubject(COMMON_META.subject);
                pdfDoc.setKeywords(meta.keywords);
                pdfDoc.setCreator(COMMON_META.creator);
                pdfDoc.setProducer(COMMON_META.producer);
                pdfDoc.setCreationDate(new Date());
                pdfDoc.setModificationDate(new Date());

                const pdfBytes = await pdfDoc.save();
                fs.writeFileSync(filePath, pdfBytes);
                console.log(`✅ Injected Metadata into ${file}`);
            } catch (err) {
                console.error(`⚠️ Failed to process ${file}:`, err.message);
            }
        }

        console.log('✨ All PDFs processed successfully!');
    } catch (error) {
        console.error('❌ Error processing PDFs:', error);
        process.exit(1);
    }
}

injectMetadata();
