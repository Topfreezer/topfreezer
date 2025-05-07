document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { selector: ".python", percent: 90 },
    { selector: ".javascript", percent: 85 },
    { selector: ".html", percent: 74 },
    { selector: ".css", percent: 82 },
    { selector: ".react", percent: 50 }
  ];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skills.forEach(skill => {
          const bar = document.querySelector(skill.selector);
          const percentSpan = bar.closest(".skill-bar").querySelector(".percent");
          let current = 0;
          const interval = setInterval(() => {
            if (current >= skill.percent) {
              clearInterval(interval);
            } else {
              current++;
              bar.style.width = `${current}%`;
              percentSpan.textContent = `${current}%`;
            }
          }, 20); 
        });
        observer.disconnect(); 
      }
    });
  });

  observer.observe(document.querySelector(".skill-bars"));
});
