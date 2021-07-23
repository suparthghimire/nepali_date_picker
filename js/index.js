const YEARS_NEPALI = [
  "२०००",
  "२००१",
  "२००२",
  "२००३",
  "२००४",
  "२००५",
  "२००६",
  "२००७",
  "२००८",
  "२००९",
  "२०१०",
  "२०११",
  "२०१२",
  "२०१३",
  "२०१४",
  "२०१५",
  "२०१६",
  "२०१७",
  "२०१८",
  "२०१९",
  "२०२०",
  "२०२१",
  "२०२२",
  "२०२३",
  "२०२४",
  "२०२५",
  "२०२६",
  "२०२७",
  "२०२८",
  "२०२९",
  "२०३०",
  "२०३१",
  "२०३२",
  "२०३३",
  "२०३४",
  "२०३५",
  "२०३६",
  "२०३७",
  "२०३८",
  "२०३९",
  "२०४०",
  "२०४१",
  "२०४२",
  "२०४३",
  "२०४४",
  "२०४५",
  "२०४६",
  "२०४७",
  "२०४८",
  "२०४९",
  "२०५०",
  "२०५१",
  "२०५२",
  "२०५३",
  "२०५४",
  "२०५५",
  "२०५६",
  "२०५७",
  "२०५८",
  "२०५९",
  "२०६०",
  "२०६१",
  "२०६२",
  "२०६३",
  "२०६४",
  "२०६५",
  "२०६६",
  "२०६७",
  "२०६८",
  "२०६९",
  "२०७०",
  "२०७१",
  "२०७२",
  "२०७३",
  "२०७४",
  "२०७५",
  "२०७६",
  "२०७७",
  "२०७८",
  "२०७९",
  "२०८०",
  "२०८१",
  "२०८२",
  "२०८३",
  "२०८४",
  "२०८५",
  "२०८६",
  "२०८७",
  "२०८८",
  "२०८९",
  "२०९०",
];

const NO_OF_DAYS = [
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
];

const MONTHS = [
  "बैशाख",
  "जेठ",
  "असार",
  "साउन",
  "भदौ",
  "असोज",
  "कार्तिक",
  "मंसिर",
  "पौष",
  "माघ",
  "फाल्गुन",
  "चैत",
];
const DAYS = ["आ", "सो", "म", "बु", "बि", "शु", "श"];
const DATES = [
  "१",
  "२",
  "३",
  "४",
  "५",
  "६",
  "७",
  "८",
  "९",
  "१०",
  "११",
  "१२",
  "१३",
  "१४",
  "१५",
  "१६",
  "१७",
  "१८",
  "१९",
  "२०",
  "२१",
  "२२",
  "२३",
  "२४",
  "२५",
  "२६",
  "२७",
  "२८",
  "२९",
  "३०",
  "३१",
  "३२",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const INITIAL_DAY = 1;

const create_year_option = () => {
  return YEARS_NEPALI.map((year, index) => {
    return `<option value="${index}">${year}</option>`;
  });
};
const create_month_option = () => {
  return MONTHS.map((month, index) => {
    return `<option value="${index}">${month}</option>`;
  });
};

const create_date_list = ({ start_day, no_of_days }) => {
  current_value = "";
  const date_container = document.querySelector(
    ".nepali__date-picker-date-list"
  );
  date_container.innerHTML = "";
  current_value = "";
  count = 0;
  for (let i = 0; i < DATES.length; i++) {
    if (i < start_day || count >= no_of_days) current_value = "";
    else {
      current_value = DATES[count++];
    }
    const li = document.createElement("li");
    li.classList.add("nepali__date-picker-date-item");
    li.id = count;
    li.textContent = current_value;
    date_container.appendChild(li);

    li.addEventListener("click", () => {
      document
        .querySelectorAll(".nepali__date-picker-date-item")
        .forEach((li) =>
          li.classList.remove("nepali__date-picker-selected-date")
        );

      li.classList.add("nepali__date-picker-selected-date");
      const month_element = document.querySelector(
        "#nepali__date-picker-month"
      );
      const year_element = document.querySelector("#nepali__date-picker-year");
      let day = parseInt(li.id);
      let month = parseInt(month_element.value) + 1;
      let year = 2000 + parseInt(year_element.value);

      if (String(day).length == 1) day = "0" + day;
      if (String(month).length == 1) month = "0" + month;

      const date = year + "-" + month + "-" + day;
      document.querySelector("#nepali__date-picker").value = date;
    });
  }
};

const create_date_viewer = () => {
  const div = document.createElement("div");
  div.classList.add("nepali__date-picker");
  div.id = "nepali__date-picker_box";
  div.innerHTML = `
    <div class="nepali__date-picker-options">
        <select class="nepali__date-select-input" name="nepali__date-picker-year" id="nepali__date-picker-year">
            ${create_year_option()}
        </select>
        <select class="nepali__date-select-input" name="nepali__date-picker-month" id="nepali__date-picker-month">
          ${create_month_option()}
        </select>
        </div>
        <div class="nepali__date-picker-current-date">
            <div class="nepali__date-picker-nepali-date">
                <span class="nepali__date-picker-year-text" id="nepali__date-picker-year-text">२०७८</span
          >
          &nbsp;
          <span class="nepali__date-picker-month-text" id="nepali__date-picker-month-text"
            >साउन</span
          >
        </div>
        
        </div>
        <ul class="nepali__date-picker-day-list">
            <li class="nepali__date-picker-day-item">आ</li>
            <li class="nepali__date-picker-day-item">सो</li>
            <li class="nepali__date-picker-day-item">म</li>
            <li class="nepali__date-picker-day-item">बु</li>
            <li class="nepali__date-picker-day-item">बि</li>
            <li class="nepali__date-picker-day-item">शु</li>
            <li class="nepali__date-picker-day-item">श</li>
        </ul>
        <ul class="nepali__date-picker-date-list">
        </ul>
  `;
  document.querySelector(".nepali-date-picker-container").appendChild(div);
};

document
  .querySelector("#nepali__date-picker")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const date_picker = document.querySelector("#nepali__date-picker_box");
    if (date_picker == null) {
      create_date_viewer();
      set_calander(parseInt(78), parseInt(1));
      const month_element = document.querySelector(
        "#nepali__date-picker-month"
      );
      const year_element = document.querySelector("#nepali__date-picker-year");
      year_element.value = "78";
      month_element.value = "1";

      selected_year = 78;
      selected_month = 1;

      const year_select = document.querySelector("#nepali__date-picker-year");
      const month_select = document.querySelector("#nepali__date-picker-month");
      year_select.addEventListener("input", () => {
        selected_year = year_select.value;
        set_calander(parseInt(selected_year), parseInt(selected_month));
      });
      month_select.addEventListener("input", () => {
        selected_month = month_select.value;
        set_calander(parseInt(selected_year), parseInt(selected_month));
      });
    } else {
      const parent = document.querySelector(".nepali-date-picker-container");
      parent.removeChild(parent.lastChild);
    }
  });

const calculate_starting_day = (year, month) => {
  sum = 0;
  break_status = false;
  for (let i = 0; i < YEARS_NEPALI.length; i++) {
    for (let j = 0; j < MONTHS.length; j++) {
      if (i == year && j == month) {
        break_status = true;
        break;
      }

      sum += NO_OF_DAYS[i][j];
    }
    if (break_status) break;
  }
  const mod = sum % 7;
  return (year, month, INITIAL_DAY + 2 + mod) % 7;
};

const set_calander = (year, month) => {
  const start_day = calculate_starting_day(year, month);
  create_date_list({ start_day, no_of_days: NO_OF_DAYS[year][month] });

  document.querySelector("#nepali__date-picker-year-text").textContent =
    YEARS_NEPALI[year];
  document.querySelector("#nepali__date-picker-month-text").textContent =
    MONTHS[month];
};
