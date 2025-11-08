const table = document.getElementById("demo");

// 寬度控制
document.getElementById("btn500").addEventListener("click", () => {
    table.style.width = "500px";
});
document.getElementById("btn1000").addEventListener("click", () => {
    table.style.width = "1000px";
});

document.getElementById("btn1").addEventListener("click", () => {
    table.style.border = "1px solid #EFE9E3";
    table.style.borderSpacing = "10px";
});
document.getElementById("btn10").addEventListener("click", () => {
    table.style.border = "10px solid #EFE9E3";
    table.style.borderSpacing = "20px";
});
document.getElementById("btn20").addEventListener("click", () => {
    table.style.border = "20px solid #EFE9E3";
    table.style.borderSpacing = "30px";

    // const cells = table.querySelectorAll("th, td");
    // cells.forEach(cell => {
    // cell.style.border = "20px solid #EFE9E3";
    // });
});
document.getElementById("pink").addEventListener("click", () => {
    table.style.backgroundColor = "#FFEAE3";
    const th = table.querySelectorAll("th");
    th.forEach(th => {
    th.style.backgroundColor = "#FFB1B1";
    });
    const td = table.querySelectorAll("td");
    td.forEach(td => {
    td.style.backgroundColor = "#FFCBCB";
    td.style.color = "#FF8F8F";
    });
});
document.getElementById("blue").addEventListener("click", () => {
    table.style.backgroundColor = "#DFF5FF";
    const th = table.querySelectorAll("th");
    th.forEach(th => {
    th.style.backgroundColor = "#378CE7";
    });
    const td = table.querySelectorAll("td");
    td.forEach(td => {
    td.style.backgroundColor = "#67C6E3";
    td.style.color = "#5356FF";
    });
});
document.getElementById("yellow").addEventListener("click", () => {
    table.style.backgroundColor = "#FFF7D1";
    const th = table.querySelectorAll("th");
    th.forEach(th => {
    th.style.backgroundColor = "#FFD09B";
    });
    const td = table.querySelectorAll("td");
    td.forEach(td => {
    td.style.backgroundColor = "#FFECC8";
    td.style.color = "#F9B487";
    });
});
document.getElementById("green").addEventListener("click", () => {
    table.style.backgroundColor = "#ECF4E8";
    const th = table.querySelectorAll("th");
    th.forEach(th => {
    th.style.backgroundColor = "#ABE7B2";
    });
    const td = table.querySelectorAll("td");
    td.forEach(td => {
    td.style.backgroundColor = "#CBF3BB";
    td.style.color = "#93BFC7";
    });
});
document.getElementById("btnReset").addEventListener("click", () => {
    table.style.border = "1px solid #EFE9E3";
    table.style.borderSpacing = "10px";
    table.style.width = "500px";

    table.style.backgroundColor = "#D9CFC7";
    const th = table.querySelectorAll("th");
    th.forEach(th => {
    th.style.backgroundColor = "#A67B5B";
    });
    const td = table.querySelectorAll("td");
    td.forEach(td => {
    td.style.backgroundColor = "#C9B59C";
    td.style.color = "#F9F8F6";
    });
});