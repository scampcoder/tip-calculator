function calculate(){
  const amount = $('#amount').val(); //amount value
  const percentage = $('#percentage').val(); //percent value
  const tip = amount * (percentage / 100); //tip calculations
  const total = Number(amount) + tip; //add for total

  $('#tip').val( tip.toFixed(2) ); //decimal pts 2
    $('#total').val( total.toFixed(2) ); //decimal pts 2

    return false; //prevent default behavior/don't load new pg
  }
  $('#calculator').submit( calculate ); //when submit button clicked, run calculate()
