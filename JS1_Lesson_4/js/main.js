// let userNumber = +prompt('введите число');
// if (userNumber<=0 || userNumber > 999){
//     alert('nsadnasndas')
// } else {
//     let obj ={
//         firstDigit : Math.trunc(userNumber/100).toString().slice(-1),
//         secondDigit : Math.trunc(userNumber/10).toString().slice(-1),
//         thirdDigit : Math.trunc(userNumber/1).toString().slice(-1),
//     };
//     console.log(obj.firstDigit);
//     console.log(obj.secondDigit);
//     console.log(obj.thirdDigit);
//     console.log(obj);
// }
//
//

"use strict";

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 * @property {int} startPositionX Начальная позиция игрока по X координате.
 * @property {int} startPositionY Начальная позиция игрока по Y координате.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: null,
    y: null,

    /**
     * Инициализация игрока и его метоположения.
     */
    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    /**
     * Двигает игрока по переданному направлению.
     * @param {int} direction Направление, в котором будет движение.
     */
    move(direction) {
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;
            case 1:
                this.y++;
                this.x--;
                break;
            case 3:
                this.x++;
                this.y++;
                break;
            case 7:
                this.x--;
                this.y--;
                break;
            case 9:
                this.y--;
                this.x++;
                break;
        }
    },
};

/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {settings} settings Настройки игры.
 * @property {player} player Игрок, участвующий в игре.
 */
const game = {
    settings,
    player,

    /**
     * Запускает игру.
     */
    run() {
        // Инициализируем игрока, ставим его начальное местоположение
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        // Бесконечный цикл
        while (true) {
            // Отображаем нашу игру.
            this.render();

            // Получаем направление от игрока.
            const direction = this.getDirection();

            // Если игрок сказал что хочет выйти (набрал -1), значит выходим.
            if (direction === -1) {
                alert('До свидания.');
                return;
            }
             // Двигаем игрока.


            // if (this.player.x  < 0 || this.player.x >= this.settings.colsCount ||
            //     this.player.y  < 0 || this.player.y >= this.settings.rowsCount ){
            //     alert('СТЕНА БЛЯТЬ!');
            // }
            if (this.player.x  > 0 && this.player.x <= this.settings.colsCount &&
                this.player.y  > 0 && this.player.y <= this.settings.rowsCount ){
                // alert('СТЕНА БЛЯТЬ!');

            }
            this.player.move(direction);
        }
    },

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Сюда запишем все что надо отобразить.
        let map = "";

        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < this.settings.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < this.settings.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                } else {
                    map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            map += '\n';
        }

        // Чистим консоль.
        console.clear();
        // Выводим все что надо отобразить в игре.
        console.log(map);
    },

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [-1, 2, 4, 6, 8 , 1 ,3 ,7 ,9];

        while (true) {
            // Получаем от пользователя направление.
            const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, -1 для выхода.'));

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },
};

// Запускаем игру.
game.run();
