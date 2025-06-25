const titles = document.querySelectorAll('.title');

// Pisahkan dua baris teks
const topText = 'Hayyy Regita'.split('');
const bottomText = 'I Have Something for u'.split('');

// Fungsi untuk menampilkan teks dengan animasi
function populateText(container, textArray) {
  container.innerHTML = ''; // Kosongkan dulu
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.justifyContent = 'center';
  container.style.gap = '0.5rem';

  textArray.forEach((char) => {
    const span = document.createElement('span');

    if (char === ' ') {
      span.style.width = '1rem';
    } else {
      span.textContent = char;
    }

    const randomDelay = Math.random() * 3;
    span.style.setProperty('--delay', `${randomDelay}s`);
    container.appendChild(span);
  });
}

// Terapkan teks ke masing-masing title
populateText(titles[0], topText);
populateText(titles[1], bottomText);
