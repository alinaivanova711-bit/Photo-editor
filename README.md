Веб-приложение для обрезки изображений с возможностью загрузки, кадрирования и скачивания результата. Реализовано на TypeScript с использованием библиотеки Cropper.js.

Что было реализовано в процессе:
1. Интеграция библиотеки Cropper.js с TypeScript
2. Работа с Blob и URL.createObjectURL для отображения и скачивания изображений
3. Управление жизненным циклом экземпляра Cropper (инициализация, уничтожение)
4. Обработка событий загрузки файла и валидация размера
5. Работа с DOM-элементами с использованием типизированных селекторов

Как использовать:
1. Нажмите Upload image и выберите изображение (до 300 КБ)
2. С помощью инструментов Cropper.js выделите нужную область
3. Нажмите Crop image — обрезанное изображение отобразится в блоке предпросмотра
4. Нажмите Download new image, чтобы скачать результат

<img width="912" height="622" alt="image" src="https://github.com/user-attachments/assets/155e4798-4a47-4ad3-9fa9-b433eb1a4554" />
<img width="1506" height="1080" alt="image" src="https://github.com/user-attachments/assets/72669979-68bf-4fec-b678-19a6c8b12c76" />
<img width="1425" height="898" alt="image" src="https://github.com/user-attachments/assets/2c38ca55-511f-4a69-b791-cdbf9002d5ca" />





