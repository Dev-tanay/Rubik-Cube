async function fetchContributors() {
    const repoOwner = 'Dev-tanay';
    const repoName = 'Rubik-Cube';
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`);
    const contributors = await response.json();
  
    const contributorsList = document.getElementById('contributors');
    contributorsList.innerHTML = '';
  
    contributors.forEach(contributor => {
        const listItem = document.createElement('li');
        listItem.classList.add('contributor-item');
        const profilePic = document.createElement('img');
        profilePic.src = contributor.avatar_url;
        profilePic.alt = contributor.login;
        profilePic.onclick = () => window.open(contributor.html_url, '_blank');
        listItem.appendChild(profilePic);
        contributorsList.appendChild(listItem);
    });
  }
  
  fetchContributors();