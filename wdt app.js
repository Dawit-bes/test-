document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://randomuser.me/api/?results=5';
   const tableBody = document.querySelector('#staffTable tbody');
   fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
       const employee = data.results;
       tableBody.innerHTML = '';
       employee.forEach(employee => {
         const row = document.createElement('tr');
         row.innerHTML = `
           <td class="clickable" onclick="cellClicked"><img src="${employee.picture.thumbnail}" alt="Employee"></td>
           <td class="clickable" onclick="cellClicked">${employee.name.first}</td> <td class="clickable">${employee.name.last}</td>
           <td class="clickable" onclick="cellClicked">${employee.email}</td>
           <td class="clickable"></td>
           <td class="clickable"></td>
           <td class="clickable"></td>
           <td class="clickable"></td>
         `;
         tableBody.appendChild(row);
       });
     })
     .catch(error => console.error('Error fetching data:', error));
    });
    function updateDateTime(){
      const now = new Date();
      const currentDateTime = now.toLocaleString();
      document.querySelector(`#datetime`).textContent =currentDateTime;
    }
    setInterval(updateDateTime,1000);
