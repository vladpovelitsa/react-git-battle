const Validation = (input) => {
    if(input.getAttribute('data-validation-type') === 'name') {
        return input.value.length >= 2 ? false : input.name + " is too short"
    } else if(input.getAttribute('data-validation-type') === 'email') {
        return input.value.match(/^\S+@\S+\.\S+$/) ? null : 'wrong ' + input.name
    } else if(input.getAttribute('data-validation-type') === 'pass') {
        return input.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) ? null : 'wrong ' + input.name
    }
}

export default Validation