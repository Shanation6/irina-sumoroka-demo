(() => {
  const topics = [
    ['Быть рядом.\nИ оставаться собой.', 'Трудно говорить о своих желаниях? Близость чередуется с дистанцией? Отношения могут стать отправной точкой разговора о том, как вы встречаетесь с другим человеком.'],
    ['Заметить злость.\nУслышать свои границы.', 'Трудно сказать «нет»? Раздражение копится, а выразить несогласие страшно? Можно исследовать, что происходит с вами в конфликте и как вы обозначаете свои границы.'],
    ['Чего хочу я?\nЧто для меня важно?', 'Когда привычное «надо» звучит громче собственных желаний, бывает трудно понять себя. Чувства, сомнения и поиск своей опоры могут стать темой личного разговора.']
  ];
  const buttons = [...document.querySelectorAll('[data-topic]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.topic);
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('topic-number').textContent = `ТЕМА / 0${index + 1}`;
    const heading = document.getElementById('topic-title');
    heading.replaceChildren();
    topics[index][0].split('\n').forEach((line, i) => { if (i) heading.append(document.createElement('br')); heading.append(document.createTextNode(line)); });
    document.getElementById('topic-description').textContent = topics[index][1];
  }));
})();
