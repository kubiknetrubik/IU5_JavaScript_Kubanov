window.onload = function () {
    // Переменные для хранения чисел и операций
    let a = ''           // Первое число
    let b = ''           // Второе число
    let expressionResult = ''  // Результат вычисления
    let selectedOperation = null  // Выбранная операция
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById("content_calc").style.display = 'block';
    // Получаем доступ к экрану калькулятора в поле вывода
    const outputElement = document.getElementById("result")

    // Получаем все кнопки с цифрами (их id начинаются с "btn_digit_")
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    function onDigitButtonClicked(digit) {
        // Если операция не выбрана, работаем с первым числом (a) - после выбора операции начинается ввод второго числа
        if (!selectedOperation) {
            // Проверяем, не пытаемся ли мы добавить вторую точку
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                // здесь у нас происходит складывание сохраненного уже числа и нажатой цифры. Оба поля string, поэтому
                // каждый раз цифра записывается в конец строки. Например: a = '14', digit = '5', 
                // a += digit - это короткая запись a = a + digit - поэтомоу после этой операции a = '145'
                a += digit;
            }
            outputElement.innerHTML = a;
        }
        // Если операция выбрана, работаем со вторым числом (b)
        else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
                b += digit;
                outputElement.innerHTML = b;
            }
        }
    }
    // Настраиваем обработчики для цифровых кнопок - для каждой кнопки с цифрой и точкой вызываем выше написанную функцию по формированию числа
    digitButtons.forEach(button => {
        button.onclick = function () {
            // берем текст, написанный на кнопке - он и является цифрой
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });

    // Настраиваем обработчики для кнопок операций - сохраняем выбранную операцию в ранее созданную переменную selectedOperation
    document.getElementById("btn_op_mult").onclick = function () {
        if (a === '') return;
        selectedOperation = 'x';
    }
    document.getElementById("btn_op_plus").onclick = function () {
        if (a === '') return;
        selectedOperation = '+';
    }
    document.getElementById("btn_op_minus").onclick = function () {
        if (a === '') return;
        selectedOperation = '-';
    }
    document.getElementById("btn_op_div").onclick = function () {
        if (a === '') return;
        selectedOperation = '/';
    }
    // Очищаем все значения при нажатии на кнопку C (вешаем обработчик события click на кнопку С)
    document.getElementById("btn_op_clear").onclick = function () {
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    // Вычисляем результат при нажатии на = (вешаем обработчик события click на кнопку =)
    document.getElementById("btn_op_equal").onclick = function () {
        // Проверяем, что у нас есть оба числа и операция
        if (a === '' || b === '' || !selectedOperation)
            return

        // Выполняем выбранную операцию - чтобы не плодить if, воспользуемся удобной и более наглядной функцией сравнения switch, которая на основе значения переданной переменной выполняет нужный кейс. В case указывается ожидаемое точное значение переменной (это может быть любое значение), а затем после : пишется код, который нужно выполнить в данном случае. Case проверяются последовательно, выход из switch происходит при попадании на break или если значение не совпало ни с чем.
        switch (selectedOperation) {
            case 'x':
                expressionResult = (+a) * (+b)
                // обязательно пишется в конце действий case, чтобы выйти из switch, иначе продолжится сравнение case дальше
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            // желательно (но не обязательно) всегда прописывать дефолтное поведение, в случае если в переменной окажется не перечисленное выше значение. в нашем случае это не нужно.
            default:
                break;
        }

        // Сохраняем результат и очищаем второе число, чтобы при новом вводе записывать значение нового числа в b
        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        // Показываем результат на экране
        outputElement.innerHTML = a
    }
    document.getElementById("btn_op_percent").onclick = function () {
        if (!selectedOperation) {
            if (a !== '') {
                a = (parseFloat(a) / 100).toString();
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = (parseFloat(b) / 100).toString();
                outputElement.innerHTML = b;
            }
        }
    };
    document.getElementById("btn_op_sign").onclick = function () {
        if (!selectedOperation) {
            if (a !== '') {
                a = (parseFloat(a) * -1).toString();
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = (parseFloat(b) * -1).toString();
                outputElement.innerHTML = b;
            }
        }
    };
    document.getElementById("menubutton").onclick=function(){
        document.getElementById("sidebar").classList.add('open');
        document.getElementById("overlay").classList.add('show');
    }
    document.getElementById("overlay").onclick=function(){
        document.getElementById("sidebar").classList.remove('open');
        document.getElementById("overlay").classList.remove('show');
    }
    document.getElementById("scheme").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_scheme").style.display = 'block';
    }
    document.getElementById("calc").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_calc").style.display = 'block';
    }
    document.getElementById("i").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_i").style.display = 'block';
    }
};