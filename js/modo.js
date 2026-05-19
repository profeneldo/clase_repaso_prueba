
        // 1. Seleccionamos el botón y el elemento body
        const toggleBtn = document.getElementById('toggle-tema');
        const body = document.body;

        // 2. Comprobamos si el usuario ya tenía guardada una preferencia en su navegador
        const temaGuardado = localStorage.getItem('tema');

        // 3. Si tenía guardado el modo oscuro, lo aplicamos al cargar la página
        if (temaGuardado === 'oscuro') {
            body.classList.add('dark-mode');
            toggleBtn.innerHTML = '☀️ Modo Claro';
        } else {
            toggleBtn.innerHTML = '🌙 Modo Oscuro';
        }

        // 4. Agregamos el evento de "click" al botón
        toggleBtn.addEventListener('click', () => {
            // Alternamos la clase 'dark-mode' en el body
            body.classList.toggle('dark-mode');
            
            // Verificamos si la clase está activa para cambiar el texto y guardar
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('tema', 'oscuro'); // Guardamos la preferencia
                toggleBtn.innerHTML = '☀️ Modo Claro'; // Cambiamos el texto del botón
            } else {
                localStorage.setItem('tema', 'claro'); // Guardamos la preferencia
                toggleBtn.innerHTML = '🌙 Modo Oscuro'; // Cambiamos el texto del botón
            }
        });
