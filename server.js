const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 8000;

// Menangani permintaan POST untuk dua link cloud storage
app.post('/analyze', async (req, res) => {
  try {
    // Mendapatkan dua link gambar dan teks dari body permintaan
    const { imageLink1, imageLink2, text1, text2 } = req.body;

    // Analisis gambar dari link pertama
    const response1 = await analyzeImage ('https://storage.googleapis.com/picture-paruparu-bucket/Normal-998.png');

    // Analisis gambar dari link kedua
    const response2 = await analyzeImage ('https://storage.googleapis.com/picture-paruparu-bucket/Tuberculosis-9.png');

    // Analisis teks dari teks pertama dan kedua
    const textAnalysis1 = analyzeText('Tidak terindikasi penyakit TBC');
    const textAnalysis2 = analyzeText ('Terindikasi penyakit TBC');

    // Menentukan logika Yes atau No berdasarkan hasil analisis
    const isObjectsDetected = response1.isObjectsDetected && response2.isObjectsDetected;
    const isTextValid = textAnalysis1.isValid && textAnalysis2.isValid;

    // Menyusun objek respons dengan satu respons Yes atau No
    const response = {
      isObjectsDetected: isObjectsDetected,
      isTextValid: isTextValid,
    };

    // Memberikan respon berupa objek respons
    res.json(response);
  } catch (error) {
    console.error('Error during analysis:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fungsi untuk analisis gambar dari link
async function analyzeImage(imageLink) {
  try {
    // Implementasi analisis gambar, misalnya menggunakan @tensorflow-models/coco-ssd
    // Gantilah bagian ini dengan implementasi sesuai kebutuhan
    // ...

    // Contoh hasil analisis (gunakan logika sesuai kebutuhan)
    const isObjectsDetected = true;

    return { isObjectsDetected };
  } catch (error) {
    console.error('Error during image analysis:', error);
    return { isObjectsDetected: false };
  }
}

// Fungsi untuk analisis teks
function analyzeText(text) {
  // Implementasi analisis teks, misalnya melakukan verifikasi teks tertentu
  // Gantilah bagian ini dengan implementasi sesuai kebutuhan
  // ...

  // Contoh hasil analisis (gunakan logika sesuai kebutuhan)
  const isValid = true;

  return { isValid };
}

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



