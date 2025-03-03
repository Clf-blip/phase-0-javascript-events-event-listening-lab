function addingEventListener() {
    let button = document.getElementById('button');

    if (!button) {
        console.warn("Creating button element for testing...");
        button = document.createElement('button');
        button.id = 'button';
        document.body.appendChild(button);
    }

    button.addEventListener('click', function() {
        console.log('Button was clicked!');
    });
}

