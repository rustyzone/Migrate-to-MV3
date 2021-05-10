

//If url contains bbc.co.uk/sport

if(window.location.href.includes('bbc.co.uk/sport')){

  //replace top story
  document.querySelector('.gs-c-promo-heading').innerText = 'A new headline!';
  
  //replace top paragraph
  document.querySelector('.gs-c-promo-heading').parentElement.querySelector('p').innerText='A new block of summary text...';
}
