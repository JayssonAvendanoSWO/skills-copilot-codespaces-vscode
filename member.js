function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("member-skills");
  var memberSkillsBtn = document.getElementById("member-skills-btn");
  var memberSkillsClose = document.getElementById("member-skills-close");

  memberSkillsBtn.addEventListener("click", function() {
    memberSkills.classList.add("member-skills--active");
    member.classList.add("member--active");
  });

  memberSkillsClose.addEventListener("click", function() {
    memberSkills.classList.remove("member-skills--active");
    member.classList.remove("member--active");
  });
}
