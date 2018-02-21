
function cargarTags() {
    // Make a request for a user with a given ID
    axios.get('api/tags').then(function (response) {
        let tags = response.data;
        let tagsDom = document.querySelector('.tags');

        tagsDom.innerHTML = "";

        for (let elem of tags) {

            let span = document.createElement('span');
            span.addEventListener("click", () => {
                axios.get('api/checkout/' + elem).then(function (response) {
                    console.log("checkout", response.data);
                    cargarBranch();
                });
            });

            span.innerHTML = `<span>${elem}</span>`;

            tagsDom.appendChild(span);
        }
    });

}

function cargarBranch() {

    axios.get('api/branch').then(function (response) {
        let current = response.data.current;
        let branches = response.data.branches;
        let branchesDom = document.querySelector('.branches');
        branchesDom.innerHTML = "";
        console.log(branches)
        for (let index in branches) {
            let elem = branches[index];

            let span = document.createElement('span');
            span.addEventListener("click", () => {
                axios.get('api/checkout/' + elem.name).then(function (response) {
                    console.log("checkout", response.data);
                    cargarBranch();
                });
            });

            span.innerHTML = `<span class="${(elem.current) ? 'current' : ''}">${elem.name}</span>`;

            branchesDom.appendChild(span);

        }
    });
}

function fetch() {
    let btn = document.querySelector('.btn-pull');

    axios.get('api/fetch').then(function (response) {

        cargarBranch();
        cargarTags();
    });
}

function getListRemote() {

    let tags = document.querySelector('.remote .tags');
    let heads = document.querySelector('.remote .heads');

    axios.get('api/listRemote').then(function (response) {
        tags.innerHTML = '';
        heads.innerHTML = '';
        for (let elem of response.data.heads) heads.innerHTML += `<p>${elem}</p>`;
        for (let elem of response.data.tags) tags.innerHTML += `<p>${elem}</p>`;
    });
}

getListRemote();
setInterval(() => { getListRemote() }, 60000)
cargarBranch();
cargarTags();