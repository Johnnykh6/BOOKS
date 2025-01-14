$(document).ready(function () {
  $('.show-details-button').click(function () {
    var currentRow = $(this).closest('tr');
    var detailsRow = currentRow.next('.details-row');

    if (detailsRow.is(':visible')) {
      detailsRow.hide();
      $(this).text('إظهار التفاصيل');
    } else {
      detailsRow.show();
      $(this).text('إخفاء التفاصيل');
    }
  });

  $('#continueButton').click(function () {
    const selectedProperty = $('input[name="property"]:checked').val();
    if (selectedProperty) {
      $('#formContainer').show();
    } else {
      alert('يرجى اختيار كتاب قبل المتابعة');
    }
  });

  $('#submitButton').click(function () {
    console.log('زر الإرسال تم النقر عليه');
    if (validateFullName() && validateNationalID() && validateMobileNumber()) {
      console.log('تم تأكيد البيانات بنجاح');
      const selectedProperty = $('input[name="property"]:checked').val(); // الحصول على الكتاب المختار
      alert('تم تأكيد البيانات بنجاح. سيتم تقديم الطلب الآن. تفاصيل الكتاب: ' + selectedProperty);
      $('#applicationForm').submit();
    }
  });

});

// تحقق من صحة الأحرف الهجائية باللغة العربية فقط
function validateFullName() {
  var fullNameInput = document.getElementById('fullName');
  var fullNameRegex = /^[\u0600-\u06FF\s]+$/; // تعريف regex للأحرف العربية الهجائية فقط

  if (fullNameInput.value.trim() !== "" && !fullNameRegex.test(fullNameInput.value.trim())) {
    console.log('التحقق من الاسم الكامل: فشل');
    alert('الرجاء إدخال أحرف هجائية فقط باللغة العربية في الاسم الكامل.');
    return false;
  }
  console.log('التحقق من الاسم الكامل: ناجح');
  return true;
}

// تحقق من الرقم الوطني
function validateNationalID() {
  var nationalIDInput = document.getElementById('nationalID');
  var nationalIDRegex = /^[0-9]{11}$/; // تعريف regex للرقم الوطني (11 خانة)

  if (!nationalIDRegex.test(nationalIDInput.value.trim())) {
    console.log('التحقق من الرقم الوطني: فشل');
    alert(' الرجاء إدخال رقم وطني صحيح .');
    return false;
  }

  var governorateCode = nationalIDInput.value.substring(0, 2);
  if (governorateCode < '01' || governorateCode > '14') {
    console.log('التحقق من الرقم الوطني: فشل في الخانتين الأوليتين');
    alert('الرقم الوطني غير صحيح. الرجاء التأكد من الخانتين الأوليتين.');
    return false;
  }

  console.log('التحقق من الرقم الوطني: ناجح');
  return true;
}

// تحقق من رقم الموبايل
function validateMobileNumber() {
  var mobileNumberInput = document.getElementById('mobileNumber');
  var mobileNumberRegex = /^(09(3|4|5|6|8|9)[0-9]{7})?$/; // تعريف  لأرقام Syriatel و MTN

  if (mobileNumberInput.value.trim() !== "" && !mobileNumberRegex.test(mobileNumberInput.value.trim())) {
    console.log('التحقق من رقم الموبايل: فشل');
    alert('.الرجاء إدخال رقم موبايل صحيح');
    return false;
  }
  console.log('التحقق من رقم الموبايل: ناجح');
  return true;
}
// زر الانتقال
$(document).ready(function () {
  $('#propertiesButton').click(function () {
    window.location.href = 'Properties.html';
  });
});