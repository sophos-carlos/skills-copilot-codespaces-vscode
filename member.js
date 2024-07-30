function skillsMember() {
  const member = document.querySelector('.member');
  if (member) {
    const memberSkills = document.querySelector('.member-skills');
    if (memberSkills) {
      const memberSkillsList = memberSkills.querySelectorAll('.member-skill');
      memberSkillsList.forEach((el) => {
        el.addEventListener('click', () => {
          memberSkillsList.forEach((el) => el.classList.remove('active'));
          el.classList.add('active');
        });
      });
    }
  }
}