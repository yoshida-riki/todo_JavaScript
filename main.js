const todos = ['掃除', '買い物', '散歩'];
const commands = ['確認', '追加', '削除', '終了'];
let input;


while(input !== commands[3]) {
    input = prompt('「' + commands + '」の4つのいずれかを入力してください');
    if(input === commands[0]) {
        showTodos();
    } else if (input === commands[1]) {
        createTodo();
    } else if (input === commands[2]) {
        deleteTodo();
    } else if (input === commands[3]) {
        console.log('終了します');
    } else {
        console.log('「' + commands + '」以外は入力できません');
    }
};


showTodos();


function showTodos() {
    console.log('========================');
    console.log('現在持っているのタスク一覧');
    console.log('========================');

    if(todos.length > 0) {
        todos.forEach((todo, index) => {
            console.log(index + ' : ' + todo);
        });
    } else {
        console.log('タスクなし');
    }
}


function createTodo() {
    const todo = prompt('タスクを入力してください');
    if(todo) {
        todos.push(todo);
        alert('新しいタスクを追加しました。');
        showTodos();
    } else {
        alert('何も入力されていない為スキップします');
    }
}

function deleteTodo() {
    const numberString = prompt('削除するタスクの番号を指定してください');
    const parsedNumber = parseInt(numberString, 10);
    if (isNaN(parsedNumber) || parsedNumber >= todos.length || parsedNumber < 0) {
        alert('不正な値の為スキップします');
    } else {
        const deletedTodos = todos.splice(parsedNumber, 1);
        alert(deletedTodos[0] + 'を削除しました。');
        showTodos();
    }
}
