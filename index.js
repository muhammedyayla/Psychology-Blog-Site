function masterPage() {
  document.getElementById("masterPage").style.display = "block";
  document.getElementById("masterPage").style.visibility = "visible";
  document.getElementById("masterPage").style.opacity = "1";
}

function scrollIntoContact_Container() {
    document.getElementById("contact_Container").scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
}

function scrollIntoOnline_Therapy_Container() {
  document.getElementById("online_Therapy-Container").scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
}

function scrollIntoFamily_Therapy_Container() {
  document.getElementById("family_Therapy-Container").scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
}

function scrollIntoSex_Therapy_Container() {
  document.getElementById("sex_Therapy-Container").scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
}
function scrollIntoFrequently_Asked_Questions() {
  document.getElementById("Frequently_Asked-Questions-Container").scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center',
    TransitionEvent:'3s linear'
  });
}

function geoLocation() {
  var anchor = document.createElement('a');
  anchor.href = 'https://www.google.com/maps/place/London,+UK/@51.5285262,-0.2664016,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw';
  anchor.target = "_blank";
  anchor.click();
}

function gowhatsapp() {
  var anchor = document.createElement('a');
  anchor.href = 'https://wa.me/447812814703';
  anchor.target = "_blank";
  anchor.click();
}
function goMail() {
  window.location.href = "mailto:Duhan27t@aol.com";
}
