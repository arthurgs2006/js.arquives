function phoneNumber(phonenumberstring){
    const fixedstring = phonenumberstring.replace(/[\sa-zA-Z]/g, '') //substitui uma parte da string
    //consertara a string e formatara tirando todo alfabeto e espaços vazios, so deixando numeros
    this.countryCode = fixedstring.match(/(?<=\+)\d{1,3}/)[0]//coleta um pedaço especifico da espressão
    this.ddd = fixedstring.match(/(?<=\()\d+(?=\))/) //achar o DDD
    this.number = fixedstring.match(/(?<=\)).+/)[0].replace(/-/g, '');,
} 

console.log(new phoneNumber('+55 (16) 9 9242-8919'));

console.log(new phoneNumber('+1 (11) 4 002-8922'))