function calculateBMI() {
  // Giriş alanlarından boy ve kiloyu al
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert('Lütfen geçerli boy ve kilo değerleri girin.');
    return;
  }

  // Boyu metreye çevir
  var heightInMeters = height / 100;

  // BMI hesapla
  var bmi = weight / (heightInMeters * heightInMeters);

  // BMI kategorisini belirle
  var category;
  if (bmi < 18.5) {
    category = 'Zayıf';
  } else if (bmi < 24.9) {
    category = 'Normal Kilolu';
  } else if (bmi < 29.9) {
    category = 'Fazla Kilolu';
  } else {
    category = 'Obez';
  }

  // Sonucu kategoriyle göster
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = `<p>BMI değeriniz: ${bmi.toFixed(2)}</p>
                             <p>Kategori: ${category}</p>`;

  // Kategoriye göre renklendirme yapabilirsiniz
  resultElement.style.color = (category === 'Zayıf') ? '#27ae60' :
                              (category === 'Normal Kilolu') ? '#3498db' :
                              (category === 'Fazla Kilolu') ? '#e67e22' :
                              '#e74c3c';
}

function resetForm() {
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = '';
  resultElement.style.color = '#333'; // Varsa renklendirmeyi sıfırla
}
