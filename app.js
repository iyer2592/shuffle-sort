(function () {
    const targetContainer = '#root';
    const divClass = 'column';
    const builder = new Builder(targetContainer);

    let blocksData = [
        {
            blockId: 1,
            backgroundColor: '#6F98A8'
        },
        {
            blockId: 2,
            backgroundColor: '#2B8EAD'
        },
        {
            blockId: 3,
            backgroundColor: '#2F454E'
        },
        {
            blockId: 4,
            backgroundColor: '#2B8EAD'
        },
        {
            blockId: 5,
            backgroundColor: '#2F454E'
        },
        {
            blockId: 6,
            backgroundColor: '#BFBFBF'
        },
        {
            blockId: 7,
            backgroundColor: '#BFBFBF'
        },
        {
            blockId: 8,
            backgroundColor: '#6F98A8'
        },
        {
            blockId: 9,
            backgroundColor: '#2F454E'
        }
    ];

    function registerListeners() {
        document.querySelector("#shuffle").onclick = function (event) {
            blocksData = shuffle(blocksData);
            constructView(blocksData);
        };

        document.querySelector("#sort").onclick = function (event) {
            blocksData = blocksData.sort(compareValues("blockId"));
            constructView(blocksData);
        };
    };

    function constructView(blocksData) {
        let ele = document.querySelector("#root");
        ele.innerHTML = "";
        for (let i = 0; i < blocksData.length; i++) {
            builder.appendUsingInnerHtml(
                `<div key="${blocksData[i].blockId}" class="${divClass}" style="background-color:${blocksData[i].backgroundColor};">
                <!-- <div class="row cell-block"> -->
                <div class="cell-block color-block" style="background-color:${blocksData[i].backgroundColor};"></div>
                <div class="cell-block content-block">
                  <p>${blocksData[i].blockId}</p>
                </div>
                <!-- </div> -->
              </div>`
            );
        }
    };

    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    };

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    document.addEventListener("DOMContentLoaded", function (event) {
        registerListeners();
    });

    function init() {
        constructView(blocksData);
    };
    init();
})();
