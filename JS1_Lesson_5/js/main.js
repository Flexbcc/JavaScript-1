//
// let chechDesk = '';
// function chech() {
//     for (i = 0 ; i < 8 ; i++){
//         for (j = 0 ; j < 8 ; j++) {
//             chechDesk += 'x';
//         }
//         chechDesk += '\n';
//     }
// }
//
// console.log(chech());
// console.log(chechDesk);
//


let desk  = document.querySelector('.desk');
function deskGanaration() {
    for (i=0 ; i < 8 ; i++){
            let fix = i%2;
            for (j=0 - fix ; j<8 - fix ; j++){
                if (j%2 === 0 ){
                    desk.insertAdjacentHTML("beforeend", '<div class="black"></div>')
                }else {
                    desk.insertAdjacentHTML("beforeend", '<div class="white"></div>')
                }
                if (i === 1) {
                    let guardianBlack = document.querySelector('.black');
                    guardianBlack.insertAdjacentHTML("afterbegin" ,'<div class="guardian"></div>' )
                }
        }
    desk.insertAdjacentHTML("beforeend", '<br>');
    }
}
function chesh() {
    
}
deskGanaration();
