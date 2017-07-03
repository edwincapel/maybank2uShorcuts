window.addEventListener('keydown', function (e) {
    if ((e.keyCode == 10 || e.keyCode == 13)) {
        let target = e.target;
        let nodeName = target.nodeName;

        if (nodeName === 'TEXTAREA' || nodeName === 'INPUT' || nodeName === 'SELECT') {
            e.preventDefault();

            let form = target.form;
            let submitButton = form.querySelector('input[type=submit]');

            if (submitButton) {
                submitButton.click();

            }
            else {
                HTMLFormElement.prototype.submit.call(target.form);
            }
        }
    }
}, true);
