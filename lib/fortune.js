const fortunesCookies = [
  'Победи свои страхи, или они победят тебя.',
  'Рекам нужны истоки.',
  'Не бойся неведомого.',
  'Тебя ждет приятный сюрприз.',
  'Будь проще везде, где только можно.',
];

exports.getFortune = () => fortunesCookies[Math.floor(Math.random() * fortunesCookies.length)];
