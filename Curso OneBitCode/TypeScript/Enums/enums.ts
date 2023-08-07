enum Planets { //Conjunto de constantes que podem ou não ter um valor atribuído
  //inicie com enum -> Enumerar (nome do conjunto) {com todas as variaveis
    MERCURY = 1, //automaticamente ele vai enumerar todos os outros const.
    VENUS, //Pode-se atribuir strings, numeros, valores booleanos para essas const.
    EARTH,
    MARS,
    JUPITER,
    SATURN,
    URANUS,
    NEPTUNE

}

Planets.EARTH //chamada da const que retorna o valor da const

//OUTRO EXEMPLO:

enum Roles{
  ADMIN = 'admin',
  USER = 'user'
}

