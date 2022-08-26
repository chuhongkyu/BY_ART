///abstract 추상 클래스는 오직 다른 곳에서 상속 받을수만 있는 클래스
export default abstract class User {
  constructor(private playerName: string, public skill: string) {}
}

class Player extends User {
  keyMotion() {}
}
