## Тестовое задание для newgen
Данное задание я рассматривал следующим образом: мы имеем несколько курсов с определенным диапазоном цены, причем у каждого языка могжет быть множество курсов разной цены (в этом диапазоне), а также имеем запрос пользователя с рамками ценового диапазона.
Пример: пользователь запрашивает ценовой диапазон 60-120, но мы имеем курс с даипазоном 0-100. В ответе получим 60-100: нижний предел пользователя, но верхний предел самого курса, так как дороже их нет.