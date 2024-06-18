function handleCredentialResponse(response)//is the callback function that handles the ID token received from Google.
{
    const data = jwt_decode(response.credential);
    console.log('User data:', data);

    // Display user data or perform your login logic here
    document.body.innerHTML = `
        <h1>Welcome, ${data.name}</h1>
        <p>Email: ${data.email}</p>
        <img src="${data.picture}" alt="Profile Picture">
    `;
}

function jwt_decode(token) //jwt_decode is a helper function to decode the JWT token received from Google to extract user information.
{
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    // Initialize Three.js
    console.log('Initializing Three.js');
    // Your Three.js initialization code here

    // Check for and handle third-party cookie blocking issues
    console.log('Checking for third-party cookie blocking');
    // Your code to handle third-party cookie blocking

    // Check for and handle any failed resource loading issues
    console.log('Checking for failed resource loading');
    // Your code to handle failed resource loading
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Check for third-party cookie blocking
    checkThirdPartyCookies();

    // Initialize Three.js
    initThreeJS();

    // Append custom style
    appendCustomStyle();
});

function checkThirdPartyCookies() {
    console.log('Checking for third-party cookie blocking');
    // Implement the check for third-party cookies here
}

function appendCustomStyle() {
    console.log('Appending custom style');
    var head = document.head || document.getElementsByTagName('head')[0];
    if (head) {
        var style = document.createElement('style');
        style.textContent = `
      /* Your CSS rules here */
    `;
        head.appendChild(style);
    } else {
        console.error('Head element not found');
    }
}

function initThreeJS() {
    console.log('Initializing Three.js');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
}

