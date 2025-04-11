// Toggle sidebar visibility and adjust content width
document.getElementById("hamburger").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  sidebar.classList.toggle("show-sidebar");

  // Shift content to the right when the sidebar is visible
  if (sidebar.classList.contains("show-sidebar")) {
    content.classList.add("shifted");
    this.setAttribute("aria-expanded", "true");
  } else {
    content.classList.remove("shifted");
    this.setAttribute("aria-expanded", "false");
  }
});

// Dynamically load page content based on sidebar buttons and search input
const pages = {
  home: `
      <div id="home-page" class="home-background">
          <h2 style="text-align: center;">Welcome to MyTube - Home</h2>
          <div class="widget-container" >
              <div class="widget1"style="background-image: url('livingroom.jpg');">
                  <h3>Livingroom</h3>               
              </div>
              <div class="widget1" style="background-image: url('bedroom.jpg');">
                  <h3>Bedroom</h3>                 
              </div>
           </div>
           <div class="widget-container">
              <div class="widget1" style="background-image: url('kitchen.jpg');">
                  <h3>Kitchen</h3> 
              </div>
              <div class="widget1" style="background-image: url('garden.jpg');">
                  <h3>Garden</h3>
              </div>
            </div>
      </div>`,
  livingroom: `
      <div id="livingroom-page" class="livingroom-background">
          <h2 style="text-align: center;">Welcome to MyTube - Livingroom</h2>
          <div class="widget-container">
              <div class="widget" >
                  <h3>Nhiệt độ: <span id="nhietdo-livingroom"></span></h3>
                  <img src="nhietdo.png" class="widget-icon" alt="Temperature Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ ẩm: <span id="doam-livingroom"></span></h3>
                  <img src="den_on.png" class="widget-icon" alt="Light Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ bụi: <span id="dobui-livingroom"></span></h3>
                  <img src="bụi.png" class="widget-icon" alt="Humidity Icon" />
              </div>
          </div>
          <div class="widget-container">
              <div class="widget-tb" >
                  <h3>Biểu đồ</h3>
                  <!-- Tabs cho các biểu đồ -->
                <div class="chart-tabs">
                  <button class="tab-button" onclick="showChart('temperature-chart')">Nhiệt độ</button>
                  <button class="tab-button" onclick="showChart('light-chart')">Ánh sáng</button>
                  <button class="tab-button" onclick="showChart('dust-chart')">Độ bụi</button>
                </div>

                <!-- Container chứa các biểu đồ, chỉ hiển thị biểu đồ được chọn -->
                <div class="chart-container">
                  <iframe id="temperature-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2692555/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                  <iframe id="light-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2692555/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                  <iframe id="dust-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2692555/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                </div>
              </div>
              <div class="widget-tb" >
                  <h3>Thiết bị</h3>
                  <div class="device-container">
                        <img id="ac-icon-livingroom" src="maylanh_off.png" class="widget-icon-tb1" alt="AC Icon" />
                        <button class="btn-on" onclick="turnOn('ac-icon-livingroom','maylanh_on.png','livingroom')">On</button>
                        <button class="btn-off" onclick="turnOff('ac-icon-livingroom','maylanh_off.png','livingroom')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="light-icon-livingroom" src="den_off.png" class="widget-icon-tb2" alt="Light Icon" />
                        <button class="btn-on" onclick="turnOn('light-icon-livingroom','den_on.png','livingroom')">On</button>
                        <button class="btn-off" onclick="turnOff('light-icon-livingroom','den_off.png','livingroom')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="purifier-icon-livingroom" src="maylockk_off.png" class="widget-icon-tb3" alt="Air Purifier Icon" />
                        <button class="btn-on" onclick="turnOn('purifier-icon-livingroom','maylockk_on.png','livingroom')">On</button>
                        <button class="btn-off" onclick="turnOff('purifier-icon-livingroom','maylockk_off.png','livingroom')">Off</button>
                  </div>
              </div>
          </div>
      </div>`,

  bedroom: `
      <div id="bedroom-page" class="bedroom-background">
          <h2 style="text-align: center;">Welcome to MyTube - Bedroom</h2>
          <div class="widget-container">
              <div class="widget" >
                  <h3>Nhiệt độ: <span id="nhietdo-bedroom"></span></h3>
                  <img src="nhietdo.png" class="widget-icon" alt="Temperature Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ ẩm: <span id="doam-bedroom"></span></h3>
                  <img src="den_on.png" class="widget-icon" alt="Light Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ bụi: <span id="dobui-bedroom"></span></h3>
                  <img src="bụi.png" class="widget-icon" alt="Humidity Icon" />
              </div>
          </div>
          <div class="widget-container">
              <div class="widget-tb" >
                  <h3>Biểu đồ</h3> 
                <!-- Tabs cho các biểu đồ -->
                <div class="chart-tabs">
                  <button class="tab-button" onclick="showChart('temperature-chart')">Nhiệt độ</button>
                  <button class="tab-button" onclick="showChart('light-chart')">Ánh sáng</button>
                  <button class="tab-button" onclick="showChart('dust-chart')">Độ bụi</button>
                </div>

                <!-- Container chứa các biểu đồ, chỉ hiển thị biểu đồ được chọn -->
                <div class="chart-container">
                  <iframe id="temperature-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2694105/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                  <iframe id="light-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2694105/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                  <iframe id="dust-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2694105/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                </div>
              </div>
              <div class="widget-tb" >
                  <h3>Thiết bị</h3>
                  <div class="device-container">
                        <img id="ac-icon-bedroom" src="maylanh_off.png" class="widget-icon-tb1" alt="AC Icon" />
                        <button class="btn-on" onclick="turnOn('ac-icon-bedroom','maylanh_on.png','bedroom')">On</button>
                        <button class="btn-off" onclick="turnOff('ac-icon-bedroom','maylanh_off.png','bedroom')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="light-icon-bedroom" src="den_off.png" class="widget-icon-tb2" alt="Light Icon" />
                        <button class="btn-on" onclick="turnOn('light-icon-bedroom','den_on.png','bedroom')">On</button>
                        <button class="btn-off" onclick="turnOff('light-icon-bedroom','den_off.png','bedroom')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="purifier-icon-bedroom" src="maylockk_off.png" class="widget-icon-tb3" alt="Air Purifier Icon" />
                        <button class="btn-on" onclick="turnOn('purifier-icon-bedroom','maylockk_on.png','bedroom')">On</button>
                        <button class="btn-off" onclick="turnOff('purifier-icon-bedroom','maylockk_off.png','bedroom')">Off</button>
                  </div>
              </div>
          </div>
      </div>`,

  kitchen: `
      <div id="kitchen-page" class="kitchen-background">
          <h2 style="text-align: center;">Welcome to MyTube - Kitchen</h2>
          <div class="widget-container">
              <div class="widget" >
                  <h3>Nhiệt độ: <span id="nhietdo-kitchen"></span></h3>
                  <img src="nhietdo.png" class="widget-icon" alt="Temperature Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ ẩm: <span id="doam-kitchen"></span></h3>
                  <img src="den_on.png" class="widget-icon" alt="Light Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ bụi: <span id="dobui-kitchen"></span></h3>
                  <img src="bụi.png" class="widget-icon" alt="Humidity Icon" />
              </div>
          </div>
          <div class="widget-container">
              <div class="widget-tb" >
                <h3>Biểu đồ</h3>
                <div class="chart-tabs">
                  <button class="tab-button" onclick="showChart('temperature-chart')">Nhiệt độ</button>
                  <button class="tab-button" onclick="showChart('light-chart')">Ánh sáng</button>
                  <button class="tab-button" onclick="showChart('dust-chart')">Độ bụi</button>
                </div>

                <!-- Container chứa các biểu đồ, chỉ hiển thị biểu đồ được chọn -->
                <div class="chart-container">
                  <iframe id="temperature-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2694106/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=15&type=line"></iframe>
                  <iframe id="light-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2694106/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=15&type=line"></iframe>
                  <iframe id="dust-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2694106/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=15&type=line"></iframe>
                </div>              
 
              </div>
              <div class="widget-tb" >
                  <h3>Thiết bị</h3>
                  <div class="device-container">
                        <img id="ac-icon-kitchen" src="maylanh_off.png" class="widget-icon-tb1" alt="AC Icon" />
                        <button class="btn-on" onclick="turnOn('ac-icon-kitchen','maylanh_on.png','kitchen')">On</button>
                        <button class="btn-off" onclick="turnOff('ac-icon-kitchen','maylanh_off.png,'kitchen')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="light-icon-kitchen" src="den_off.png" class="widget-icon-tb2" alt="Light Icon" />
                        <button class="btn-on" onclick="turnOn('light-icon-kitchen','den_on.png','kitchen')">On</button>
                        <button class="btn-off" onclick="turnOff('light-icon-kitchen','den_off.png','kitchen')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="purifier-icon-kitchen" src="maylockk_off.png" class="widget-icon-tb3" alt="Air Purifier Icon" />
                        <button class="btn-on" onclick="turnOn('purifier-icon-kitchen','maylockk_on.png','kitchen')">On</button>
                        <button class="btn-off" onclick="turnOff('purifier-icon-kitchen','maylockk_off.png','kitchen')">Off</button>
                  </div>
              </div>
          </div>
      </div>`,

  garden: `
      <div id="garden-page" class="garden-background">
          <h2 style="text-align: center;">Welcome to MyTube - Garden</h2>
          <div class="widget-container">
              <div class="widget" >
                  <h3>Nhiệt độ: <span id="nhietdo-garden"></span></h3>
                  <img src="nhietdo.png" class="widget-icon" alt="Temperature Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ ẩm: <span id="doam-garden"></span></h3>
                  <img src="den_on.png" class="widget-icon" alt="Light Icon" />
              </div>
              <div class="widget" >
                  <h3>Độ bụi: <span id="dobui-garden"></span></h3>
                  <img src="bụi.png" class="widget-icon" alt="Humidity Icon" />
              </div>
          </div>
          <div class="widget-container">
              <div class="widget-tb" >
                  <h3>Biểu đồ</h3>
                <div class="chart-tabs">
                  <button class="tab-button" onclick="showChart('temperature-chart')">Nhiệt độ</button>
                  <button class="tab-button" onclick="showChart('light-chart')">Ánh sáng</button>
                  <button class="tab-button" onclick="showChart('dust-chart')">Độ bụi</button>
                </div>

                <!-- Container chứa các biểu đồ, chỉ hiển thị biểu đồ được chọn -->
                <div class="chart-container">
                  <iframe id="temperature-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2691462/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                  <iframe id="light-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2691462/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                  <iframe id="dust-chart" class="hidden" style="border: 1px solid #cccccc;display: none; " src="https://thingspeak.com/channels/2691462/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=80&type=line"></iframe>
                </div>                             
              </div>
              <div class="widget-tb" >
                  <h3>Thiết bị</h3>
                  <div class="device-container">
                        <img id="ac-icon-garden" src="maylanh_off.png" class="widget-icon-tb1" alt="AC Icon" />
                        <button class="btn-on" onclick="turnOn('ac-icon-garden','maylanh_on.png','garden')">On</button>
                        <button class="btn-off" onclick="turnOff('ac-icon-garden','maylanh_off.png','garden')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="light-icon-garden" src="den_off.png" class="widget-icon-tb2" alt="Light Icon" />
                        <button class="btn-on" onclick="turnOn('light-icon-garden','den_on.png','garden')">On</button>
                        <button class="btn-off" onclick="turnOff('light-icon-garden','den_off.png','garden')">Off</button>
                  </div>
                  <div class="device-container">
                        <img id="purifier-icon-garden" src="maylockk_off.png" class="widget-icon-tb3" alt="Air Purifier Icon" />
                        <button class="btn-on" onclick="turnOn('purifier-icon-garden','maylockk_on.png','garden')">On</button>
                        <button class="btn-off" onclick="turnOff('purifier-icon-garden','maylockk_off.png','garden')">Off</button>
                  </div>
              </div>
          </div>
      </div>`,
};

// Event listeners for sidebar buttons
document.getElementById("home-btn").addEventListener("click", function () {
  loadPage("home");
});
document
  .getElementById("livingroom-btn")
  .addEventListener("click", function () {
    loadPage("livingroom");
    fetchDataFromFirebase("livingroom");
  });
document.getElementById("bedroom-btn").addEventListener("click", function () {
  loadPage("bedroom");
  fetchDataFromFirebase("bedroom");
});
document.getElementById("kitchen-btn").addEventListener("click", function () {
  loadPage("kitchen");
  fetchDataFromFirebase("kitchen");
});
document.getElementById("garden-btn").addEventListener("click", function () {
  loadPage("garden");
  fetchDataFromFirebase("garden");
});

// Load the specified page content into the main area
function loadPage(page) {
  document.getElementById("content").innerHTML = pages[page];
}

setInterval(() => {
  const now = new Date();
  const date = now.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("current-date").innerText = date;
  document.getElementById("current-time").innerText = time;
}, 1000);

let deviceStatus = {
  garden: {
    maylanh: 0,
    den: 0,
    maylockk: 0,
  },
  livingroom: {
    maylanh: 0,
    den: 0,
    maylockk: 0,
  },

  kitchen: {
    maylanh: 0,
    den: 0,
    maylockk: 0,
  },

  bedroom: {
    maylanh: 0,
    den: 0,
    maylockk: 0,
  },
};
// Chức năng lấy dữ liệu từ Firebase cho từng phòng
function fetchDataFromFirebase(room) {
  const dbRef = firebase.database().ref(room);

  dbRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
      updateTemperature(data.Nhiet_do, room);
      updateLight(data.Do_am, room);
      updateDust(data.Do_bui, room);
    }
  });
}
function updateTemperature(nhietDo, room) {
  document.getElementById("nhietdo-" + room).innerText =
    (nhietDo || "0") + " °C";
  const acIcon = document.getElementById("ac-icon-" + room);

  if (deviceStatus[room].maylanh === 1) {
    acIcon.src = "maylanh_on.png"; // Nếu nút nhấn bật
  } else if (nhietDo > 40) {
    acIcon.src = "maylanh_on.png"; // Nếu nhiệt độ trên 40°C
    deviceStatus[room].maylanh = 1; // Cập nhật trạng thái
    firebase.database().ref(room).update({ maylanh: 1 });
  } else {
    acIcon.src = "maylanh_off.png"; // Tắt máy lạnh
    deviceStatus[room].maylanh = 0; // Cập nhật trạng thái
    firebase.database().ref(room).update({ maylanh: 0 });
  }
}

function updateLight(doam, room) {
  document.getElementById("doam-" + room).innerText = (doam || "0") + " %";
  const lightIcon = document.getElementById("light-icon-" + room);

  if (deviceStatus[room].den === 1) {
    lightIcon.src = "den_on.png"; // Nếu nút nhấn bật
  } else if (doam < 50) {
    lightIcon.src = "den_on.png"; // Nếu ánh sáng dưới 50 Lux
    deviceStatus[room].den = 1; // Cập nhật trạng thái
    firebase.database().ref(room).update({ den: 1 });
  } else {
    lightIcon.src = "den_off.png"; // Tắt đèn
    deviceStatus[room].den = 0; // Cập nhật trạng thái
    firebase.database().ref(room).update({ den: 0 });
  }
}

function updateDust(doBui, room) {
  document.getElementById("dobui-" + room).innerText = (doBui || "0") + " %";
  const purifierIcon = document.getElementById("purifier-icon-" + room);

  if (deviceStatus[room].maylockk === 1) {
    purifierIcon.src = "maylockk_on.png"; // Nếu nút nhấn bật
  } else if (doBui > 50) {
    purifierIcon.src = "maylockk_on.png"; // Nếu bụi trên 50%
    deviceStatus[room].maylockk = 1; // Cập nhật trạng thái
    firebase.database().ref(room).update({ maylockk: 1 });
  } else {
    purifierIcon.src = "maylockk_off.png"; // Tắt máy lọc không khí
    deviceStatus[room].maylockk = 0; // Cập nhật trạng thái
    firebase.database().ref(room).update({ maylockk: 0 });
  }
}

// Bật thiết bị cho đúng phòng
function turnOn(id, imageSrc, room) {
  const icon = document.getElementById(id);
  if (icon) {
    icon.src = imageSrc; // Thay đổi hình ảnh khi bật

    // Cập nhật trạng thái đúng cho từng thiết bị của từng phòng
    if (id === "ac-icon-" + room) {
      deviceStatus[room].maylanh = 1; // Cập nhật trạng thái máy lạnh
      firebase.database().ref(room).update({ maylanh: 1 });
    } else if (id === "light-icon-" + room) {
      deviceStatus[room].den = 1; // Cập nhật trạng thái đèn
      firebase.database().ref(room).update({ den: 1 });
    } else if (id === "purifier-icon-" + room) {
      deviceStatus[room].maylockk = 1; // Cập nhật trạng thái máy lọc không khí
      firebase.database().ref(room).update({ maylockk: 1 });
    }
  }
}

// Tắt thiết bị cho đúng phòng
function turnOff(id, imageSrc, room) {
  const icon = document.getElementById(id);
  if (icon) {
    icon.src = imageSrc; // Thay đổi hình ảnh khi tắt

    // Cập nhật trạng thái đúng cho từng thiết bị của từng phòng
    if (id === "ac-icon-" + room) {
      deviceStatus[room].maylanh = 0; // Cập nhật trạng thái máy lạnh
      firebase.database().ref(room).update({ maylanh: 0 });
    } else if (id === "light-icon-" + room) {
      deviceStatus[room].den = 0; // Cập nhật trạng thái đèn
      firebase.database().ref(room).update({ den: 0 });
    } else if (id === "purifier-icon-" + room) {
      deviceStatus[room].maylockk = 0; // Cập nhật trạng thái máy lọc không khí
      firebase.database().ref(room).update({ maylockk: 0 });
    }
  }
}

// API Write Key cho các phòng
const apiKeys = {
  livingroom: "KR8868W0YP5W8F9V", // Thay bằng API Write Key của phòng Livingroom
  bedroom: "4QAHMAN3AKOENQUL", // Thay bằng API Write Key của phòng Bedroom
  kitchen: "YQGHEWXHON6SO7D6", // Thay bằng API Write Key của phòng Kitchen
  garden: "2FHSC4MYGNWGX30C", // Thay bằng API Write Key của phòng Garden
};

// Hàm gửi dữ liệu lên ThingSpeak cho từng phòng
function pushToThingSpeak(room, nhietDo, doam, doBui) {
  const apiKey = apiKeys[room]; // Lấy API Key theo từng phòng
  const url = `https://api.thingspeak.com/update?api_key=${apiKey}&field1=${nhietDo}&field2=${doam}&field3=${doBui}`;

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      console.log(`Dữ liệu đã được gửi lên ThingSpeak cho ${room}:`, data);
    })
    .catch((error) => {
      console.error(`Lỗi khi gửi dữ liệu lên ThingSpeak cho ${room}:`, error);
    });
}

// Hàm lấy dữ liệu từ các phần tử và gửi lên ThingSpeak cho từng phòng
function sendRoomDataToThingSpeak(room) {
  const nhietDo = document
    .getElementById(`nhietdo-${room}`)
    .innerText.replace(" °C", ""); // Lấy nhiệt độ
  const doam = document
    .getElementById(`doam-${room}`)
    .innerText.replace(" %", ""); // Lấy ánh sáng
  const doBui = document
    .getElementById(`dobui-${room}`)
    .innerText.replace(" %", ""); // Lấy độ bụi

  // Gọi hàm gửi dữ liệu lên ThingSpeak cho phòng tương ứng
  pushToThingSpeak(room, nhietDo, doam, doBui);
}

// Hàm lấy dữ liệu từ Firebase và gửi lên ThingSpeak cho các phòng
function fetchDataFromFirebase(room) {
  const dbRef = firebase.database().ref(room);

  dbRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
      updateTemperature(data.Nhiet_do, room);
      updateLight(data.Do_am, room);
      updateDust(data.Do_bui, room);

      // Gửi dữ liệu lên ThingSpeak cho phòng tương ứng
      sendRoomDataToThingSpeak(room);
    }
  });
}

// Cập nhật biểu đồ cho từng phòng
function updateChart(room) {
  const chartImg = document.getElementById(`temperature-chart-${room}`);
  const apiKey = apiKeys[room]; // Lấy API Key tương ứng
  const url = `https://api.thingspeak.com/channels/YOUR_CHANNEL_ID/charts/1?api_key=${apiKey}&width=600&height=400&${new Date().getTime()}`;

  chartImg.src = url;
}

// Gọi hàm cập nhật biểu đồ sau mỗi 10 giây cho từng phòng
setInterval(() => {
  updateChart("livingroom");
  updateChart("bedroom");
  updateChart("kitchen");
  updateChart("garden");
}, 10000);

// Hàm để hiển thị biểu đồ tương ứng với tab được nhấn
function showChart(chartId) {
  // Ẩn tất cả các biểu đồ
  document.getElementById("temperature-chart").style.display = "none";
  document.getElementById("light-chart").style.display = "none";
  document.getElementById("dust-chart").style.display = "none";

  // Hiển thị biểu đồ được chọn
  document.getElementById(chartId).style.display = "block";
}
