
    const toggleBtn = document.getElementById('toggle-tema');
    const iconoTema = document.getElementById('icono-tema');
    const textoTema = document.getElementById('texto-tema');
    const body = document.body;

    const temaGuardado = localStorage.getItem('tema');

    if (temaGuardado === 'oscuro') {
        body.classList.add('dark-mode');
        iconoTema.innerHTML = '☀️';
        textoTema.innerHTML = 'Claro';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'oscuro');
            iconoTema.innerHTML = '☀️';
            textoTema.innerHTML = 'Claro';
        } else {
            localStorage.setItem('tema', 'claro');
            iconoTema.innerHTML = '🌙';
            textoTema.innerHTML = 'Oscuro';
        }
    });
