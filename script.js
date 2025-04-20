// Tab Navigation
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn, .converter-card').forEach(el => {
            el.classList.remove('active');
        });
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});

// Video to MP3 Converter
const videoDropZone = document.getElementById('videoDropZone');
const videoInput = document.getElementById('videoInput');
const convertVideoBtn = document.getElementById('convertVideoBtn');

videoDropZone.addEventListener('click', () => videoInput.click());
videoInput.addEventListener('change', handleVideoFile);

async function handleVideoFile(e) {
    const file = e.target.files[0];
    // Add video conversion logic here
    // This would typically require a backend service or WebAssembly module
}

// Translator
const translateBtn = document.getElementById('translateBtn');
const sourceText = document.getElementById('sourceText');
const translatedText = document.getElementById('translatedText');

translateBtn.addEventListener('click', async () => {
    const text = sourceText.value;
    // Add translation API call here
    translatedText.value = await mockTranslate(text);
});

async function mockTranslate(text) {
    // Replace with actual API call
    const mockTranslations = {
        "hello": "नमस्ते",
        "good morning": "शुभ प्रभात"
    };
    return mockTranslations[text.toLowerCase()] || "Translation not available";
}

// PDF Compressor
const pdfDropZone = document.getElementById('pdfDropZone');
const pdfInput = document.getElementById('pdfInput');
const compressPdfBtn = document.getElementById('compressPdfBtn');

pdfDropZone.addEventListener('click', () => pdfInput.click());
pdfInput.addEventListener('change', handlePdfFile);

async function handlePdfFile(e) {
    const file = e.target.files[0];
    // Add PDF compression logic here
    // This would require a PDF processing library
}
