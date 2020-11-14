const container = document.getElementById("root");
const filter = document.querySelector("#filter");
import datas from "./data.js"
let data = datas;

filter.addEventListener("keyup", filterJobs);
document.addEventListener("DOMContentLoaded", getData(data))

function filterJobs(e) {
    let filterValue = e.target.value.toLowerCase();
    console.log(filterValue)
    let languages = document.querySelectorAll(".languages");
    let tools = document.querySelectorAll(".tools");


    data = datas.filter((x, index) => {
        return x.languages.join(" ").toLowerCase().includes(filterValue) === true || x.tools.join(" ").toLowerCase().includes(filterValue) === true || x.company.toLowerCase().includes(filterValue) === true || x.position.toLowerCase().includes(filterValue) === true || x.role.toLowerCase().includes(filterValue) === true || x.level.toLowerCase().includes(filterValue) === true
    })
    container.innerHTML = "";
    getData(data)
}

function getData(data) {
    data.map(x => {
        let styleBorder;
        console.log(x)
        x.featured ? styleBorder = `"border-left: 5px solid hsl(180, 29%, 50%)"` : "";
        container.innerHTML += `
        <div id=${x.id} class="row">
        <div class="col">
        <div class="job-card" style=${styleBorder}>
          <div class="row inner-row">
            <div class="col-md-1 col-12 image-container">
              <img src="${x.logo}" alt="">
            </div>
            <div class="col-md-5 col-12 info-container">
              <div class="info-top">
                <p class="company">${x.company}</p>
                ${x.new ? `<p class="new">New!</p>` : '<p></p>'}
                ${x.featured === true ? '<p class="featured">Featured</p>' : ''}
              </div>
              <p class="position">${x.position}</p>
              <div class="info-bottom">
                <p class="posted-at">${x.postedAt}</p>
                <div class="circle"></div>
                <p class="contract">${x.contract}</p>
                <div class="circle"></div>
                <p class="location">${x.location}</p>
              </div>
            </div >
            <div class="col-md-6 col-12 tag-container">
                <p class="role">${x.role}</p>
                <p class="level">${x.level}</p>
                <div class="lang-tools">
                    ${x.languages ? x.languages.map(y => {

            return `<p class="languages">${y}</p>`
        }).join(" ") : ""}
        ${x.tools ? x.tools.map(z => {

            return `<p class="tools">${z}</p>`
        }).join(" ") : ""}
                </div>
            </div>
            </div>
          </div >
        </div >
      </div >
            `
    })
}

