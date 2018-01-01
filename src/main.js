/*  
 ***********
 ******Season Greeting******
 ***********
 */

const date =new Date(),
    day = date.getDate() + 1,
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    nextYear = year + 1,
    christmasDay = `${year}-12-25`,
    newYearEve = `${year}-1-1`,
    now = `${year}-${month}-${day}`;

now == christmasDay ? alert('Merry Christmas from Akuma Isaac Akuma 💞 💖') :
    now < christmasDay && now >= `${year}-12-1` ? alert('Merry Christmas in advance from Akuma Isaac Akuma 💞 💖') :
        now > christmasDay && now <= `${year}-12-31` ? alert('Happy New Year in advance from Akuma Isaac Akuma 💞 💖') :
            now >= newYearEve ? alert('Hurrey..! We made it, Happy New Year from Akuma Isaac Akuma 💞 💖') :
                alert('Life Goes On.. 💞 💖');
