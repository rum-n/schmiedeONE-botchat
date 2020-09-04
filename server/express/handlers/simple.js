module.exports = function (req, res) {
  res.json({
    "answersBasic":[      
      'can you elaborate?',
      'and why do you believe that is so?',
      'can you be more specific?',
      'what would be your guess?',
      'I need more details for this one',
    ],
    "answersAdvanced": [
      'have you checked the logs?',
      'have you tried restarting?',
      'what does the documentation say?',
      'Maybe its a typo',
    ],
    "answersAdjust": [
      'you need to be a bit more specific',
      'come on I am trying to help',
      'whatever',
      'that does not sound like a bug',
    ]
  });
};
