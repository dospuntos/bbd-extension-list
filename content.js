const date = new Date();
const padZero = (num) => num.toString().padStart(2, "0");
const datestring = `${padZero(date.getMonth() + 1)}/${padZero(
  date.getDate()
)}/${date.getFullYear().toString().slice(-2)}`;
let output = `${window.location.hostname}\n===${datestring}===`;

const url = window.location.href;
const outputToClipboard = (output) => {
  navigator.clipboard.writeText(output);
};

if (url.includes("administrator/index.php?option=com_installer&view=update")) {
  // Joomla Update list
  output += getJoomlaUpgradeList();
  outputToClipboard(output);
} else if (url.includes("wp-admin/update-core.php")) {
  // WP Update list
  output += getWpUpgradeList();
  outputToClipboard(output);
}

function getJoomlaUpgradeList() {
  let retval = "";
  $(".table-striped tr").each(function () {
    const title = $(".editlinktip", this).text().trim();
    const version = $(".label-success", this).text().trim();
    if (title) retval += `\n* ${title}`;
    if (version && !hasNumber(title)) retval += ` ${version}`;
  });

  return retval || "\n* No updates";
}

function getWpUpgradeList() {
  let retval = "";
  $("td.plugin-title").each(function () {
    const title = $("strong", this).text().trim();
    let version = $("a", this).text().substring(13).split(" ")[0];
    retval += `\n* ${title} ${version}`;
  });

  return retval || "\n* No updates";
}

function hasNumber(myString) {
  return /\d/.test(myString);
}
