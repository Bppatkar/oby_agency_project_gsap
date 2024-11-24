// console.log(this);

/* function abcd () {
  console.log(this);
}
abcd();
 */

/* 
function checkArmStrong(val) {
  if (val == null || typeof val !== "number" || isNaN(val)) {
    console.log("Enter valid Number");
    return;
  }
  let num_str = val.toString();
  let num_digits = num_str.length;

  let sum = 0;
  for (let i = 0; i < num_digits; i++) {
    let digit = parseInt(num_str[i]);
    sum += digit ** num_digits;
  }

  if (sum === val) {
    console.log(`${val} is an Armstrong Number`);
  } else {
    console.log(`${val} is not an Armstrong Number`);
  }
}
// checkArmStrong(54748);
checkArmStrong(370);
// checkArmStrong(1634); */
/* 
const obj1 = { fName: "bhanu" };

function abcd(a, b, c, d) {
  console.log(this);
  console.log(a, b, c, d);
  return "success";
}

const ans = abcd.bind(obj1, 12, 2, 4, 6);
console.log(ans());
 */

/* let obj2 = {
  fNameIsUse: function (val) {
    console.log(val);
  },
};
obj2.fNameIsUse("bp");
const data = new obj2.fNameIsUse("bp");
data.prototype = "happy";
console.log(data);
 */
/* 
function MakeHuman(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

MakeHuman.prototype.isPvt = function () {
  console.log(
    `my name is ${this.name} and age is ${this.age} , with  is ${this.gender}`
  );
};

const human1 = new MakeHuman("bhanu", 12, "male");
const human2 = new MakeHuman("chandan", 15, "male");

human1.isPvt();
human2.isPvt();
 */

/* //? closure
function check() {
  let fName = "bhanu";
  return function fullName() {
    let lName = "patkar";
    console.log(`my full name ${fName} ${lName}`);
  };
}

let ans = check();
ans();
 */
/* 
function multiPly(x, y) {
  if (y == 0) {
    throw Error("somthing is wrong");
  }
  return x * y;
}
try {
  const ans = multiPly(2, 0);
  console.log(ans);
} catch (err) {
  console.error(err);
}
 */

/* const newEve = new Event("bua");

document.querySelector("button").addEventListener("bua", () => {
  console.log("bar bar click hua");
});

document.querySelector("button").dispatchEvent(newEve);
 */
/* 
const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  h1.textContent =
    h1.textContent === "backend practice"
      ? "frontend practice"
      : "backend practice";
});
 */

/* const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const btn = document.querySelector("button");

const img1Src =
  "https://plus.unsplash.com/premium_photo-1675011288618-10b15fe109b9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2Src =
  "https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

btn.addEventListener("click", (e) => {
  const tempStr = img1.src;
  img1.src = img2.src;
  img2.src = tempStr;
});
 */
/* 
const btn = document.querySelector("button");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const form = document.querySelector("form");
const h6 = document.querySelector("h6");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value.trim() === "" || pass.value.trim() === "") {
    h6.textContent = "Error: Email or password cannot be blank.";
    h6.style.display = "block";
  } else {
    h6.textContent = "";
    h6.style.display = "none";
  }
});
 */
/* 
const add = document.querySelector("#adding");
const remove = document.querySelector("#remove");
const ol = document.querySelector("ol");
const inputText = document.querySelector("#inputText");

let li;
add.addEventListener("click", () => {
  if (inputText.value.trim() === "") return;
  else {
    li = document.createElement("li");
    li.textContent = inputText.value;
    ol.appendChild(li);
    inputText.value = "";
  }
});
remove.addEventListener("click", () => {
  if (ol.lastElementChild) {
    ol.removeChild(ol.lastElementChild);
  }
});
 */

/* const h3 = document.querySelector("h3");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let intervalId;
function startCount() {
  let counter = 0;
  intervalId = setInterval(() => {
    h3.textContent = counter;
    counter++;
  }, 1000);
}

function stopCount() {
  clearInterval(intervalId);
  intervalId = null;
}

start.addEventListener("click", startCount);
stop.addEventListener("click", stopCount);
 */

/* const home = document.querySelector("#home");
const hometext = document.querySelector("#hometext");
const about = document.querySelector("#about");
const abouttext = document.querySelector("#abouttext");
const contact = document.querySelector("#contact");
const contacttext = document.querySelector("#contacttext");

home.addEventListener("click", () => {
  removeAll();
  hometext.style.display = "block";
  hometext.style.backgroundColor = "#f0ac94";
});
about.addEventListener("click", () => {
  removeAll();
  abouttext.style.display = "block";
  abouttext.style.backgroundColor = " #92e6ec";
});
contact.addEventListener("click", () => {
  removeAll();
  contacttext.style.display = "block";
  contacttext.style.backgroundColor = " #edaaf3";
});

function removeAll() {
  const h3 = document.querySelectorAll("h3");
  h3.forEach((e) => {
    e.style.display = "none";
  });
}
 */
/* let prg = document.querySelector(".progressBar");
const h3 = document.querySelector("h3");
const h5 = document.querySelector("h5");

let count = 0;
let intervalId = setInterval(() => {
  if (count === 100) {
    h3.textContent = "Downloading Completed....";
    h5.style.opacity = 1;
    clearInterval(intervalId);
  } else {
    count++;
    prg.style.width = count + "%";
  }
}, 50);
 */

const inputText = document.querySelector("input");
const people = document.querySelector(".people");

const data = [
  {
    name: "Riya",
    avatar: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
  },
  {
    name: "Rohit",
    avatar: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
  },
  {
    name: "Ananya",
    avatar: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
  },
  {
    name: "Rajesh",
    avatar: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
  },
  {
    name: "Pooja",
    avatar: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
  },
  {
    name: "Vikram",
    avatar: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
  },
  {
    name: "Sneha",
    avatar: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
  },
  {
    name: "Amit",
    avatar: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
  },
  {
    name: "Priya",
    avatar: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
  },
  {
    name: "Saurabh",
    avatar: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
  },
  {
    name: "Harsh",
    avatar: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
  },
  {
    name: "Harshita",
    avatar: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
  },
  {
    name: "Harshika",
    avatar: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
  },
  {
    name: "Annu",
    avatar: "https://randomuser.me/api/portraits/thumb/women/77.jpg",
  },
  {
    name: "Rohit",
    avatar: "https://randomuser.me/api/portraits/thumb/men/39.jpg",
  },
  {
    name: "Ananya",
    avatar: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
  },
  {
    name: "Rajesh",
    avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
  },
  {
    name: "Riya",
    avatar: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
  },
  {
    name: "Harsh",
    avatar: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
  },
  {
    name: "Sneha",
    avatar: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
  },
];

// Function to generate the HTML for people
const generatePeopleHTML = (peopleData) => {
  return peopleData
    .map(
      ({ name, avatar }) => `
    <div class="person">
      <div class="img">
        <img src="${avatar}" alt="avatar" />
      </div>
      <h4>${name}</h4>
    </div>
  `
    )
    .join("");
};

// Initial rendering
people.innerHTML = generatePeopleHTML(data);

// Filter and update list based on input
inputText.addEventListener("input", (e) => {
  e.preventDefault();
  const searchTerm = inputText.value.toLowerCase();
  const filteredPeople = data.filter(({ name }) =>
    name.toLowerCase().startsWith(searchTerm)
  );
  people.innerHTML = generatePeopleHTML(filteredPeople);
});
