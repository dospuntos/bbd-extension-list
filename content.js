var date = new Date();
var datestring =
  ("0" + (date.getMonth() + 1).toString()).substr(-2) +
  "/" +
  ("0" + date.getDate().toString()).substr(-2) +
  "/" +
  date.getFullYear().toString().substr(2);
var output = window.location.hostname + "\n===" + datestring + "===";

if (
  window.location.href.indexOf(
    "administrator/index.php?option=com_installer&view=update"
  ) > 0
) {
  // Joomla Update list
  output += getJoomlaUpgradeList();
  navigator.clipboard.writeText(output);
  //copyText();
} else if (window.location.href.indexOf("wp-admin/update-core.php") > 0) {
  // WP Update list
  output += getWpUpgradeList();
  navigator.clipboard.writeText(output);
  //copyText();
}

function getJoomlaUpgradeList() {
  var retval = "";
  $(".table-striped tr").each(function (index) {
    var title = $(".editlinktip", this).text().trim();
    var version = $(".label-success", this).text();
    if (title) retval += "\n* " + title;
    if (version && !hasNumber(title)) retval += " " + version;
  });

  if (retval === "") return "\n* No updates";

  return retval;
}

function getWpUpgradeList() {
  var retval = "";
  $("td.plugin-title").each(function (index) {
    var title = $("strong", this).text();
    var version = $("a", this).text().substring(13);
    version = version.substring(0, version.indexOf(" "));
    retval += "\n* " + title + " " + version;
  });

  if (retval === "") return "\n* No updates";

  return retval;
}

// Copy text to clipboard
function copyText() {
  console.log(output);
  var el = document.createElement("textarea");
  el.value = output;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function hasNumber(myString) {
  return /\d/.test(myString);
}
