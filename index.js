// Import stylesheets
import './style.css';
import './jaystorm.css';
import $ from 'jquery';
import Swal from 'sweetalert2';

$(document).ready(function () {
  jaystormClickListener();
});

function jaystormClickListener() {
  $('#jaystorm').on('click', function () {
    sweety();
  });
}


function doTheMagic(json) {
  json = $.parseJSON(json);
  // console.log('Json : ');
  // console.log(json);
  $.each(json, function (key, val) {
    console.log(key + ' ' + val);
    setElVal(key, val);
  });
}

function setElVal(name, val) {
  var elInput = $('input[name=' + name + ']');
  var elSelect = $('select[name=' + name + ']');
  var elTextArea = $('textarea[name=' + name + ']');
  //if the type if input
  if (elInput.length >= 1) {
    setInputVal(elInput,val);    
  } else if(elSelect.length >= 1) {
    $(elSelect).val(val);
  } else if(elTextArea.length >= 1) {
    $(elTextArea).val(val);
  }

}

function setInputVal(elInput,val) {
  var inputTypes = ['text','email','phone','date']
  if ( inputTypes.includes($(elInput).attr('type')) ) {
      $(elInput).val(val);
    }
    else if ($(elInput).attr('type') == 'radio') { //if input type = radio
    $(elInput).prop('checked', true);
    }
}

function getJsonMasterData() {
  var jsonMaster = '{"username": "myusername","email": "my@email.net","motto": "mymotto" ,"gender":"f","pet":"elephant","address": "United St.","birth":"2019-03-06"}';
  var jsonPretty = JSON.stringify(JSON.parse(jsonMaster), null, 2);
  return jsonPretty;
}

function sweety() {
  Swal.fire({
    title: 'Input your JSON recipe here',
    input: 'textarea',
    inputValue: getJsonMasterData(),
    inputAttributes: {
      autocapitalize: 'off',
    },
    confirmButtonText: 'Do da Magic ✨',
    allowOutsideClick: () => !Swal.isLoading()
  }).then(function(result) {
    doTheMagic(result.value);

  }).then(function () {
    Swal.fire({
      type: 'success',
      title: 'The Magic has been casted successfully',
    })
  });
}



