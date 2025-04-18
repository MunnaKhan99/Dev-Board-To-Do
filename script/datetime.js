// Step 1: Assigned date (once)
const assignedDate = new Date();

const weekday = assignedDate.toLocaleDateString('en-US', { weekday: 'short' });
const month = assignedDate.toLocaleDateString('en-US', { month: 'short' });
const day = assignedDate.getDate();
const year = assignedDate.getFullYear();

const assignedFormatted = `${weekday} ,<br><span class="font-bold text-base">${month} ${day} ${year}</span>`;
document.getElementById('current-date').innerHTML = assignedFormatted;

// Step 2: Deadline = assigned date + 7 days
const deadlineDate = new Date(assignedDate.getTime());
deadlineDate.setDate(deadlineDate.getDate() + 7);

const deadlineMonth = deadlineDate.toLocaleDateString('en-US', { month: 'long' });
const deadlineDay = deadlineDate.getDate();
const deadlineYear = deadlineDate.getFullYear();
const deadlineFormatted = `${deadlineDay} ${deadlineMonth}  ${deadlineYear}`;

// Step 3: Apply to all elements with class 'deadline-date'
const deadlines = document.querySelectorAll('.deadline-date');
deadlines.forEach(el => {
  el.innerText = deadlineFormatted;
});
