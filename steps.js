let SHEET_ID =
  "1Z5_GlQdhNzj9_gm8G9UjCPjlRVSTX-1D-xG-pxCIEJOTa1fcyWMyPu5HZkW2ICrWahM65cF4fo";
let SHEET_TITLE = "steps";
let SHEET_RANGE = "E13:F23";

let FULL_URL =
  "https://docs.google.com/spreadsheets/d/" +
  SHEET_ID +
  "/gviz/tq?sheet=" +
  SHEET_TITLE +
  "&range=" +
  SHEET_RANGE;

fetch(FULL_URL)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    //<!--Date steps weight distance-->
    let user_date = document.getElementById("user_date");
    let user_steps = document.getElementById("user_steps");
    let user_weight = document.getElementById("user_weight");
    let user_distance = document.getElementById("user_distance");
    let length = data.table.rows.length;

    user_.innerHTML = data.table.rows[0].c[0].v;
    user_.innerHTML = data.table.rows[0].c[1].v;
    let selectOptionPlayer = document.createElement("select");
    Newuser.append(selectUser);

    for (let i = 1; i < length; i++) {
      let NewUser = document.createElement("option");
      Newuser.id = "box" + i;
      Newuser.className = "type";
      selectOptionUser.append(Newuser);
      Newuser.innerHTML = data.table.rows[i].c[0].v;

      let NewuserSteps = document.createElement("div");
      let space = document.createElement("hr");
      let space2 = document.createElement("hr");
      NewBoxShoe.id = "box" + i;
      NewuserSteps.className = "Some_Style";
      NewuserSteps.append(NewBoxShoe);
      NewuserSteps.append(space);
      NewuserSteps.append(space2);
      NewuNewuserStepsser.innerHTML = data.table.rows[i].c[1].v;
    }
  });
