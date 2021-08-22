var express = require('express');
const request = require('request')
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Youth Chatbot'
  });
});

router.post('/chat', (req,res,next) => {
  let result;
  let user_chat;

  const dateObj = new Date();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  if (parseInt(minutes) < 10){
    minutes = "0" + minutes
  }
  let local_time = hours + ':' + minutes;

  user_chat = req.body["user"];
  console.log(user_chat);
  
  const options = {
    uri: "https://main-youth-chatbot-ko-gpt2-base-api-east-h-shin.endpoint.ainize.ai/chat",
    method: 'POST',
    form: {
      question: user_chat
    }
  }


  request.post(options, async function(err, httpResponse, body){
    let answer;
    let trans_label;
    result = body;
    
    
    console.log(result);

    res.send({
    ans: result,
    user: user_chat,
    time: local_time
  });
  });

})
module.exports = router;
