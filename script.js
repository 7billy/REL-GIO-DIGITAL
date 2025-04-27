function atualizarRelogio() {
  const hora = new Date();
  const horas = String(hora.getHours()).padStart(2, '0');
  const minutos = String(hora.getMinutes()).padStart(2, '0');
  const segundos = String(hora.getSeconds()).padStart(2, '0');

  const dia = String(hora.getDate()).padStart(2, '0');
  const mes = String(hora.getMonth() + 1).padStart(2, '0');
  const ano = hora.getFullYear();
  
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const diaSemana = diasDaSemana[hora.getDay()];

  document.getElementById('clock').textContent = `${horas}:${minutos}:${segundos}`;
  document.getElementById('date').textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

setInterval(atualizarRelogio, 1000);  // Atualiza a cada 1 segundo
