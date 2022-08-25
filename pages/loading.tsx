class Artwork {
  name: string;
  date: number;
  description: string;
  constructor(name: string, date: number, description: string) {
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

const picture = new Artwork(
  "BY_Man_2",
  20211206,
  "This picture is a pixel picture drawn in blue and yellow. It is the Artwork of Mr.chu."
);
