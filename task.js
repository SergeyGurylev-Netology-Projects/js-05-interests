Array.from(document.querySelectorAll('.interest__check')).forEach(el => el.onchange = onChangeCheckbox);

function onChangeCheckbox(e) {
    changeCheckedDown(this);
    changeCheckedUp(this);
}

function changeCheckedDown(currentElement) {
    const interestElement = currentElement.closest('.interest');
    const checkboxes = Array.from(interestElement.querySelectorAll('.interest__check'));
    checkboxes.forEach(el => {
        el.indeterminate = false;
        el.checked = currentElement.checked;
    });
}

function changeCheckedUp(currentElement) {
    const interestsElement = currentElement.closest('.interests');
    const interestElement = interestsElement.closest('.interest');

    if (interestElement) {
        const parentCheckbox = interestElement.querySelector('.interest__check');
        if (parentCheckbox) {
            const checkboxes = Array.from(interestsElement.querySelectorAll('.interest__check'));
            const checkedCheckboxes = checkboxes.filter(el => el.checked)

            switch (checkedCheckboxes.length) {
                case 0:
                    parentCheckbox.indeterminate = false;
                    parentCheckbox.checked = false;
                    break;
                case checkboxes.length:
                    parentCheckbox.indeterminate = false;
                    parentCheckbox.checked = true;
                    break;
                default:
                    parentCheckbox.indeterminate = true;
                    parentCheckbox.checked = false;
            }

            changeCheckedUp(parentCheckbox);
        }
    }
}
