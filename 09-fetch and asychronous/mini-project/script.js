function fetchUser(){
    // let spinner =  showSpinner();
    // document.querySelector('button').innerText =  spinner;
    showSpinner();
    
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        hideSpinner();
        displayUser(data.results[0]);
        // console.log(data.results[0]);
    });
}

function displayUser(user){
    const userdisplay = document.getElementById('user');

    if(user.gender === 'male'){
        document.body.style.backgroundColor = 'darkblue';
    }else{
        document.body.style.backgroundColor = 'purple';
    }

    userdisplay.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>
    `;
}

function showSpinner(){
    // document.querySelector('button').innerText = '';
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner(){
    document.querySelector('.spinner').style.display = 'none';
}

document.getElementById('generate').addEventListener('click', fetchUser);

fetchUser();