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
  // Simple check if Joomla version is 3 or 4 and use the appropriate selector
  const isJoomla3 = document.querySelector("#j-main-container .table-striped")
    ? true
    : false;
  console.log("Joomla 3? ", isJoomla3);
  output += isJoomla3 ? getJoomla3UpgradeList() : getJoomla4UpgradeList();
  outputToClipboard(output);
} else if (url.includes("wp-admin/update-core.php")) {
  // WP Update list
  output += getWpUpgradeList();
  outputToClipboard(output);
}

function getJoomla3UpgradeList() {
  let retval = "";
  $("#j-main-container .table-striped tr").each(function () {
    const title = $(".editlinktip", this).text().trim();
    const version = $(".label-success", this).text().trim();
    if (title) retval += `\n* ${title}`;
    if (version && !hasNumber(title)) retval += ` ${version}`;
  });

  return retval || "\n* No updates";
}

function getJoomla4UpgradeList() {
  let retval = "";
  $("#j-main-container .table tr").each(function () {
    const title = $(this).find("th span[tabindex='0']").text().trim();
    const version = $(this).find("td span.badge.bg-success").text().trim();
    if (title) retval += `\n* ${title} ${hasNumber(title) ? "" : version}`;
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
