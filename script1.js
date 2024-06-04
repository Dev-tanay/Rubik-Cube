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
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
