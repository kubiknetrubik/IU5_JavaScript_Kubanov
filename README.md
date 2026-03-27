# ЛР 3. Простое веб-приложение. Верстка

**Кубанов Сергей ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-данной-лабораторной-работы)
- [Тема](#тема)
- [Сайт для вдохновения](#сайт-для-вдохновения)
- [Дополнительные задания](#дополнительные-задания)
- [Порядок показа](#порядок-показа)

## Цель домашнего задания
Работа с коллекциями, функциями, классами.

## Тема
Проезд по транспортной карте «90 минут».

## Сайт для вдохновения
[Метро](https://mosmetro.ru/)

## Дополнительные задания
1. Дана квадратная матрица matrix, верните сумму основной и побочной диагоналей матрицы.

Ввод: matrix = [[1,2,3], [4,5,6], [7,8,9]] Выход: 25
```js
 calculateNetworkLoad() {
        const stations = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const report = {
            title: "Отчет по осевой нагрузке хабов",
            value: 0,
            timestamp: new Date().toLocaleTimeString()
        };
        let i = 0;
        const n = stations.length;
        while (i < n) {
            report.value += stations[i][i];
            report.value += stations[i][n - 1 - i];
            i++;
        }
        if (n % 2 !== 0) {
            const mid = Math.floor(n / 2);
            report.value -= stations[mid][mid];
        }
        const display = document.getElementById('load-report-display');
        if (display) {
            display.innerHTML = `
            <div class="alert info mt-2">
                <strong>${report.title}</strong><br>
                Показатель: ${report.value} ед.<br>
                <small>Обновлено: ${report.timestamp}</small>
            </div>
        `;
        }
    }
```
2. Напишите функцию sort, которая будет сортировать буквы в словах по алфавиту, а потом получившиеся слова в предложении — тоже. Первую букву каждого слова она сделает прописной, остальные — строчными
```js
    formatStationNames(inputString) {
        let words = inputString.split(" ");
        words = words.map(word => {
            let sortedChars = word.toLowerCase().split("").sort().join("");
            return sortedChars.slice(0, 1).toUpperCase() + sortedChars.slice(1);
        });
        words.sort();
        return words.join(" ");
    }
    getHTML(data) {
        const formattedTitle = this.formatStationNames(data.title);

        return `
            <div class="card mb-3 border-0 shadow-sm" style="width: 100%;">
                <div class="card-body">
                    <div class="text-center mb-3">
                        <img src="${data.src}" class="img-fluid rounded" alt="${data.title}" style="max-height: 200px;">
                    </div>
                    
                    <h5 class="card-title text-primary">${formattedTitle}</h5>
                    <p class="card-text text-muted" style="font-size: 0.9rem;">
                        <small>Оригинал: ${data.title}</small>
                    </p>
                    <hr>
                    <p class="card-text">${data.text}</p>
                </div>
            </div>
        `;
    }
```
3. Необходимо на странице Подробнее выводить вместе с картинкой 3D модель поезда.
```js
getData() {
        const commonModelPath = "../../models/train.glb"
        const dataMap = {
            1: {
                title: 'Карта «Тройка»',
                src: "../../assets/troi-full.png",
                text: "Это электронная транспортная карта города Москвы с возможностью пополнения и использования на любом виде общественного транспорта..."
            },
            2: {
                title: 'Билет «Единый»',
                src: "../../assets/one-full.png",
                text: "Билет «Единый» позволяет совершать поездки на метро, МЦК и наземном транспорте. Одна поездка равна одному проходу..."
            },
            3: {
                title: 'Карта москвича для обучающихся',
                src: "../../assets/mos-full.png",
                text: "Студентам и школьникам по карте москвича положен проезд по льготным тарифам в метро и наземном транспорте..."
            }
        };
        const selected = dataMap[this.id] || dataMap[1];
        return {
            ...selected,
            id: this.id,
            model: commonModelPath
        };
    }
getHTML(data) {
        return `
        <div id="product-page" class="container mt-4">
            <div id="back-button-root" class="mb-3"></div>

            <h1 class="my-4 text-center">${data.title}</h1>

            <div class="row justify-content-center align-items-start">
                
                <div class="col-md-auto mb-4"> 
                    <div id="viewer-container" style="position: relative; width: 400px; height: 400px; background: #e6ebf5; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <div id="viewer-controls" style="position: absolute; top: 15px; left: 15px; z-index: 10; display: flex; gap: 10px;">
                            <button id="view-front" class="btn btn-sm btn-dark opacity-75">Спереди</button>
                            <button id="view-back" class="btn btn-sm btn-dark opacity-75">Сзади</button>
                        </div>
                        <canvas id="viewer-canvas" style="width: 100%; height: 100%; display: block;"></canvas>
                    </div>
                </div>

                <div class="col-md-5">
                    <div id="product-info-root" class="ps-md-4">
                        </div>
                </div>

            </div>
        </div>
    `;
    }

    init3D(modelPath) {
        const canvas = document.getElementById('viewer-canvas');
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xe6ebf5);


        const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
        camera.position.set(0, 0, 20);


        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        const loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.x -= center.x;
            model.position.y -= center.y;
            model.position.z -= center.z;

            scene.add(model);
        }, undefined, (error) => {
            console.error('Ошибка загрузки модели:', error);
        });

        document.getElementById('view-front').onclick = () => {
            camera.position.set(0, 0, 20);
            controls.target.set(0, 0, 0);
            controls.update();
        };
        document.getElementById('view-back').onclick = () => {
            camera.position.set(0, 0, -20);
            controls.target.set(0, 0, 0);
            controls.update();
        };


        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        });
    }

    render() {
        const data = this.getData();
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        const backButton = new BackButtonComponent(document.getElementById('back-button-root'));
        backButton.render(this.clickBack.bind(this));
        const productInfo = new ProductComponent(document.getElementById('product-info-root'));
        productInfo.render(data);
        this.init3D(data.model);
    }
```

## Порядок показа 
Объяснить реализацию требуемых функций, объяснить использование three.js
