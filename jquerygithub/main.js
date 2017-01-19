$(document).ready(function(){
console.log("Ready ...... ");

$('#searchUser').on('keyup',function(e){
  //  console.log("username Entered");
  let username =e.target.value;
console.log(username);
$.ajax({
    url:'https://api.github.com/users/'+username,
    data:{
        client_id:'7f71cce3d51d57ae8154',
        client_secret:'2f03ca3275fd1af84d2ee13081aeb54ca4967637'
    }
}).done(function (user) {
 
 $.ajax({
     url:'https://api.github.com/users/'+username+'/repos',
     data:{
        client_id:'7f71cce3d51d57ae8154',
        client_secret:'2f03ca3275fd1af84d2ee13081aeb54ca4967637',
        sort:'created:desc',
        per_page:10
    }
 }).done(function (repos) {
     $.each(repos,function (index,repo) {
         $('#repos').append(`
         <div class="well">
             <div class="row">
                 <div class="col-md-7">
                     <strong>${repo.name}</strong>: ${repo.description}
                 </div>
                 <div class="col-md-3">
                       <span class="label label-default">forks repo: ${repo.forks_count}</span>
<span class="label label-primary">watchers: ${repo.watchers_count}</span>
<span class="label label-success">stars:${repo.stargazers_count}</span>

                 </div>
                 <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-default">repo page</a>
                     
                 </div>
             </div>
         </div>
         `);
     })
     
 });

   $('#profile').html(`
  
   <div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
    <div class="col-md-3">
    <img src="${user.avatar_url}" alt="" class="thumbnail avatar">
    <<a  target="_blank" class="btn btn-primary btn-block" href="${user.html_url}"></a>
        
    </div>
    <div class="col-md-9">
        <span class="label label-default">public repo: ${user.public_repos}</span>
<span class="label label-primary">Public Gists: ${user.public_gists}</span>
<span class="label label-success">Followers:${user.followers}</span>
<span class="label label-info">Following:${user.following}</span>
<br>
<ul class="list-group">
<li class="list-group-item">company:${user.company}</li>
<li class="list-group-item">Blog/website: ${user.blog}</li>
<li class="list-group-item">location: ${user.location}</li>
    
</ul>
    </div>
        
    </div>
  </div>
</div>
<h3 class="page-header">Latest Repos</h3>
<div id="repos">
    
</div>
   
   `);
});

});

$('#searchUser').on('keydown',function name(params) {
   // console.log(params.target.value);
});

});