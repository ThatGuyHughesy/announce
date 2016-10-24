var announce = new Announce({
    position: 'bottom-right',
    theme: 'default'
});

announce.post({
    message: 'This is a notice announcement.',
    type: 'notice'
});

announce.post({
    message: 'This is a success announcement.',
    type: 'success'
});

announce.post({
    message: 'This is a warning announcement.',
    type: 'warning'
});

announce.post({
    message: 'This is an error announcement.',
    type: 'error'
});
