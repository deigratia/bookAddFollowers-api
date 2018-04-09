var getData = () => {
  return fetch("https://api.github.com/users/deigratia/followers")
  .then(response => {
    return response.json();
    //console.log(response);
  })
  .then(data_all => {
    const list = document.getElementById('followers')
    var followerlist = "";
    //console.log(list);
    data_all.forEach((data, index) => {
      followerlist += `<img style='width: 100px;' src='${data.avatar_url}'>
      <br> ${data.login}<br> ${data.url}<br><br><hr>`;
     //console.log(data_all);
    })
     list.innerHTML = followerlist;
  })

};
getData();
