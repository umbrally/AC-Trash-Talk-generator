// custom block helpers of Handlebars 
function setChecked(value, currentValue) {
  if (value === currentValue) {
    return 'checked';
  } else {
    return '';
  }
}

module.exports = setChecked