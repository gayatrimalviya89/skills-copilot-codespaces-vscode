function skillMember() {
  // Create a member object
  var member = new Object();
  member.name = "Chris";
  member.age = 38;
  member.job = "developer";
  member.sayName = function() {
    alert(this.name);
  };
  // Return the object
  return member;
}