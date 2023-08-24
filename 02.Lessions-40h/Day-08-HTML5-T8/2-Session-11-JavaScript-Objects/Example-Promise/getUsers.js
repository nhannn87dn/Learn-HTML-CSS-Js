let success = true;

const getUsers = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 2000); //2 giây sau mới trả về kết quả
});


function findUser(username) {
    return getUsers.then((users) => {
      const user = users.find((user) => user.username === username);
      return user;
    });
  }
  
findUser('john').then((user) => {
    console.log(user);
});
  