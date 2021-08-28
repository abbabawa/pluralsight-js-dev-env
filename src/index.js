
import { deleteUser, getUsers } from './api/userApi';

getUsers().then(result=>{console.log(result) // eslint-disable-line no-console
  let userBody = ''

  result.forEach(user=>{
    userBody +=  `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser" >Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      <tr>`
  })
  global.document.getElementById('users').innerHTML = userBody

  const deleteLinks = global.document.getElementsByClassName('deleteUser')
  Array.from(deleteLinks, link=>{
    link.onclick = function(event){console.log(event) //eslint-disable-line no-console
      event.preventDefault()
      const element = event.target
      
      deleteUser(element.attributes['data-id'].value)
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row)
    }
  })
})
