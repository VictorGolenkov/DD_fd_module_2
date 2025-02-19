/* Первый вариант */

/* Первая часть задания */

function getCurrentDate(): void {
    console.log(Date.now());
    }
document.addEventListener("DOMContentLoaded", () => {

    getCurrentDate();

    const Repeater = setInterval( () => {
        getCurrentDate();
    }, 5000);

    setTimeout(() => {
        clearInterval(Repeater);
    }, 60000);
});

/* Вторая часть задания */

function counter(){
    let count = 0;
    return {
        increase() {
            count++;
        },
        decrease() {
            count--;
        },
        show_count() {
            console.log(count);
        }
    }
}

const counter_example = counter();

counter_example.show_count();
counter_example.increase();
counter_example.show_count();
counter_example.increase();
counter_example.show_count();
counter_example.increase();
counter_example.show_count();
counter_example.decrease();
counter_example.show_count();