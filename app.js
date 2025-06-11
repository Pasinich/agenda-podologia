const registros = [
  { data: "2025-06-10", nome: "Consulta com João" },
  { data: "2025-06-12", nome: "Reunião com equipe" }
];

window.onload = () => {
  const hoje = new Date().toISOString().split('T')[0];
  const filtrados = registros.filter(r => r.data >= hoje);

  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  filtrados.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.data} - ${r.nome}`;
    lista.appendChild(li);
  });

  // Salvar JSON automaticamente
  salvarJSON(registros);
};

function salvarJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'agenda_podologia.json'; // nome fixo
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}