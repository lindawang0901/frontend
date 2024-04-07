

window.onload = async () => {
    document.getElementById('register-form').addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        const newUser = await createUser(formValues);
        console.log(newUser)
    });
}