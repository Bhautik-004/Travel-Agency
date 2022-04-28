const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '97f15f70',
  apiSecret: 'ragtF3UYgTbcnlbs'
});

const sms = (message, email) => {
  const from = 'Vonage APIs';
    const to = '918154954909';
    const text = message + ' ' + email;
  return (
  
      nexmo.message.sendSms(from, to, text)
    
  )
}

export default sms;






    

    