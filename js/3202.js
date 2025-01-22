$(function() {
    updateStates(); // 最初の一回

    setInterval(updateStates, 60000);

    setInterval(function() {
        const now = new Date();
        const currentTime = $("#current-time");
        currentTime.text(formatDate(now));
    }, 250);
});

function updateStates() {
    const displayNames = [
        "教室3201", "教室3202", "教室3203", "教室3204","LC1","LC2","大階段ひな壇","サンドボックス"
    ];
    const fileNames = [
        "classroom3201", "classroom3202", "classroom3203", "classroom3204","freespace2fa","freespace2fb","stairs","sandbox"
    ];
    const elemNames = [
        "3201","3202","3203","3204","freespace2fa","freespace2fb","stairs","sandbox"
    ];

    for (let i = 0; i < displayNames.length; i++) {
        updateState(displayNames[i], fileNames[i], elemNames[i]);
    }
}

function updateState(displayName, fileName, elemName) {
    const jsonURL = `./json/${fileName}.json`;

    $.ajax({
        url: jsonURL,
        dataType: "json"
    }).done(function(data) {
        const date = new Date(); // 現在時刻の取得
        const array = JSON.parse(JSON.stringify(data)); // JSON から　配列形式に変換

        const day = date.getDay(); // 曜日を取得
        const hour = date.getHours(); // 時間を取得
        const state = array[day][hour];

        const s = $(`#row-${elemName}`);
        s.html(`<h3><b>${displayName}</b></h3>`);

        switch (state) {
            case '○':
                s.append(`
                    <img src="img/${elemName}.jpg" alt="${displayName}" class="img-thumbnail" style="width: 100%; max-width: 300px; height: auto;">
                    <div class="alert alert-secondary" role="alert" style="max-width: 350px; ">
                    <h3><span class="badge text-bg-dark" style="color: rgb(39, 141, 90);"><i class="bi bi-info-circle-fill"></i>詳細</span></h3>
                    <p><h3><span class="badge text-bg-dark" >混雑度：</span><span style="color: rgb(39, 141, 90);"><i class="bi bi-circle"></i><b>休憩できます</b></span></h3></p>
                    <h3><span class="badge text-bg-dark">コンセントの数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3></p>
                    <h3><span class="badge text-bg-dark">椅子の数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                    <h3><span class="badge text-bg-dark">モニター：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                </div>
                `);
                break;
            case '△':
                s.append(`
                    <img src="img/${elemName}.jpg" alt="${displayName}" class="img-thumbnail" style="width: 100%; max-width: 300px; height: auto;">
                    <div class="alert alert-secondary" role="alert" style="max-width: 350px; ">
                    <h3><span class="badge text-bg-dark" style="color: rgb(141, 88, 39);"><i class="bi bi-info-circle-fill"></i>詳細</span></h3>
                    <p><h3><span class="badge text-bg-dark" >混雑度：</span><span style="color: rgb(141, 88, 39);"><i class="bi bi-triangle"></i><b>少し混んでいます</b></span></h3></p>
                    <h3><span class="badge text-bg-dark">コンセントの数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3></p>
                    <h3><span class="badge text-bg-dark">椅子の数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                </div>
                `);
                break;
            case '×':
                s.append(`
                    <img src="img/${elemName}.jpg" alt="${displayName}" class="img-thumbnail" style="width: 100%; max-width: 300px; height: auto;">
                    <div class="alert alert-secondary" role="alert" style="max-width: 350px; ">
                    <h3><span class="badge text-bg-dark" style="color: rgb(141, 39, 39);"><i class="bi bi-info-circle-fill"></i>詳細</span></h3>
                    <p><h3><span class="badge text-bg-dark" >混雑度：</span><span style="color: rgb(141, 39, 39);"><i class="bi bi-x-circle"></i><b>混んでいます！</b></span></h3></p>
                    <h3><span class="badge text-bg-dark">コンセントの数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3></p>
                    <h3><span class="badge text-bg-dark">椅子の数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                </div>
                `);
                break;
            case '*':
                s.append(`
                    <img src="img/${elemName}.jpg" alt="${displayName}" class="img-thumbnail" style="width: 100%; max-width: 300px; height: auto;">
                    <div class="alert alert-secondary" role="alert" style="max-width: 350px; ">
                    <h3><span class="badge text-bg-dark" style="color: rgb(39, 100, 141);"><i class="bi bi-info-circle-fill"></i>詳細</span></h3>
                    <p><h3><span class="badge text-bg-dark" >混雑度：</span><span style="color: rgb(58, 116, 192);"><i class="bi-pencil-fill"></i><b>この場所は授業中です</b></span></h3></p>
                    <h3><span class="badge text-bg-dark">コンセントの数：</span><i class="bi bi-gear-wide-connected"></i>開発中</p>
                    <h3><span class="badge text-bg-dark">椅子の数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                    <h3><span class="badge text-bg-dark">モニター：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                </div>
                `);
                break;
            default:
                s.append(`
                    <img src="img/${elemName}.jpg" alt="${displayName}" class="img-thumbnail" style="width: 100%; max-width: 300px; height: auto;">
                    <div class="alert alert-secondary" role="alert" style="max-width: 350px; ">
                    <h3><span class="badge text-bg-dark" style="color: rgb(141, 39, 39);"><i class="bi bi-info-circle-fill"></i>詳細</span></h3>
                    <p><h3><span class="badge text-bg-dark">混雑度：</span><i class="bi-dash-circle-fill"></i> この場所は閉館です</h3></p>
                    <h3><span class="badge text-bg-dark">コンセントの数：</span><i class="bi bi-gear-wide-connected"></i>開発中</p>
                    <h3><span class="badge text-bg-dark">椅子の数：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                    <h3><span class="badge text-bg-dark">モニター：</span><i class="bi bi-gear-wide-connected"></i>開発中</h3>
                </div>
                `);
                break;
        }
        
    }).fail(function(data) {
        console.log(data);
        console.log("取　得　失　敗");
        console.log("\x1b[33m⚠ \x1b[31mデータの取得は全く出来ていません！ \x1b[33m⚠\x1b[0m")
    });
}

function formatDate(date) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // 各部分を取得
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1
    const day = String(date.getDate()).padStart(2, '0');
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // フォーマットを整える
    return `${year}/${month}/${day}(${dayOfWeek}) ${hours}:${minutes}:${seconds}`;
}