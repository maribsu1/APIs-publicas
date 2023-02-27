fetch('https://api.publicapis.org/entries')
    .then(response => response.json())
    .then(data => {
        data.entries.forEach(api => {
            const listItem = document.createElement('li');

            const apiContent = `
                <div class="api">
                    <h3>${api.API}</h3>
                    <p><strong>Categoría:</strong> ${api.Category}</p>
                    <p><strong>Descripción:</strong> ${api.Description}</p>
                    <p><strong>Enlace:</strong> <a href="${api.Link}" class="api-link" target="_blank">${api.Link}</a></p>
                </div>
            `;

            listItem.innerHTML = apiContent;

            document.getElementById('api-list').appendChild(listItem);
        });
    })
    .catch(error => console.error(error));
