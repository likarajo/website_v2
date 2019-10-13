function sidebar_open() {
  document.getElementById("sidebar").style.display = "block";
}

function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
}

function links_open() {
  document.getElementById("mylinks-m").style.display = "block";
}

function links_close() {
  document.getElementById("mylinks-m").style.display = "none";
}

function links_toggle() {
  var linksstate = document.getElementById("mylinks-m").style.display;
  switch (linksstate) {
    case "none":
      links_open();
      break;
    case "block":
      links_close();
      break;
    default:
      links_open();
      break;
  }
}

function contact_open() {
  document.getElementById("contact").style.display = "block";
}

function contact_close() {
  document.getElementById("contact").style.display = "none";
}

function contact_toggle() {
  var detailsstate = document.getElementById("contact").style.display;
  switch (detailsstate) {
    case "none":
      contact_open();
      break;
    case "block":
      contact_close();
      break;
    default:
      contact_open();
      break;
  }
}

function show_prev_career() {
  document.getElementById("prev_career").style.display = "block";
  document.getElementById("show_prev_career").style.display = "none";
}

function hide_prev_career() {
  document.getElementById("prev_career").style.display = "none";
  document.getElementById("show_prev_career").style.display = "block";
}

function show_prev_projects() {
  document.getElementById("prev_projects").style.display = "block";
  document.getElementById("show_prev_projects").style.display = "none";
}

function hide_prev_projects() {
  document.getElementById("prev_projects").style.display = "none";
  document.getElementById("show_prev_projects").style.display = "block";
}

function author_name() {
  document.write(document.head.querySelector("[name=author]").content);
}
