/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Gbenga",
  friends: 100,
  messages:["long time","christmas coming","2018 arriving soon"],
  postMessage: function addMessage(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function removeMessage(index) {
    facebookProfile.messages.splice(index,1);
  },
  addFriend: function addAFriend() {
    facebookProfile.friends += 1;
  },
  removeFriend: function removeAFriend() {
    facebookProfile.friends -= 1;
  }
};

facebookProfile.postMessage("2018 ending");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);

facebookProfile.addFriend();
console.log(facebookProfile.friends);

facebookProfile.removeFriend();
console.log(facebookProfile.friends);