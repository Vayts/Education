AList - динамический массив, хранит данные типа Number
LList - однонаправленный связанный список, хранит данные в виде
объекта Node (value, next)
BST - двоичное дерево поиска, хранит данные в виде объекта Node (value,
right, left) (recursive). AVL-tree + RB-tree (optional)
Все функции должны быть покрыты тестами!

var IList = function() {}; // function constructor (like interface) инициализация
коллекции, без аргумента, с аргументом capacity, с аргументом array

IList.prototype.clear = function () {}; // очистка коллекции, size = 0
IList.prototype.getSize = function () {}; // возвращает размер коллекции,
количество элементов коллекции, не undefined
IList.prototype.add = function (value) {}; // добавление элемента в коллекцию
IList.prototype.set = function (value, index) {}; // запись в коллекцию согласно
переданному индексу, операция перезаписывания
IList.prototype.get = function (index) {}; // возвращает элемент коллекции по
индексу
IList.prototype.remove = function (value) {}; // удаляет элемент из коллекции и
возвращает его
IList.prototype.toArray = function () {}; // приведение данных коллекции в
массив

IList.prototype.toString = function () {}; // представление коллекции в
строковом виде
IList.prototype.contains = function (value) {}; // возвращает true || false,
проверяя наличие элемента в коллекции
IList.prototype.minValue = function () {}; // возвращает максимальный элемент
коллекции
IList.prototype.maxValue = function () {}; // возвращает минимальный элемент
коллекции
IList.prototype.minIndex = function () {}; // возвращает индекс максимального
элемента коллекции
IList.prototype.maxIndex = function () {}; // возвращает индекс минимального
элемента коллекции
IList.prototype.reverse = function () {}; // выполняет реверс коллекции
IList.prototype.halfReverse = function () {}; // выполняет половинный реверс
коллекции
IList.prototype.retainAll = function (array) {}; // оставляет все элементы в
существующей коллекции на основании найденных совпадений в переданном
массиве в качестве аргумента
IList.prototype.removeAll = function (array) {}; // удаляет все элементы в
существующей коллекции на основании найденных совпадений в переданном
массиве в качестве аргумента
IList.prototype.sort = function () {}; // рекурсивная сортировка на выбор (Quick
or Merge)
IList.prototype.print = function () {}; // вывод в консоль каждого из элементов
коллекции

var ITree = function() {}; // function constructor (like interface)

ITree.prototype.init = function(array){}; // инициализация дерева на основании
переданного массива данных
ITree.prototype.clear = function(){}; // удаление всех узлов дерева
ITree.prototype.size = function(){}; // возвращает количество узлов
ITree.prototype.insert = function(value){}; // вставка узла в дерево
ITree.prototype.print = function(node, callback){}; // обход в глубину дерева -
тремя способами
ITree.prototype.toArray = function(){}; // представление дерева в виде массива
данных
ITree.prototype.search = function(value){}; // возвращает узел согласно
переданному значению
ITree.prototype.width = function(){}; // возвращает максимальную ширину
дерева
ITree.prototype.height = function(){}; // возвращает высоту дерева
ITree.prototype.nodes = function(){}; // возвращает количество узлов в дереве
ITree.prototype.leaves = function(){}; // возвращает количество листьев в
дереве
ITree.prototype.reverse = function(){}; // реверс дерева
ITree.prototype.minNode = function(){}; // возвращает узел с минимальным
числом

ITree.prototype.maxNode = function(){}; // возвращает узел с максимальным
числом
ITree.prototype.remove = function(value){}; // удаление узла согласно
переданному числу
