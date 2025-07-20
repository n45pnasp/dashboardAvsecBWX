// ========== PIE CHART: Instansi yang Melewati ACP ==========
const instansiChart = new Chart(document.getElementById('instansiChart'), {
  type: 'pie',
  data: {
    labels: ['PT ANGKASA PURA', 'BMKG', 'PERTAMINA', 'TNI AU', 'DLL'],
    datasets: [{
      data: [25, 15, 20, 10, 30],
      backgroundColor: ['#007bff', '#6c757d', '#28a745', '#ffc107', '#dc3545']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

// ========== PIE CHART: Jenis Prohibited Items ==========
const barangChart = new Chart(document.getElementById('barangChart'), {
  type: 'pie',
  data: {
    labels: ['Korek Gas', 'Gunting', 'Pisau', 'Rama-Rama', 'Lainnya'],
    datasets: [{
      data: [18, 10, 7, 5, 4],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#00c851', '#ff8800']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

// ========== BAR CHART: PAS yang Beredar ==========
const pasChart = new Chart(document.getElementById('pasChart'), {
  type: 'bar',
  data: {
    labels: ['Tahunan Aktif', 'Bulanan Aktif', 'Tahunan Expired', 'Bulanan Expired'],
    datasets: [{
      label: 'Jumlah PAS',
      data: [169, 2, 45, 315],
      backgroundColor: ['#17a2b8', '#ffc107', '#dc3545', '#6f42c1']
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
});

// ========== BAR CHART: Prohibited Items per Flight ==========
const flightChart = new Chart(document.getElementById('flightChart'), {
  type: 'bar',
  data: {
    labels: ['IW-1817', 'ID-6951'],
    datasets: [{
      label: 'Jumlah',
      data: [68, 20],
      backgroundColor: ['#007bff', '#6c757d']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
