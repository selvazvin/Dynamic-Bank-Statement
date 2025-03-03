document.addEventListener("DOMContentLoaded", function () {
    let sidenav = document.querySelector(".side-navbar");

    function showNavbar() {
        sidenav.style.left = "0%";
    }

    function closeNavbar() {
        sidenav.style.left = "-50%";
    }

    document.querySelector(".navbar-menu-toggle").addEventListener("click", showNavbar);
    document.querySelector(".side-navbar p").addEventListener("click", closeNavbar);
});


var signupoff=document.querySelector(".signupoff")
var close=document.getElementById("offer-close")

close.addEventListener("click",function()
{
    signupoff.style.display="none"
});




    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("statementTable");
        switching = true;
        dir = "asc";
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < rows.length - 1; i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir === "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() || 
                    dir === "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }
    function filterTable() {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById("search");
        filter = input.value.toLowerCase();
        table = document.getElementById("statementTable");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toLowerCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    }
                }
            }
        }
    }
