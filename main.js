let time = new Date();

const dateContainer = document.getElementsByClassName('date');

const changeDate = () => {
    dateContainer.innerHTML = `
    <h4>${time}</h4>
`;
}

changeDate();