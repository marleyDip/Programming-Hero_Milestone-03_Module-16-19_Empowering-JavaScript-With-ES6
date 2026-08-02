// console.log("JS Loaded");

// Select all counters
const counters = document.querySelectorAll(".counter");
// console.log(counters);

// Prevent the animation from running multiple times
let hasAnimated = false;

// Function to animate each counter
function animateCounters() {
  // Stop if animation has already run
  if (hasAnimated) return;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);

    let current = 0;

    // Adjust speed based on target value
    const increment = Math.ceil(target / 80);

    const updateCounter = () => {
      current += increment;

      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;

        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  });

  hasAnimated = true;
}

// Observe the stats section
const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(
  (entries) => {
    // console.log(observer);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  },
  {
    threshold: 0.4,
  },
);

// Start observing
observer.observe(statsSection);

/* ==== Module ==== */
// Select all modules
// const modules = document.querySelectorAll(".module");
// const observerModule = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         modules.forEach((module) => {
//           module.classList.remove("active");
//         });

//         entry.target.classList.add("active");
//       }
//     });
//   },
//   {
//     threshold: 0.55,
//   },
// );

// // Observe every module
// modules.forEach((module) => {
//   observerModule.observe(module);
// });

const timeline = document.querySelector(".timeline");

const progress = document.querySelector(".timeline-progress");

const modules = document.querySelectorAll(".module");

window.addEventListener("scroll", () => {
  const rect = timeline.getBoundingClientRect();

  const windowHeight = window.innerHeight;

  const total = rect.height;

  let value = windowHeight - rect.top;

  value = Math.max(0, value);
  value = Math.min(total, value);

  progress.style.height = value + "px";
});

const observerModule = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        modules.forEach((module) => {
          module.classList.remove("active");
        });

        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6,
  },
);

modules.forEach((module) => {
  observerModule.observe(module);
});
