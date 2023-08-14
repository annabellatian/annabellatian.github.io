import React from 'react';
  
const Contact = () => {
  return (
    <div class='container'
      style={{
          // display: 'flex',
          color: '#E9EDDE',
          // alignItems: 'center',
          // justifyContent: 'center'
        }}
      >
      <h1 class='title'>Contact</h1>
      <p
        style={{
          // display: 'flex',
          justifyContent: 'left',
          padding: 'calc(8px + 1.5625vw)',
          paddingTop: '0px',
          paddingBottom: '0px',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '33px', /* 160.714% */
          letterSpacing: '2.24px',
        }}  
        >To get in touch with me, you can message me on any of my socials below or send me an email at <span class="bolded">annabellaphoenixtian@gmail.com</span>!</p>      
    </div>
  );
};
  
export default Contact;