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

