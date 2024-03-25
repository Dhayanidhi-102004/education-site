let hamburgerbtn = document.querySelector(".hamburger");
        let nav_list = document.querySelector(".nav-list");
        hamburgerbtn.addEventListener("click", () => {
            hamburgerbtn.classList.toggle("active");
            nav_list.classList.toggle("active");
        });
        document.getElementById('more-link').addEventListener('click', function() {
            var dropdown = document.getElementById('dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        });
        document.getElementById('food').addEventListener('click', function() {
            var section = document.getElementById('food');
            if (section.style.display === 'block') {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
                