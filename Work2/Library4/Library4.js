console.log("Библиотеки 4")
let books = [
    { 
        Article_number: "123", 
        Author: "Александр Суворов",
        Title: "Наука побеждать",
        Information: "Книга генералиссимуса российской армии А. В. Суворова, где собраны его мысли и инструкции, относящиеся к военному делу в России."
    },
    {
        Article_number: "321",
        Author: "Сергей Баленко", 
        Title: "Учебник выживания спецназа ГРУ. Опыт элитных подразделений.",
        Information: "13-е издание уникальной энциклопедии полковника спецназа ГРУ, доктора технических наук, профессора Академии военных наук С.В. Баленко!"
    },
	{
        Article_number: "456",
        Author: "Джонатан Уилсон", 
        Title: "Революция на газоне. Книга о футбольных тактиках",
        Information: "В этой книге Джонатан Уилсон показывает, как тактика распространялась по всему миру."
    },
	{
        Article_number: "654",
        Author: "Дэвидсон Рон", 
        Title: "Играй в хоккей лучше всех. Тактики, стратегии и лайфхаки от лучших канадских команд",
        Information: "Тактики, стратегии и лайфхаки от лучших канадских команд способствует развитию выдающихся индивидуальных хоккейных навыков. По мере чтения уровень сложности каждого навыка растет."
    },
    {
        Article_number: "789",
        Author: "Елена Вайцеховская", 
        Title: "Фигурное катание. Стальные девочки",
        Information: "Спорт – это, возможно, самая беспощадная игра, в какую когда-либо играло человечество. Хотите больше узнать о его жестокости? Добро пожаловать в самый трепетный и кружевной его вид – женское одиночное катание. "
    }
];

function output(books)
{
    let newtable = document.createElement("table");
    let book = '<table border="1" cellpadding="3">';
    
    book += '<tr>';
    book += '<td><button type="button" data-action="sortArticle" onClick="sortArticle();">Артикул</button></td>';
    book += '<td><button type="button" data-action="sortAuthor" onClick="sortAuthor();">Автор</button></td>';
    book += '<td><button type="button" data-action="sortTitle" onClick="sortTitle();">Название</button></td>';
    book += '<td><button type="button" data-action="sortInformation" onClick="sortInformation();">Информация</button></td>';
    book += '</tr>';
    
    for(let j = 0; j < books.length; j++)
    {
        book += '<tr>';
        book += '<td>' + books[j].Article_number + '</td>';
        book += '<td>' + books[j].Author + '</td>';
        book += '<td>' + books[j].Title + '</td>';
        book += '<td>' + books[j].Information + '</td>';
        book += '</tr>';
    }
    
    document.getElementById('container').innerHTML = book + '</table>';
}

output(books);
let flagArticle = false; 
let flagAuthor = false; 
let flagTitle = false; 
let flagInformation = false;

function sortArticle()
{
    if(flagArticle == false)
	{
        for (let i = 0, endI = books.length - 1; i < endI; i++) 
		{
            for (let j = 0, endJ = endI - i; j < endJ; j++) 
			{
                if (books[j].Article_number < books[j + 1].Article_number) 
				{
                    let swap = books[j];
                    books[j] = books[j + 1];
                    books[j + 1] = swap;
                }
            }
        }
        flagArticle = true;
    }   
    else
	{
        for (let i = 0, endI = books.length - 1; i < endI; i++) 
		{
            for (let j = 0, endJ = endI - i; j < endJ; j++) 
			{
                if (books[j].Article_number > books[j + 1].Article_number) 
				{
                    let swap = books[j];
                    books[j] = books[j + 1];
                    books[j + 1] = swap;
                }
            }
        }
        flagArticle = false;
    }
    output(books);
}

function sortAuthor()
{    
    if(flagAuthor == false)
	{
        function SortAuthorTop(a, b)
		{
            if (a.Author < b.Author) 
			{
				return -1;
			}
            if (a.Author > b.Author) 
			{
				return 1;
			}
            return 0;
        }
        books = books.sort(SortAuthorTop);
        output(books);
        flagAuthor = true;
    }
    else
	{
        function SortAuthorBottom(a, b)
		{
            if (a.Author < b.Author) 
			{
				return 1;
			}
            if (a.Author > b.Author) 
			{
				return -1;
			}
            return 0;
        }
        books = books.sort(SortAuthorBottom);
        output(books);
        flagAuthor = false;
    }
}

function sortTitle()
{
    if(flagTitle == false)
	{
        function SortTitleTop(a, b)
		{
            if (a.Title < b.Title) 
			{
				return -1;
			}
            if (a.Title > b.Title) 
			{
				return 1;
			}
            return 0;
        }
        books = books.sort(SortTitleTop);
        output(books);
        flagTitle = true;
    }
    else
	{
        function SortTitleBottom(a, b)
		{
            if (a.Title < b.Title) 
			{
				return 1;
			}
            if (a.Title > b.Title) 
			{
				return -1;
			}
            return 0;
        }
        books = books.sort(SortTitleBottom);
        output(books);
        flagTitle = false;
    }
}

function sortInformation()
{
    if(flagInformation == false)
	{
        function SortInformationTop(a, b)
		{
            if (a.Information < b.Information) 
			{
				return -1;
			}
            if (a.Information > b.Information) 
			{
				return 1;
			}
            return 0;
        }
        books = books.sort(SortInformationTop);
        output(books);
        flagInformation = true;
    }
    else
	{
        function SortInformationBottom(a, b)
		{
            if (a.Information < b.Information) 
			{
				return 1;
			}
            if (a.Information > b.Information) 
			{
				return -1;
			}
            return 0;
        }
        books = books.sort(SortInformationBottom);
        output(books);
        flagInformation = false;
    }
}